import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import {
  FileText,
  Map,
  Truck,
  Megaphone,
  TrendingUp,
} from "lucide-react";

function BusinessGuidance() {
  const [selectedGuide, setSelectedGuide] = useState("");
  const [output, setOutput] = useState("");

  const generateGuide = (type) => {
    setSelectedGuide(type);

    switch (type) {
      case "Business Plan":
        setOutput(`
Executive Summary

FreshBox is an AI-powered healthy meal subscription service targeting university students and working professionals.

Target Market
• Students
• Office workers
• Fitness enthusiasts

Revenue Model
• Monthly subscription
• Premium meal plans
• Delivery charges

Expected Startup Cost
RM 5,000 – RM 8,000
        `);
        break;

      case "Startup Roadmap":
        setOutput(`
Startup Roadmap

Phase 1
Idea Validation

Phase 2
Brand Identity Creation

Phase 3
Website Development

Phase 4
Marketing Campaign Launch

Phase 5
Business Expansion
        `);
        break;

      case "Supplier":
        setOutput(`
Recommended Suppliers

1. Fresh Food Malaysia
Category: Food Supplies

2. Green Packaging Hub
Category: Packaging

3. QuickLogistics
Category: Delivery Services

Recommendation:
Choose suppliers based on cost, reliability and scalability.
        `);
        break;

      case "Marketing":
        setOutput(`
Marketing Strategy

Platform:
Instagram
TikTok
Facebook

Content Plan:
• Daily reels
• Product showcases
• Customer testimonials

Advertising Budget:
RM 500/month

Expected Reach:
10,000 – 25,000 users
        `);
        break;

      case "Growth":
        setOutput(`
Growth Strategy

Short-Term
• Build customer base
• Improve brand awareness

Medium-Term
• Expand product range
• Partner with influencers

Long-Term
• Franchising
• International expansion
        `);
        break;

      default:
        setOutput("");
    }
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <Topbar />

        <h1
          style={{
            color: "white",
            marginBottom: "10px",
          }}
        >
          Business Guidance Hub
        </h1>

        <p
          style={{
            color: "#9ca3af",
            marginBottom: "30px",
          }}
        >
          Generate AI-powered business recommendations,
          planning strategies and growth insights.
        </p>

        {/* Guidance Cards */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <GuideCard
            icon={<FileText />}
            title="Business Plan"
            color="#8B5CF6"
            onClick={() =>
              generateGuide("Business Plan")
            }
          />

          <GuideCard
            icon={<Map />}
            title="Startup Roadmap"
            color="#06B6D4"
            onClick={() =>
              generateGuide("Startup Roadmap")
            }
          />

          <GuideCard
            icon={<Truck />}
            title="Supplier"
            color="#F59E0B"
            onClick={() =>
              generateGuide("Supplier")
            }
          />

          <GuideCard
            icon={<Megaphone />}
            title="Marketing"
            color="#EC4899"
            onClick={() =>
              generateGuide("Marketing")
            }
          />

          <GuideCard
            icon={<TrendingUp />}
            title="Growth"
            color="#10A37F"
            onClick={() =>
              generateGuide("Growth")
            }
          />
        </div>

        {/* Output Section */}

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
              marginBottom: "20px",
              color: "#ffffff",
            }}
          >
            {selectedGuide || "AI Guidance Output"}
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
              "Select a guidance category to generate AI-powered recommendations."}
          </pre>
        </div>
      </div>
    </div>
  );
}

function GuideCard({
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
        padding: "20px",
        cursor: "pointer",
        transition: "0.3s",
      }}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "12px",
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

export default BusinessGuidance;