import { Route, Routes } from "react-router-dom";

import AuthPage from "@/pages/Auth.tsx";
import { AuthProvider } from "@/contexts/authContext.tsx";
import Dashboard from "@/pages/Dashboard.tsx";
import AuthProtected from "@/components/AuthProtected.tsx";
import Editors from "@/pages/Editors.tsx";
import Editor from "@/pages/Editor.tsx";
import IndexDefault from "@/pages";

function App() {
  return (
    <AuthProvider>
      <Routes>

        {/*Dashboard*/}
        <Route
          element={
            <AuthProtected>
              <Dashboard />
            </AuthProtected>
          }
          path="/dashboard"
        />

        {/*Create a project */}
        <Route
          element={
            <AuthProtected>
              <Editors />
            </AuthProtected>
          }
          path="/editor"
        />

        {/*Edit a project*/}
        {/*TOOD : protéger la ROUTE !*/}
        <Route
          element={
            <Editor />
          }
          path="/editor/:id"
        />

        <Route element={<IndexDefault/>} path="/" />
        <Route element={<AuthPage />} path="/auth" />
      </Routes>
    </AuthProvider>
  );
}

export default App;
