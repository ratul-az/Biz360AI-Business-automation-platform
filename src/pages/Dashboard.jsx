import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";
import ModuleCard from "../components/ModuleCard";

import {
  FolderKanban,
  Globe,
  Image,
  Briefcase,
  Lightbulb,
  Megaphone,
  Sparkles,
  TrendingUp,
} from "lucide-react";

function Dashboard() {
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
          {/* HERO SECTION */}

          <div
            style={{
              background:
                "linear-gradient(135deg,#8B5CF6,#6366F1)",
              borderRadius: "24px",
              padding: "35px",
              marginBottom: "30px",
            }}
          >
            <h1
              style={{
                color: "white",
                fontSize: "36px",
                marginBottom: "10px",
              }}
            >
              Welcome to Biz360 AI 🚀
            </h1>

            <p
              style={{
                color: "#E5E7EB",
                fontSize: "16px",
                maxWidth: "700px",
                lineHeight: "1.8",
              }}
            >
              Your all-in-one AI business assistant.
              Generate startup ideas, build websites,
              create marketing campaigns, design
              visuals and receive strategic business
              guidance from a single platform.
            </p>

            <button
              style={{
                marginTop: "20px",
                background: "white",
                color: "#8B5CF6",
                border: "none",
                padding: "12px 20px",
                borderRadius: "12px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Start New Project
            </button>
          </div>

          {/* STATS */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
              marginBottom: "30px",
            }}
          >
            <StatCard
              title="Projects"
              value="28"
              icon={<FolderKanban />}
              color="#8B5CF6"
              change="+15%"
            />

            <StatCard
              title="Websites"
              value="12"
              icon={<Globe />}
              color="#06B6D4"
              change="+8%"
            />

            <StatCard
              title="AI Images"
              value="94"
              icon={<Image />}
              color="#EC4899"
              change="+32%"
            />

            <StatCard
              title="Business Plans"
              value="8"
              icon={<Briefcase />}
              color="#F59E0B"
              change="+11%"
            />
          </div>

          {/* MODULES */}

          <h2
            style={{
              color: "white",
              marginBottom: "20px",
            }}
          >
            AI Business Tools
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(300px,1fr))",
              gap: "20px",
              marginBottom: "35px",
            }}
          >
            <ModuleCard
              title="Business Idea Generator"
              description="Generate innovative startup ideas based on industry, budget and market opportunities."
              icon={<Lightbulb />}
              color="#8B5CF6"
            />

            <ModuleCard
              title="Website Generator"
              description="Create modern business websites instantly using AI-powered templates."
              icon={<Globe />}
              color="#06B6D4"
            />

            <ModuleCard
              title="Marketing Studio"
              description="Generate posters, captions, advertisements and promotional content."
              icon={<Megaphone />}
              color="#EC4899"
            />

            <ModuleCard
              title="AI Image Generator"
              description="Generate logos, social media creatives and business visuals."
              icon={<Image />}
              color="#F59E0B"
            />

            <ModuleCard
              title="Business Guidance"
              description="Get business plans, supplier recommendations and startup roadmaps."
              icon={<Briefcase />}
              color="#10A37F"
            />

            <ModuleCard
              title="Project History"
              description="Manage and revisit all previously generated projects."
              icon={<FolderKanban />}
              color="#6366F1"
            />
          </div>

          {/* RECENT PROJECTS */}

          <div
            style={{
              background: "#202123",
              border: "1px solid #2f3136",
              borderRadius: "20px",
              padding: "25px",
              marginBottom: "30px",
            }}
          >
            <h2
              style={{
                color: "white",
                marginBottom: "20px",
              }}
            >
              Recent Projects
            </h2>

            <table
              width="100%"
              style={{
                color: "white",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr>
                  <th align="left">
                    Project
                  </th>
                  <th align="left">
                    Type
                  </th>
                  <th align="left">
                    Status
                  </th>
                  <th align="left">
                    Date
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>FreshBox</td>
                  <td>Business Plan</td>
                  <td>Completed</td>
                  <td>07/06/2026</td>
                </tr>

                <tr>
                  <td>TechHub</td>
                  <td>Website</td>
                  <td>Completed</td>
                  <td>05/06/2026</td>
                </tr>

                <tr>
                  <td>FitAI</td>
                  <td>Marketing</td>
                  <td>Completed</td>
                  <td>03/06/2026</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* AI INSIGHTS */}

          <div
            style={{
              background: "#202123",
              border: "1px solid #2f3136",
              borderRadius: "20px",
              padding: "25px",
            }}
          >
            <h2
              style={{
                color: "white",
                marginBottom: "15px",
              }}
            >
              AI Business Insights
            </h2>

            <div
              style={{
                display: "flex",
                gap: "15px",
                flexWrap: "wrap",
              }}
            >
              <InsightCard
                icon={<Sparkles />}
                text="Food delivery startups are trending in Malaysia."
              />

              <InsightCard
                icon={<TrendingUp />}
                text="Short-form video marketing shows highest ROI."
              />

              <InsightCard
                icon={<Lightbulb />}
                text="AI-powered educational platforms continue to grow rapidly."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InsightCard({ icon, text }) {
  return (
    <div
      style={{
        background: "#343541",
        padding: "15px",
        borderRadius: "14px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        color: "white",
      }}
    >
      {icon}
      {text}
    </div>
  );
}

export default Dashboard;