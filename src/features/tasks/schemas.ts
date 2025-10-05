import z from "zod";
import { TaskStatus } from "./types";

export const createTaskSchema = z.object({
  name: z.union([
    z.string().min(1, "Task name is required"),
    z.undefined().refine(() => false, { message: "Task name is required" }),
  ]),

  status: z.union([
    z.nativeEnum(TaskStatus),
    z.undefined().refine(() => false, { message: "Status is required" }),
  ]),

  workspaceId: z.union([
    z.string().min(1, "Workspace ID is required"),
    z.undefined().refine(() => false, { message: "Workspace ID is required" }),
  ]),

  projectId: z.union([
    z.string().min(1, "Project is required"),
    z.undefined().refine(() => false, { message: "Project is required" }),
  ]),

  dueDate: z.preprocess(
    (val) => (typeof val === "string" ? new Date(val) : val),
    z.date({ message: "Due date is required" })
  ),

  assigneeId: z.union([
    z.string().min(1, "Assignee is required"),
    z.undefined().refine(() => false, { message: "Assignee is required" }),
  ]),

  description: z.string().optional(),
});
