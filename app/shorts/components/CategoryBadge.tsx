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
        "!text-white": ["ts", "node", "css", "html"].includes(category ?? ""),
        "!bg-yellow-300": category === "js",
        "!bg-blue-600": category === "ts",
        "!bg-sky-500": category === "tailwind",
        "!bg-green-800": category === "node",
        "!bg-red-300": category === "devtools",
        "!bg-sky-300": category === "react",
        "!bg-orange-600": category === "html",
        "!bg-cyan-700": category === "css",
      })}
    >
      {valueToLabel(category)}
    </Badge>
  );
};
