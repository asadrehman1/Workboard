import { parseAsString, parseAsStringEnum, useQueryStates } from "nuqs";
import { TaskStatus } from "../types";

export const useTaskFilters = () => {
  return useQueryStates({
    search: parseAsString,
    status: parseAsStringEnum(Object.values(TaskStatus)),
    assigneeId: parseAsString,
    dueDate: parseAsString,
    projectId: parseAsString,
  });
};
