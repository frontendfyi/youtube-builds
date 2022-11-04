import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

const websiteUrl = "http://localhost:3000";

interface USPProps {
  icon: React.ReactNode;
  uspValue: string;
  label: string;
}

const USP = ({ icon, uspValue, label }: USPProps) => (
  <div tw="flex flex-col text-[28px]">
    <div tw="flex flex-row font-bold items-center justify-center mr-6">
      {icon}
      <div tw="flex ml-4">{uspValue}</div>
    </div>
    {label}
  </div>
);

const interMedium = fetch(
  new URL("../../public/fonts/Inter-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());
const interRegular = fetch(
  new URL("../../public/fonts/Inter-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const handler = async (req: NextRequest) => {
  const { searchParams } = req.nextUrl;

  const interMediumFontData = await interMedium;
  const interRegularFontData = await interRegular;

  const repositoryName = searchParams.get("repositoryName");

  const githubData = await fetch(
    `https://api.github.com/repos/${repositoryName}`
  ).then((res) => res.json());

  const stars = githubData.stargazers_count;
  const forks = githubData.forks_count;
  const issues = githubData.open_issues_count;
  const avatar = githubData.owner.avatar_url;

  console.log(avatar);

  return new ImageResponse(
    (
      <div tw="flex flex-row p-[48px] w-full h-full bg-white">
        <div tw="flex flex-col w-[80%] h-full">
          <h1 tw="text-[72px]">{repositoryName}</h1>
          <p tw="text-[32px] text-neutral-700">
            A declarative, efficient and flexibile Javascript library.
          </p>
          <div tw="flex mt-auto">
            <USP
              label="forks"
              uspValue={forks}
              icon={
                <svg height="24" width="24" viewBox="0 0 16 16" version="1.1">
                  <path
                    fill="black"
                    fill-rule="evenodd"
                    d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  ></path>
                </svg>
              }
            />

            <USP
              label="issues"
              uspValue={issues}
              icon={
                <svg
                  fill="black"
                  height="24"
                  width="24"
                  viewBox="0 0 16 16"
                  version="1.1"
                >
                  <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
                  ></path>
                </svg>
              }
            />

            <USP
              label="stars"
              uspValue={stars}
              icon={
                <svg
                  fill="black"
                  height="24"
                  width="24"
                  viewBox="0 0 16 16"
                  version="1.1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                  ></path>
                </svg>
              }
            />
          </div>
        </div>
        <div tw="flex">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img tw="w-32 h-32" src={avatar} alt="Logo of repo" />
        </div>
      </div>
    ),
    {
      fonts: [
        {
          name: "Inter",
          data: interMediumFontData,
          weight: 500,
        },
        {
          name: "Inter",
          data: interRegularFontData,
          weight: 400,
        },
      ],
    }
  );
};

export default handler;
