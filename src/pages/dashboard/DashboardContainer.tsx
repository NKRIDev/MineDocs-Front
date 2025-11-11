import { FileText, Plus } from "lucide-react";
import { Card } from "@heroui/card";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { useState } from "react";

import SearchBar from "@/components/SearchBar.tsx";
import { Project, userMocker } from "@/mocker/UserMocker.ts";
import ProjectCard from "@/pages/editor/ProjectCard.tsx";

const DashboardContainer = () => {
  const [search, setSearch] = useState("");

  /*
  Update search project
   */
  const handleSearch = (search: string) => {
    setSearch(search);
  };

  /*
  Filtered project with search bar
   */
  const filteredProjects: Project[] = userMocker.projects.filter(
    (project: Project) => {
      return project.title.toLowerCase().includes(search.toLowerCase());
    },
  );

  return (
    <>
      {/*Main section*/}
      <main className="container mx-auto px-4 py-8">
        {/*Search bar*/}
        <SearchBar
          placeholder={"Chercher un projet par titre..."}
          onSearch={handleSearch}
        />

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            Vos Projets
          </h2>
        </div>

        {userMocker.projects.length == 0 ? (
          /*Empty project*/
          <Card className="p-12 text-center">
            <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              Aucun projet trouvé
            </h3>
            <p className="text-muted-foreground mb-6">
              Commencez dès maintenant et créez votre premier projet !
            </p>
            <Link herf="/editor">
              <Button className="">
                <Plus className="w-4 h-4 mr-2" />
                Créer un Projet
              </Button>
            </Link>
          </Card>
        ) : filteredProjects.length == 0 ? (
          /*Projects not found*/
          <Card className="p-12 text-center">
            <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              Aucun projet trouvé
            </h3>
            <p className="text-muted-foreground mb-6">
              Essayez un autre terme de recherche
            </p>
          </Card>
        ) : (
          /*Cards display*/
          <div className="grid md:grid-cols-3 ld:grid-cols-3 gap-6">
            {filteredProjects.map((project: Project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default DashboardContainer;
