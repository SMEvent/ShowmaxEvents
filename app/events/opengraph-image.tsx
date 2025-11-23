import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Showmax Events - Event Production Services | Live, Hybrid & Virtual Events";
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
          background: "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Background accent */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(250, 204, 21, 0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          {/* Brand */}
          <div
            style={{
              fontSize: 48,
              fontWeight: "bold",
              marginBottom: 20,
              color: "#FACC15",
              letterSpacing: "-0.02em",
            }}
          >
            SHOWMAX EVENTS
          </div>

          {/* Main Title */}
          <div
            style={{
              fontSize: 68,
              fontWeight: "bold",
              marginBottom: 30,
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            Event Production Services
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 36,
              opacity: 0.9,
              marginBottom: 40,
              color: "#E5E7EB",
            }}
          >
            Live, Hybrid & Virtual Events
          </div>

          {/* Services Grid */}
          <div
            style={{
              display: "flex",
              gap: "30px",
              fontSize: 24,
              color: "#D1D5DB",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              Audio
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              Lighting
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              LED Walls
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              Rigging
            </div>
          </div>

          {/* Location */}
          <div
            style={{
              marginTop: 40,
              fontSize: 22,
              opacity: 0.7,
              color: "#9CA3AF",
            }}
          >
            Vancouver • Calgary • Toronto
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

