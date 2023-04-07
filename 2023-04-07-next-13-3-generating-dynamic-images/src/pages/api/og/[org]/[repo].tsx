import { ImageResponse } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(request: Request) {
  const url = new URL(request.url);
  const org = url.searchParams.get("org");
  const repo = url.searchParams.get("repo");

  const githubRepoData = await fetch(
    `https://api.github.com/repos/${org}/${repo}`,
    { next: { revalidate: 600 } }
  ).then((res) => res.json());

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "80px",
            lineHeight: "62px",
            flexDirection: "column",
            padding: "0 82px",
          }}
        >
          <img
            style={{ borderRadius: "100px", marginBottom: "12px" }}
            width="100"
            height="100"
            src={githubRepoData.owner.avatar_url}
          />
          {githubRepoData.full_name}
          <div style={{ display: "flex", fontSize: "42px", marginTop: "32px" }}>
            {githubRepoData.stargazers_count} 🤩
          </div>
        </div>
      </div>
    )
  );
}
