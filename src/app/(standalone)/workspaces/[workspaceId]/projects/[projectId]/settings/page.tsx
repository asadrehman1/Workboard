import { getCurrentUser } from "@/features/auth/actions";
import { getProject } from "@/features/projects/actions";
import { EditProjectForm } from "@/features/projects/components/edit-project-form";
import { redirect } from "next/navigation";

interface ProjectSettingsPageProps {
  params: {
    projectId: string;
  };
}

export default async function ProjectSettingsPage({ params }: ProjectSettingsPageProps) {
  const user = await getCurrentUser();
  if (!user) redirect("/sign-in");

  const initialValues = await getProject({ projectId: params.projectId });
  return (
    <div className="w-full lg:max-w-xl">
        <EditProjectForm initialValues={initialValues} />
    </div>
  );
}
