import Link from "next/link";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import clsx from "clsx";
import { useRouter } from "next/router";
const Doodle = dynamic(() => import("./Doodle"), { ssr: false });

export default function Header() {
  const { t } = useTranslation(["common"]);
  const router = useRouter();
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
          <a href="https://open.spotify.com/user/1212002891">
            <li className="hover:text-indigo-400  cursor-pointer transition-all duration-300">
              {t("music")}
            </li>
          </a>
          <Link href="/books">
            <li
              className={clsx(
                "hover:text-purple-400  cursor-pointer transition-all duration-300",
                {
                  ["border-b border-b-purple-400"]: router.pathname == "/books",
                }
              )}
            >
              {t("booklist")}
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
