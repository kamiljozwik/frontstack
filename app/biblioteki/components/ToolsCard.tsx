import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toolsNames } from "../dictionary";
import { Tool } from "../type";
import Image from "next/image";

type Props = {
  tool: string;
};

export const ToolsCard = async ({ tool }: Props) => {
  const { tools }: { tools: Tool[] } = await import(`../data/${tool}.ts`);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">
          <span className="relative">
            {toolsNames[tool]}
            <Badge
              variant="secondary"
              className="absolute top-[-6px] right-[-40px]"
            >
              {tools.length}
            </Badge>
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Image
          src={`/biblioteki/${tool}.webp`}
          width={150}
          height={150}
          alt="tool-logo"
          className="p-3"
        />
      </CardContent>
    </Card>
  );
};
