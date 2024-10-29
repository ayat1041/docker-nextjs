"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="bg-slate-900 p-10 flex flex-col items-center gap-4 rounded-xl shadow-[#ffffff10] shadow-lg">
        <div className="p-8 bg-slate-200 text-3xl font-bold w-56 text-center rounded-sm">
          {count}
        </div>
        <div className="w-full flex gap-4">
          <button
            title="decrement"
            className="w-1/2 text-3xl font-bold bg-yellow-600 text-center py-2 rounded-lg shadow-md"
            onClick={() => count <= 0 || setCount(count - 1)}
          >
            -
          </button>
          <button
            title="increment"
            className="w-1/2 text-3xl font-bold bg-green-600 text-center py-2 rounded-lg shadow-md"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
        <button
          title="Reset"
          className="w-full text-2xl font-bold bg-blue-900 text-center py-2 rounded-lg shadow-md"
          onClick={() => setCount(0)}
        >
          RESET
        </button>
      </div>
    </div>
  );
}
