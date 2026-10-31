import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Sparkles,
  Mail,
  Lock,
  Globe,
} from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#171717",
        display: "flex",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* LEFT */}

      <div
        style={{
          flex: 1,
          background:
            "linear-gradient(135deg,#8B5CF6,#6366F1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "25px",
          }}
        >
          <Sparkles size={40} color="white" />

          <h1
            style={{
              color: "white",
              fontSize: "48px",
              margin: 0,
            }}
          >
            Biz360 AI
          </h1>
        </div>

        <h2
          style={{
            color: "white",
            fontSize: "34px",
            lineHeight: "1.4",
            marginBottom: "20px",
          }}
        >
          Your Complete AI Business
          Automation Platform
        </h2>

        <p
          style={{
            color: "#E5E7EB",
            fontSize: "18px",
            maxWidth: "650px",
            lineHeight: "1.8",
          }}
        >
          Generate business ideas, create
          websites, design marketing campaigns,
          generate AI images and receive
          intelligent business guidance.
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "40px",
          }}
        >
          <Feature text="Business Ideas" />
          <Feature text="AI Marketing" />
          <Feature text="Website Builder" />
        </div>
      </div>

      {/* RIGHT */}

      <div
        style={{
          width: "500px",
          background: "#202123",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <div style={{ width: "100%" }}>
          <h2
            style={{
              color: "white",
              marginBottom: "10px",
            }}
          >
            Welcome Back 👋
          </h2>

          <p
            style={{
              color: "#9ca3af",
              marginBottom: "30px",
            }}
          >
            Sign in to continue using Biz360 AI
          </p>

          {/* EMAIL */}

          <div
            style={{
              position: "relative",
              marginBottom: "20px",
            }}
          >
            <Mail
              size={18}
              color="#9ca3af"
              style={{
                position: "absolute",
                left: "15px",
                top: "15px",
              }}
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              style={{
                width: "100%",
                padding: "14px",
                paddingLeft: "45px",
                background: "#343541",
                border: "1px solid #444654",
                borderRadius: "10px",
                color: "white",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* PASSWORD */}

          <div
            style={{
              position: "relative",
              marginBottom: "25px",
            }}
          >
            <Lock
              size={18}
              color="#9ca3af"
              style={{
                position: "absolute",
                left: "15px",
                top: "15px",
              }}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              style={{
                width: "100%",
                padding: "14px",
                paddingLeft: "45px",
                background: "#343541",
                border: "1px solid #444654",
                borderRadius: "10px",
                color: "white",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* LOGIN */}

          <button
            onClick={handleLogin}
            style={{
              width: "100%",
              padding: "14px",
              border: "none",
              borderRadius: "10px",
              background: "#8B5CF6",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
              marginBottom: "15px",
            }}
          >
            Sign In
          </button>

          {/* GOOGLE */}

          <button
            onClick={handleLogin}
            style={{
              width: "100%",
              padding: "14px",
              border: "none",
              borderRadius: "10px",
              background: "#343541",
              color: "white",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Globe size={18} />
            Continue with Google
          </button>

          <p
            style={{
              color: "#9ca3af",
              textAlign: "center",
              marginTop: "25px",
              fontSize: "14px",
            }}
          >
            Powered by Artificial Intelligence
          </p>
        </div>
      </div>
    </div>
  );
}

function Feature({ text }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.15)",
        padding: "12px 20px",
        borderRadius: "12px",
        color: "white",
      }}
    >
      {text}
    </div>
  );
}

export default Login;