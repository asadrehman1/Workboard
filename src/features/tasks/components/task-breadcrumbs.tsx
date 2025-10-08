import { Project } from "@/features/projects/types";
import { Task } from "../types";
import { ProjectAvatar } from "@/features/projects/components/project-avatar";
import Link from "next/link";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDeleteTask } from "../api/use-delete-task";
import { useConfirm } from "@/hooks/use-confirm";
import { useRouter } from "next/navigation";

interface TaskBreadcrumbsProps {
  task: Task;
  project: Project;
}
export const TaskBreadcrumbs = ({ task, project }: TaskBreadcrumbsProps) => {
  const router = useRouter();
  const workspaceId = useWorkspaceId();
  const { mutate: deleteTask, isPending } = useDeleteTask();
  const [DeleteDialog, confirm] = useConfirm(
    "Delete Task",
    "This will delete the task. This action cannot be undone.",
    "destructive"
  );

  const onDeleteTask = () => {
    const ok = confirm();
    if (!ok) return;
    deleteTask(
      { param: { taskId: task.$id } },
      {
        onSuccess: () => {
          router.push(`/workspaces/${workspaceId}/tasks`);
        },
      }
    );
  };
  return (
    <div className="flex items-center gap-x-2">
      <DeleteDialog />
      <ProjectAvatar
        name={project.name}
        image={project.imageUrl}
        className="size-6 lg:size-8"
      />
      <Link href={`/workspaces/${workspaceId}/projects/${project.$id}`}>
        <p className="text-sm lg:text-lg text-muted-foreground font-semibold hover:opacity-75 transition">
          {project.name}
        </p>
      </Link>
      <ChevronRightIcon className="size-4 lg:size-5 text-muted-foreground" />
      <p className="text-sm lg:text-lg font-semibold">{task.name}</p>
      <Button
        onClick={onDeleteTask}
        className="ml-auto"
        disabled={isPending}
        variant={"destructive"}
        size={"sm"}
      >
        <TrashIcon className="size-4" />
        <span className="hidden lg:block">Delete Task</span>
      </Button>
    </div>
  );
};
