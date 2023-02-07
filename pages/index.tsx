import Doodle from "@/components/Doodle";
import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import { FaCodeBranch } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wiley McKay Conte</title>
        <meta name="description" content="Some dudes website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="antialiased max-w-3xl mb-40 flex flex-col mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto text-white">
        <nav className="flex flex-row gap-4 h-fit w-full mb-4 ">
          <Doodle />
          <div className="flex flex-col leading-5 ">
            <h1 className="font-sans uppercase text-2xl leading-5 mb-1 font-bold">
              Wiley McKay Conte
            </h1>
            <ul className="flex gap-4 font-sans uppercase text-lg font-bold">
              <li className="hover:text-blue-500  cursor-pointer transition-all">
                Code
              </li>
              <li className="text-green-500  cursor-pointer">Music</li>
            </ul>
            <ul className="flex font-sans uppercase text-md">
              <li className="text-blue-400  cursor-pointer">Booklist</li>
            </ul>
          </div>
        </nav>

        <p className="font-serif text-xl">
          Thanks for stopping by. I’m a programmer with a background in
          economics and ecological agriculture. I am fascinated by
          human-computer interaction and I enjoy building things things that
          help people interface with the real world. I also make pottery and{" "}
          music when I’m not writing code or enjoying the great outdoors.
          Currently, I am building the premiere live concert streaming platform
          with{" "}
          <a
            href="https://driift.live"
            className="underline decoration-dotted decoration-purple-400 hover:text-purple-200"
          >
            Driift
          </a>
          . Please reach out to me on one of the channels below if you’d like to
          connect.
        </p>
      </main>
      <footer className="flex flex-row gap-8 justify-end items-center text-white">
        <a
          href="https://twitter.com/wileymckayconte"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500"
        >
          <AiFillTwitterCircle size="1.5rem" />
        </a>
        <a
          href="https://instagram.com/wileybaba"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500"
        >
          <AiFillInstagram size="1.5rem" />
        </a>
        <a
          href="mailto: wileymckayconte@gmail.com"
          title="email wiley"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500"
        >
          <AiFillMail size="1.5rem" />
        </a>
        <a
          href="https://github.com/wileymc/wileybaba.github.io"
          target="_blank"
          rel="noreferrer"
          title="fork this site"
          className="hover:text-blue-500"
        >
          <FaCodeBranch size="1.5rem" />
        </a>
      </footer>
    </>
  );
}
