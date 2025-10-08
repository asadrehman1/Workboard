import { getCurrentUser } from "@/features/auth/actions";
import { redirect } from "next/navigation";
import { TaskDetailClient } from "./client";

export default async function TaskDetail() {
  const user = await getCurrentUser();
  if (!user) redirect("/sign-in");
  return <TaskDetailClient />;
}
