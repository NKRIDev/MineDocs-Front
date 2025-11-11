import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { FormEvent, useEffect, useState } from "react";
import { useAuth } from "@/contexts/authContext.tsx";
import {userMocker} from "@/mocker/UserMocker.ts";

/**
 * User login form
 */
const LoginForm = () => {
  //Form data
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //feedback data
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  //login
  const {user, login} = useAuth();

  /*
  Sending the login request
   */
  const handleLogin = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    /*
    Check form
     */
    if (email.trim() === "") {
      alert("E-mail");

      return;
    }

    if (password.trim() === "") {
      alert("Password");

      return;
    }

    /*
    API call
     */
    setIsSubmitting(true);

    //TODO : mocker
    login(userMocker);
  };

  //Update submitting state
  useEffect(() => {
    setIsSubmitting(false);
  }, [user]);

  return (
    <Form className="flex flex-col gap-4" onSubmit={handleLogin}>
      <Input
        isRequired
        className="w-full"
        errorMessage="Entrez un e-mail valide"
        label="Email"
        labelPlacement="outside"
        name="mail"
        placeholder="votre@email.com"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        isRequired
        className="w-full"
        errorMessage="Entrez un mot de passe valide"
        label="Mot de passe"
        labelPlacement="outside"
        name="blablabla"
        placeholder="*******"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/*Login button*/}
      <div className="w-full flex items-center justify-center gap-2">
        {isSubmitting ? (
          <Button isLoading className="w-full" color="primary">
            Chargement...
          </Button>
        ) : (
          <Button className="w-full" color="primary" type="submit">
            Connexion
          </Button>
        )}
      </div>
    </Form>
  );
};

export default LoginForm;
