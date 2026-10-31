import { ArrowRight } from "lucide-react";

function ModuleCard({
  title,
  description,
  icon,
  color = "#10a37f",
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      style={{
        background: "#202123",
        border: "1px solid #2f3136",
        borderRadius: "18px",
        padding: "24px",
        cursor: "pointer",
        transition: "all 0.25s ease",
        minHeight: "180px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.borderColor = color;
        e.currentTarget.style.boxShadow =
          "0 10px 25px rgba(0,0,0,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
        e.currentTarget.style.borderColor = "#2f3136";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div>
        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "14px",
            background: `${color}20`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: color,
            fontSize: "24px",
            marginBottom: "18px",
          }}
        >
          {icon}
        </div>

        <h3
          style={{
            color: "#ffffff",
            fontSize: "18px",
            fontWeight: "600",
            marginBottom: "10px",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            color: "#9ca3af",
            fontSize: "14px",
            lineHeight: "1.6",
          }}
        >
          {description}
        </p>
      </div>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            color: color,
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          Open Module
        </span>

        <ArrowRight size={18} color={color} />
      </div>
    </div>
  );
}

export default ModuleCard;