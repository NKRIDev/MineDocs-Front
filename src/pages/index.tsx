import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/button";

/*
Hero/Home page
TODO:  a faire
 */
const IndexDefault = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="w-full max-w-md animate-fade-in flex flex-col items-center justify-center gap-10">
        <h1>
          Home PAGE
        </h1>

        <div className="flex flw-rox gap-5">
          <Button color={"primary"} onClick={() => navigate("/dashboard")}>
            Créer un Projet
          </Button>

          <Button color={"primary"} onClick={() => navigate("/dashboard")}>
            Mon Dashboard
          </Button>
        </div>
      </main>
    </div>
  );
};

export default IndexDefault;