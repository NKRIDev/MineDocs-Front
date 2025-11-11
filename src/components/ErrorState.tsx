import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

/*
ErroState props, with default props
 */
interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  showBack?: boolean;
}

/*
Error handling component
*/
const ErrorState = ({
  title = "Une erreur est survenue",
  message = "Nous n’avons pas pu charger les données. Veuillez réessayer.",
  onRetry,
  showBack = true,
}: ErrorStateProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen animate-fade-in">
      <Card className="max-w-md w-full border border-border shadow-lg bg-card animate-scale-in">

        {/*Card Header*/}
        <CardHeader className="flex items-center justify-center gap-3 pt-6">
          <div className="p-3 bg-destructive/10 rounded-full">
            <AlertTriangle className="text-destructive w-6 h-6" />
          </div>
          <h2 className="text-lg font-semibold text-foreground text-center">
            {title}
          </h2>
        </CardHeader>

        {/*Card Content*/}
        <CardBody className="flex flex-col items-center gap-4 pb-6 text-center">
          <p className="text-muted-foreground text-sm">{message}</p>

          <div className="flex gap-3 mt-2">
            {onRetry && (
              <Button color="primary" variant="shadow" onPress={onRetry}>
                Réessayer
              </Button>
            )}
            {showBack && (
              <Button color="default" onPress={() => navigate("/")}>
                Retour
              </Button>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ErrorState;
