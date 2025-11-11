import { ReactNode } from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";

type Props = {
  title : string,
  children: ReactNode,
};

/*
Component for creating card-style forms for project creation
 */
const CardProject = ({title, children} : Props) => {

  return (
    <>
      <Card className="p-4 bg-gradient-card">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h2 className="text-2xl font-bold mb-6 text-foreground">{title}</h2>
        </CardHeader>
        <CardBody className="flex flex-col w-full gap-5 overflow-visible font-semibold">
          {children}
        </CardBody>
      </Card>
    </>
  );
};

export default CardProject;