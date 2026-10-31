import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import {
  Image as ImageIcon,
  Sparkles,
  Download,
  Wand2,
} from "lucide-react";

function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Professional");
  const [generated, setGenerated] = useState(false);

  const generateImage = () => {
    setGenerated(true);
  };

  return (
    <div className="layout">
      <Sidebar />

      <div
        style={{
          flex: 1,
          background: "#171717",
          minHeight: "100vh",
        }}
      >
        <Topbar />

        <div
          style={{
            padding: "30px",
          }}
        >
          <h1
            style={{
              color: "white",
              marginBottom: "10px",
            }}
          >
            AI Image Generator
          </h1>

          <p
            style={{
              color: "#9ca3af",
              marginBottom: "30px",
            }}
          >
            Generate logos, posters, branding
            visuals and social media graphics
            using AI.
          </p>

          {/* INPUT SECTION */}

          <div
            style={{
              background: "#202123",
              border: "1px solid #2f3136",
              borderRadius: "20px",
              padding: "25px",
              marginBottom: "30px",
            }}
          >
            <h3
              style={{
                color: "white",
                marginBottom: "20px",
              }}
            >
              Image Prompt
            </h3>

            <textarea
              rows="5"
              placeholder="Example: Luxury coffee shop logo with gold and black theme"
              value={prompt}
              onChange={(e) =>
                setPrompt(e.target.value)
              }
            />

            <select
              value={style}
              onChange={(e) =>
                setStyle(e.target.value)
              }
            >
              <option>Professional</option>
              <option>Modern</option>
              <option>Minimalist</option>
              <option>Luxury</option>
              <option>Corporate</option>
              <option>Creative</option>
            </select>

            <button
              onClick={generateImage}
              style={{
                width: "100%",
                marginTop: "15px",
              }}
            >
              Generate Image
            </button>
          </div>

          {/* GENERATED SECTION */}

          {generated && (
            <>
              <h2
                style={{
                  color: "white",
                  marginBottom: "20px",
                }}
              >
                Generated Results
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit,minmax(280px,1fr))",
                  gap: "20px",
                }}
              >
                <GeneratedCard />
                <GeneratedCard />
                <GeneratedCard />
                <GeneratedCard />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function GeneratedCard() {
  return (
    <div
      style={{
        background: "#202123",
        border: "1px solid #2f3136",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      {/* IMAGE PLACEHOLDER */}

      <div
        style={{
          height: "250px",
          background:
            "linear-gradient(135deg,#8B5CF6,#6366F1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImageIcon
          size={70}
          color="white"
        />
      </div>

      {/* DETAILS */}

      <div
        style={{
          padding: "20px",
        }}
      >
        <h3
          style={{
            color: "white",
            marginBottom: "10px",
          }}
        >
          AI Generated Design
        </h3>

        <p
          style={{
            color: "#9ca3af",
            marginBottom: "15px",
            lineHeight: "1.6",
          }}
        >
          Generated based on your selected
          prompt and style preferences.
        </p>

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              flex: 1,
              background: "#8B5CF6",
            }}
          >
            <Download size={16} />
          </button>

          <button
            style={{
              flex: 1,
              background: "#10A37F",
            }}
          >
            <Wand2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageGenerator;