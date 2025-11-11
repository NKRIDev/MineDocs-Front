# 📋 MineDocs - Specification Management Application

> A modern and intuitive web application allowing you to create, manage and organize your specifications for different types of projects.
> This is front end part.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?logo=typescript)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## Features

### Project Management
- **Centralized Dashboard**: Overview of all your projects
- **Smart Search**: Quickly find your projects by title
- **Guided Creation**: Structured form for creating complete specifications

### Types of Projects Supported
The application supports four project categories with customizable forms:

- **Construction**: Building projects
- **Graphic Design**: Visual design and creation projects
- **Development**: Software development projects
- **Community Management**: Community management projects

### Advanced Features
- **Dynamic Forms**: Customizable fields based on project type
- **Deadline Management**: Track deadlines with integrated calendar
- **Budget Tracker**: Manage project budgets

## Technologies

### Frontend
- **React 18+**: Modern UI library
- **TypeScript**: Static typing for robust code
- **React Router**: Smooth SPA navigation
- **HeroUI**: Elegant and accessible UI components

### UI Libraries
- **Lucide React**: Modern and consistent icons
- **@internationalized/date**: Handling of internationalized dates
- **HeroUI Components**: Card, Input, Select, DateInput, etc.

## Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation Steps

```bash
# Clone the repository
git clone https://github.com/NKRIDev/MineDocs-Front.git

# Navigate within the folder
cd MineDocs-Front

# Install dependencies
npm install
# or
yarn install

# Launch the application in development mode
npm run dev
# or
yarn dev
```

The application will be accessible at `http://localhost:5173` (or the configured port).
## Use

### Create a Project

1. **Access the Dashboard**: Homepage with all your projects
2. **Click on "Create a Project"**: Launches the editor
3. **Select the type**: Construction, Graphic Design, Development, or Community Management
4. **Fill out the form**:

- General information (title, description, deadline, budget)

- Information specific to the project type

- Resources and additional notes
5. **Save**: Your project brief is created!

### Search for a Project

Use the search bar on the dashboard to filter your projects by title in real time.

### Edit a Project

Click on an existing project to access the editor with pre-filled data.

## Customization

### Theme
The application uses a system of customizable design tokens:

```css
--background: Couleur de fond principale
--foreground: Couleur du texte
--card: Couleur des cartes
--border: Couleur des bordures
--muted-foreground: Texte secondaire
--primary: Couleur principale
--destructive: Couleur d'erreur
```

## API
The application communicates with a backend API via the following endpoints:
Currently, only the frontend has been created.

Routes that will be used:
```typescript
// Retrieve a project
GET /api/editor/:id

// Create a project
POST /api/projects
{
  type: string,
  title: string,
  description: string,
  deadline: string,
  budget: number,
  contact: string,
  resources: string,
  notes: string,
  customData: object
}
```

## Author

- **NKRI** - [@NKRIDev](https://github.com/NKRIDev)
- **Discord** - [@Discord](https://discord.gg/xVZ8G4EQhh)


## License
[MIT](https://choosealicense.com/licenses/mit/)

---

**Note** : This application is in active development.