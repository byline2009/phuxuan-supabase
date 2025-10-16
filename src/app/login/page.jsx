"use client";
import { useFormStatus } from "react-dom";
import { SubmitButton } from "@components/button/SubmitButton";
import { login, signup } from "./actions";

export default function LoginPage() {
  const { pending } = useFormStatus();

  return (
    <form className="form-login">
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <SubmitButton action={login} label="Login" />
      <SubmitButton action={signup} label="Sign up" />
    </form>
  );
}
