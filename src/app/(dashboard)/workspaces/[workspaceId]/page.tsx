import { getCurrentUser } from "@/features/auth/actions";
import { redirect } from "next/navigation";

export default async function WorkspacePage() {
  const user = await getCurrentUser();
  if (!user) redirect("/sign-in");
  return <div>WorkspaceId</div>;
}
