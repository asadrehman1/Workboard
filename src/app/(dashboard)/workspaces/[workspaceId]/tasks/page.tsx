import { getCurrentUser } from "@/features/auth/actions";
import { TaskViewSwitcher } from "@/features/tasks/components/task-view-switcher";
import { redirect } from "next/navigation";

export default async function Tasks() {
  const user = await getCurrentUser();
  if (!user) redirect("/sign-in");
  return (
    <div className="h-full flex flex-col">
      <TaskViewSwitcher />
    </div>
  );
}
