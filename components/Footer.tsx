import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import { FaCodeBranch } from "react-icons/fa";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export function Footer() {
  const { i18n } = useTranslation(["common"]);
  const router = useRouter();
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: e.target.value });
  };
  return (
    <footer className="mt-8  text-white">
      <div className="flex justify-between items-center">
        <select
          className="bg-glass font-sans p-2 rounded-full border border-slate-800 cursor-pointer text-xs"
          onChange={handleLanguageChange}
          value={i18n.language}
        >
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="it">Italiano</option>
        </select>
        <ul className="flex flex-row gap-8 justify-end items-center">
          <a
            href="https://twitter.com/wileymckayconte"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400  cursor-pointer transition-all duration-300"
          >
            <AiFillTwitterCircle size="1.5rem" />
          </a>
          <a
            href="https://instagram.com/wileybaba"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400  cursor-pointer transition-all duration-300"
          >
            <AiFillInstagram size="1.5rem" />
          </a>
          <a
            href="mailto: wileymckayconte@gmail.com"
            title="email wiley"
            target="_blank"
            rel="noreferrer"
            className="hover:text-violet-400  cursor-pointer transition-all duration-300"
          >
            <AiFillMail size="1.5rem" />
          </a>
          <a
            href="https://github.com/wileymc/wileybaba.github.io"
            target="_blank"
            rel="noreferrer"
            title="fork this site"
            className="hover:text-purple-400  cursor-pointer transition-all duration-300"
          >
            <FaCodeBranch size="1.5rem" />
          </a>
        </ul>
      </div>
    </footer>
  );
}
