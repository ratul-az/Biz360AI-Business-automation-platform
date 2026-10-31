import {
  LayoutDashboard,
  Lightbulb,
  Globe,
  Megaphone,
  Image,
  Briefcase,
  History,
  LogOut,
  Sparkles,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },
    {
      title: "Business Ideas",
      icon: <Lightbulb size={20} />,
      path: "/ideas",
    },
    {
      title: "Website Generator",
      icon: <Globe size={20} />,
      path: "/website",
    },
    {
      title: "Marketing Studio",
      icon: <Megaphone size={20} />,
      path: "/marketing",
    },
    {
      title: "AI Images",
      icon: <Image size={20} />,
      path: "/images",
    },
    {
      title: "Business Guidance",
      icon: <Briefcase size={20} />,
      path: "/guidance",
    },
    {
      title: "Project History",
      icon: <History size={20} />,
      path: "/history",
    },
  ];

  return (
    <div
      style={{
        width: "280px",
        minHeight: "100vh",
        background: "#171717",
        borderRight: "1px solid #2f3136",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "24px",
      }}
    >
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "14px",
              background:
                "linear-gradient(135deg,#8B5CF6,#6366F1)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Sparkles color="white" size={24} />
          </div>

          <div>
            <h2
              style={{
                color: "white",
                margin: 0,
              }}
            >
              Biz360 AI
            </h2>

            <p
              style={{
                color: "#9ca3af",
                fontSize: "12px",
              }}
            >
              Business Automation
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "14px 16px",
                  marginBottom: "8px",
                  borderRadius: "14px",
                  background:
                    location.pathname === item.path
                      ? "#8B5CF6"
                      : "transparent",
                  color:
                    location.pathname === item.path
                      ? "white"
                      : "#d1d5db",
                  transition: "0.3s",
                  cursor: "pointer",
                }}
              >
                {item.icon}
                <span>{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div>
        {/* Subscription Card */}
        <div
          style={{
            background: "#202123",
            border: "1px solid #2f3136",
            borderRadius: "18px",
            padding: "18px",
            marginBottom: "20px",
          }}
        >
          <h4
            style={{
              color: "white",
              marginBottom: "8px",
            }}
          >
            Biz360 Pro
          </h4>

          <p
            style={{
              color: "#9ca3af",
              fontSize: "13px",
              marginBottom: "12px",
            }}
          >
            Unlock unlimited AI generation and premium business tools.
          </p>

          <button
            style={{
              width: "100%",
              background: "#8B5CF6",
              border: "none",
              padding: "10px",
              borderRadius: "10px",
              color: "white",
              cursor: "pointer",
            }}
          >
            Upgrade Plan
          </button>
        </div>

        {/* Logout */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "#ef4444",
            cursor: "pointer",
            padding: "12px",
          }}
        >
          <LogOut size={18} />
          Logout
        </div>
      </div>
    </div>
  );
}

export default Sidebar;