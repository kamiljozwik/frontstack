import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  title: string;
};

export const ToolsCard = ({ title }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <span>{title}</span> <Badge variant="default">36</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <img
          src="https://placehold.co/200x200"
          width={200}
          height={200}
          alt="logo"
        />
      </CardContent>
    </Card>
  );
};
