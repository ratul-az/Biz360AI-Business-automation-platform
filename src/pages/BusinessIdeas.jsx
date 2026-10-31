import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import {
  Lightbulb,
  Sparkles,
  TrendingUp,
  DollarSign,
} from "lucide-react";

function BusinessIdeas() {
  const [industry, setIndustry] = useState("");
  const [budget, setBudget] = useState("");
  const [market, setMarket] = useState("");
  const [ideas, setIdeas] = useState([]);

  const generateIdeas = () => {
    setIdeas([
      {
        name: "FreshBox",
        category: industry || "Food & Beverage",
        cost: budget || "RM 5,000",
        description:
          "AI-powered healthy meal subscription service for busy professionals and students.",
      },
      {
        name: "PetCare Hub",
        category: industry || "Pet Services",
        cost: budget || "RM 3,000",
        description:
          "Online platform connecting pet owners with veterinarians, groomers and pet suppliers.",
      },
      {
        name: "StudyBoost",
        category: industry || "Education",
        cost: budget || "RM 4,000",
        description:
          "AI-assisted learning platform helping students manage assignments and exam preparation.",
      },
    ]);
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
          Business Idea Generator
        </h1>

        <p
          style={{
            color: "#9ca3af",
            marginBottom: "25px",
          }}
        >
          Generate innovative startup ideas using
          artificial intelligence.
        </p>

        {/* Prompt Section */}

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
              marginBottom: "20px",
              color: "white",
            }}
          >
            Describe Your Business Preferences
          </h3>

          <select
            value={industry}
            onChange={(e) =>
              setIndustry(e.target.value)
            }
          >
            <option value="">
              Select Industry
            </option>

            <option>
              Food & Beverage
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
              Health & Fitness
            </option>
          </select>

          <input
            placeholder="Budget (e.g. RM 5000)"
            value={budget}
            onChange={(e) =>
              setBudget(e.target.value)
            }
          />

          <input
            placeholder="Target Market"
            value={market}
            onChange={(e) =>
              setMarket(e.target.value)
            }
          />

          <button
            onClick={generateIdeas}
            style={{
              width: "100%",
              marginTop: "10px",
            }}
          >
            Generate AI Business Ideas
          </button>
        </div>

        {/* Generated Ideas */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "20px",
          }}
        >
          {ideas.map((idea, index) => (
            <IdeaCard
              key={index}
              idea={idea}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function IdeaCard({ idea }) {
  return (
    <div
      style={{
        background: "#202123",
        border: "1px solid #2f3136",
        borderRadius: "20px",
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "16px",
          background: "#8B5CF620",
          color: "#8B5CF6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "18px",
        }}
      >
        <Lightbulb />
      </div>

      <h2
        style={{
          color: "white",
          marginBottom: "12px",
        }}
      >
        {idea.name}
      </h2>

      <p
        style={{
          color: "#9ca3af",
          marginBottom: "15px",
          lineHeight: "1.6",
        }}
      >
        {idea.description}
      </p>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <Tag
          icon={<TrendingUp size={14} />}
          text={idea.category}
        />

        <Tag
          icon={<DollarSign size={14} />}
          text={idea.cost}
        />

        <Tag
          icon={<Sparkles size={14} />}
          text="AI Generated"
        />
      </div>
    </div>
  );
}

function Tag({ icon, text }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        background: "#343541",
        padding: "8px 12px",
        borderRadius: "12px",
        color: "#d1d5db",
        fontSize: "13px",
      }}
    >
      {icon}
      {text}
    </div>
  );
}

export default BusinessIdeas;