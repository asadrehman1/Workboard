import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/features/auth/actions";
import { getProject } from "@/features/projects/actions";
import { ProjectAvatar } from "@/features/projects/components/project-avatar";
import { PencilIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const user = await getCurrentUser();
  if (!user) redirect("/sign-in");

  const initialValues = await getProject({ projectId: params.projectId });
  if (!initialValues) {
    throw new Error("Project not found");
  }
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <ProjectAvatar
            name={initialValues?.name}
            image={initialValues?.imageUrl}
            className="size-8"
          />
          <p className="text-lg font-semibold">{initialValues?.name}</p>
        </div>
        <div>
          <Button variant={"secondary"} size={"sm"} asChild>
            <Link
              href={`/workspaces/${initialValues?.workspaceId}/projects/${initialValues?.$id}/settings`}
            >
              <PencilIcon className="size-4" />
              Edit Project
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
