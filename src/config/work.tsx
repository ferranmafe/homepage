import type { GroupList } from "../types";
import { SiGmail } from "react-icons/si";
import { FaGoogleDrive, FaLinkedin, FaWeightHanging } from "react-icons/fa";
import { MdCatchingPokemon } from "react-icons/md";
import { IoLogoVercel } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

export const config: GroupList = [
  {
    name: "Comunicación",
    items: [
      {
        title: "Gmail",
        link: "https://mail.google.com",
        icon: <SiGmail />,
      },
      {
        title: "Drive",
        link: "https://drive.google.com",
        icon: <FaGoogleDrive />,
      },
      {
        title: "LinkedIn",
        link: "https://linkedin.com",
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    name: "Deporte",
    items: [
      {
        title: "CrossFit",
        link: "https://crosshero.com/dashboard/classes",
        icon: <FaWeightHanging />,
      },
    ],
  },
  {
    name: "Pokemon",
    items: [
      {
        title: "Showdown",
        link: "https://play.pokemonshowdown.com/",
        icon: <MdCatchingPokemon />,
      },
    ],
  },
  {
    name: "Side projects",
    items: [
      {
        title: "Budget Helper Client",
        link: "https://github.com/ferranmafe/budget-helper-client",
      },
      {
        title: "Budget Helper Server",
        link: "https://github.com/ferranmafe/budget-helper-server",
      },
    ],
  },
  {
    name: "Herramientas",
    items: [
      {
        title: "Vercel",
        link: "https://vercel.com/ferran-martinez-felipes-projects",
        icon: <IoLogoVercel />,
      },
      {
        title: "GitHub",
        link: "https://github.com/ferranmafe",
        icon: <FaGithub />,
      },
    ],
  },
];
