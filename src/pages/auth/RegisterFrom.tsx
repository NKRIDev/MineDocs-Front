import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { FormEvent, useEffect, useState } from "react";
import { useAuth } from "@/contexts/authContext.tsx";
import { userMocker } from "@/mocker/UserMocker.ts";

/*
User registration form
 */
const RegisterForm = () => {
  //Form data
  const [pseudo, setPseudo] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  //Feedback user
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  //Register
  const {user, login} = useAuth();

  /*
  Check form data
   */
  const validateData = (event: FormEvent) => {
    event.preventDefault();
    if (pseudo.length < 3) {
      alert("Le pseudo doit être >= 3");

      return false;
    }

    if (password.length < 6) {
      alert("Le mots de passe doit être >= 6");

      return false;
    }

    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas");

      return false;
    }

    return true;
  };

  /*
  Sending the register request
  */
  const handleRegister = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    /*
    Check form
     */
    if (!validateData(event)) {
      return;
    }

    /*
    API call
     */
    setIsSubmitting(true);

    //TODO : mocker
    login(userMocker);
  };

  //Update submit state
  useEffect(() => {
    setIsSubmitting(false);
  }, [user]);

  return (
    <Form className="flex flex-col gap-4" onSubmit={handleRegister}>
      <Input
        isRequired
        errorMessage="Entrez un pseudo valide"
        label="Pseudo"
        labelPlacement="outside"
        name="pseudo"
        placeholder="Votre pseudo"
        type="text"
        value={pseudo}
        onChange={(e) => setPseudo(e.target.value)}
      />

      <Input
        isRequired
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
        errorMessage="Entrez un mot de passe valide"
        label="Mot de passe"
        labelPlacement="outside"
        name="blablabla"
        placeholder="*******"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Input
        isRequired
        errorMessage="Entrez un mot de passe valide"
        label="Mot de passe"
        labelPlacement="outside"
        name="blablabla"
        placeholder="*******"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      {/*Inscription button*/}
      <div className="w-full flex items-center justify-center gap-2">
        {isSubmitting ? (
          <Button isLoading className="w-full" color="primary">
            Chargement...
          </Button>
        ) : (
          <Button className="w-full" color="primary" type="submit">
            Inscription
          </Button>
        )}
      </div>
    </Form>
  );
};

export default RegisterForm;
