import Link from "next/link";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
const Doodle = dynamic(() => import("./Doodle"), { ssr: false });

export default function Header() {
  const { t } = useTranslation(["common"]);
  return (
    <nav className="flex flex-row gap-4 w-full mb-8 leading-none h-[45px] m-auto">
      <Link href="/">
        <div className="w-[45px]">
          <Doodle />
        </div>
      </Link>
      <div className="flex flex-col font-sans">
        <h1 className="font-sans text-2xl mt-[-7px] mb-1 bg-gradient-to-r from-blue-600 to-violet-400 inline-block text-transparent bg-clip-text">
          Wiley McKay Conte
        </h1>
        <ul className="flex gap-4 font-sans uppercase text-l font-bold leading-5">
          <a href="https://github.com/wileymc">
            <li className="hover:text-blue-500  cursor-pointer transition-all duration-300">
              {t("code")}
            </li>
          </a>
          <li className="hover:text-indigo-400  cursor-pointer transition-all duration-300">
            {t("music")}
          </li>
          <Link href="/books">
            <li className="hover:text-violet-400  cursor-pointer transition-all duration-300">
              {t("booklist")}
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
