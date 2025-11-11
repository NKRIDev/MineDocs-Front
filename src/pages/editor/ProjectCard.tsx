import { Card } from "@heroui/card";
import { Button } from "@heroui/button";
import { Edit, Eye, Share2, Trash2 } from "lucide-react";

import { Project } from "@/mocker/UserMocker.ts";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  /*
Returns colors based on the type of CDC
 */
  const getTypeColor = (type: string) => {
    const colors = {
      build: "bg-primary/10 text-primary",
      graphics: "bg-warning/10 text-warning",
      development: "bg-danger/10 text-danger",
      community: "bg-success/10 text-success",
    };

    return colors[type as keyof typeof colors];
  };

  /*
Returns colors based on the type of CDC
 */
  const getTypeLabel = (type: string) => {
    const labels = {
      build: "Construction",
      graphics: "Graphisme",
      development: "Développement",
      community: "Community-Manager",
    };

    return labels[type as keyof typeof labels];
  };

  return (
    <>
      <Card
        key={project.id}
        className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in bg-gradient-card"
      >
        <div className="flex items-start justify-between mb-4">
          <div
            className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(project.type)}`}
          >
            {getTypeLabel(project.type)}
          </div>

          <div className="flex gap-1">
            <Button className="w-4 h-8" variant="light">
              <Eye className="w-4 h-4" />
            </Button>

            <Button className="w-8 h-8" variant="light">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-2 text-foreground">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          {project.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            Dernière modification il y a {project.lastModified}
          </span>

          <div className="text gap-2">
            <Button size="sm" variant="bordered">
              <Edit className="w-4 h-4 mr-1" />
              Edit
            </Button>

            <Button
              className="text-destructive hover:text-destructive"
              size="sm"
              variant="light"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ProjectCard;
