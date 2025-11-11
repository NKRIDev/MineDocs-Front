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
  palette: string;
  deliverables: string;
  dimensions: string;
  example: string;
};

/*
Component props
 */
type Props = {
  onDataChange: (data: FormData) => void;
};

const GraphicCard = ({onDataChange} : Props) => {
  const [formData, setFormData] = useState<FormData>({
    serverName: "",
    theme: "",
    style: "",
    palette: "",
    deliverables: "",
    dimensions: "",
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
      <CardProject title="Graphisme">
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
          label="Thème visuel / Univers"
          labelPlacement="outside-top"
          type="text"
          placeholder={"ex, Fantaisie sombre, Science-fiction, Cartoon..."}
          value={formData.theme}
          onChange={(event) => handleChange("theme", event.target.value)}
        />

        {/*Desired Graphic Style*/}
        <Textarea
          className="w-full"
          label="Style graphique souhaité"
          labelPlacement="outside-top"
          placeholder="ex, Pixel art, 3D, Réaliste"
          value={formData.style}
          onChange={(event) => handleChange("style", event.target.value)}
        />

        {/*Color Palette*/}
        <Textarea
          className="w-full"
          label="Palette de couleur"
          labelPlacement="outside-top"
          placeholder="ex, Bleu, Or, Noir"
          value={formData.palette}
          onChange={(event) => handleChange("palette", event.target.value)}
        />

        {/*Required Deliverables*/}
        <Textarea
          className="w-full"
          label="Livrables requis"
          labelPlacement="outside-top"
          placeholder="ex, Logo, Bannière, Icons"
          value={formData.deliverables}
          onChange={(event) => handleChange("deliverables", event.target.value)}
        />

        {/*Dimensions / Formats*/}
        <Textarea
          className="w-full"
          label="Dimensions / Formats"
          labelPlacement="outside-top"
          placeholder="Préciser la taille et les formats de fichiers nécessaires"
          value={formData.dimensions}
          onChange={(event) => handleChange("dimensions", event.target.value)}
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

export default GraphicCard;