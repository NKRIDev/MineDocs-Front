import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EditorHeader from "@/pages/editor/EditorHeader.tsx";
import EditorForm from "@/pages/editor/EditorForm.tsx";
import ErrorState from "@/components/ErrorState.tsx";
import { Loader } from "lucide-react";
import LoadingState from "@/components/LoadingState.tsx";

export const Editor = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  /*
  Fetch data with ID
   */
  useEffect(() => {
    if (!id) {
      return;
    }

    const editorFetching = async () => {
      try {
        setIsLoading(true);

        //Fetch data
        const response = await fetch(`api/editor/${id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    editorFetching();
  }, [id]);

  /*
  Data fetching
   */
  if(isLoading) {
    return  (
      <LoadingState></LoadingState>
    );
  }

  /*
  Error with api call
   */
  if(error){
    return  (
      <ErrorState></ErrorState>
    );
  }

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

export default Editor;
