import React, { useState } from "react";

// Simple icon components for CodeSandbox compatibility
const Icon = ({ name, size = 20, color = "currentColor", ...props }) => {
  const iconStyles = {
    width: size,
    height: size,
    display: "inline-block",
    fill: "none",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    brain: (
      <svg style={iconStyles} viewBox="0 0 24 24">
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
        <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
        <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
        <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
        <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
        <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
        <path d="M6 18a4 4 0 0 1-1.967-.516" />
        <path d="M19.967 17.484A4 4 0 0 1 18 18" />
      </svg>
    ),
    fileText: (
      <svg style={iconStyles} viewBox="0 0 24 24">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10 9H8" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
      </svg>
    ),
    barChart: (
      <svg style={iconStyles} viewBox="0 0 24 24">
        <path d="M3 3v18h18" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
      </svg>
    ),
    target: (
      <svg style={iconStyles} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    calendar: (
      <svg style={iconStyles} viewBox="0 0 24 24">
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
      </svg>
    ),
    bookOpen: (
      <svg style={iconStyles} viewBox="0 0 24 24">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    pieChart: (
      <svg style={iconStyles} viewBox="0 0 24 24">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
      </svg>
    ),
    settings: (
      <svg style={iconStyles} viewBox="0 0 24 24">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    menu: (
      <svg style={iconStyles} viewBox="0 0 24 24">
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    ),
    search: (
      <svg style={iconStyles} viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
    bell: (
      <svg style={iconStyles} viewBox="0 0 24 24">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    user: (
      <svg style={iconStyles} viewBox="0 0 24 24">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    upload: (
      <svg style={iconStyles} viewBox="0 0 24 24">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7,10 12,5 17,10" />
        <line x1="12" x2="12" y1="5" y2="21" />
      </svg>
    ),
    filter: (
      <svg style={iconStyles} viewBox="0 0 24 24">
        <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46" />
      </svg>
    ),
    checkCircle: (
      <svg style={iconStyles} viewBox="0 0 24 24">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22,4 12,14.01 9,11.01" />
      </svg>
    ),
    clock: (
      <svg style={iconStyles} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </svg>
    ),
    trendingUp: (
      <svg style={iconStyles} viewBox="0 0 24 24">
        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
        <polyline points="16,7 22,7 22,13" />
      </svg>
    ),
    award: (
      <svg style={iconStyles} viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="6" />
        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      </svg>
    ),
    zap: (
      <svg style={iconStyles} viewBox="0 0 24 24">
        <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
      </svg>
    ),
    dollarSign: (
      <svg style={iconStyles} viewBox="0 0 24 24">
        <line x1="12" x2="12" y1="2" y2="22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    plus: (
      <svg style={iconStyles} viewBox="0 0 24 24">
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
    ),
    eye: (
      <svg style={iconStyles} viewBox="0 0 24 24">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    download: (
      <svg style={iconStyles} viewBox="0 0 24 24">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7,10 12,15 17,10" />
        <line x1="12" x2="12" y1="15" y2="3" />
      </svg>
    ),
    edit: (
      <svg style={iconStyles} viewBox="0 0 24 24">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z" />
      </svg>
    ),
    messageSquare: (
      <svg style={iconStyles} viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    alertCircle: (
      <svg style={iconStyles} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" x2="12" y1="8" y2="12" />
        <line x1="12" x2="12.01" y1="16" y2="16" />
      </svg>
    ),
    x: (
      <svg style={iconStyles} viewBox="0 0 24 24">
        <path d="m18 6-12 12" />
        <path d="m6 6 12 12" />
      </svg>
    ),
    users: (
      <svg style={iconStyles} viewBox="0 0 24 24">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    star: (
      <svg style={iconStyles} viewBox="0 0 24 24">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
    ),
  };

  return (
    icons[name] || (
      <div style={{ width: size, height: size, backgroundColor: "#6b7280" }} />
    )
  );
};

// Mock data
const mockUser = {
  name: "Sarah Johnson",
  email: "sarah@hopewellcenter.org",
  role: "Grant Writer",
  organization: "Hopewell Community Center",
};

const mockRFPs = [
  {
    id: 1,
    title: "Youth Development Initiative Grant",
    funder: "Smith Foundation",
    deadline: "2025-11-15",
    amount: "$75,000",
    status: "analyzing",
    fitScore: 92,
    type: "foundation",
  },
  {
    id: 2,
    title: "Community Health Program NOFO",
    funder: "CDC",
    deadline: "2025-12-01",
    amount: "$250,000",
    status: "workspace",
    fitScore: 78,
    type: "federal",
  },
  {
    id: 3,
    title: "Education Innovation Fund",
    funder: "Gates Foundation",
    deadline: "2025-10-30",
    amount: "$150,000",
    status: "draft",
    fitScore: 85,
    type: "foundation",
  },
];

const mockProposals = [
  {
    id: 1,
    title: "Youth Leadership Development Program",
    rfp: "Youth Development Initiative Grant",
    status: "in_review",
    progress: 85,
    deadline: "2025-11-15",
    assignedTo: "Sarah Johnson",
    lastUpdated: "2 hours ago",
  },
  {
    id: 2,
    title: "Community Wellness Hub",
    rfp: "Community Health Program NOFO",
    status: "draft",
    progress: 45,
    deadline: "2025-12-01",
    assignedTo: "Marcus Chen",
    lastUpdated: "1 day ago",
  },
];

// Styles
const styles = {
  container: {
    height: "100vh",
    backgroundColor: "#f3f4f6",
    display: "flex",
    flexDirection: "column",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  header: {
    backgroundColor: "white",
    borderBottom: "1px solid #e5e7eb",
    padding: "16px 24px",
  },
  sidebar: {
    width: "256px",
    backgroundColor: "#f9fafb",
    borderRight: "1px solid #e5e7eb",
  },
  content: {
    flex: 1,
    overflowY: "auto",
    padding: "24px",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    padding: "24px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },
  button: {
    padding: "8px 16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    transition: "all 0.2s ease",
  },
  gradientBlue: {
    background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
    color: "white",
  },
};

const FundingFrameApp = () => {
  const [currentView, setCurrentView] = useState("dashboard");
  const [selectedRFP, setSelectedRFP] = useState(null);
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "barChart" },
    { id: "opportunities", label: "Opportunities", icon: "target" },
    { id: "workspaces", label: "Workspaces", icon: "fileText" },
    { id: "applications", label: "Applications", icon: "calendar" },
    { id: "knowledge", label: "Knowledge Base", icon: "bookOpen" },
    { id: "documents", label: "Documents", icon: "fileText" },
    { id: "reports", label: "Reports", icon: "pieChart" },
    { id: "settings", label: "Settings", icon: "settings" },
  ];

  const Header = () => (
    <header style={styles.header}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: "#2563eb",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon name="brain" size={20} color="white" />
            </div>
            <h1
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "#111827",
                margin: 0,
              }}
            >
              FundingFrame
            </h1>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ position: "relative" }}>
            <Icon
              name="search"
              size={16}
              color="#9ca3af"
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
            <input
              type="text"
              placeholder="Search..."
              style={{
                paddingLeft: "40px",
                paddingRight: "16px",
                paddingTop: "8px",
                paddingBottom: "8px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                fontSize: "14px",
                outline: "none",
              }}
            />
          </div>

          <button
            style={{
              position: "relative",
              padding: "8px",
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
          >
            <Icon name="bell" size={20} color="#6b7280" />
            <span
              style={{
                position: "absolute",
                top: "-4px",
                right: "-4px",
                height: "16px",
                width: "16px",
                backgroundColor: "#ef4444",
                borderRadius: "50%",
                fontSize: "10px",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              3
            </span>
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: "#d1d5db",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon name="user" size={20} color="#6b7280" />
            </div>
            <div style={{ fontSize: "14px" }}>
              <div style={{ fontWeight: "500", color: "#111827" }}>
                {mockUser.name}
              </div>
              <div style={{ color: "#6b7280" }}>{mockUser.role}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );

  const Sidebar = () => (
    <aside style={styles.sidebar}>
      <div style={{ padding: "16px" }}>
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          style={{
            width: "100%",
            padding: "8px",
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
        >
          <Icon name="menu" size={20} />
        </button>
      </div>

      <nav style={{ padding: "0 12px" }}>
        {navItems.map((item) => {
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                padding: "8px 12px",
                fontSize: "14px",
                fontWeight: "500",
                borderRadius: "8px",
                marginBottom: "4px",
                border: isActive ? "1px solid #dbeafe" : "none",
                backgroundColor: isActive ? "#dbeafe" : "transparent",
                color: isActive ? "#1d4ed8" : "#374151",
                cursor: "pointer",
                gap: "12px",
              }}
            >
              <Icon name={item.icon} size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );

  const DashboardView = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {/* Welcome Section */}
      <div
        style={{
          ...styles.gradientBlue,
          borderRadius: "12px",
          padding: "24px",
        }}
      >
        <h2
          style={{ fontSize: "24px", fontWeight: "bold", margin: "0 0 8px 0" }}
        >
          Welcome back, {mockUser.name}!
        </h2>
        <p style={{ color: "#dbeafe", margin: "0 0 16px 0" }}>
          You have 3 active proposals and 2 new opportunities to review.
        </p>
        <button
          onClick={() => setCurrentView("opportunities")}
          style={{
            backgroundColor: "white",
            color: "#2563eb",
            padding: "8px 16px",
            borderRadius: "8px",
            fontWeight: "500",
            border: "none",
            cursor: "pointer",
          }}
        >
          Explore New Opportunities
        </button>
      </div>

      {/* Quick Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "24px",
        }}
      >
        {[
          {
            title: "Active Proposals",
            value: "5",
            icon: "fileText",
            color: "#2563eb",
            trend: "↑ 2 from last month",
          },
          {
            title: "Success Rate",
            value: "73%",
            icon: "trendingUp",
            color: "#059669",
            trend: "↑ 12% improvement",
          },
          {
            title: "Total Awarded",
            value: "$2.1M",
            icon: "award",
            color: "#d97706",
            trend: "This fiscal year",
          },
          {
            title: "Time Saved",
            value: "180h",
            icon: "zap",
            color: "#7c3aed",
            trend: "With AI assistance",
          },
        ].map((stat, index) => (
          <div key={index} style={styles.card}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#6b7280",
                    margin: "0 0 4px 0",
                  }}
                >
                  {stat.title}
                </p>
                <p
                  style={{
                    fontSize: "32px",
                    fontWeight: "bold",
                    color: "#111827",
                    margin: 0,
                  }}
                >
                  {stat.value}
                </p>
              </div>
              <Icon name={stat.icon} size={32} color={stat.color} />
            </div>
            <p
              style={{
                fontSize: "14px",
                color: "#059669",
                margin: "8px 0 0 0",
              }}
            >
              {stat.trend}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "24px",
        }}
      >
        <div style={styles.card}>
          <div
            style={{
              borderBottom: "1px solid #e5e7eb",
              marginBottom: "16px",
              paddingBottom: "16px",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#111827",
                margin: 0,
              }}
            >
              Recent Proposals
            </h3>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {mockProposals.map((proposal) => (
              <div
                key={proposal.id}
                style={{
                  padding: "16px",
                  backgroundColor: "#f9fafb",
                  borderRadius: "8px",
                }}
              >
                <h4
                  style={{
                    fontWeight: "500",
                    color: "#111827",
                    margin: "0 0 4px 0",
                  }}
                >
                  {proposal.title}
                </h4>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#6b7280",
                    margin: "0 0 12px 0",
                  }}
                >
                  {proposal.rfp}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      style={{
                        width: "128px",
                        backgroundColor: "#e5e7eb",
                        borderRadius: "9999px",
                        height: "8px",
                        marginRight: "12px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#3b82f6",
                          height: "8px",
                          borderRadius: "9999px",
                          width: `${proposal.progress}%`,
                        }}
                      />
                    </div>
                    <span style={{ fontSize: "14px", color: "#6b7280" }}>
                      {proposal.progress}%
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedProposal(proposal);
                      setCurrentView("workspace");
                    }}
                    style={{
                      padding: "4px 12px",
                      fontSize: "14px",
                      backgroundColor: "#dbeafe",
                      color: "#1d4ed8",
                      borderRadius: "6px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Open
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.card}>
          <div
            style={{
              borderBottom: "1px solid #e5e7eb",
              marginBottom: "16px",
              paddingBottom: "16px",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#111827",
                margin: 0,
              }}
            >
              Upcoming Deadlines
            </h3>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div
              style={{
                padding: "16px",
                backgroundColor: "#fef2f2",
                borderRadius: "8px",
                border: "1px solid #fecaca",
              }}
            >
              <h4
                style={{
                  fontWeight: "500",
                  color: "#7f1d1d",
                  margin: "0 0 4px 0",
                }}
              >
                Education Innovation Fund
              </h4>
              <p
                style={{
                  fontSize: "14px",
                  color: "#991b1b",
                  margin: "0 0 8px 0",
                }}
              >
                Due: October 30, 2025
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#dc2626",
                  }}
                >
                  5 days left
                </span>
                <span style={{ fontSize: "12px", color: "#ef4444" }}>
                  High priority
                </span>
              </div>
            </div>

            <div
              style={{
                padding: "16px",
                backgroundColor: "#fffbeb",
                borderRadius: "8px",
                border: "1px solid #fed7aa",
              }}
            >
              <h4
                style={{
                  fontWeight: "500",
                  color: "#92400e",
                  margin: "0 0 4px 0",
                }}
              >
                Youth Development Initiative
              </h4>
              <p
                style={{
                  fontSize: "14px",
                  color: "#b45309",
                  margin: "0 0 8px 0",
                }}
              >
                Due: November 15, 2025
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#d97706",
                  }}
                >
                  21 days left
                </span>
                <span style={{ fontSize: "12px", color: "#f59e0b" }}>
                  In review
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const OpportunitiesView = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            color: "#111827",
            margin: 0,
          }}
        >
          Grant Opportunities
        </h2>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 12px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            <Icon name="filter" size={16} />
            Filter
          </button>
          <button
            onClick={() => setCurrentView("rfp-upload")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              backgroundColor: "#2563eb",
              color: "white",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Icon name="upload" size={16} />
            Upload RFP
          </button>
        </div>
      </div>

      <div style={{ display: "grid", gap: "24px" }}>
        {mockRFPs.map((rfp) => (
          <div
            key={rfp.id}
            style={{
              ...styles.card,
              cursor: "pointer",
              transition: "box-shadow 0.2s ease",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "16px",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#111827",
                  margin: 0,
                }}
              >
                {rfp.title}
              </h3>
              <span
                style={{
                  padding: "4px 8px",
                  fontSize: "12px",
                  fontWeight: "500",
                  borderRadius: "9999px",
                  backgroundColor:
                    rfp.type === "federal" ? "#dbeafe" : "#dcfce7",
                  color: rfp.type === "federal" ? "#1d4ed8" : "#166534",
                }}
              >
                {rfp.type}
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "16px",
                marginBottom: "24px",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#6b7280",
                    margin: "0 0 4px 0",
                  }}
                >
                  Funder
                </p>
                <p style={{ fontWeight: "500", margin: 0 }}>{rfp.funder}</p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#6b7280",
                    margin: "0 0 4px 0",
                  }}
                >
                  Amount
                </p>
                <p style={{ fontWeight: "500", margin: 0 }}>{rfp.amount}</p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#6b7280",
                    margin: "0 0 4px 0",
                  }}
                >
                  Deadline
                </p>
                <p style={{ fontWeight: "500", margin: 0 }}>
                  {new Date(rfp.deadline).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#6b7280",
                    margin: "0 0 4px 0",
                  }}
                >
                  Fit Score
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      width: "48px",
                      backgroundColor: "#e5e7eb",
                      borderRadius: "9999px",
                      height: "8px",
                      marginRight: "8px",
                    }}
                  >
                    <div
                      style={{
                        height: "8px",
                        borderRadius: "9999px",
                        width: `${rfp.fitScore}%`,
                        backgroundColor:
                          rfp.fitScore >= 80
                            ? "#10b981"
                            : rfp.fitScore >= 60
                            ? "#f59e0b"
                            : "#ef4444",
                      }}
                    />
                  </div>
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    {rfp.fitScore}%
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <button
                onClick={() => {
                  setSelectedRFP(rfp);
                  setCurrentView("rfp-analysis");
                }}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#2563eb",
                  color: "white",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                View Analysis
              </button>
              <button
                onClick={() => {
                  setSelectedRFP(rfp);
                  setCurrentView("workspace");
                }}
                style={{
                  padding: "8px 16px",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                Start Workspace
              </button>
              <button
                style={{
                  padding: "8px 16px",
                  color: "#6b7280",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Download RFP
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const WorkspaceView = () => {
    const [selectedSection, setSelectedSection] = useState("executive-summary");
    const proposal = selectedProposal || mockProposals[0];

    const sections = [
      {
        id: "executive-summary",
        name: "Executive Summary",
        status: "completed",
        progress: 100,
      },
      {
        id: "problem-statement",
        name: "Problem Statement",
        status: "completed",
        progress: 100,
      },
      {
        id: "project-description",
        name: "Project Description",
        status: "in-progress",
        progress: 75,
      },
      {
        id: "methodology",
        name: "Methodology",
        status: "in-progress",
        progress: 45,
      },
      {
        id: "evaluation",
        name: "Evaluation Plan",
        status: "pending",
        progress: 0,
      },
    ];

    return (
      <div style={{ height: "100vh", display: "flex" }}>
        {/* Sidebar with sections */}
        <div
          style={{
            width: "320px",
            backgroundColor: "white",
            borderRight: "1px solid #e5e7eb",
          }}
        >
          <div style={{ padding: "24px", borderBottom: "1px solid #e5e7eb" }}>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#111827",
                margin: "0 0 8px 0",
              }}
            >
              {proposal.title}
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#6b7280",
                margin: "0 0 12px 0",
              }}
            >
              Due: {proposal.deadline}
            </p>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "14px",
                  marginBottom: "4px",
                }}
              >
                <span>Overall Progress</span>
                <span>{proposal.progress}%</span>
              </div>
              <div
                style={{
                  width: "100%",
                  backgroundColor: "#e5e7eb",
                  borderRadius: "9999px",
                  height: "8px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#3b82f6",
                    height: "8px",
                    borderRadius: "9999px",
                    width: `${proposal.progress}%`,
                  }}
                />
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setSelectedSection(section.id)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "12px",
                  borderRadius: "8px",
                  border:
                    selectedSection === section.id
                      ? "1px solid #dbeafe"
                      : "none",
                  backgroundColor:
                    selectedSection === section.id ? "#dbeafe" : "transparent",
                  color: selectedSection === section.id ? "#1d4ed8" : "#374151",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontWeight: "500" }}>{section.name}</span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        backgroundColor: "#e5e7eb",
                        borderRadius: "9999px",
                        height: "8px",
                      }}
                    >
                      <div
                        style={{
                          height: "8px",
                          borderRadius: "9999px",
                          width: `${section.progress}%`,
                          backgroundColor:
                            section.status === "completed"
                              ? "#10b981"
                              : section.status === "in-progress"
                              ? "#3b82f6"
                              : "#d1d5db",
                        }}
                      />
                    </div>
                    {section.status === "completed" && (
                      <Icon name="checkCircle" size={16} color="#10b981" />
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main editor area */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              padding: "24px",
              borderBottom: "1px solid #e5e7eb",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#111827",
                margin: 0,
              }}
            >
              {sections.find((s) => s.id === selectedSection)?.name}
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 12px",
                  fontSize: "14px",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                <Icon name="brain" size={16} />
                AI Assist
              </button>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 12px",
                  fontSize: "14px",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                <Icon name="messageSquare" size={16} />
                Comments (2)
              </button>
              <button
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#2563eb",
                  color: "white",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Save
              </button>
            </div>
          </div>

          <div style={{ flex: 1, padding: "24px", backgroundColor: "#f9fafb" }}>
            {selectedSection === "executive-summary" && (
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  padding: "32px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                }}
              >
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    marginBottom: "20px",
                  }}
                >
                  Executive Summary
                </h3>
                <div
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "#374151",
                  }}
                >
                  <p>
                    The Hopewell Community Center respectfully requests $75,000
                    from the Smith Foundation to implement the Youth Leadership
                    Development Program, a comprehensive initiative designed to
                    empower underserved youth ages 14-24 in our community.{" "}
                    <span
                      style={{
                        backgroundColor: "#fef3c7",
                        padding: "2px 4px",
                        borderRadius: "3px",
                        fontSize: "12px",
                        marginLeft: "4px",
                      }}
                    >
                      [Source: Org Profile: Mission Statement, Youth Programs
                      Section]
                    </span>
                  </p>
                  <p>
                    Our organization has successfully served the downtown
                    district for over 15 years, reaching more than 2,500 youth
                    annually through evidence-based programming.{" "}
                    <span
                      style={{
                        backgroundColor: "#fef3c7",
                        padding: "2px 4px",
                        borderRadius: "3px",
                        fontSize: "12px",
                        marginLeft: "4px",
                      }}
                    >
                      [Source: Program Report: Annual Impact 2024, page 3]
                    </span>
                  </p>
                  <p>
                    The proposed program will directly serve 150 youth over 12
                    months, focusing on leadership skill development, civic
                    engagement, and career readiness. Expected outcomes include
                    80% of participants completing leadership training, 70%
                    engaging in community service projects, and 90% reporting
                    increased confidence in leadership abilities.{" "}
                    <span
                      style={{
                        backgroundColor: "#fef3c7",
                        padding: "2px 4px",
                        borderRadius: "3px",
                        fontSize: "12px",
                        marginLeft: "4px",
                      }}
                    >
                      [Source: Logic Model: YLDP Program Design, Outcomes
                      Section]
                    </span>
                  </p>
                </div>

                <div
                  style={{
                    marginTop: "32px",
                    paddingTop: "24px",
                    borderTop: "1px solid #e5e7eb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "14px",
                    color: "#6b7280",
                  }}
                >
                  <span>Word count: 234 / 500 maximum</span>
                  <span>Citations: 3 validated</span>
                </div>
              </div>
            )}

            {selectedSection !== "executive-summary" && (
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  padding: "32px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                }}
              >
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    marginBottom: "20px",
                  }}
                >
                  {sections.find((s) => s.id === selectedSection)?.name}
                </h3>
                <div
                  style={{
                    padding: "16px",
                    backgroundColor: "#eff6ff",
                    border: "1px solid #bfdbfe",
                    borderRadius: "8px",
                    marginBottom: "24px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    <Icon name="brain" size={20} color="#2563eb" />
                    <span style={{ fontWeight: "500", color: "#1d4ed8" }}>
                      AI Suggestion
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#1e40af",
                      marginBottom: "12px",
                    }}
                  >
                    Based on the RFP requirements, consider adding more detail
                    about evidence-based practices and specific evaluation
                    metrics for this section.
                  </p>
                  <button
                    style={{
                      fontSize: "12px",
                      backgroundColor: "#2563eb",
                      color: "white",
                      padding: "4px 12px",
                      borderRadius: "4px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Apply Suggestion
                  </button>
                </div>

                <div
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "#374151",
                  }}
                >
                  <p style={{ fontStyle: "italic", color: "#9ca3af" }}>
                    [This section is in progress. Use AI Assist to generate
                    content based on your organizational knowledge base...]
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Simple view selector for other views
  const SimpleView = ({ title, description }) => (
    <div style={styles.card}>
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#111827",
          margin: "0 0 16px 0",
        }}
      >
        {title}
      </h2>
      <p style={{ color: "#6b7280" }}>{description}</p>
    </div>
  );

  const renderCurrentView = () => {
    switch (currentView) {
      case "dashboard":
        return <DashboardView />;
      case "opportunities":
        return <OpportunitiesView />;
      case "workspace":
      case "workspaces":
        return <WorkspaceView />;
      case "applications":
        return (
          <SimpleView
            title="Application Tracker"
            description="Track your proposals through the entire submission pipeline with Kanban-style boards."
          />
        );
      case "knowledge":
        return (
          <SimpleView
            title="Knowledge Base"
            description="Manage organizational documents, past proposals, and research materials for AI citation."
          />
        );
      case "documents":
        return (
          <SimpleView
            title="Document Management"
            description="Centralized storage for all grant-related files with version control and collaboration features."
          />
        );
      case "reports":
        return (
          <SimpleView
            title="Reports & Analytics"
            description="Comprehensive analytics on grant success rates, time savings, and organizational performance."
          />
        );
      case "settings":
        return (
          <SimpleView
            title="Settings"
            description="Manage organization profile, team members, AI settings, and subscription details."
          />
        );
      default:
        return <DashboardView />;
    }
  };

  return (
    <div style={styles.container}>
      <Header />

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <Sidebar />

        <main style={styles.content}>{renderCurrentView()}</main>
      </div>
    </div>
  );
};

export default FundingFrameApp;
