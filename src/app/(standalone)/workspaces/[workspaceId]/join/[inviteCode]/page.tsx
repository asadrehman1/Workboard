import { getCurrentUser } from "@/features/auth/actions";
import { getWorkspaceInfo } from "@/features/workspaces/actions";
import JoinWorkspaceForm from "@/features/workspaces/components/join-workspace-form";
import { redirect } from "next/navigation";

interface WorkspaceJoinPageProps {
  params: {
    workspaceId: string;
    inviteCode: string;
  };
}
export default async function JoinWorkspacePage({
  params,
}: WorkspaceJoinPageProps) {
  const user = await getCurrentUser();
  if (!user) redirect("/sign-in");

  const workspaceInfo = await getWorkspaceInfo({
    workspaceId: params.workspaceId,
  });

  if(!workspaceInfo) {
    redirect("/");
  }

  return (
    <div className="w-full md:max-w-xl">
      <JoinWorkspaceForm initialValues={workspaceInfo} />
    </div>
  );
}
