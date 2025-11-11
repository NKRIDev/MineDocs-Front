import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DashboardHeader = ()=> {
  const nagivate = useNavigate();

  return (
    <>
      {/*Header*/}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">

            {/*Logo*/}
            <Link href="/">
              <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                MineDocs
              </h1>
            </Link>

            {/*Buttons*/}
            <div className="flex items-center gap-4">
              <Button color="primary" variant="ghost">Profile</Button>
              <Button color="primary" variant="solid" onClick={() => nagivate("/editor")}>
                <Plus />
                Nouveau Project
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default DashboardHeader;