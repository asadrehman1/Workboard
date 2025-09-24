import { redirect } from "next/navigation";
import { getCurrentUser } from "@/features/auth/actions";
import { SignUpCard } from "@/features/auth/components/sign-up-card";
const SignUpPage = async () => {
  const user = await getCurrentUser();
  if (user) return redirect("/");
  return <SignUpCard />;
};

export default SignUpPage;
