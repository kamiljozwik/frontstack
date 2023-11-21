import React from "react";
import { ExternalLink } from "../externalLink/ExternalLink";
import Image from "next/image";

const discordApi = "1163132629386793110";
const discordLink = "Jg9aSAuxpP";

const load = async () => {
  const res = await fetch(
    `https://discord.com/api/guilds/${discordApi}/widget.json`,
    {
      cache: "no-cache",
    }
  );
  return res.json();
};

export const Discord = async ({ title = "" }) => {
  const data = await load();

  return (
    <div>
      <div className="mx-auto mb-16 mt-16 h-1 w-24 rounded-full bg-gradient-to-r from-purple-400 to-purple-600" />
      <section className="my-12 flex flex-col items-center justify-between">
        <p className="mb-4 text-sm">{title}</p>
        <ExternalLink
          href={`https://discord.gg/${discordLink}`}
          className="bg-purple-600 hover:bg-purple-500 rounded-lg flex p-2 justify-center items-center no-underline"
        >
          <span className="mr-2 w-8 text-gray-200">
            <Image
              width="30"
              height="24"
              alt="discord icon"
              src="/assets/icons/discord.svg"
            />
          </span>
          <span className="text-gray-200 no-underline">Przejdź na Discord</span>
        </ExternalLink>

        <div className="mt-2">
          <span className="relative inline-flex h-3 w-3 mx-1">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
          </span>
          <span className="font-display text-lg text-green-500 mr-1">
            {data.presence_count}
          </span>
          <span className="text-gray-200">osoby online</span>
        </div>
      </section>
    </div>
  );
};
