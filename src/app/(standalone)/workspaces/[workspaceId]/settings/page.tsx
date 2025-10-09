import { getCurrentUser } from "@/features/auth/actions";
import { redirect } from "next/navigation";
import { WorkspaceSettingsClient } from "./client";
export default async function WorkspaceSettingsPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/sign-in");

  return <WorkspaceSettingsClient />;
}
