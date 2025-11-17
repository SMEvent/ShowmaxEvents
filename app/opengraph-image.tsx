import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ShowMax Events - Professional AV Rental Vancouver";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: "linear-gradient(to bottom right, #1e293b, #334155)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "40px",
        }}
      >
        <div style={{ fontSize: 80, fontWeight: "bold", marginBottom: 20 }}>
          ShowMax Events
        </div>
        <div style={{ fontSize: 40, opacity: 0.9 }}>
          Professional AV Rental
        </div>
        <div style={{ fontSize: 30, opacity: 0.7, marginTop: 20 }}>
          Vancouver, BC
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

