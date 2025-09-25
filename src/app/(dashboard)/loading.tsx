import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <Loader className="size-10 animate-spin text-muted-foreground" />
    </div>
  );
};

export default Loading;
