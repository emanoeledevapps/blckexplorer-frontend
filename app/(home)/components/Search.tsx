"use client"

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export function Search() {
  const router = useRouter();
  const [inputTx, setInputTx] = useState('');

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/tx/${inputTx}`)
  }

  return (
    <div className="flex flex-col items-center mt-10 mb-20">
      <form className="flex flex-col" onSubmit={handleSearch}>
        <label htmlFor="tx">Search for a transaction</label>
        <div className="flex gap-3">
          <input 
            id="tx"
            className="w-[1024px] h-14 rounded-full px-3 border border-gray-500"
            placeholder="Type here"
            value={inputTx}
            onChange={(e) => setInputTx(e.target.value)}
            required
          />
          <button
            type="submit"
            className="hover:cursor-pointer px-10 h-14 rounded-full bg-gray-200 hover:bg-gray-300 duration-300"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  )
}