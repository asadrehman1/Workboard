import { getCurrentUser } from "@/features/auth/actions";
import { redirect } from "next/navigation";
import { WorkspaceDetailClient } from "./client";

export default async function WorkspacePage() {
  const user = await getCurrentUser();
  if (!user) redirect("/sign-in");

  return <WorkspaceDetailClient />;
}
