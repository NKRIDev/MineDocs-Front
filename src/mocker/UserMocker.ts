export type Project = {
  id: number;
  title: string;
  type: string;
  lastModified: string;
  description: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  projects: Project[];
};

export const userMocker: User = {
  id: "1",
  name: "NKRI",
  email: "nkri.dev@gmail.com",
  projects: [
    {
      id: 1,
      title: "Project 1",
      type: "build",
      lastModified: "2 heures",
      description: "Lorem ipsum",
    },
    {
      id: 2,
      title: "Project 2",
      type: "graphics",
      lastModified: "1 jours",
      description: "Lorem ipsum",
    },
    {
      id: 3,
      title: "Project 3",
      type: "development",
      lastModified: "3 jours",
      description: "Lorem ipsum",
    },
    {
      id: 4,
      title: "Project 4",
      type: "build",
      lastModified: "3 jours",
      description: "Lorem ipsum",
    },
    {
      id: 5,
      title: "Project 5",
      type: "community",
      lastModified: "1 heure",
      description: "Lorem ipsum",
    },
  ]
}