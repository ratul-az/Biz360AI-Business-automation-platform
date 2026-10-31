import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import {
  Megaphone,
  Image,
  FileText,
  Video,
  Sparkles,
} from "lucide-react";

function MarketingStudio() {
  const [selectedTool, setSelectedTool] = useState("");
  const [output, setOutput] = useState("");

  const generateContent = (type) => {
    setSelectedTool(type);

    switch (type) {
      case "Caption":
        setOutput(`
🌟 FreshBox Healthy Meals

Healthy eating has never been easier.

✔ Fresh ingredients
✔ Fast delivery
✔ Affordable prices

Order today and start your healthy lifestyle journey.

#FreshBox #HealthyLiving #FoodDelivery
        `);
        break;

      case "Advertisement":
        setOutput(`
Advertisement Campaign

Headline:
Transform Your Meals with FreshBox

Description:
FreshBox delivers healthy and delicious meals directly to your doorstep. Save time and enjoy nutritious food every day.

Call To Action:
Order Now and Get 20% Off Your First Subscription.
        `);
        break;

      case "Poster":
        setOutput(`
Poster Concept

Title:
Healthy Meals Delivered Daily

Visual Elements:
• Fresh vegetables
• Modern food photography
• Purple and green branding

Call To Action:
Subscribe Today
        `);
        break;

      case "Video":
        setOutput(`
30-Second Promotional Video Script

Scene 1:
Busy student struggling to find healthy food.

Scene 2:
FreshBox app appears.

Scene 3:
Healthy meals delivered.

Scene 4:
Customer enjoying meal.

Ending:
FreshBox – Healthy Eating Made Simple.
        `);
        break;

      case "Campaign":
        setOutput(`
Marketing Campaign Strategy

Platform:
Instagram, TikTok, Facebook

Duration:
30 Days

Objectives:
• Increase Brand Awareness
• Generate Leads
• Increase Sales

Content Plan:
• Daily Reels
• Customer Testimonials
• Product Highlights
        `);
        break;

      default:
        setOutput("");
    }
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
            Marketing Studio
          </h1>

          <p
            style={{
              color: "#9ca3af",
              marginBottom: "30px",
            }}
          >
            Create AI-powered marketing content,
            campaigns and promotional materials.
          </p>

          {/* TOOLS */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: "20px",
              marginBottom: "30px",
            }}
          >
            <ToolCard
              title="Caption Generator"
              icon={<FileText />}
              color="#8B5CF6"
              onClick={() =>
                generateContent("Caption")
              }
            />

            <ToolCard
              title="Advertisement"
              icon={<Megaphone />}
              color="#EC4899"
              onClick={() =>
                generateContent("Advertisement")
              }
            />

            <ToolCard
              title="Poster Concept"
              icon={<Image />}
              color="#06B6D4"
              onClick={() =>
                generateContent("Poster")
              }
            />

            <ToolCard
              title="Video Script"
              icon={<Video />}
              color="#F59E0B"
              onClick={() =>
                generateContent("Video")
              }
            />

            <ToolCard
              title="Campaign Strategy"
              icon={<Sparkles />}
              color="#10A37F"
              onClick={() =>
                generateContent("Campaign")
              }
            />
          </div>

          {/* OUTPUT */}

          <div
            style={{
              background: "#202123",
              border: "1px solid #2f3136",
              borderRadius: "20px",
              padding: "30px",
              minHeight: "350px",
            }}
          >
            <h2
              style={{
                color: "white",
                marginBottom: "20px",
              }}
            >
              {selectedTool || "Generated Content"}
            </h2>

            <pre
              style={{
                whiteSpace: "pre-wrap",
                color: "#d1d5db",
                lineHeight: "1.8",
                fontSize: "15px",
              }}
            >
              {output ||
                "Select a marketing tool to generate AI-powered content."}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToolCard({
  title,
  icon,
  color,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      style={{
        background: "#202123",
        border: "1px solid #2f3136",
        borderRadius: "18px",
        padding: "22px",
        cursor: "pointer",
        transition: "0.3s",
      }}
    >
      <div
        style={{
          width: "55px",
          height: "55px",
          borderRadius: "14px",
          background: `${color}20`,
          color: color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          color: "white",
        }}
      >
        {title}
      </h3>
    </div>
  );
}

export default MarketingStudio;