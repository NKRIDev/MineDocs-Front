import CardProject from "@/pages/dashboard/CardProject.tsx";
import { Input, Textarea } from "@heroui/input";
import { useState } from "react";

/*
Data form
 */
type FormData = {
  serverName: string;
  objective: string;
  target: string;
  style: string;
  platforms: string;
  publicationFrequency: string;
  produceType: string;
  successIndicators: string;
};

/*
Component props
 */
type Props = {
  onDataChange: (data: FormData) => void;
};

const CommunityCard = ({onDataChange} : Props) => {
  const [formData, setFormData] = useState<FormData>({
    serverName: "",
    objective: "",
    target: "",
    style: "",
    platforms: "",
    publicationFrequency: "",
    produceType: "",
    successIndicators: "",
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
      <CardProject title="Community Manager">
        {/*Server name*/}
        <Input
          label="Nom du serveur ou de la communauté"
          labelPlacement="outside-top"
          type="text"
          placeholder={"Entrer le nom du serveur/communauté"}
          value={formData.serverName}
          onChange={(event) => handleChange("serverName", event.target.value)}
        />

        {/*Communication Objective*/}
        <Textarea
          className="w-full"
          label="Objectif de communication"
          labelPlacement="outside-top"
          placeholder="ex, Recrutement, Promotion, Engagement"
          value={formData.objective}
          onChange={(event) => handleChange("objective", event.target.value)}
        />

        {/*Target Audience*/}
        <Input
          label="Public cible"
          labelPlacement="outside-top"
          type="text"
          placeholder={"Âge, plateforme, langue, intérêts"}
          value={formData.target}
          onChange={(event) => handleChange("target", event.target.value)}
        />

        {/*Communication Tone / Style*/}
        <Input
          label="Ton et style de communication"
          labelPlacement="outside-top"
          type="text"
          placeholder={"ex: amical, professionnel, décontracté"}
          value={formData.style}
          onChange={(event) => handleChange("style", event.target.value)}
        />

        {/*Platforms Used*/}
        <Input
          label="Plateformes utilisées"
          labelPlacement="outside-top"
          type="text"
          placeholder={"ex: Discord, Twitter, Instragam, YouTube"}
          value={formData.platforms}
          onChange={(event) => handleChange("platforms", event.target.value)}
        />

        {/*Publication Frequency*/}
        <Input
          label="Fréquence de publication"
          labelPlacement="outside-top"
          type="text"
          placeholder={"ex: Publications quotidiennes, vidéos hebdomadaires"}
          value={formData.publicationFrequency}
          onChange={(event) => handleChange("publicationFrequency", event.target.value)}
        />

        {/*Content Types to Produce*/}
        <Textarea
          className="w-full"
          label="Types de contenu à produire"
          labelPlacement="outside-top"
          placeholder="ex, Articles, vidéos, sondages, événements"
          value={formData.produceType}
          onChange={(event) => handleChange("produceType", event.target.value)}
        />

        {/*KPI / Success Indicators*/}
        <Textarea
          className="w-full"
          label="Indicateurs clés de performance (KPI) / Indicateurs de succès"
          labelPlacement="outside-top"
          placeholder="Comment le succès sera-t-il mesuré ?"
          value={formData.successIndicators}
          onChange={(event) => handleChange("successIndicators", event.target.value)}
        />
      </CardProject>
    </>
  );
};

export default CommunityCard;