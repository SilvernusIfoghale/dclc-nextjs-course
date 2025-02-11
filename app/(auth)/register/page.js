"use client";
import Register from "@/app/actions/auth";
import Link from "next/link";
import { useActionState } from "react";

const RegistrationPage = () => {
  const [state, action, isPending] = useActionState(Register, undefined);
  return (
    <>
      <div className="flex justify-center mt-10 text-black">
        <div className="w-96 h-96 bg-white p-5 rounded-lg mx-2">
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
              />
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
