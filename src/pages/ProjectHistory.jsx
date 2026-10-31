import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import {
  Search,
  Eye,
  Trash2,
  FolderKanban,
  Clock,
  CheckCircle,
} from "lucide-react";

function ProjectHistory() {
  const [search, setSearch] = useState("");

  const projects = [
    {
      name: "FreshBox",
      type: "Business Plan",
      date: "07/06/2026",
      status: "Completed",
    },
    {
      name: "TechHub",
      type: "Website",
      date: "05/06/2026",
      status: "Completed",
    },
    {
      name: "FitAI",
      type: "Marketing Campaign",
      date: "03/06/2026",
      status: "Completed",
    },
    {
      name: "EduSmart",
      type: "Business Idea",
      date: "01/06/2026",
      status: "Completed",
    },
    {
      name: "GreenMart",
      type: "AI Image",
      date: "28/05/2026",
      status: "Completed",
    },
  ];

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );

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
            Project History
          </h1>

          <p
            style={{
              color: "#9ca3af",
              marginBottom: "30px",
            }}
          >
            Manage and review previously generated
            business projects and AI outputs.
          </p>

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
            <HistoryStat
              title="Total Projects"
              value="28"
              icon={<FolderKanban />}
              color="#8B5CF6"
            />

            <HistoryStat
              title="Completed"
              value="24"
              icon={<CheckCircle />}
              color="#10A37F"
            />

            <HistoryStat
              title="Recent Activity"
              value="7"
              icon={<Clock />}
              color="#F59E0B"
            />
          </div>

          {/* SEARCH */}

          <div
            style={{
              background: "#202123",
              border: "1px solid #2f3136",
              borderRadius: "16px",
              padding: "15px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "25px",
            }}
          >
            <Search color="#9ca3af" />

            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                color: "white",
                width: "100%",
              }}
            />
          </div>

          {/* PROJECT TABLE */}

          <div
            style={{
              background: "#202123",
              border: "1px solid #2f3136",
              borderRadius: "20px",
              padding: "25px",
              overflowX: "auto",
            }}
          >
            <table
              width="100%"
              style={{
                color: "white",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr
                  style={{
                    borderBottom:
                      "1px solid #2f3136",
                  }}
                >
                  <th
                    align="left"
                    style={{ padding: "15px" }}
                  >
                    Project Name
                  </th>

                  <th
                    align="left"
                    style={{ padding: "15px" }}
                  >
                    Type
                  </th>

                  <th
                    align="left"
                    style={{ padding: "15px" }}
                  >
                    Date
                  </th>

                  <th
                    align="left"
                    style={{ padding: "15px" }}
                  >
                    Status
                  </th>

                  <th
                    align="left"
                    style={{ padding: "15px" }}
                  >
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredProjects.map(
                  (project, index) => (
                    <tr
                      key={index}
                      style={{
                        borderBottom:
                          "1px solid #2f3136",
                      }}
                    >
                      <td
                        style={{
                          padding: "15px",
                        }}
                      >
                        {project.name}
                      </td>

                      <td
                        style={{
                          padding: "15px",
                        }}
                      >
                        {project.type}
                      </td>

                      <td
                        style={{
                          padding: "15px",
                        }}
                      >
                        {project.date}
                      </td>

                      <td
                        style={{
                          padding: "15px",
                        }}
                      >
                        <span
                          style={{
                            background:
                              "#10A37F20",
                            color: "#10A37F",
                            padding:
                              "6px 12px",
                            borderRadius:
                              "10px",
                          }}
                        >
                          {project.status}
                        </span>
                      </td>

                      <td
                        style={{
                          padding: "15px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                          }}
                        >
                          <button
                            style={{
                              background:
                                "#8B5CF6",
                            }}
                          >
                            <Eye size={16} />
                          </button>

                          <button
                            style={{
                              background:
                                "#EF4444",
                            }}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>

          {/* RECENT ACTIVITY */}

          <div
            style={{
              background: "#202123",
              border: "1px solid #2f3136",
              borderRadius: "20px",
              padding: "25px",
              marginTop: "30px",
            }}
          >
            <h2
              style={{
                color: "white",
                marginBottom: "20px",
              }}
            >
              Recent Activity
            </h2>

            <ul
              style={{
                color: "#d1d5db",
                lineHeight: "2",
              }}
            >
              <li>
                Generated Business Plan for
                FreshBox
              </li>

              <li>
                Created Marketing Campaign for
                FitAI
              </li>

              <li>
                Generated AI Images for GreenMart
              </li>

              <li>
                Built Website Prototype for
                TechHub
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function HistoryStat({
  title,
  value,
  icon,
  color,
}) {
  return (
    <div
      style={{
        background: "#202123",
        border: "1px solid #2f3136",
        borderRadius: "20px",
        padding: "25px",
      }}
    >
      <div
        style={{
          color,
          marginBottom: "15px",
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          color: "#9ca3af",
          marginBottom: "10px",
        }}
      >
        {title}
      </h3>

      <h1
        style={{
          color: "white",
        }}
      >
        {value}
      </h1>
    </div>
  );
}

export default ProjectHistory;