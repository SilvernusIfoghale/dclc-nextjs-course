"use client";
import Register from "@/app/actions/auth";
import Link from "next/link";
import { useActionState } from "react";

const RegistrationPage = () => {
  const [state, action, isPending] = useActionState(Register, undefined);
  return (
    <>
      <div className="flex justify-center my-10 text-black ">
        <div className="w-96 min-h-96 bg-white p-5 rounded-lg mx-2">
          <h1 className="my-3 text-center  font-bold text-2xl">Register</h1>
          <form action={action}>
            <div className="my-3">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                id="email"
                placeholder="johndoe@gmail.com"
                className="rounded-lg p-1.5 border-2 w-full"
                defaultValue={state?.email}
              />
              {state?.errors?.email && (
                <p className="text-xs text-red-400">{state.errors.email}</p>
              )}
            </div>

            <div className="my-3">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                id="password"
                placeholder="*********"
                className="rounded-lg p-1.5 border-2 w-full"
              />
              {state?.errors?.password && (
                <div className="text-xs text-red-400">
                  <p>Password must:</p>
                  <ul>
                    {state.errors.password.map((err) => (
                      <li key={err} className="list-disc ml-5">
                        {err}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="my-3">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                name="confirmPassword"
                type="password"
                id="confirmPassword"
                placeholder="*********"
                className="rounded-lg p-1.5 border-2 w-full"
              />
              {state?.errors?.confirmPassword && (
                <p className="text-xs text-red-400">
                  {state.errors.confirmPassword}
                </p>
              )}
            </div>
            <div className="mt-7">
              <button
                disabled={isPending}
                className="mr-6 bg-blue-700 text-white rounded-md py-2 px-10"
              >
                {isPending ? "Loading..." : "  Register"}
              </button>
              <Link href="">or login here</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
