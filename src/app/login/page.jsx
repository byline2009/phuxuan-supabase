"use client";
import { login, signup } from "./actions";
import { useFormStatus } from "react-dom";

export default function LoginPage() {
  const { pending } = useFormStatus();

  return (
    <form className="form-login">
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}> {pending ? "Loading…" : "Login"}</button>
      <button formAction={signup}> {pending ? "Loading…" : "Sign up"}</button>
    </form>
  );
}
