import {
  Bell,
  Search,
  Sparkles,
  Settings,
} from "lucide-react";

function Topbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
      }}
    >
      {/* Left Section */}
      <div>
        <h1
          style={{
            color: "white",
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "5px",
          }}
        >
          Welcome Back 👋
        </h1>

        <p
          style={{
            color: "#9ca3af",
            fontSize: "14px",
          }}
        >
          Manage and grow your business using AI-powered tools.
        </p>
      </div>

      {/* Right Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        {/* Search */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "#202123",
            border: "1px solid #2f3136",
            borderRadius: "14px",
            padding: "10px 15px",
            width: "280px",
          }}
        >
          <Search size={18} color="#9ca3af" />

          <input
            type="text"
            placeholder="Search projects..."
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              color: "white",
              width: "100%",
            }}
          />
        </div>

        {/* AI Active Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "#10a37f20",
            color: "#10a37f",
            border: "1px solid #10a37f40",
            padding: "10px 14px",
            borderRadius: "12px",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          <Sparkles size={16} />
          AI Active
        </div>

        {/* Notifications */}
        <div
          style={iconButton}
        >
          <Bell size={18} color="white" />
        </div>

        {/* Settings */}
        <div
          style={iconButton}
        >
          <Settings size={18} color="white" />
        </div>

        {/* User Profile */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: "#202123",
            border: "1px solid #2f3136",
            padding: "8px 12px",
            borderRadius: "14px",
          }}
        >
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg,#8B5CF6,#6366F1)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            A
          </div>

          <div>
            <div
              style={{
                color: "white",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              AZ Ratul
            </div>

            <div
              style={{
                color: "#9ca3af",
                fontSize: "12px",
              }}
            >
              Premium User
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const iconButton = {
  width: "45px",
  height: "45px",
  borderRadius: "12px",
  background: "#202123",
  border: "1px solid #2f3136",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};

export default Topbar;