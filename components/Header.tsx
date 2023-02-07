import Link from "next/link";
import Doodle from "./Doodle";

export function Header() {
  return (
    <nav className="flex flex-row gap-4 w-full mb-8 leading-none h-[45px]">
      <Doodle />
      <div className="flex flex-col font-sans">
        <h1 className="font-sans text-2xl mb-2 leading-5 bg-gradient-to-r from-blue-500 to-purple-400 inline-block text-transparent bg-clip-text">
          Wiley McKay Conte
        </h1>
        <ul className="flex gap-4 font-sans uppercase text-l font-bold leading-5">
          <li className="hover:text-blue-500  cursor-pointer transition-all">
            Code
          </li>
          <li className="hover:text-indigo-400  cursor-pointer transition-all">
            Music
          </li>
          <Link href="/books">
            <li className="hover:text-purple-400  cursor-pointer transition-all">
              Booklist
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}