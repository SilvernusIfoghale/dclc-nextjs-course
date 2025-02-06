"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <h1 className="text-2xl font-bold">{count}</h1>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-200 text-black p-2 rounded-lg"
        >
          Increment
        </button>
      </main>
    </div>
  );
}
