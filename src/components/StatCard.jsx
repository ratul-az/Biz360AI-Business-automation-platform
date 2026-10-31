function StatCard({
  title,
  value,
  icon,
  color = "#8B5CF6",
  change = "+12%"
}) {
  return (
    <div
      style={{
        background: "#202123",
        border: "1px solid #2f3136",
        borderRadius: "20px",
        padding: "24px",
        minHeight: "140px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "0.3s",
      }}
    >
      {/* Top Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
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
          }}
        >
          {icon}
        </div>

        <div
          style={{
            color: "#22c55e",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          {change}
        </div>
      </div>

      {/* Bottom Content */}
      <div>
        <p
          style={{
            color: "#9ca3af",
            fontSize: "14px",
            marginBottom: "8px",
          }}
        >
          {title}
        </p>

        <h2
          style={{
            color: "white",
            fontSize: "32px",
            fontWeight: "700",
          }}
        >
          {value}
        </h2>
      </div>
    </div>
  );
}

export default StatCard;