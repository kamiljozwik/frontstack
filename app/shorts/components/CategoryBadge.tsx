import { Badge } from "@/components/ui/badge";
import { cn } from "@/utils";
import React from "react";
import { valueToLabel } from "../utils";

type Props = {
  category?: string;
  className?: string;
};

export const CategoryBadge = ({ category, className = "" }: Props) => {
  return (
    <Badge
      variant="default"
      className={cn(className, {
        "!text-white": ["ts", "node"].includes(category ?? ""),
        "!bg-yellow-300": category === "js",
        "!bg-blue-600": category === "ts",
        "!bg-sky-500": category === "tailwind",
        "!bg-green-800": category === "node",
        "!bg-red-300": category === "devtools",
        "!bg-sky-300": category === "react",
      })}
    >
      {valueToLabel(category)}
    </Badge>
  );
};
