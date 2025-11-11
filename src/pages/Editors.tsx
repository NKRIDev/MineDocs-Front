import { useState } from "react";

import EditorHeader from "@/pages/editor/EditorHeader.tsx";
import EditorForm from "@/pages/editor/EditorForm.tsx";

const Editors = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/*Header*/}
      <EditorHeader isSubmitting={isSubmitting} />

      <EditorForm
        isSubmitting={isSubmitting}
        onSubmit={() => setIsSubmitting(true)}
      />
    </div>
  );
};

export default Editors;
