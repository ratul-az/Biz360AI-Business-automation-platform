import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import {
  Globe,
  Layout,
  Palette,
  Smartphone,
  Download,
  Sparkles,
} from "lucide-react";

function WebsiteGenerator() {
  const [businessName, setBusinessName] =
    useState("");

  const [businessType, setBusinessType] =
    useState("");

  const [audience, setAudience] =
    useState("");

  const [generated, setGenerated] =
    useState(false);

  const generateWebsite = () => {
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
            AI Website Generator
          </h1>

          <p
            style={{
              color: "#9ca3af",
              marginBottom: "30px",
            }}
          >
            Create professional business
            websites instantly using AI.
          </p>

          {/* INPUT FORM */}

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
              Website Details
            </h3>

            <input
              placeholder="Business Name"
              value={businessName}
              onChange={(e) =>
                setBusinessName(e.target.value)
              }
            />

            <select
              value={businessType}
              onChange={(e) =>
                setBusinessType(e.target.value)
              }
            >
              <option value="">
                Select Business Type
              </option>

              <option>
                Restaurant
              </option>

              <option>
                E-Commerce
              </option>

              <option>
                Education
              </option>

              <option>
                Technology
              </option>

              <option>
                Healthcare
              </option>
            </select>

            <input
              placeholder="Target Audience"
              value={audience}
              onChange={(e) =>
                setAudience(e.target.value)
              }
            />

            <button
              onClick={generateWebsite}
              style={{
                width: "100%",
                marginTop: "10px",
              }}
            >
              Generate Website
            </button>
          </div>

          {/* WEBSITE PREVIEW */}

          {generated && (
            <>
              <h2
                style={{
                  color: "white",
                  marginBottom: "20px",
                }}
              >
                Website Preview
              </h2>

              <div
                style={{
                  background: "#202123",
                  border: "1px solid #2f3136",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                {/* NAVBAR */}

                <div
                  style={{
                    background: "#8B5CF6",
                    padding: "18px 30px",
                    display: "flex",
                    justifyContent:
                      "space-between",
                    color: "white",
                  }}
                >
                  <h3>
                    {businessName ||
                      "Biz Website"}
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      gap: "25px",
                    }}
                  >
                    <span>Home</span>
                    <span>About</span>
                    <span>Services</span>
                    <span>Contact</span>
                  </div>
                </div>

                {/* HERO */}

                <div
                  style={{
                    padding: "60px",
                    textAlign: "center",
                    background:
                      "linear-gradient(135deg,#8B5CF6,#6366F1)",
                  }}
                >
                  <h1
                    style={{
                      color: "white",
                      fontSize: "42px",
                      marginBottom: "15px",
                    }}
                  >
                    Welcome to{" "}
                    {businessName ||
                      "Your Business"}
                  </h1>

                  <p
                    style={{
                      color: "#E5E7EB",
                      maxWidth: "700px",
                      margin: "auto",
                    }}
                  >
                    Professional AI-generated
                    website designed for
                    modern businesses.
                  </p>
                </div>

                {/* SERVICES */}

                <div
                  style={{
                    padding: "40px",
                  }}
                >
                  <h2
                    style={{
                      color: "white",
                      marginBottom: "25px",
                    }}
                  >
                    Our Services
                  </h2>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit,minmax(250px,1fr))",
                      gap: "20px",
                    }}
                  >
                    <PreviewCard
                      icon={<Layout />}
                      title="Professional Design"
                    />

                    <PreviewCard
                      icon={<Palette />}
                      title="Custom Branding"
                    />

                    <PreviewCard
                      icon={<Smartphone />}
                      title="Responsive Layout"
                    />
                  </div>
                </div>
              </div>

              {/* WEBSITE FEATURES */}

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit,minmax(250px,1fr))",
                  gap: "20px",
                  marginTop: "30px",
                }}
              >
                <FeatureCard
                  icon={<Globe />}
                  title="SEO Optimized"
                />

                <FeatureCard
                  icon={<Sparkles />}
                  title="AI Generated"
                />

                <FeatureCard
                  icon={<Download />}
                  title="Export Website"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function PreviewCard({
  icon,
  title,
}) {
  return (
    <div
      style={{
        background: "#343541",
        padding: "25px",
        borderRadius: "16px",
        textAlign: "center",
        color: "white",
      }}
    >
      <div
        style={{
          marginBottom: "15px",
          color: "#8B5CF6",
        }}
      >
        {icon}
      </div>

      <h3>{title}</h3>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
}) {
  return (
    <div
      style={{
        background: "#202123",
        border: "1px solid #2f3136",
        borderRadius: "18px",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        color: "white",
      }}
    >
      <div
        style={{
          color: "#8B5CF6",
        }}
      >
        {icon}
      </div>

      <h3>{title}</h3>
    </div>
  );
}

export default WebsiteGenerator;