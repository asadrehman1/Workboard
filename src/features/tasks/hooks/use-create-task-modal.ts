"use client";
import { useQueryState, parseAsBoolean, parseAsString } from "nuqs";
import { TaskStatus } from "../types";

export const useCreateTaskModal = () => {
  const [isOpen, setIsOpen] = useQueryState(
    "create-task",
    parseAsBoolean.withDefault(false).withOptions({ clearOnDefault: true })
  );

  const [initialStatus, setInitialStatus] = useQueryState(
    "initial-status",
    parseAsString.withDefault("").withOptions({ clearOnDefault: true })
  );

  const open = (status?: TaskStatus) => {
    if (status) setInitialStatus(status);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    setInitialStatus(null);
  };

  return {
    isOpen,
    open,
    setIsOpen,
    close,
    initialStatus,
  };
};
