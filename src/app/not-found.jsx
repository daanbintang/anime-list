"use client";
import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center max-w-xl mx-auto text-primary">
      <div className="flex items-center justify-center max-w-xl font-bold text-xl flex-col">
        <FileSearch width={44} />
        <h1>Page Not Found</h1>
        <Link href={"/"} className="font-bold text-lg bg-dark px-4">Go to home</Link>
      </div>
    </div>
  );
};

export default Page;
