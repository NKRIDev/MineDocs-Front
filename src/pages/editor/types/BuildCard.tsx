import CardProject from "@/pages/dashboard/CardProject.tsx";
import { Input, Textarea } from "@heroui/input";
import { useState } from "react";

/*
Data form
 */
type FormData = {
  serverName: string;
  theme: string;
  style: string;
  version: string;
  type: string;
  dimensions: string;
  palette: string;
  ambiance: string;
  example: string;
};

/*
Component props
 */
type Props = {
  onDataChange: (data: FormData) => void;
};

const BuildCard = ({onDataChange}: Props) => {
  const [formData, setFormData] = useState<FormData>({
    serverName: "",
    theme: "",
    style: "",
    version: "",
    type: "",
    dimensions: "",
    palette: "",
    ambiance: "",
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
      <CardProject title="Construction">
        {/*Server name*/}
        <Input
          label="Nom du serveur"
          labelPlacement="outside-top"
          type="text"
          placeholder={"Entrer le nom du serveur"}
          value={formData.serverName}
          onChange={(event) => handleChange("serverName", event.target.value)}
        />

        {/*General theme*/}
        <Input
          label="Thème Général"
          labelPlacement="outside-top"
          type="text"
          placeholder={"ex, Médiéval, Futuriste, Fantaisie..."}
          value={formData.theme}
          onChange={(event) => handleChange("theme", event.target.value)}
        />

        {/*Desired Style*/}
        <Textarea
          className="w-full"
          label="Style souhaité"
          labelPlacement="outside-top"
          placeholder="Décrivez le style architectural et l'esthétique.."
          value={formData.style}
          onChange={(event) => handleChange("style", event.target.value)}
        />

        {/*Server version and type*/}
        <div className="flex items-center gap-5">
          {/*server version*/}
          <Input
            key="outside-top"
            label="Version du serveur"
            labelPlacement="outside-top"
            type="text"
            placeholder={"ex, 1.20.4"}
            value={formData.version}
            onChange={(event) => handleChange("version", event.target.value)}
          />

          {/*server type*/}
          <Input
            label="Type du serveur"
            labelPlacement="outside"
            placeholder="ex, RP, Mini-games, Factions"
            value={formData.type}
            onChange={(event) => handleChange("type", event.target.value)}
          />
        </div>

        {/*Build dimensions*/}
        <Textarea
          className="w-full"
          label="Dimensions de la construction / Superficie"
          labelPlacement="outside-top"
          placeholder="ex, 200x200 blocks"
          value={formData.dimensions}
          onChange={(event) => handleChange("dimensions", event.target.value)}
        />

        {/*Block palette*/}
        <Textarea
          className="w-full"
          label="Palette de blocs"
          labelPlacement="outside-top"
          placeholder="Spécifiez les blocs et matériaux préférés"
          value={formData.palette}
          onChange={(event) => handleChange("palette", event.target.value)}
        />

        {/*ambiance and environment*/}
        <Textarea
          className="w-full"
          label="Ambiance et Environnement"
          labelPlacement="outside-top"
          placeholder="Describe the desired atmosphere and mood"
          value={formData.ambiance}
          onChange={(event) => handleChange("ambiance", event.target.value)}
        />

        {/*exemple*/}
        <Textarea
          className="w-full"
          label="Exemple de Construction / Inspiration"
          labelPlacement="outside-top"
          placeholder="Liens ou descriptions de constructions similaires"
          value={formData.example}
          onChange={(event) => handleChange("example", event.target.value)}
        />
      </CardProject>
    </>
  );
};

export default BuildCard;