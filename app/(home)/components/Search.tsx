"use client"

import { detectInputType } from "@/utils/detectInputType";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export function Search() {
  const router = useRouter();
  const [input, setInput] = useState('');

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const type = detectInputType(input)

    if (type === 'unknown') alert('Unknown value')
    if (type === 'tx') router.push(`/tx/${input}`)
    if (type === 'address') router.push(`/address/${input}`)
    if (type === 'blockNumber') router.push(`/block/${input}`)
  }

  return (
    <div className="flex flex-col items-center mt-10 mb-20">
      <form className="flex flex-col" onSubmit={handleSearch}>
        <label htmlFor="tx">Search for a transaction/address/block</label>
        <div className="flex gap-3 w-full">
          <input 
            id="tx"
            className="w-full lg:w-[1024px] h-14 rounded-full px-3 border border-gray-500"
            placeholder="Type here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
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