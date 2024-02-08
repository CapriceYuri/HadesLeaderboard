import { Typography } from "@material-tailwind/react";

const SITEMAP = [
  {
    title: "Resources",
    links: ["Official Hades Discord", "Speedrun Discord", "Speedrun.com"],
    src: [
      "https://discord.com/invite/supergiant",
      "https://discord.com/invite/zN7cc8Z",
      "https://www.speedrun.com/hades",
    ],
  },
  {
    title: "Spreadsheet",
    links: ["High Heat", "Modded High Heat", "Speedrun Sub-6"],
    src: [
      "https://docs.google.com/spreadsheets/d/1fYeJpxFXZBO2UycHOz4qt90T3ZurFZKCtg07UQNZVyc/edit#gid=1855514336",
      "https://docs.google.com/spreadsheets/d/1-eAhomftrsnM8BV6TMA4CA58wneoBLcAvlQXiYrGAnU/edit#gid=1775740672",
      "https://docs.google.com/spreadsheets/d/1d56DvDTE8WvQsMRQFs1pLbNpMBHy2CLYss69EL-8bMU/edit#gid=850231511",
    ],
  },
];

export default function PageFooter() {
  return (
    <footer className="relative w-full bg-black">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 py-8 md:grid-cols-2 text-center">
          {SITEMAP.map(({ title, links, src }, key) => (
            <div key={key} className="w-full">
              <Typography
                variant="small"
                color="white"
                className="mb-4 font-bold uppercase opacity-50"
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {links.map((link, key) => (
                  <Typography
                    key={key}
                    as="li"
                    color="white"
                    className="font-normal"
                  >
                    <a
                      href={src[key]}
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                    >
                      {link}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
