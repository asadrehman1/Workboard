import { getCurrentUser } from "@/features/auth/actions";
import { redirect } from "next/navigation";
import { ProjectDetailClient } from "./client";

export default async function ProjectPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/sign-in");
  
  return <ProjectDetailClient />;
}
