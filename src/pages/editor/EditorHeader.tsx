import { Button } from "@heroui/button";
import { Download, MoveLeft, Save, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Props = {
  isSubmitting: boolean;
};

export default function EditorHeader({ isSubmitting }: Props) {
  const navigate = useNavigate();

  return (
    <>
      {/*Header*/}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/*Buttons*/}
              <Button
                color="default"
                variant="light"
                onClick={() => navigate("/dashboard")}
              >
                <MoveLeft className="h-4 w-4" />
              </Button>
              {/*Logo*/}
              <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Nouveau Projet
              </h1>
            </div>

            {/*Buttons*/}
            <div className="flex items-center gap-4">
              <Button color="default" isDisabled={isSubmitting} variant="ghost">
                <Share2 className="h-4 w-4" />
                Partager
              </Button>
              <Button color="default" isDisabled={isSubmitting} variant="ghost">
                <Download className="h-4 w-4" />
                Exporter en PDF
              </Button>

              {isSubmitting ? (
                <Button
                  isLoading
                  color="primary"
                  form="editor-form"
                  type="submit"
                  variant="solid"
                >
                  <Save className="h-4 w-4" />
                  Sauvegarder
                </Button>
              ) : (
                <Button
                  color="primary"
                  form="editor-form"
                  type="submit"
                  variant="solid"
                >
                  <Save className="h-4 w-4" />
                  Sauvegarder
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
