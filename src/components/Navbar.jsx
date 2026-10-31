import {
  Bell,
  Search,
  Sparkles,
  Settings,
} from "lucide-react";

function Navbar() {
  return (
    <div
      style={{
        height: "80px",
        background: "#202123",
        borderBottom: "1px solid #2f3136",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Left Side */}
      <div>
        <h2
          style={{
            color: "#ffffff",
            fontWeight: "600",
            marginBottom: "4px",
          }}
        >
          Welcome Back 👋
        </h2>

        <p
          style={{
            color: "#9ca3af",
            fontSize: "14px",
          }}
        >
          Manage and grow your business with AI
        </p>
      </div>

      {/* Right Side */}
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
            background: "#343541",
            padding: "10px 15px",
            borderRadius: "12px",
            width: "260px",
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

        {/* AI Status */}
        <div
          style={{
            background: "#10a37f20",
            color: "#10a37f",
            padding: "10px 14px",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          <Sparkles size={16} />
          AI Active
        </div>

        {/* Notification */}
        <div
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "12px",
            background: "#343541",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Bell size={18} color="#ffffff" />
        </div>

        {/* Settings */}
        <div
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "12px",
            background: "#343541",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Settings size={18} color="#ffffff" />
        </div>

        {/* Profile */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "#343541",
            padding: "8px 14px",
            borderRadius: "14px",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "#8B5CF6",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            A
          </div>

          <div>
            <div
              style={{
                color: "white",
                fontSize: "14px",
                fontWeight: "600",
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

export default Navbar;