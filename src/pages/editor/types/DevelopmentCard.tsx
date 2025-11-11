import CardProject from "@/pages/dashboard/CardProject.tsx";
import { Input, Textarea } from "@heroui/input";
import { useState } from "react";

/*
Data form
 */
type FormData = {
  serverName: string;
  versionAPI: string;
  type: string;
  features: string;
  techno: string;
  example: string;
};

/*
Component props
 */
type Props = {
  onDataChange: (data: FormData) => void;
};

const DevelopmentCard = ({onDataChange} : Props) => {
  const [formData, setFormData] = useState<FormData>({
    serverName: "",
    versionAPI: "",
    type: "",
    features: "",
    techno: "",
    example: "",
  });

  /*
  Updates an element of the form object
  */
  const handleChange = (field: string, value: any) => {
    const newForm = { ...formData, [field]: value };
    setFormData(newForm);
    onDataChange(newForm);
  };

  return (
    <>
      <CardProject title="Développement">
        {/*Server name*/}
        <Input
          label="Nom du serveur"
          labelPlacement="outside-top"
          type="text"
          placeholder={"Entrer le nom du serveur"}
          value={formData.serverName}
          onChange={(event) => handleChange("serverName", event.target.value)}
        />

        {/*Version adn type*/}
        <div className="flex items-center gap-5">
          {/*server version*/}
          <Input
            label="Version du server / API"
            labelPlacement="outside-top"
            type="text"
            placeholder={"ex, Spigot 1.20, NodeJS v22"}
            value={formData.versionAPI}
            onChange={(event) => handleChange("versionAPI", event.target.value)}
          />

          {/*server type*/}
          <Input
            label="Type de project"
            labelPlacement="outside-top"
            type="text"
            placeholder={"ex, Plugin, Mod, MCP, Bot"}
            value={formData.type}
            onChange={(event) => handleChange("type", event.target.value)}
          />
        </div>

        {/*Required Features*/}
        <Textarea
          label="Fonctionnalités requises"
          labelPlacement="outside-top"
          type="text"
          placeholder={"Énumérez toutes les caractéristiques et fonctionnalités nécessaires"}
          value={formData.features}
          onChange={(event) => handleChange("features", event.target.value)}
        />

        {/*Desired Technologies*/}
        <Input
          label="Technologies souhaitées"
          labelPlacement="outside-top"
          type="text"
          placeholder={"ex, Java, TypeScript, MySQL, RabbitMQ"}
          value={formData.techno}
          onChange={(event) => handleChange("techno", event.target.value)}
        />

        {/*exemple*/}
        <Textarea
          className="w-full"
          label="Exemple de Projet / Inspiration"
          labelPlacement="outside-top"
          placeholder="Liens ou descriptions de projet similaires"
          value={formData.example}
          onChange={(event) => handleChange("example", event.target.value)}
        />
      </CardProject>
    </>
  );
};

export default DevelopmentCard;