import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function parseColor(s: string | null | undefined, fallback = "#ffffff"): string {
    return typeof s === "string" && s.trim() ? s : fallback;
}

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const title = (searchParams.get("title") ?? "").slice(0, 140);
    const desc  = (searchParams.get("desc") ?? "").slice(0, 240);
    const bg    = parseColor(searchParams.get("bg"), "#ffffff");
    const color = parseColor(searchParams.get("color"), "#000000");

    return new ImageResponse(
        (
            <div
                style={{
                    width: `${size.width}px`,
                    height: `${size.height}px`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "72px",
                    backgroundColor: bg,
                    color,
                    fontFamily:
                        'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial',
                }}
            >
                <div
                    style={{
                        fontSize: 64,
                        fontWeight: 800,
                        lineHeight: 1.1,
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                    }}
                >
                    {title}
                </div>
                {desc ? (
                    <div
                        style={{
                            marginTop: 24,
                            fontSize: 30,
                            opacity: 0.9,
                            whiteSpace: "pre-wrap",
                            wordBreak: "break-word",
                        }}
                    >
                        {desc}
                    </div>
                ) : null}
            </div>
        ),
        size
    );
}
