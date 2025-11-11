import { Card, CardBody, CardHeader } from "@heroui/card";
import { Loader2 } from "lucide-react";

/*
LoadingStateProps props, with default props
 */
interface LoadingStateProps {
  title?: string;
  message?: string;
}

/*
Loading state component
*/
const LoadingState = ({
  title = "Chargement en cours",
  message = "Veuillez patienter pendant que nous récupérons vos données...",
}: LoadingStateProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen animate-fade-in">
      <Card className="max-w-md w-full border border-border shadow-lg bg-card animate-scale-in">

        {/*Card header*/}
        <CardHeader className="flex items-center justify-center gap-3 pt-6">
          <div className="p-3 bg-primary/10 rounded-full">
            <Loader2 className="text-primary w-6 h-6 animate-spin" />
          </div>
          <h2 className="text-lg font-semibold text-foreground text-center">
            {title}
          </h2>
        </CardHeader>

        {/*Message content*/}
        <CardBody className="flex flex-col items-center gap-4 pb-6 text-center">
          <p className="text-muted-foreground text-sm">{message}</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default LoadingState;
