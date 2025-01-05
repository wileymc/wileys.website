import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import { FaCodeBranch } from "react-icons/fa";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import nextI18nextConfig, { languageMap } from "@/next-i18next.config";
import Logo from "../public/logo-beta.svg";
import Image from "next/image";
import { Populist } from "./Populist";

export function Footer() {
  const { i18n } = useTranslation(["common"]);
  const router = useRouter();
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: e.target.value });
  };
  const supportedLanguages = nextI18nextConfig.i18n.locales;
  return (
    <footer className="mt-8 text-white">
      <div className="flex items-center justify-between">
        <select
          className="p-2 font-sans text-lg border rounded-full cursor-pointer bg-glass border-slate-800"
          onChange={handleLanguageChange}
          value={i18n.language}
        >
          {supportedLanguages.map((lang) => (
            <option key={lang} value={lang}>
              {languageMap[lang]}
            </option>
          ))}
        </select>
        <ul className="flex flex-row items-center justify-end gap-8">
          <a
            href="https://twitter.com/wileymckayconte"
            target="_blank"
            rel="noreferrer"
            className="transition-all duration-300 cursor-pointer hover:text-lagoon"
          >
            <AiFillTwitterCircle size="1.5rem" />
          </a>
          <a
            href="https://instagram.com/wileymckayconte"
            target="_blank"
            rel="noreferrer"
            className="transition-all duration-300 cursor-pointer hover:text-lagoon"
          >
            <AiFillInstagram size="1.5rem" />
          </a>
          <a
            href="mailto: wileymckayconte@gmail.com"
            title="email wiley"
            target="_blank"
            rel="noreferrer"
            className="transition-all duration-300 cursor-pointer hover:text-lagoon"
          >
            <AiFillMail size="1.5rem" />
          </a>
          <a
            href="https://github.com/wileymc/wileys.website"
            target="_blank"
            rel="noreferrer"
            title="fork this site"
            className="transition-all duration-300 cursor-pointer hover:text-lagoon"
          >
            <FaCodeBranch size="1.5rem" />
          </a>
          <a
            href="https://populist.us"
            target="_blank"
            rel="noreferrer"
            title="populist.us"
          >
            <Populist />
          </a>
        </ul>
      </div>
    </footer>
  );
}
