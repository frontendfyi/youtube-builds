import { ImageResponse } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(request: Request) {
  const url = new URL(request.url);
  const project = url.searchParams.get("project");

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
        <img
          style={{ position: "absolute", left: "390px", top: "157px" }}
          src={`http://localhost:3001/screenshots/${project}.jpeg`}
          width="420"
        />
        <img src="http://localhost:3001/iphone.png" width="1200" height="600" />
        <p
          style={{
            color: "white",
            fontSize: "68px",
            lineHeight: "52px",
            position: "absolute",
            left: "20px",
            top: "340px",
            width: "300px",
          }}
        >
          Rendered with Next.JS
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
