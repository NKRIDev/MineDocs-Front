import { Card, CardBody, CardHeader } from "@heroui/card";
import { Select, SelectItem } from "@heroui/select";
import { Input, Textarea } from "@heroui/input";
import { DateInput } from "@heroui/date-input";
import { Calendar, Save } from "lucide-react";
import { CalendarDate, parseDate } from "@internationalized/date";
import { NumberInput } from "@heroui/number-input";
import { FormEvent, useState } from "react";
import { SharedSelection } from "@heroui/system";
import { Button } from "@heroui/button";

import CardProject from "@/pages/dashboard/CardProject.tsx";
import CommunityCard from "@/pages/editor/types/CommunityCard.tsx";
import BuildCard from "@/pages/editor/types/BuildCard.tsx";
import DevelopmentCard from "@/pages/editor/types/DevelopmentCard.tsx";
import GraphicCard from "@/pages/editor/types/GraphicCard.tsx";

/*
Props component
 */
type Props = {
  isSubmitting: boolean;
  onSubmit: () => void;
};

/*
Main form data
 */
type MainForm = {
  type: string;
  title: string;
  description: string;
  deadline: string;
  budget: number;
  contact: string;
  resources: string;
  notes: string;
};

/*
Different type of project
 */
export const projectType: { [key: string]: any } = [
  { key: "build", label: "Construction" },
  { key: "graphics", label: "Graphisme" },
  { key: "development", label: "Développement" },
  { key: "community", label: "Community-Manager" },
];

/**
 * Creating a project
 * @param isSubmitting True if the form is submitted.
 * @param onSubmit event to send the form
 */
const EditorForm = ({ isSubmitting, onSubmit }: Props) => {
  const [projectSelected, setProjectSelected] = useState<SharedSelection>(
    new Set(["build"]),
  );
  const selectedKey = Array.from(projectSelected)[0];

  //Form data
  const [formData, setFormData] = useState<MainForm>({
    type: "build",
    title: "",
    description: "",
    deadline: "",
    budget: 0,
    contact: "",
    resources: "",
    notes: "",
  });

  //custom form
  const [buildData, setBuildData] = useState({});
  const [graphicData, setGraphicData] = useState({});
  const [developmentData, setDevelopmentData] = useState({});
  const [communityData, setCommunityData] = useState({});

  /*
  Updates an element of the Main form object
   */
  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  /*
  Send form in server to create a new project
   */
  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    onSubmit(true);

    /*
    Create project json with main form and custom form
     */
    const jsonProject = {
      ...formData,
      customData: (() => {
        switch (formData.type) {
          case "build":
            return buildData;

          case "graphics":
            return graphicData;

          case "development":
            return developmentData;

          case "community":
            return communityData;
        }
      })(),
    };

    console.log(jsonProject);
  };

  return (
    <form
      className="container mx-auto px-4 py-8 max-w-4xl"
      id="editor-form"
      onSubmit={handleSubmit}
    >
      {/*fieldset: disable all input fields if the form is submitted*/}
      <fieldset className="flex flex-col gap-5" disabled={isSubmitting}>
        {/*Project Type*/}
        <Card className="p-4 bg-gradient-card">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-base font-semibold mb-2 block">Type de projet</p>
          </CardHeader>
          <CardBody className="overflow-visible py-2 ">
            <Select
              className="w-full"
              isRequired={true}
              label="Selectionnez un type de projet"
              selectedKeys={projectSelected}
              onSelectionChange={(keys) => {
                const key = Array.from(keys)[0];
                setProjectSelected(keys);
                handleChange("type", key);
              }}
            >
              {projectType.map((type) => (
                <SelectItem key={type.key}>{type.label}</SelectItem>
              ))}
            </Select>
          </CardBody>
        </Card>

        {/*General Information*/}
        <CardProject title="Informations Général">
          {/*Project title*/}
          <Input
            isRequired={true}
            label="Titre du projet"
            labelPlacement="outside-top"
            placeholder={"Entrez le titre du projet"}
            type="text"
            value={formData.title}
            onChange={(event) => handleChange("title", event.target.value)}
          />

          {/*Project description*/}
          <Textarea
            className="w-full"
            isRequired={true}
            label="Description du projet"
            labelPlacement="outside-top"
            placeholder="Décrivez l'objectif principal du projet"
            value={formData.description}
            onChange={(event) =>
              handleChange("description", event.target.value)
            }
          />

          {/*Deadline and budget*/}
          <div className="flex items-center gap-5">
            {/*Deadline*/}
            <DateInput
              defaultValue={parseDate("2025-02-11")}
              endContent={<Calendar className="w-4 h-4" />}
              label="Deadline"
              labelPlacement="outside"
              placeholderValue={new CalendarDate(1995, 11, 6)}
              onChange={(date) => handleChange("deadline", date?.toString())}
            />

            {/*Budget*/}
            <NumberInput
              label="Budget"
              labelPlacement="outside"
              placeholder="ex, 500€"
              value={formData.budget}
              onChange={(number) => handleChange("budget", number)}
            />
          </div>

          {/*Contact info*/}
          <Input
            label="Coordonnées"
            labelPlacement="outside-top"
            placeholder={"Indiquez vos coordonnées de contact"}
            type="text"
            value={formData.contact}
            onChange={(event) => handleChange("contact", event.target.value)}
          />
        </CardProject>

        {/*Custom information*/}
        {(() => {
          switch (selectedKey) {
            case "build":
              return (
                <BuildCard
                  onDataChange={(data) => setBuildData(data)}
                />
              );
            case "development":
              return (
                <DevelopmentCard
                  onDataChange={(data) => setDevelopmentData(data)}
                />
              );
            case "community":
              return (
                <CommunityCard
                  onDataChange={(data) => setCommunityData(data)}
                />
              );
            case "graphics":
              return (
                <GraphicCard onDataChange={(data) => setGraphicData(data)} />
              );
            default:
              return null;
          }
        })()}

        {/*Additional Information*/}
        <CardProject title="Informations Complémentaires">
          {/**/}
          <Textarea
            className="w-full"
            label="Ressources disponibles"
            labelPlacement="outside-top"
            placeholder="Indiquez toutes les ressources, tous les fichiers et tous les documents disponibles"
            value={formData.resources}
            onChange={(event) => handleChange("resources", event.target.value)}
          />

          {/*Internal Notes / Comments*/}
          <Textarea
            className="w-full"
            label="Notes"
            labelPlacement="outside-top"
            placeholder="Toute remarque supplémentaire ou exigence particulière"
            value={formData.notes}
            onChange={(event) => handleChange("notes", event.target.value)}
          />
        </CardProject>

        {/*Buttons*/}
        {isSubmitting ? (
          <Button isLoading color="primary" type="submit" variant="solid">
            <Save className="h-4 w-4" />
            Sauvegarder
          </Button>
        ) : (
          <Button color="primary" type="submit" variant="solid">
            <Save className="h-4 w-4" />
            Sauvegarder
          </Button>
        )}
      </fieldset>
    </form>
  );
};

export default EditorForm;
