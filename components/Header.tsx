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
    <nav className="flex flex-row items-end w-full h-auto gap-4 m-auto mb-4 leading-none">
      <Link href="/">
        <div className="w-[75px] h-[75px]">
          <Doodle width={"75px"} />
        </div>
      </Link>
      <div className="flex flex-col font-sans">
        <h1 className="font-sans text-3xl sm:text-5xl mt-[-7px] mb-1 bg-gradient-to-r from-cobalt to-lagoon inline-block text-transparent bg-clip-text font-bold">
          Wiley McKay Conte
        </h1>
        <ul className="flex justify-between gap-4 font-sans text-3xl font-bold leading-5 uppercase">
          <a href="https://github.com/wileymc">
            <li className="transition-all duration-300 cursor-pointer hover:text-lagoon">
              {t("code")}
            </li>
          </a>
          <a href="https://open.spotify.com/user/1212002891">
            <li className="transition-all duration-300 cursor-pointer hover:text-lagoon">
              {t("music")}
            </li>
          </a>
          <Link href="/books">
            <li
              className={clsx(
                "hover:text-lagoon  cursor-pointer transition-all duration-300",
                {
                  ["border-b border-b-lagoon"]: router.pathname == "/books",
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
