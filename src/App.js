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
    fundingFrame: (
      <svg style={iconStyles} viewBox="0 0 32 32">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f766e" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>
        </defs>
        <rect x="4" y="8" width="24" height="16" rx="3" fill="none" stroke="url(#logoGradient)" strokeWidth="2"/>
        <rect x="7" y="11" width="6" height="4" rx="1" fill="url(#logoGradient)" opacity="0.8"/>
        <rect x="15" y="11" width="6" height="4" rx="1" fill="url(#logoGradient)" opacity="0.6"/>
        <rect x="23" y="11" width="3" height="4" rx="1" fill="url(#logoGradient)" opacity="0.4"/>
        <rect x="7" y="17" width="18" height="2" rx="1" fill="url(#logoGradient)" opacity="0.3"/>
        <circle cx="26" cy="6" r="3" fill="none" stroke="url(#logoGradient)" strokeWidth="1.5"/>
        <path d="M24.5 6 L25.5 7 L27.5 5" stroke="url(#logoGradient)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
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
    chevronRight: (
      <svg style={iconStyles} viewBox="0 0 24 24">
        <path d="M9 18l6-6-6-6" />
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
  name: "Jabari Douglas",
  email: "jdouglas@myalms.org",
  role: "Executive Director",
  organization: "A Little More Support DC",
  joinedDate: "2024-04-15",
  avatar: null,
};

const mockTeamMembers = [
  {
    id: 1,
    name: "Jabari Douglas",
    email: "jdouglas@myalms.org",
    role: "Executive Director",
    department: "Leadership",
    joinedDate: "2024-04-15",
    status: "active",
  },
  {
    id: 2,
    name: "Maria Santos",
    email: "msantos@myalms.org",
    role: "Program Director",
    department: "Case Management",
    joinedDate: "2024-05-20",
    status: "active",
  },
  {
    id: 3,
    name: "David Kim",
    email: "dkim@myalms.org",
    role: "Grant Writer",
    department: "Development",
    joinedDate: "2024-06-10",
    status: "active",
  },
];

const mockRFPs = [
  {
    id: 1,
    title: "Substance Abuse Prevention and Treatment Block Grant",
    funder: "SAMHSA",
    deadline: "2025-11-15",
    amount: "$125,000",
    status: "analyzing",
    fitScore: 94,
    type: "federal",
    dateAdded: "2024-09-10",
    description: "Comprehensive funding for substance abuse prevention and treatment services in underserved communities.",
  },
  {
    id: 2,
    title: "Mental Health Promotion and Suicide Prevention",
    funder: "CDC",
    deadline: "2025-12-01",
    amount: "$180,000",
    status: "workspace",
    fitScore: 89,
    type: "federal",
    dateAdded: "2024-09-05",
    description: "Supporting evidence-based mental health promotion and suicide prevention programs.",
  },
  {
    id: 3,
    title: "Community Health Workers Initiative",
    funder: "Robert Wood Johnson Foundation",
    deadline: "2025-10-30",
    amount: "$85,000",
    status: "draft",
    fitScore: 87,
    type: "foundation",
    dateAdded: "2024-08-28",
    description: "Funding to train and deploy community health workers in high-need areas.",
  },
  {
    id: 4,
    title: "Opioid Response Network Grant",
    funder: "SAMHSA",
    deadline: "2024-12-15",
    amount: "$95,000",
    status: "submitted",
    fitScore: 91,
    type: "federal",
    dateAdded: "2024-08-15",
    description: "Technical assistance and training for opioid use disorder treatment and recovery services.",
  },
  {
    id: 5,
    title: "Behavioral Health Workforce Development",
    funder: "HRSA",
    deadline: "2024-11-30",
    amount: "$150,000",
    status: "awarded",
    fitScore: 88,
    type: "federal",
    dateAdded: "2024-07-20",
    description: "Training and education programs for behavioral health professionals.",
  },
];

const mockProposals = [
  {
    id: 1,
    title: "Peer Recovery Specialist Training Expansion",
    rfp: "Substance Abuse Prevention and Treatment Block Grant",
    status: "in_review",
    progress: 85,
    deadline: "2025-11-15",
    assignedTo: "David Kim",
    lastUpdated: "2 hours ago",
    startDate: "2024-09-12",
    estimatedAmount: "$125,000",
    stage: "Final Review",
  },
  {
    id: 2,
    title: "Comprehensive Case Management Services",
    rfp: "Mental Health Promotion and Suicide Prevention",
    status: "draft",
    progress: 45,
    deadline: "2025-12-01",
    assignedTo: "David Kim",
    lastUpdated: "1 day ago",
    startDate: "2024-09-08",
    estimatedAmount: "$180,000",
    stage: "Program Description",
  },
  {
    id: 3,
    title: "Community Health Worker Training Program",
    rfp: "Community Health Workers Initiative",
    status: "draft",
    progress: 25,
    deadline: "2025-10-30",
    assignedTo: "Maria Santos",
    lastUpdated: "3 days ago",
    startDate: "2024-09-01",
    estimatedAmount: "$85,000",
    stage: "Needs Assessment",
  },
  {
    id: 4,
    title: "Opioid Crisis Response Initiative",
    rfp: "Opioid Response Network Grant",
    status: "submitted",
    progress: 100,
    deadline: "2024-12-15",
    assignedTo: "David Kim",
    lastUpdated: "2 weeks ago",
    startDate: "2024-08-20",
    estimatedAmount: "$95,000",
    stage: "Submitted",
    submittedDate: "2024-09-01",
  },
  {
    id: 5,
    title: "Workforce Development for Behavioral Health",
    rfp: "Behavioral Health Workforce Development",
    status: "awarded",
    progress: 100,
    deadline: "2024-11-30",
    assignedTo: "Jabari Douglas",
    lastUpdated: "1 month ago",
    startDate: "2024-07-25",
    estimatedAmount: "$150,000",
    stage: "Awarded",
    submittedDate: "2024-08-15",
    awardDate: "2024-08-30",
  },
  {
    id: 6,
    title: "Mental Health First Aid Training",
    rfp: "Community Mental Health Services Block Grant",
    status: "rejected",
    progress: 100,
    deadline: "2024-08-15",
    assignedTo: "Maria Santos",
    lastUpdated: "2 months ago",
    startDate: "2024-06-10",
    estimatedAmount: "$65,000",
    stage: "Rejected",
    submittedDate: "2024-07-30",
    rejectionDate: "2024-08-20",
    rejectionReason: "Insufficient community partnership documentation",
  },
];

const mockDocuments = [
  {
    id: 1,
    name: "ALMSDC Organizational Chart",
    type: "PDF",
    size: "2.4 MB",
    uploadedBy: "Jabari Douglas",
    uploadDate: "2024-08-15",
    category: "Organizational",
    status: "current",
    version: "v3.2",
    tags: ["organizational", "structure", "staff"],
  },
  {
    id: 2,
    name: "Annual Budget FY2024",
    type: "Excel",
    size: "1.8 MB",
    uploadedBy: "Maria Santos",
    uploadDate: "2024-07-01",
    category: "Financial",
    status: "current",
    version: "v2.1",
    tags: ["budget", "financial", "fy2024"],
  },
  {
    id: 3,
    name: "Board of Directors List",
    type: "Word",
    size: "0.5 MB",
    uploadedBy: "Jabari Douglas",
    uploadDate: "2024-06-20",
    category: "Governance",
    status: "current",
    version: "v1.3",
    tags: ["board", "governance", "leadership"],
  },
  {
    id: 4,
    name: "Case Management Protocols",
    type: "PDF",
    size: "3.1 MB",
    uploadedBy: "Maria Santos",
    uploadDate: "2024-05-10",
    category: "Program",
    status: "current",
    version: "v4.0",
    tags: ["protocols", "case-management", "procedures"],
  },
];

const mockKnowledgeBase = [
  {
    id: 1,
    title: "SAMHSA Grant Writing Best Practices",
    category: "Grant Writing",
    content: "Comprehensive guide for writing effective SAMHSA grant proposals...",
    lastUpdated: "2024-08-20",
    updatedBy: "David Kim",
    tags: ["samhsa", "federal", "best-practices"],
    views: 45,
  },
  {
    id: 2,
    title: "Community Partnership Templates",
    category: "Partnerships",
    content: "Standard templates and MOUs for community partnerships...",
    lastUpdated: "2024-07-15",
    updatedBy: "Maria Santos",
    tags: ["partnerships", "templates", "community"],
    views: 32,
  },
  {
    id: 3,
    title: "Peer Recovery Specialist Training Curriculum",
    category: "Programs",
    content: "Detailed curriculum and training materials for peer specialists...",
    lastUpdated: "2024-06-30",
    updatedBy: "Jabari Douglas",
    tags: ["training", "peer-recovery", "curriculum"],
    views: 67,
  },
];

const mockReports = [
  {
    id: 1,
    title: "Grant Success Rate Analysis",
    type: "Performance",
    dateGenerated: "2024-09-15",
    timeFrame: "Last 6 months",
    data: {
      successRate: 78,
      totalApplications: 9,
      awarded: 7,
      rejected: 2,
      totalAwarded: "$485,000",
    },
  },
  {
    id: 2,
    title: "Proposal Timeline Efficiency",
    type: "Process",
    dateGenerated: "2024-09-10",
    timeFrame: "Last 3 months",
    data: {
      avgDaysToComplete: 28,
      onTimeSubmissions: 85,
      lateSubmissions: 15,
      avgTeamSize: 2.3,
    },
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
    width: "280px",
    backgroundColor: "#ffffff",
    borderRight: "1px solid #e5e7eb",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
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
  primaryButton: {
    padding: "12px 24px",
    backgroundColor: "#2563eb",
    color: "white",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  secondaryButton: {
    padding: "12px 24px",
    backgroundColor: "white",
    color: "#2563eb",
    borderRadius: "8px",
    border: "1px solid #2563eb",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  gradientBlue: {
    background: "linear-gradient(135deg, #0f766e 0%, #1e40af 100%)",
    color: "white",
  },
};

// Mock data generators for demo
// Enhanced Mock Data Generators for Demo
const generateRandomMetric = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateMockAnalysis = (rfpTitle = "SAMHSA Peer Recovery Training Grant") => {
  const eligibilityScore = generateRandomMetric(85, 100);
  const alignmentScore = generateRandomMetric(80, 98);
  const capacityScore = generateRandomMetric(75, 95);
  const competitiveScore = generateRandomMetric(85, 95);
  const overallScore = Math.round((eligibilityScore + alignmentScore + capacityScore + competitiveScore) / 4);

  const criteriaTemplates = [
    { item: '501(c)(3) nonprofit status', met: true, reference: 'Organizational Documents, IRS Determination Letter' },
    { item: 'Geographic eligibility (DC area)', met: true, reference: 'RFP Section 2.3, Geographic Requirements' },
    { item: 'Minimum organizational experience (2+ years)', met: true, reference: 'Page 5, Section 3.1 - Experience Requirements' },
    { item: 'Target population alignment', met: true, reference: 'Page 6, Section 3.5 - Population Focus' },
    { item: 'Budget range compliance ($100K-$150K)', met: overallScore > 85, reference: 'Page 8, Section 4.2 - Funding Limits' },
    { item: 'Evaluation requirements understanding', met: overallScore > 80, reference: 'Page 10, Section 5.1 - Evaluation Framework' }
  ];

  const requirementTemplates = [
    { type: 'Executive Summary', limit: '2 pages', priority: 'high', reference: 'Page 12, Section 5.1', completed: generateRandomMetric(1, 10) > 3 },
    { type: 'Project Description', limit: '8 pages', priority: 'high', reference: 'Page 13, Section 5.2', completed: generateRandomMetric(1, 10) > 4 },
    { type: 'Budget Narrative', limit: '4 pages', priority: 'high', reference: 'Page 15, Section 5.4', completed: generateRandomMetric(1, 10) > 6 },
    { type: 'Evaluation Plan', limit: '3 pages', priority: 'medium', reference: 'Page 16, Section 5.5', completed: generateRandomMetric(1, 10) > 7 },
    { type: 'Organizational Capacity', limit: '2 pages', priority: 'medium', reference: 'Page 17, Section 5.6', completed: generateRandomMetric(1, 10) > 5 },
    { type: 'Community Partnerships', limit: '1 page', priority: 'low', reference: 'Page 18, Section 5.7', completed: generateRandomMetric(1, 10) > 4 },
    { type: 'Sustainability Plan', limit: '1 page', priority: 'medium', reference: 'Page 19, Section 5.8', completed: generateRandomMetric(1, 10) > 8 },
    { type: 'Cultural Competency Statement', limit: '1 page', priority: 'low', reference: 'Page 20, Section 5.9', completed: generateRandomMetric(1, 10) > 6 }
  ];

  const riskTemplates = [
    { risk: 'Tight submission deadline (45 days)', impact: 'medium', mitigation: 'Use AI-assisted writing, start immediately with executive summary' },
    { risk: 'High competition from established organizations', impact: 'high', mitigation: 'Emphasize unique community focus and peer recovery specialization' },
    { risk: 'Budget justification complexity', impact: 'medium', mitigation: 'Leverage existing cost data from previous grants and programs' },
    { risk: 'Evaluation metrics alignment', impact: 'low', mitigation: 'Consult with evaluation consultant, use SAMHSA recommended frameworks' }
  ];

  return {
    rfpTitle,
    eligibility: {
      status: overallScore >= 85 ? 'PASS' : overallScore >= 70 ? 'CONDITIONAL' : 'FAIL',
      score: eligibilityScore,
      criteria: criteriaTemplates.slice(0, generateRandomMetric(4, 6))
    },
    requirements: requirementTemplates.slice(0, generateRandomMetric(6, 8)),
    fitScore: {
      overall: overallScore,
      breakdown: {
        eligibility: eligibilityScore,
        alignment: alignmentScore,
        capacity: capacityScore,
        competitive: competitiveScore
      }
    },
    risks: riskTemplates.slice(0, generateRandomMetric(2, 4)),
    advantages: [
      'Strong community presence in target geographic area',
      'Proven track record in peer recovery specialist training',
      'Existing partnerships with local healthcare and social service providers',
      'Leadership team with diverse backgrounds and lived experience',
      'Cost-effective service delivery model',
      'Demonstrated success with similar populations and interventions'
    ].slice(0, generateRandomMetric(4, 6)),
    recommendations: [
      'Emphasize the organization\'s 5+ years of peer recovery training experience',
      'Include compelling letters of support from community healthcare partners',
      'Add specific, measurable evaluation metrics for substance abuse recovery outcomes',
      'Highlight the cost-effectiveness of the peer recovery model vs. traditional approaches',
      'Include data on cultural competency and community engagement strategies',
      'Provide detailed staffing plan with qualifications and experience levels'
    ].slice(0, generateRandomMetric(4, 6)),
    timeline: {
      recommended: '45 days',
      breakdown: [
        { phase: 'Research & Planning', duration: '1 week', status: 'recommended' },
        { phase: 'Draft Writing', duration: '2 weeks', status: 'critical' },
        { phase: 'Review & Refinement', duration: '1 week', status: 'recommended' },
        { phase: 'Final Review & Submission', duration: '3 days', status: 'critical' }
      ]
    }
  };
};

const generateMockContent = (sectionType, includeMetrics = true) => {
  const getRandomCitation = () => {
    const sources = [
      'ALMSDC Strategic Plan 2024-2027',
      'ALMSDC Annual Report 2024',
      'DC Behavioral Health Workforce Assessment 2024',
      'SAMHSA Technical Report on Peer Recovery Services',
      'DC Health Community Needs Assessment 2023',
      'ALMSDC Training Curriculum Documentation',
      'Program Logic Model Framework',
      'Organizational Capacity Assessment 2024'
    ];
    const pages = generateRandomMetric(3, 25);
    return `[Source: ${sources[generateRandomMetric(0, sources.length-1)]}, Page ${pages}]`;
  };

  const templates = {
    'executive-summary': `A Little More Support DC (ALMSDC) respectfully requests $${generateRandomMetric(125, 150)},000 from SAMHSA to expand our Peer Recovery Specialist Training Program, an ${generateRandomMetric(18, 24)}-month initiative designed to address the critical shortage of qualified peer recovery specialists in Washington, DC's most underserved communities. ${getRandomCitation()}

Our organization has successfully operated for over ${generateRandomMetric(5, 8)} years at 1418 Good Hope Road Southeast, providing case management and peer recovery services to individuals with substance use disorders. Since 2019, we have trained and certified ${generateRandomMetric(40, 60)} peer recovery specialists with an ${generateRandomMetric(85, 95)}% job placement rate. ${getRandomCitation()}

The proposed program expansion will train ${generateRandomMetric(45, 75)} additional certified peer recovery specialists over ${generateRandomMetric(18, 30)} months, with all participants having at least one year of sobriety. Expected outcomes include ${generateRandomMetric(80, 90)}% program completion rate, ${generateRandomMetric(70, 85)}% job placement within 6 months, and measurable improvements in recovery outcomes for ${generateRandomMetric(250, 400)}+ individuals served. ${getRandomCitation()}`,

    'problem-statement': `Washington, DC faces a severe shortage of qualified peer recovery specialists, with current capacity meeting only ${generateRandomMetric(30, 40)}% of identified need according to the DC Department of Health. ${getRandomCitation()}

The Ward 7 and Ward 8 communities, where ALMSDC operates, have substance use disorder rates ${generateRandomMetric(35, 50)}% higher than the city average, yet access to culturally competent recovery services remains critically limited. Recent data shows that ${generateRandomMetric(60, 80)}% of individuals seeking recovery support face wait times exceeding ${generateRandomMetric(30, 90)} days. ${getRandomCitation()}

Without immediate expansion of peer recovery specialist capacity, over ${generateRandomMetric(1000, 1500)} individuals seeking recovery support will remain underserved annually. ALMSDC's proven training model and deep community connections position us uniquely to address this critical gap in behavioral health infrastructure. ${getRandomCitation()}`,

    'project-description': `The Peer Recovery Specialist Training Program Expansion will implement a comprehensive ${generateRandomMetric(4, 8)}-month training curriculum for ${generateRandomMetric(45, 60)} participants across ${generateRandomMetric(2, 4)} cohorts. Each cohort will receive ${generateRandomMetric(100, 150)} hours of training including trauma-informed care, motivational interviewing, ethics, crisis intervention, and cultural competency. ${getRandomCitation()}

Participants will complete ${generateRandomMetric(40, 80)} hours of supervised practicum experiences with our case management team, serving real clients under licensed clinical supervision. Upon completion, graduates receive nationally recognized certification and comprehensive job placement assistance through our ${generateRandomMetric(15, 25)} community partner organizations. ${getRandomCitation()}

The program directly addresses SAMHSA workforce development priorities by increasing demographic diversity, incorporating evidence-based cultural competency training, and emphasizing lived experience as a core qualification for effective peer support services. ${getRandomCitation()}`,

    'methodology': `Our evidence-based training methodology combines classroom instruction, experiential learning, and supervised field practice. The curriculum follows SAMHSA's Core Competencies for Peer Workers and incorporates ${generateRandomMetric(8, 12)} key training modules delivered over ${generateRandomMetric(16, 24)} weeks. ${getRandomCitation()}

Training delivery utilizes a hybrid model with ${generateRandomMetric(60, 80)}% in-person instruction and ${generateRandomMetric(20, 40)}% virtual components to accommodate diverse participant schedules. Each cohort maintains a maximum size of ${generateRandomMetric(15, 20)} participants to ensure personalized attention and group cohesion. ${getRandomCitation()}

Quality assurance mechanisms include weekly supervisor meetings, monthly progress assessments, and standardized competency evaluations. All training staff hold relevant graduate degrees and maintain current certifications in their specialty areas. ${getRandomCitation()}`,

    'evaluation': `The evaluation plan employs a mixed-methods approach measuring both process and outcome indicators aligned with SAMHSA's performance measurement requirements. Primary outcomes include training completion rates, certification pass rates, job placement success, and participant satisfaction scores. ${getRandomCitation()}

Data collection occurs at baseline, mid-program (${generateRandomMetric(3, 4)} months), program completion, and ${generateRandomMetric(6, 12)} months post-graduation. Standardized instruments include the Recovery Knowledge Inventory, Cultural Competency Self-Assessment Tool, and Employment Outcomes Survey. ${getRandomCitation()}

The evaluation design incorporates both quantitative metrics and qualitative feedback through focus groups, individual interviews, and employer surveys. Expected benchmarks include ${generateRandomMetric(85, 95)}% completion rate, ${generateRandomMetric(80, 90)}% certification pass rate, and ${generateRandomMetric(75, 85)}% job placement within 6 months. ${getRandomCitation()}`
  };

  return templates[sectionType] || `AI-generated content for ${sectionType} section will appear here based on RFP requirements and organizational knowledge base. Content will include relevant citations, metrics, and evidence-based approaches tailored to the specific requirements. ${getRandomCitation()}`;
};

// Generate mock collaborator data
const generateMockCollaborators = () => {
  const collaboratorPool = [
    { name: "Sarah Johnson", role: "Program Manager", sections: ["methodology", "project-description"] },
    { name: "Marcus Williams", role: "Evaluation Specialist", sections: ["evaluation", "methodology"] },
    { name: "Dr. Angela Davis", role: "Clinical Director", sections: ["project-description", "problem-statement"] },
    { name: "James Rodriguez", role: "Community Liaison", sections: ["problem-statement", "executive-summary"] },
    { name: "Maya Patel", role: "Research Coordinator", sections: ["evaluation", "methodology"] },
    { name: "Alex Thompson", role: "Grant Writer", sections: ["executive-summary", "project-description"] },
    { name: "Dr. Keisha Washington", role: "Medical Director", sections: ["project-description", "evaluation"] }
  ];

  const colors = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6", "#06b6d4", "#84cc16"];
  const statuses = ["actively editing", "reviewing", "commenting", "researching", "fact-checking"];

  const numCollaborators = generateRandomMetric(2, 4);
  const selected = collaboratorPool.slice(0, numCollaborators);

  return selected.map((collab, index) => ({
    ...collab,
    section: collab.sections[generateRandomMetric(0, collab.sections.length - 1)],
    color: colors[index % colors.length],
    status: statuses[generateRandomMetric(0, statuses.length - 1)],
    lastActive: new Date(Date.now() - generateRandomMetric(1, 30) * 60 * 1000).toLocaleTimeString()
  }));
};

// Mock RFP Analysis Data for New Opportunity Assessment
const mockRFPAnalysis = {
  documentInfo: {
    title: "Youth Empowerment Initiative - Community Development Grant",
    funder: "Hamilton Community Foundation",
    type: "Foundation Grant",
    deadline: "December 15, 2024",
    amount: "$75,000 - $150,000",
    duration: "18 months"
  },

  sentimentAnalysis: {
    overall: "Positive",
    score: 78,
    indicators: {
      competition: "Moderate - 45 expected applications",
      urgency: "High - Strong community need emphasis",
      alignment: "Excellent - 94% keyword match with youth development",
      requirements: "Moderate - Standard documentation needed",
      innovation: "High - Seeking creative approaches"
    },
    keyPhrases: [
      "evidence-based programming",
      "measurable community impact",
      "sustainable solutions",
      "collaborative partnerships",
      "diverse youth engagement"
    ]
  },

  requirementsExtraction: [
    {
      category: "Eligibility",
      requirements: [
        "501(c)(3) nonprofit status [Page 2, Section A]",
        "Minimum 3 years youth programming experience [Page 3, Section B.1]",
        "Geographic focus in Hamilton County [Page 3, Section B.2]",
        "Annual budget between $100K-$2M [Page 4, Section C]"
      ],
      ourStatus: "MEETS ALL",
      confidence: 95
    },
    {
      category: "Program Design",
      requirements: [
        "Serve youth ages 14-24 [Page 6, Section 2.1]",
        "Evidence-based intervention model [Page 7, Section 2.3]",
        "Minimum 75 direct beneficiaries [Page 8, Section 2.5]",
        "Community partnership component [Page 9, Section 3.1]"
      ],
      ourStatus: "STRONG MATCH",
      confidence: 88
    },
    {
      category: "Evaluation & Outcomes",
      requirements: [
        "Pre/post outcome measurement [Page 12, Section 4.2]",
        "Third-party evaluation component [Page 13, Section 4.4]",
        "Quarterly progress reporting [Page 14, Section 4.6]",
        "Sustainability plan required [Page 15, Section 4.8]"
      ],
      ourStatus: "NEEDS DEVELOPMENT",
      confidence: 65
    }
  ],

  competitiveAnalysis: {
    estimatedApplicants: 45,
    fundingHistory: "Funds 8-12 organizations annually",
    averageAward: "$95,000",
    successFactors: [
      "Strong evaluation methodology",
      "Demonstrated community partnerships",
      "Innovation in program delivery",
      "Clear sustainability planning"
    ]
  }
};

// Generate mock proposal data with realistic content
const generateMockProposal = (baseData) => {
  return {
    ...baseData,
    sections: {
      'executive-summary': {
        content: generateMockContent('executive-summary'),
        wordCount: generateRandomMetric(450, 950),
        citations: generateRandomMetric(3, 6),
        lastUpdated: new Date(Date.now() - generateRandomMetric(1, 7) * 24 * 60 * 60 * 1000).toLocaleDateString(),
        comments: generateRandomMetric(0, 3),
        version: `v1.${generateRandomMetric(1, 8)}`
      },
      'problem-statement': {
        content: generateMockContent('problem-statement'),
        wordCount: generateRandomMetric(600, 1200),
        citations: generateRandomMetric(4, 8),
        lastUpdated: new Date(Date.now() - generateRandomMetric(1, 5) * 24 * 60 * 60 * 1000).toLocaleDateString(),
        comments: generateRandomMetric(1, 4),
        version: `v1.${generateRandomMetric(1, 6)}`
      },
      'project-description': {
        content: generateMockContent('project-description'),
        wordCount: generateRandomMetric(800, 1500),
        citations: generateRandomMetric(5, 10),
        lastUpdated: new Date(Date.now() - generateRandomMetric(1, 3) * 24 * 60 * 60 * 1000).toLocaleDateString(),
        comments: generateRandomMetric(2, 6),
        version: `v1.${generateRandomMetric(1, 9)}`
      },
      'methodology': {
        content: generateMockContent('methodology'),
        wordCount: generateRandomMetric(700, 1300),
        citations: generateRandomMetric(4, 7),
        lastUpdated: new Date(Date.now() - generateRandomMetric(2, 8) * 24 * 60 * 60 * 1000).toLocaleDateString(),
        comments: generateRandomMetric(1, 5),
        version: `v1.${generateRandomMetric(1, 7)}`
      },
      'evaluation': {
        content: generateMockContent('evaluation'),
        wordCount: generateRandomMetric(600, 1100),
        citations: generateRandomMetric(3, 6),
        lastUpdated: new Date(Date.now() - generateRandomMetric(3, 10) * 24 * 60 * 60 * 1000).toLocaleDateString(),
        comments: generateRandomMetric(0, 4),
        version: `v1.${generateRandomMetric(1, 5)}`
      }
    },
    collaborators: generateMockCollaborators(),
    totalComments: generateRandomMetric(8, 25),
    totalRevisions: generateRandomMetric(15, 45)
  };
};

const FundingFrameApp = () => {
  const [currentView, setCurrentView] = useState("dashboard");
  const [selectedRFP, setSelectedRFP] = useState(null);
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Demo enhancement state
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [viewLoading, setViewLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");

  // Demo state management
  const [analysisResults, setAnalysisResults] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [analysisStep, setAnalysisStep] = useState('idle');
  const [demoWorkspace, setDemoWorkspace] = useState(null);

  // New Opportunity Assessment state
  const [opportunityStep, setOpportunityStep] = useState(1);
  const [opportunityData, setOpportunityData] = useState({});
  const [assessmentResponses, setAssessmentResponses] = useState({});
  const [selectedAction, setSelectedAction] = useState(null);
  const [fitScore, setFitScore] = useState(null);

  // Enhanced view transition with loading states
  const transitionToView = (newView, loadingMsg = "Loading...") => {
    if (newView === currentView) return;

    setIsTransitioning(true);
    setViewLoading(true);
    setLoadingMessage(loadingMsg);

    // Simulate realistic loading time based on view complexity
    const loadingTimes = {
      'dashboard': 800,
      'opportunities': 1200,
      'new-opportunity': 600,
      'workspace': 1000,
      'workspaces': 1000,
      'applications': 1500,
      'knowledge': 900,
      'documents': 700,
      'reports': 1300,
      'settings': 500,
      'rfp-analysis': 2000,
      'analysis-report': 1800,
      'demo-workspace': 1100
    };

    const loadingTime = loadingTimes[newView] || 800;

    setTimeout(() => {
      setCurrentView(newView);
      setViewLoading(false);
      setTimeout(() => setIsTransitioning(false), 300);
    }, loadingTime);
  };

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "barChart" },
    { id: "opportunities", label: "Opportunities", icon: "target" },
    { id: "new-opportunity", label: "New Opportunity", icon: "plus" },
    { id: "workspaces", label: "Workspaces", icon: "fileText" },
    { id: "applications", label: "Applications", icon: "calendar" },
    { id: "knowledge", label: "Knowledge Base", icon: "bookOpen" },
    { id: "documents", label: "Documents", icon: "fileText" },
    { id: "reports", label: "Reports", icon: "pieChart" },
    { id: "settings", label: "Settings", icon: "settings" },
  ];

  // Demo simulation functions
  const simulateFileUpload = (fileName) => {
    setAnalysisStep('uploading');
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => startAnalysis(fileName), 500);
          return 100;
        }
        return newProgress;
      });
    }, 200);
  };

  const startAnalysis = (fileName) => {
    const steps = ['processing', 'analyzing', 'calculating', 'complete'];
    let currentStepIndex = 0;

    const stepInterval = setInterval(() => {
      setAnalysisStep(steps[currentStepIndex]);
      currentStepIndex++;

      if (currentStepIndex >= steps.length) {
        clearInterval(stepInterval);
        const results = generateMockAnalysis();
        results.fileName = fileName;
        results.uploadDate = new Date().toISOString();
        setAnalysisResults(results);
      }
    }, 2500);
  };

  const createWorkspaceFromAnalysis = () => {
    const workspace = {
      id: Date.now(),
      title: "SAMHSA Peer Recovery Training Expansion",
      rfp: "Substance Abuse Prevention and Treatment Block Grant",
      requirements: analysisResults.requirements,
      fitScore: analysisResults.fitScore.overall,
      deadline: "2025-11-15",
      sections: {
        'executive-summary': {
          content: generateMockContent('executive-summary'),
          wordCount: 287,
          isGenerated: true,
          lastUpdated: new Date().toISOString()
        },
        'problem-statement': {
          content: '',
          wordCount: 0,
          isGenerated: false,
          lastUpdated: null
        },
        'project-description': {
          content: '',
          wordCount: 0,
          isGenerated: false,
          lastUpdated: null
        }
      }
    };
    setDemoWorkspace(workspace);
    transitionToView('demo-workspace', 'Creating AI-powered workspace...');
  };

  // Breadcrumb Navigation Component
  const BreadcrumbNav = () => {
    const getBreadcrumbs = () => {
      switch (currentView) {
        case "dashboard":
          return [{ label: "Dashboard", active: true }];
        case "opportunities":
          return [
            { label: "Dashboard", onClick: () => transitionToView("dashboard") },
            { label: "Opportunities", active: true }
          ];
        case "new-opportunity":
          return [
            { label: "Dashboard", onClick: () => transitionToView("dashboard") },
            { label: "New Opportunity", active: true }
          ];
        case "workspaces":
        case "workspace":
          return [
            { label: "Dashboard", onClick: () => transitionToView("dashboard") },
            { label: "Workspaces", active: true }
          ];
        case "applications":
          return [
            { label: "Dashboard", onClick: () => transitionToView("dashboard") },
            { label: "Applications", active: true }
          ];
        case "knowledge":
          return [
            { label: "Dashboard", onClick: () => transitionToView("dashboard") },
            { label: "Knowledge Base", active: true }
          ];
        case "documents":
          return [
            { label: "Dashboard", onClick: () => transitionToView("dashboard") },
            { label: "Documents", active: true }
          ];
        case "reports":
          return [
            { label: "Dashboard", onClick: () => transitionToView("dashboard") },
            { label: "Reports", active: true }
          ];
        case "settings":
          return [
            { label: "Dashboard", onClick: () => transitionToView("dashboard") },
            { label: "Settings", active: true }
          ];
        default:
          return [{ label: "Dashboard", active: true }];
      }
    };

    const breadcrumbs = getBreadcrumbs();

    return (
      <nav style={{
        padding: "12px 24px",
        backgroundColor: "#f9fafb",
        borderBottom: "1px solid #e5e7eb",
        fontSize: "14px"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {breadcrumbs.map((crumb, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {index > 0 && (
                <Icon name="chevronRight" size={14} color="#9ca3af" />
              )}
              {crumb.active ? (
                <span style={{
                  color: "#374151",
                  fontWeight: "500"
                }}>
                  {crumb.label}
                </span>
              ) : (
                <button
                  onClick={crumb.onClick}
                  style={{
                    color: "#2563eb",
                    textDecoration: "none",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    fontSize: "14px"
                  }}
                  onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
                  onMouseLeave={(e) => e.target.style.textDecoration = "none"}
                >
                  {crumb.label}
                </button>
              )}
            </div>
          ))}
        </div>
      </nav>
    );
  };

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
                width: "40px",
                height: "40px",
                background: "linear-gradient(135deg, #0f766e 0%, #1e40af 100%)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon name="brain" size={24} color="white" />
            </div>
            <div>
              <h1
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#111827",
                  margin: 0,
                  lineHeight: "1.2",
                }}
              >
                FundingFrame
              </h1>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#6b7280",
                    margin: 0,
                    fontWeight: "500",
                    letterSpacing: "0.5px",
                  }}
                >
                  by TwentyNine Eleven Impact Partners
                </p>
                <div style={{
                  backgroundColor: "#fef3c7",
                  color: "#92400e",
                  padding: "2px 6px",
                  borderRadius: "4px",
                  fontSize: "10px",
                  fontWeight: "600",
                  letterSpacing: "0.5px"
                }}>
                  DEMO
                </div>
              </div>
            </div>
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
      <div style={{ padding: "24px 20px 16px 20px", borderBottom: "1px solid #f3f4f6" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h3 style={{
            fontSize: "14px",
            fontWeight: "600",
            color: "#6b7280",
            margin: 0,
            letterSpacing: "0.5px",
            textTransform: "uppercase"
          }}>
            Navigation
          </h3>
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            style={{
              padding: "4px",
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
              borderRadius: "4px",
              color: "#9ca3af"
            }}
          >
            <Icon name="menu" size={16} />
          </button>
        </div>
      </div>

      <nav style={{ padding: "16px", flex: 1 }}>
        {navItems.map((item) => {
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => transitionToView(item.id, `Loading ${item.label}...`)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                padding: "12px 16px",
                fontSize: "15px",
                fontWeight: isActive ? "600" : "500",
                borderRadius: "12px",
                marginBottom: "6px",
                border: "none",
                background: isActive ? "linear-gradient(135deg, #0f766e 0%, #1e40af 100%)" : "transparent",
                color: isActive ? "#ffffff" : "#4b5563",
                cursor: "pointer",
                gap: "14px",
                transition: "all 0.2s ease",
                textAlign: "left",
                position: "relative",
                boxShadow: isActive ? "0 2px 8px rgba(15, 118, 110, 0.3)" : "none",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.target.style.backgroundColor = "#f9fafb";
                  e.target.style.color = "#1f2937";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#4b5563";
                }
              }}
            >
              {isActive && (
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "4px",
                  background: "#ffffff",
                  borderRadius: "0 4px 4px 0"
                }} />
              )}
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "20px",
                height: "20px",
              }}>
                <Icon name={item.icon} size={20} color={isActive ? "#ffffff" : "#6b7280"} />
              </div>
              <span style={{ flex: 1 }}>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div style={{
        padding: "20px",
        borderTop: "1px solid #f3f4f6",
        backgroundColor: "#f9fafb"
      }}>
        <div style={{
          padding: "16px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          border: "1px solid #e5e7eb"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
            <div style={{
              width: "32px",
              height: "32px",
              backgroundColor: "#d1d5db",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <Icon name="user" size={16} color="#6b7280" />
            </div>
            <div>
              <div style={{ fontSize: "14px", fontWeight: "600", color: "#111827" }}>
                {mockUser.name}
              </div>
              <div style={{ fontSize: "12px", color: "#6b7280" }}>
                {mockUser.role}
              </div>
            </div>
          </div>
          <div style={{ fontSize: "11px", color: "#9ca3af", lineHeight: "1.4" }}>
            {mockUser.organization}
          </div>
        </div>
      </div>
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
          Welcome to FundingFrame Demo
        </h2>
        <p style={{ color: "#dbeafe", margin: "0 0 16px 0" }}>
          Experience the future of grant management. Explore AI-powered proposal writing, 
          opportunity analysis, and collaborative workspace features.
        </p>
        <button
          onClick={() => transitionToView("opportunities", "Loading funding opportunities...")}
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
            value: "2",
            icon: "fileText",
            color: "#2563eb",
            trend: "↑ 1 from last month",
          },
          {
            title: "Success Rate",
            value: "78%",
            icon: "trendingUp",
            color: "#059669",
            trend: "↑ 15% improvement",
          },
          {
            title: "Total Awarded",
            value: "$485K",
            icon: "award",
            color: "#d97706",
            trend: "This fiscal year",
          },
          {
            title: "People Served",
            value: "320",
            icon: "users",
            color: "#7c3aed",
            trend: "Individuals supported",
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
                      transitionToView("workspace", "Opening proposal workspace...");
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
                Community Health Workers Initiative
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
                Substance Abuse Prevention Block Grant
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
            onClick={() => transitionToView("rfp-upload", "Preparing RFP upload interface...")}
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
                  transitionToView("rfp-analysis", "Analyzing RFP with AI...");
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
                  transitionToView("workspace", "Opening workspace...");
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
    const [aiPanelOpen, setAiPanelOpen] = useState(false);
    const [aiPrompt, setAiPrompt] = useState("");
    const [citationPanelOpen, setCitationPanelOpen] = useState(false);
    const [activeCollaborators, setActiveCollaborators] = useState([
      { name: "Sarah Johnson", section: "methodology", color: "#10b981", role: "Program Manager", status: "actively editing" },
      { name: "Marcus Williams", section: "evaluation", color: "#3b82f6", role: "Evaluation Specialist", status: "reviewing" },
      { name: "Dr. Angela Davis", section: "project-description", color: "#f59e0b", role: "Clinical Director", status: "commenting" }
    ]);
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

    const citations = [
      {
        id: 1,
        source: "ALMSDC Mission Statement",
        document: "Core Programs Overview",
        page: "Page 3, Section 2.1",
        status: "validated",
        usedIn: ["executive-summary"]
      },
      {
        id: 2,
        source: "ALMSDC Organizational Profile",
        document: "Service History Report",
        page: "Page 7, Section 4.2",
        status: "validated",
        usedIn: ["executive-summary", "problem-statement"]
      },
      {
        id: 3,
        source: "Program Logic Model",
        document: "Peer Training Expansion",
        page: "Table 2, Outcomes Matrix",
        status: "validated",
        usedIn: ["executive-summary", "methodology"]
      },
      {
        id: 4,
        source: "SAMHSA Guidelines",
        document: "Peer Recovery Specialist Standards",
        page: "Section 3.4",
        status: "pending",
        usedIn: ["methodology"]
      }
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

            {/* Real-time Collaboration */}
            <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid #f3f4f6" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", color: "#6b7280", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Active Collaborators
              </div>
              {activeCollaborators.map((collab, index) => (
                <div key={index} style={{
                  marginBottom: "12px",
                  padding: "10px",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  border: `1px solid ${collab.color}20`,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                    <div style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: collab.color,
                      borderRadius: "50%",
                      animation: "pulse 2s infinite",
                      boxShadow: `0 0 0 2px ${collab.color}20`
                    }} />
                    <span style={{ fontSize: "12px", fontWeight: "600", color: "#111827" }}>{collab.name}</span>
                  </div>
                  <div style={{ fontSize: "11px", color: "#6b7280", marginLeft: "18px", marginBottom: "4px" }}>
                    {collab.role}
                  </div>
                  <div style={{
                    fontSize: "10px",
                    color: collab.status === "actively editing" ? "#059669" : collab.status === "reviewing" ? "#2563eb" : "#f59e0b",
                    marginLeft: "18px",
                    fontWeight: "500",
                    textTransform: "capitalize"
                  }}>
                    {collab.status} • {collab.section.replace('-', ' ')}
                  </div>
                </div>
              ))}

              {/* Collaboration Stats */}
              <div style={{
                marginTop: "12px",
                padding: "8px",
                backgroundColor: "#f8fafc",
                borderRadius: "6px",
                fontSize: "11px",
                color: "#64748b"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "2px" }}>
                  <span>Total Comments</span>
                  <span style={{ fontWeight: "600" }}>{generateRandomMetric(15, 35)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Last Activity</span>
                  <span style={{ fontWeight: "600" }}>2 min ago</span>
                </div>
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
                  position: "relative"
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
                        backgroundColor: section.status === "completed" ? "#dcfce7" : "#f3f4f6",
                        borderRadius: "9999px",
                        height: "6px",
                        border: section.status === "completed" ? "1px solid #bbf7d0" : "1px solid #e5e7eb"
                      }}
                    >
                      <div
                        style={{
                          height: "4px",
                          borderRadius: "9999px",
                          width: `${section.progress}%`,
                          backgroundColor:
                            section.status === "completed"
                              ? "#10b981"
                              : section.status === "in-progress"
                              ? "#3b82f6"
                              : "#9ca3af",
                          transition: "all 0.3s ease",
                          marginTop: "1px"
                        }}
                      />
                    </div>
                    {section.status === "completed" ? (
                      <Icon name="checkCircle" size={14} color="#10b981" />
                    ) : section.status === "in-progress" ? (
                      <div style={{
                        width: "14px",
                        height: "14px",
                        border: "2px solid #dbeafe",
                        borderTop: "2px solid #3b82f6",
                        borderRadius: "50%",
                        animation: "spin 1s linear infinite"
                      }} />
                    ) : (
                      <div style={{
                        width: "14px",
                        height: "14px",
                        backgroundColor: "#f3f4f6",
                        border: "1px solid #d1d5db",
                        borderRadius: "50%"
                      }} />
                    )}
                  </div>
                </div>
                {/* Active collaborator indicator */}
                {activeCollaborators.find(c => c.section === section.id) && (
                  <div style={{
                    position: "absolute",
                    top: "8px",
                    right: "8px",
                    width: "6px",
                    height: "6px",
                    backgroundColor: activeCollaborators.find(c => c.section === section.id)?.color,
                    borderRadius: "50%",
                    animation: "pulse 2s infinite"
                  }} title={`${activeCollaborators.find(c => c.section === section.id)?.name} is ${activeCollaborators.find(c => c.section === section.id)?.status}`} />
                )}
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
                onClick={() => setAiPanelOpen(!aiPanelOpen)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 12px",
                  fontSize: "14px",
                  border: aiPanelOpen ? "1px solid #2563eb" : "1px solid #d1d5db",
                  borderRadius: "8px",
                  backgroundColor: aiPanelOpen ? "#eff6ff" : "white",
                  color: aiPanelOpen ? "#2563eb" : "#374151",
                  cursor: "pointer",
                }}
              >
                <Icon name="brain" size={16} />
                AI Assistant
              </button>
              <button
                onClick={() => setCitationPanelOpen(!citationPanelOpen)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 12px",
                  fontSize: "14px",
                  border: citationPanelOpen ? "1px solid #2563eb" : "1px solid #d1d5db",
                  borderRadius: "8px",
                  backgroundColor: citationPanelOpen ? "#eff6ff" : "white",
                  color: citationPanelOpen ? "#2563eb" : "#374151",
                  cursor: "pointer",
                }}
              >
                <Icon name="book" size={16} />
                Citations ({citations.length})
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

          <div style={{ flex: 1, display: "flex" }}>
            {/* Main content area */}
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
                      A Little More Support DC (ALMSDC) respectfully requests $125,000
                      from SAMHSA to expand our Peer Recovery Specialist Training Program,
                      a comprehensive initiative designed to address the social determinants
                      of health for individuals with substance abuse disorders in Washington, DC.{" "}
                      <span
                        style={{
                          backgroundColor: "#fef3c7",
                          padding: "2px 4px",
                          borderRadius: "3px",
                          fontSize: "12px",
                          marginLeft: "4px",
                          cursor: "pointer"
                        }}
                        title="Click to view citation details"
                      >
                        [1]
                      </span>
                    </p>
                    <p>
                      Our organization, located at 1418 Good Hope Road Southeast, has
                      successfully provided case management and peer recovery services
                      to underserved populations, transforming them into thriving,
                      sustainable communities through evidence-based practices.{" "}
                      <span
                        style={{
                          backgroundColor: "#fef3c7",
                          padding: "2px 4px",
                          borderRadius: "3px",
                          fontSize: "12px",
                          marginLeft: "4px",
                          cursor: "pointer"
                        }}
                        title="Click to view citation details"
                      >
                        [2]
                      </span>
                    </p>
                    <p>
                      The proposed program expansion will train 50 additional Peer Recovery
                      Specialists over 18 months, requiring participants to have at least
                      one year of sobriety. Expected outcomes include 85% of participants
                      completing certification, 75% securing employment as peer specialists,
                      and 90% reporting improved ability to support individuals in recovery.{" "}
                      <span
                        style={{
                          backgroundColor: "#fef3c7",
                          padding: "2px 4px",
                          borderRadius: "3px",
                          fontSize: "12px",
                          marginLeft: "4px",
                          cursor: "pointer"
                        }}
                        title="Click to view citation details"
                      >
                        [3]
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
                    <span>Word count: 287 / 500 maximum</span>
                    <span style={{ color: "#10b981" }}>Citations: 3 validated</span>
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
                      [This section is in progress. Use AI Assistant to generate
                      content based on your organizational knowledge base...]
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* AI Writing Assistant Panel */}
            {aiPanelOpen && (
              <div style={{
                width: "350px",
                backgroundColor: "white",
                borderLeft: "1px solid #e5e7eb",
                display: "flex",
                flexDirection: "column"
              }}>
                <div style={{
                  padding: "20px",
                  borderBottom: "1px solid #e5e7eb",
                  backgroundColor: "#f8fafc"
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                    <Icon name="brain" size={20} color="#2563eb" />
                    <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#111827", margin: 0 }}>
                      AI Writing Assistant
                    </h3>
                  </div>
                  <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>
                    Get intelligent suggestions for improving your proposal content
                  </p>
                </div>

                <div style={{ padding: "20px", flex: 1 }}>
                  <div style={{ marginBottom: "16px" }}>
                    <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", display: "block", marginBottom: "8px" }}>
                      What would you like help with?
                    </label>
                    <textarea
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                      placeholder="e.g., 'Help me strengthen the methodology section' or 'Suggest improvements for impact measurement'"
                      style={{
                        width: "100%",
                        minHeight: "80px",
                        padding: "12px",
                        border: "1px solid #d1d5db",
                        borderRadius: "8px",
                        fontSize: "14px",
                        resize: "vertical"
                      }}
                    />
                  </div>

                  <button style={{
                    width: "100%",
                    padding: "10px 16px",
                    backgroundColor: "#2563eb",
                    color: "white",
                    borderRadius: "8px",
                    border: "none",
                    fontSize: "14px",
                    fontWeight: "500",
                    cursor: "pointer",
                    marginBottom: "20px"
                  }}>
                    Generate Suggestions
                  </button>

                  <div style={{ paddingTop: "16px", borderTop: "1px solid #f3f4f6" }}>
                    <h4 style={{ fontSize: "14px", fontWeight: "600", color: "#374151", marginBottom: "12px" }}>
                      Quick Actions
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      {[
                        "Improve clarity and flow",
                        "Add evidence citations",
                        "Strengthen impact metrics",
                        "Enhance budget justification"
                      ].map((action, index) => (
                        <button key={index} style={{
                          padding: "8px 12px",
                          backgroundColor: "#f8fafc",
                          border: "1px solid #e2e8f0",
                          borderRadius: "6px",
                          fontSize: "13px",
                          textAlign: "left",
                          cursor: "pointer",
                          color: "#475569"
                        }}>
                          {action}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Citation Tracker Panel */}
            {citationPanelOpen && (
              <div style={{
                width: "350px",
                backgroundColor: "white",
                borderLeft: "1px solid #e5e7eb",
                display: "flex",
                flexDirection: "column"
              }}>
                <div style={{
                  padding: "20px",
                  borderBottom: "1px solid #e5e7eb",
                  backgroundColor: "#f8fafc"
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                    <Icon name="book" size={20} color="#2563eb" />
                    <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#111827", margin: 0 }}>
                      Citation Tracker
                    </h3>
                  </div>
                  <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>
                    Manage sources and references for your proposal
                  </p>
                </div>

                <div style={{ padding: "20px", flex: 1, overflowY: "auto" }}>
                  <div style={{ marginBottom: "20px" }}>
                    <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
                      <div style={{
                        padding: "6px 12px",
                        backgroundColor: "#dcfce7",
                        color: "#166534",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "500"
                      }}>
                        {citations.filter(c => c.status === "validated").length} Validated
                      </div>
                      <div style={{
                        padding: "6px 12px",
                        backgroundColor: "#fef3c7",
                        color: "#92400e",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "500"
                      }}>
                        {citations.filter(c => c.status === "pending").length} Pending
                      </div>
                    </div>

                    {citations.map((citation) => (
                      <div key={citation.id} style={{
                        padding: "12px",
                        border: "1px solid #e5e7eb",
                        borderRadius: "8px",
                        marginBottom: "12px",
                        backgroundColor: citation.status === "validated" ? "#f0fdf4" : "#fffbeb"
                      }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                          <span style={{ fontSize: "14px", fontWeight: "600", color: "#111827" }}>
                            [{citation.id}]
                          </span>
                          <div style={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: citation.status === "validated" ? "#10b981" : "#f59e0b"
                          }} />
                        </div>
                        <div style={{ fontSize: "13px", color: "#374151", marginBottom: "4px" }}>
                          <strong>{citation.source}</strong>
                        </div>
                        <div style={{ fontSize: "12px", color: "#6b7280", marginBottom: "4px" }}>
                          {citation.document}
                        </div>
                        <div style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "8px" }}>
                          {citation.page}
                        </div>
                        <div style={{ fontSize: "11px", color: "#6b7280" }}>
                          Used in: {citation.usedIn.join(", ")}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button style={{
                    width: "100%",
                    padding: "10px 16px",
                    backgroundColor: "#f8fafc",
                    border: "1px dashed #cbd5e1",
                    borderRadius: "8px",
                    fontSize: "14px",
                    color: "#64748b",
                    cursor: "pointer"
                  }}>
                    + Add New Citation
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const ApplicationsView = () => {
    const kanbanColumns = [
      {
        id: "draft",
        title: "Draft",
        color: "#6b7280",
        proposals: mockProposals.filter(p => p.status === "draft"),
      },
      {
        id: "in_review",
        title: "In Review",
        color: "#2563eb",
        proposals: mockProposals.filter(p => p.status === "in_review"),
      },
      {
        id: "submitted",
        title: "Submitted",
        color: "#7c3aed",
        proposals: mockProposals.filter(p => p.status === "submitted"),
      },
      {
        id: "awarded",
        title: "Awarded",
        color: "#059669",
        proposals: mockProposals.filter(p => p.status === "awarded"),
      },
      {
        id: "rejected",
        title: "Rejected",
        color: "#dc2626",
        proposals: mockProposals.filter(p => p.status === "rejected"),
      },
    ];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#111827", margin: 0 }}>
            Application Tracker
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button style={{
              display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px",
              border: "1px solid #d1d5db", borderRadius: "8px", backgroundColor: "white", cursor: "pointer"
            }}>
              <Icon name="filter" size={16} />
              Filter
            </button>
            <button style={{
              display: "flex", alignItems: "center", gap: "8px", padding: "8px 16px",
              backgroundColor: "#2563eb", color: "white", borderRadius: "8px", border: "none", cursor: "pointer"
            }}>
              <Icon name="plus" size={16} />
              New Application
            </button>
          </div>
        </div>

        <div style={{ display: "flex", gap: "24px", overflowX: "auto", minHeight: "600px" }}>
          {kanbanColumns.map((column) => (
            <div key={column.id} style={{ minWidth: "300px", backgroundColor: "#f9fafb", borderRadius: "12px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#111827", margin: 0 }}>
                  {column.title}
                </h3>
                <span style={{
                  backgroundColor: column.color, color: "white", borderRadius: "12px",
                  padding: "4px 8px", fontSize: "12px", fontWeight: "500"
                }}>
                  {column.proposals.length}
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {column.proposals.map((proposal) => (
                  <div key={proposal.id} style={{
                    backgroundColor: "white", borderRadius: "8px", padding: "16px",
                    border: "1px solid #e5e7eb", cursor: "pointer", transition: "box-shadow 0.2s ease"
                  }}>
                    <h4 style={{ fontSize: "14px", fontWeight: "600", color: "#111827", margin: "0 0 8px 0" }}>
                      {proposal.title}
                    </h4>
                    <p style={{ fontSize: "12px", color: "#6b7280", margin: "0 0 12px 0" }}>
                      {proposal.rfp}
                    </p>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "500", color: "#059669" }}>
                        {proposal.estimatedAmount}
                      </span>
                      <span style={{ fontSize: "12px", color: "#6b7280" }}>
                        Due: {new Date(proposal.deadline).toLocaleDateString()}
                      </span>
                    </div>

                    {proposal.status !== "rejected" && proposal.status !== "awarded" && (
                      <div style={{ marginBottom: "12px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "4px" }}>
                          <span>Progress</span>
                          <span>{proposal.progress}%</span>
                        </div>
                        <div style={{ width: "100%", backgroundColor: "#e5e7eb", borderRadius: "9999px", height: "6px" }}>
                          <div style={{
                            backgroundColor: "#3b82f6", height: "6px", borderRadius: "9999px",
                            width: `${proposal.progress}%`
                          }} />
                        </div>
                      </div>
                    )}

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontSize: "12px", color: "#6b7280" }}>
                        {proposal.assignedTo}
                      </span>
                      <span style={{ fontSize: "12px", color: "#6b7280" }}>
                        {proposal.lastUpdated}
                      </span>
                    </div>

                    {proposal.status === "awarded" && (
                      <div style={{ marginTop: "8px", padding: "8px", backgroundColor: "#dcfce7", borderRadius: "6px" }}>
                        <span style={{ fontSize: "12px", color: "#166534", fontWeight: "500" }}>
                          Awarded: {new Date(proposal.awardDate).toLocaleDateString()}
                        </span>
                      </div>
                    )}

                    {proposal.status === "rejected" && (
                      <div style={{ marginTop: "8px", padding: "8px", backgroundColor: "#fef2f2", borderRadius: "6px" }}>
                        <span style={{ fontSize: "12px", color: "#991b1b", fontWeight: "500" }}>
                          Rejected: {proposal.rejectionReason}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const KnowledgeBaseView = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const categories = ["all", "Grant Writing", "Partnerships", "Programs", "Compliance"];

    const filteredItems = selectedCategory === "all"
      ? mockKnowledgeBase
      : mockKnowledgeBase.filter(item => item.category === selectedCategory);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#111827", margin: 0 }}>
            Knowledge Base
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button style={{
              display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px",
              border: "1px solid #d1d5db", borderRadius: "8px", backgroundColor: "white", cursor: "pointer"
            }}>
              <Icon name="search" size={16} />
              Search
            </button>
            <button style={{
              display: "flex", alignItems: "center", gap: "8px", padding: "8px 16px",
              backgroundColor: "#2563eb", color: "white", borderRadius: "8px", border: "none", cursor: "pointer"
            }}>
              <Icon name="plus" size={16} />
              Add Article
            </button>
          </div>
        </div>

        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: "8px 16px", borderRadius: "20px", fontSize: "14px", fontWeight: "500",
                border: selectedCategory === category ? "none" : "1px solid #d1d5db",
                backgroundColor: selectedCategory === category ? "#2563eb" : "white",
                color: selectedCategory === category ? "white" : "#6b7280",
                cursor: "pointer", transition: "all 0.2s ease"
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "24px" }}>
          {filteredItems.map((item) => (
            <div key={item.id} style={{
              ...styles.card, cursor: "pointer", transition: "box-shadow 0.2s ease",
              position: "relative"
            }}>
              <div style={{ display: "flex", alignItems: "start", justifyContent: "space-between", marginBottom: "12px" }}>
                <div>
                  <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111827", margin: "0 0 8px 0" }}>
                    {item.title}
                  </h3>
                  <span style={{
                    padding: "4px 8px", fontSize: "12px", fontWeight: "500", borderRadius: "12px",
                    backgroundColor: "#dbeafe", color: "#1d4ed8"
                  }}>
                    {item.category}
                  </span>
                </div>
                <Icon name="bookOpen" size={20} color="#6b7280" />
              </div>

              <p style={{ fontSize: "14px", color: "#6b7280", margin: "0 0 16px 0", lineHeight: "1.5" }}>
                {item.content}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                {item.tags.map((tag, index) => (
                  <span key={index} style={{
                    padding: "2px 8px", fontSize: "11px", backgroundColor: "#f3f4f6",
                    color: "#6b7280", borderRadius: "8px"
                  }}>
                    #{tag}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "12px", color: "#6b7280" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span>Updated by {item.updatedBy}</span>
                  <span>{new Date(item.lastUpdated).toLocaleDateString()}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <Icon name="eye" size={12} />
                  <span>{item.views} views</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ ...styles.card, backgroundColor: "#f9fafb", border: "2px dashed #d1d5db" }}>
          <div style={{ textAlign: "center", padding: "32px" }}>
            <Icon name="plus" size={32} color="#9ca3af" />
            <h3 style={{ fontSize: "16px", fontWeight: "500", color: "#6b7280", margin: "12px 0 8px 0" }}>
              Add New Knowledge Article
            </h3>
            <p style={{ fontSize: "14px", color: "#9ca3af", margin: 0 }}>
              Share best practices, templates, and institutional knowledge with your team
            </p>
          </div>
        </div>
      </div>
    );
  };

  const DocumentsView = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [viewMode, setViewMode] = useState("grid");
    const categories = ["all", "Organizational", "Financial", "Program", "Governance"];

    const filteredDocs = selectedCategory === "all"
      ? mockDocuments
      : mockDocuments.filter(doc => doc.category === selectedCategory);

    const getFileIcon = (type) => {
      switch(type.toLowerCase()) {
        case 'pdf': return 'fileText';
        case 'excel': return 'barChart';
        case 'word': return 'fileText';
        default: return 'fileText';
      }
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#111827", margin: 0 }}>
            Document Management
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ display: "flex", border: "1px solid #d1d5db", borderRadius: "8px", overflow: "hidden" }}>
              <button
                onClick={() => setViewMode("grid")}
                style={{
                  padding: "8px 12px", border: "none", cursor: "pointer",
                  backgroundColor: viewMode === "grid" ? "#f3f4f6" : "white",
                  color: viewMode === "grid" ? "#111827" : "#6b7280"
                }}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode("list")}
                style={{
                  padding: "8px 12px", border: "none", cursor: "pointer",
                  backgroundColor: viewMode === "list" ? "#f3f4f6" : "white",
                  color: viewMode === "list" ? "#111827" : "#6b7280"
                }}
              >
                List
              </button>
            </div>
            <button style={{
              display: "flex", alignItems: "center", gap: "8px", padding: "8px 16px",
              backgroundColor: "#2563eb", color: "white", borderRadius: "8px", border: "none", cursor: "pointer"
            }}>
              <Icon name="upload" size={16} />
              Upload Document
            </button>
          </div>
        </div>

        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: "8px 16px", borderRadius: "20px", fontSize: "14px", fontWeight: "500",
                border: selectedCategory === category ? "none" : "1px solid #d1d5db",
                backgroundColor: selectedCategory === category ? "#2563eb" : "white",
                color: selectedCategory === category ? "white" : "#6b7280",
                cursor: "pointer", transition: "all 0.2s ease"
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div style={{
          display: viewMode === "grid" ? "grid" : "flex",
          gridTemplateColumns: viewMode === "grid" ? "repeat(auto-fill, minmax(300px, 1fr))" : "none",
          flexDirection: viewMode === "list" ? "column" : "none",
          gap: "16px"
        }}>
          {filteredDocs.map((doc) => (
            <div key={doc.id} style={{
              ...styles.card,
              cursor: "pointer",
              transition: "box-shadow 0.2s ease",
              display: "flex",
              flexDirection: viewMode === "grid" ? "column" : "row",
              alignItems: viewMode === "list" ? "center" : "flex-start",
              gap: viewMode === "list" ? "16px" : "12px"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                width: viewMode === "list" ? "300px" : "100%"
              }}>
                <div style={{
                  width: "48px", height: "48px", backgroundColor: "#f3f4f6",
                  borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  <Icon name={getFileIcon(doc.type)} size={24} color="#6b7280" />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#111827", margin: "0 0 4px 0" }}>
                    {doc.name}
                  </h3>
                  <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>
                    {doc.type} • {doc.size}
                  </p>
                </div>
              </div>

              <div style={{
                display: "flex",
                flexDirection: viewMode === "list" ? "row" : "column",
                alignItems: viewMode === "list" ? "center" : "flex-start",
                gap: viewMode === "list" ? "24px" : "8px",
                flex: viewMode === "list" ? 1 : "none"
              }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {doc.tags.map((tag, index) => (
                    <span key={index} style={{
                      padding: "2px 6px", fontSize: "10px", backgroundColor: "#f3f4f6",
                      color: "#6b7280", borderRadius: "4px"
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{
                  display: "flex",
                  flexDirection: viewMode === "list" ? "row" : "column",
                  alignItems: viewMode === "list" ? "center" : "flex-start",
                  gap: viewMode === "list" ? "16px" : "4px",
                  fontSize: "12px",
                  color: "#6b7280"
                }}>
                  <span>Uploaded by {doc.uploadedBy}</span>
                  <span>{new Date(doc.uploadDate).toLocaleDateString()}</span>
                  <span>{doc.version}</span>
                </div>

                <div style={{ display: "flex", gap: "8px" }}>
                  <button style={{
                    padding: "4px 8px", fontSize: "12px", backgroundColor: "#f3f4f6",
                    border: "none", borderRadius: "4px", cursor: "pointer", color: "#6b7280"
                  }}>
                    <Icon name="download" size={12} />
                  </button>
                  <button style={{
                    padding: "4px 8px", fontSize: "12px", backgroundColor: "#f3f4f6",
                    border: "none", borderRadius: "4px", cursor: "pointer", color: "#6b7280"
                  }}>
                    <Icon name="edit" size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          ...styles.card,
          backgroundColor: "#f9fafb",
          border: "2px dashed #d1d5db",
          textAlign: "center",
          padding: "48px 24px"
        }}>
          <Icon name="upload" size={48} color="#9ca3af" />
          <h3 style={{ fontSize: "18px", fontWeight: "500", color: "#6b7280", margin: "16px 0 8px 0" }}>
            Drag and drop files here
          </h3>
          <p style={{ fontSize: "14px", color: "#9ca3af", margin: "0 0 16px 0" }}>
            Or click to select files from your computer
          </p>
          <button style={{
            padding: "8px 16px", backgroundColor: "#2563eb", color: "white",
            borderRadius: "6px", border: "none", cursor: "pointer", fontSize: "14px"
          }}>
            Choose Files
          </button>
        </div>
      </div>
    );
  };

  const ReportsView = () => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#111827", margin: 0 }}>
            Reports & Analytics
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <select style={{
              padding: "8px 12px", border: "1px solid #d1d5db", borderRadius: "8px",
              backgroundColor: "white", cursor: "pointer", fontSize: "14px"
            }}>
              <option>Last 6 months</option>
              <option>Last 3 months</option>
              <option>Last year</option>
            </select>
            <button style={{
              display: "flex", alignItems: "center", gap: "8px", padding: "8px 16px",
              backgroundColor: "#2563eb", color: "white", borderRadius: "8px", border: "none", cursor: "pointer"
            }}>
              <Icon name="download" size={16} />
              Export Report
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}>
          {[
            { title: "Grant Success Rate", value: "78%", change: "+15%", trend: "up", color: "#059669" },
            { title: "Total Funding Secured", value: "$485K", change: "+$125K", trend: "up", color: "#2563eb" },
            { title: "Average Review Time", value: "28 days", change: "-5 days", trend: "down", color: "#d97706" },
            { title: "Active Proposals", value: "3", change: "+1", trend: "up", color: "#7c3aed" },
          ].map((metric, index) => (
            <div key={index} style={{
              ...styles.card,
              background: "linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)",
              border: "1px solid #e5e7eb"
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                <h3 style={{ fontSize: "14px", fontWeight: "500", color: "#6b7280", margin: 0 }}>
                  {metric.title}
                </h3>
                <span style={{
                  fontSize: "12px", fontWeight: "500", padding: "2px 6px", borderRadius: "4px",
                  backgroundColor: metric.trend === "up" ? "#dcfce7" : "#fef3c7",
                  color: metric.trend === "up" ? "#166534" : "#92400e"
                }}>
                  {metric.change}
                </span>
              </div>
              <div style={{ fontSize: "32px", fontWeight: "bold", color: metric.color, marginBottom: "4px" }}>
                {metric.value}
              </div>
              <div style={{ fontSize: "12px", color: "#6b7280" }}>
                vs. previous period
              </div>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "24px" }}>
          {/* Grant Success Timeline */}
          <div style={styles.card}>
            <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111827", margin: "0 0 20px 0" }}>
              Grant Success Timeline
            </h3>
            <div style={{ height: "300px", backgroundColor: "#f9fafb", borderRadius: "8px", position: "relative", overflow: "hidden" }}>
              {/* Simulated Chart */}
              <div style={{ padding: "20px", height: "100%", display: "flex", alignItems: "end", justifyContent: "space-around" }}>
                {[
                  { month: "Apr", success: 60, total: 80 },
                  { month: "May", success: 75, total: 90 },
                  { month: "Jun", success: 85, total: 95 },
                  { month: "Jul", success: 70, total: 85 },
                  { month: "Aug", success: 80, total: 90 },
                  { month: "Sep", success: 78, total: 88 },
                ].map((data, index) => (
                  <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "200px", justifyContent: "end" }}>
                      <div style={{
                        width: "30px", height: `${data.success * 2}px`, backgroundColor: "#2563eb",
                        borderRadius: "4px 4px 0 0", marginBottom: "2px"
                      }} />
                      <div style={{
                        width: "30px", height: `${(data.total - data.success) * 2}px`, backgroundColor: "#e5e7eb",
                        borderRadius: "0 0 4px 4px"
                      }} />
                    </div>
                    <span style={{ fontSize: "12px", color: "#6b7280", fontWeight: "500" }}>{data.month}</span>
                  </div>
                ))}
              </div>
              <div style={{
                position: "absolute", top: "16px", right: "16px",
                display: "flex", gap: "16px", fontSize: "12px"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ width: "12px", height: "12px", backgroundColor: "#2563eb", borderRadius: "2px" }} />
                  <span>Successful</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ width: "12px", height: "12px", backgroundColor: "#e5e7eb", borderRadius: "2px" }} />
                  <span>Total Applications</span>
                </div>
              </div>
            </div>
          </div>

          {/* Funding Sources */}
          <div style={styles.card}>
            <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111827", margin: "0 0 20px 0" }}>
              Funding Sources
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { source: "Federal Grants", amount: "$245K", percentage: 50, color: "#2563eb" },
                { source: "Foundation Grants", amount: "$150K", percentage: 31, color: "#059669" },
                { source: "State Grants", amount: "$90K", percentage: 19, color: "#d97706" },
              ].map((item, index) => (
                <div key={index}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ fontSize: "14px", fontWeight: "500", color: "#374151" }}>{item.source}</span>
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#111827" }}>{item.amount}</span>
                  </div>
                  <div style={{ width: "100%", backgroundColor: "#f3f4f6", borderRadius: "4px", height: "8px" }}>
                    <div style={{
                      width: `${item.percentage}%`, backgroundColor: item.color,
                      height: "8px", borderRadius: "4px", transition: "width 0.3s ease"
                    }} />
                  </div>
                  <div style={{ fontSize: "12px", color: "#6b7280", marginTop: "2px" }}>
                    {item.percentage}% of total funding
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Reports */}
        <div style={styles.card}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111827", margin: "0 0 20px 0" }}>
            Recent Reports
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {mockReports.map((report) => (
              <div key={report.id} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "16px", backgroundColor: "#f9fafb", borderRadius: "8px",
                border: "1px solid #f3f4f6"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{
                    width: "40px", height: "40px", backgroundColor: "#dbeafe",
                    borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <Icon name="barChart" size={20} color="#2563eb" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "16px", fontWeight: "500", color: "#111827", margin: "0 0 4px 0" }}>
                      {report.title}
                    </h4>
                    <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>
                      {report.type} • {report.timeFrame} • Generated {new Date(report.dateGenerated).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button style={{
                    padding: "6px 12px", fontSize: "12px", backgroundColor: "white",
                    border: "1px solid #d1d5db", borderRadius: "6px", cursor: "pointer", color: "#374151"
                  }}>
                    <Icon name="eye" size={12} style={{ marginRight: "4px" }} />
                    View
                  </button>
                  <button style={{
                    padding: "6px 12px", fontSize: "12px", backgroundColor: "#2563eb",
                    border: "none", borderRadius: "6px", cursor: "pointer", color: "white"
                  }}>
                    <Icon name="download" size={12} style={{ marginRight: "4px" }} />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Enhanced Progress Indicator with Phases
  const ProgressStepper = ({ currentStep, phases, onStepClick }) => {
    // Calculate current phase based on step
    const getCurrentPhase = () => {
      if (currentStep <= 2) return 1;
      if (currentStep <= 4) return 2;
      if (currentStep <= 6) return 3;
      if (currentStep <= 8) return 4;
      return 5;
    };
    
    const currentPhase = getCurrentPhase();
    const progressPercentage = Math.round(((currentPhase - 1) / (phases.length - 1)) * 100);
    
    return (
      <div style={{ 
        marginBottom: "32px",
        padding: "0 16px"
      }}>
        {/* Enhanced progress bar with phase indicators */}
        <div style={{
          width: "100%",
          height: "4px",
          backgroundColor: "#e5e7eb",
          borderRadius: "2px",
          overflow: "hidden",
          marginBottom: "16px",
          position: "relative"
        }}>
          <div style={{
            height: "100%",
            backgroundColor: "#2563eb",
            width: `${progressPercentage}%`,
            transition: "width 0.5s ease"
          }} />
          
          {/* Phase markers */}
          {phases.map((phase, index) => (
            <div
              key={phase.id}
              style={{
                position: "absolute",
                left: `${(index / (phases.length - 1)) * 100}%`,
                transform: "translateX(-50%)",
                top: "-6px",
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                backgroundColor: index < currentPhase ? "#2563eb" : "#e5e7eb",
                border: "3px solid white",
                cursor: index <= currentPhase ? "pointer" : "default",
                transition: "all 0.3s ease"
              }}
              onClick={() => index <= currentPhase && onStepClick && onStepClick(index + 1)}
            />
          ))}
        </div>
        
        {/* Phase labels */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          {phases.map((phase, index) => (
            <div
              key={phase.id}
              style={{
                textAlign: "center",
                flex: 1,
                opacity: index < currentPhase ? 1 : 0.6,
                cursor: index <= currentPhase ? "pointer" : "default"
              }}
              onClick={() => index <= currentPhase && onStepClick && onStepClick(index + 1)}
            >
              <div style={{
                fontSize: "12px",
                fontWeight: index === currentPhase - 1 ? "600" : "500",
                color: index < currentPhase ? "#2563eb" : "#6b7280",
                marginBottom: "4px"
              }}>
                {phase.name}
              </div>
              <div style={{
                fontSize: "10px",
                color: "#9ca3af",
                lineHeight: "1.2"
              }}>
                {phase.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const SentimentIndicator = ({ sentiment, score }) => (
    <div style={{
      display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px",
      backgroundColor: score > 70 ? "#dcfce7" : score > 40 ? "#fef3c7" : "#fee2e2",
      borderRadius: "6px"
    }}>
      <div style={{
        width: "8px", height: "8px", borderRadius: "50%",
        backgroundColor: score > 70 ? "#16a34a" : score > 40 ? "#ca8a04" : "#dc2626"
      }} />
      <span style={{ fontWeight: "500" }}>{sentiment}</span>
      <span style={{ color: "#6b7280" }}>({score}/100)</span>
    </div>
  );

  const NewOpportunityAssessment = () => {
    // Simplified 5-phase approach for better UX
    const phases = [
      { id: 1, name: 'Upload & Analysis', description: 'Document upload and AI analysis', steps: ['Document Upload', 'AI Analysis'] },
      { id: 2, name: 'Assessment & Strategy', description: 'Smart assessment and strategic decision', steps: ['Smart Assessment', 'Strategic Decision'] },
      { id: 3, name: 'Planning & Setup', description: 'Response planning and workspace creation', steps: ['Response Planning', 'Create Workspace'] },
      { id: 4, name: 'Team & Timeline', description: 'Team assignment and timeline setup', steps: ['Assign Team', 'Set Timeline'] },
      { id: 5, name: 'Review & Launch', description: 'Final review and workspace launch', steps: ['Review Requirements', 'Launch Workspace'] }
    ];

    // Enhanced step navigation with validation
    const handleStepClick = (stepNumber) => {
      // Allow navigation to completed steps or current step
      if (stepNumber <= opportunityStep) {
        setOpportunityStep(stepNumber);
      }
    };

    // Get current phase based on step
    const getCurrentPhase = () => {
      if (opportunityStep <= 2) return 1;
      if (opportunityStep <= 4) return 2;
      if (opportunityStep <= 6) return 3;
      if (opportunityStep <= 8) return 4;
      return 5;
    };

    const renderCurrentStep = () => {
      switch (opportunityStep) {
        case 1:
          return (
            <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
              <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#111827", marginBottom: "16px" }}>
                Upload Opportunity Document
              </h2>
              <p style={{ fontSize: "16px", color: "#6b7280", marginBottom: "32px" }}>
                Upload an RFP, funding announcement, or opportunity document to begin AI-powered analysis
              </p>

              <div style={{
                border: "2px dashed #d1d5db", borderRadius: "12px", padding: "48px",
                backgroundColor: "#f9fafb", marginBottom: "24px", cursor: "pointer"
              }}
              onClick={() => {
                setOpportunityStep(2);
                setOpportunityData(mockRFPAnalysis);
                setTimeout(() => setOpportunityStep(3), 3000);
              }}>
                <Icon name="upload" size={48} color="#6b7280" style={{ marginBottom: "16px" }} />
                <div style={{ fontSize: "18px", fontWeight: "500", color: "#374151", marginBottom: "8px" }}>
                  Drop files here or click to browse
                </div>
                <div style={{ fontSize: "14px", color: "#9ca3af" }}>
                  Supports PDF, DOC, DOCX • Max 10MB
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
                <button style={{
                  padding: "12px", border: "1px solid #e5e7eb", borderRadius: "8px",
                  backgroundColor: "white", cursor: "pointer", textAlign: "center"
                }}
                onClick={() => {
                  setOpportunityStep(2);
                  setOpportunityData(mockRFPAnalysis);
                  setTimeout(() => setOpportunityStep(3), 3000);
                }}>
                  <div style={{ fontSize: "14px", fontWeight: "500", color: "#374151" }}>
                    📄 Hamilton Foundation RFP
                  </div>
                  <div style={{ fontSize: "12px", color: "#9ca3af", marginTop: "4px" }}>
                    Sample youth development grant
                  </div>
                </button>
              </div>
            </div>
          );

        case 2:
          return (
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#111827", marginBottom: "16px", textAlign: "center" }}>
                AI Document Analysis
              </h2>

              {/* Analysis Status Card */}
              <div style={{
                backgroundColor: "#eff6ff", 
                border: "1px solid #bfdbfe", 
                color: "#1e40af", 
                padding: "24px",
                borderRadius: "12px", 
                marginBottom: "32px"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                  <div style={{
                    width: "48px", 
                    height: "48px", 
                    border: "3px solid #bfdbfe",
                    borderTop: "3px solid #2563eb", 
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite"
                  }} />
                  <div>
                    <h3 style={{ margin: "0 0 4px 0", fontSize: "20px", fontWeight: "600" }}>
                      AI Analysis in Progress
                    </h3>
                    <p style={{ margin: 0, fontSize: "14px", opacity: 0.8 }}>
                      Advanced AI is processing your document to extract key insights and requirements
                    </p>
                  </div>
                </div>
                
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "16px" }}>
                  <div><strong>Document:</strong> Hamilton Foundation RFP</div>
                  <div><strong>Analysis Type:</strong> Comprehensive</div>
                  <div><strong>Estimated Time:</strong> 2-3 minutes</div>
                  <div><strong>AI Model:</strong> GPT-4 Advanced</div>
                </div>
                
                <p style={{ margin: 0, fontSize: "16px", fontWeight: "500" }}>
                  Extracting requirements, analyzing fit criteria, and generating strategic recommendations...
                </p>
              </div>

              {/* Analysis Progress Steps */}
              <div style={styles.card}>
                <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "20px" }}>
                  Analysis Progress
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px" }}>
                  {[
                    {
                      id: 'processing',
                      title: 'Document Processing',
                      description: 'Parsing and structuring document content',
                      status: 'completed',
                      icon: '✅'
                    },
                    {
                      id: 'extraction',
                      title: 'Requirements Extraction',
                      description: 'Identifying key requirements and criteria',
                      status: 'in-progress',
                      icon: '🔄'
                    },
                    {
                      id: 'analysis',
                      title: 'Sentiment Analysis',
                      description: 'Analyzing tone and priority signals',
                      status: 'pending',
                      icon: '⏳'
                    },
                    {
                      id: 'assessment',
                      title: 'Competitive Assessment',
                      description: 'Evaluating competition and positioning',
                      status: 'pending',
                      icon: '⏳'
                    }
                  ].map(step => (
                    <div
                      key={step.id}
                      style={{
                        border: "1px solid #e5e7eb",
                        borderRadius: "8px", 
                        padding: "16px",
                        backgroundColor: step.status === 'completed' ? "#f0fdf4" : 
                                        step.status === 'in-progress' ? "#eff6ff" : "#f9fafb",
                        borderColor: step.status === 'completed' ? "#bbf7d0" : 
                                   step.status === 'in-progress' ? "#bfdbfe" : "#e5e7eb",
                        position: "relative"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                        <span style={{ fontSize: "20px" }}>{step.icon}</span>
                        <h4 style={{ fontSize: "16px", fontWeight: "600", margin: 0, color: "#111827" }}>
                          {step.title}
                        </h4>
                      </div>
                      <p style={{ fontSize: "14px", color: "#6b7280", margin: "0 0 8px 0" }}>
                        {step.description}
                      </p>
                      <div style={{ 
                        fontSize: "12px", 
                        fontWeight: "600",
                        color: step.status === 'completed' ? "#059669" : 
                               step.status === 'in-progress' ? "#2563eb" : "#6b7280",
                        textTransform: "uppercase"
                      }}>
                        {step.status === 'completed' ? 'Complete' : 
                         step.status === 'in-progress' ? 'In Progress' : 'Pending'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preview of Upcoming Results */}
              <div style={styles.card}>
                <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                  What to Expect Next
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
                  <div style={{ textAlign: "center", padding: "16px" }}>
                    <div style={{ fontSize: "32px", marginBottom: "8px" }}>📊</div>
                    <h4 style={{ fontSize: "14px", fontWeight: "600", margin: "0 0 4px 0" }}>Fit Score</h4>
                    <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>Compatibility assessment</p>
                  </div>
                  <div style={{ textAlign: "center", padding: "16px" }}>
                    <div style={{ fontSize: "32px", marginBottom: "8px" }}>📋</div>
                    <h4 style={{ fontSize: "14px", fontWeight: "600", margin: "0 0 4px 0" }}>Requirements</h4>
                    <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>Key criteria extracted</p>
                  </div>
                  <div style={{ textAlign: "center", padding: "16px" }}>
                    <div style={{ fontSize: "32px", marginBottom: "8px" }}>🎯</div>
                    <h4 style={{ fontSize: "14px", fontWeight: "600", margin: "0 0 4px 0" }}>Recommendations</h4>
                    <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>Strategic insights</p>
                  </div>
                  <div style={{ textAlign: "center", padding: "16px" }}>
                    <div style={{ fontSize: "32px", marginBottom: "8px" }}>⚡</div>
                    <h4 style={{ fontSize: "14px", fontWeight: "600", margin: "0 0 4px 0" }}>Next Steps</h4>
                    <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>Actionable guidance</p>
                  </div>
                </div>
              </div>
            </div>
          );

        case 3:
          return (
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#111827", marginBottom: "16px", textAlign: "center" }}>
                Document Analysis Results
              </h2>

              {/* Analysis Summary Card - Similar to Strategic Decision Engine */}
              <div style={{
                backgroundColor: "#f0fdf4", 
                border: "1px solid #bbf7d0", 
                color: "#166534", 
                padding: "24px",
                borderRadius: "12px", 
                marginBottom: "32px"
              }}>
                <h2 style={{ margin: "0 0 16px 0", fontSize: "24px", fontWeight: "600" }}>
                  AI Analysis Complete: Ready for Assessment
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "16px" }}>
                  <div><strong>Document:</strong> {opportunityData.documentInfo?.title}</div>
                  <div><strong>Funder:</strong> {opportunityData.documentInfo?.funder}</div>
                  <div><strong>Amount:</strong> {opportunityData.documentInfo?.amount}</div>
                  <div><strong>Deadline:</strong> {opportunityData.documentInfo?.deadline}</div>
                </div>
                <p style={{ margin: 0, fontSize: "16px", fontWeight: "500" }}>
                  Document successfully analyzed. Key requirements extracted and ready for strategic assessment.
                </p>
              </div>

              {/* Document Overview */}
              <div style={styles.card}>
                <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                  Opportunity Overview
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "24px" }}>
                  <div>
                    <div style={{ fontSize: "18px", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>
                      {opportunityData.documentInfo?.title}
                    </div>
                    <div style={{ fontSize: "14px", color: "#6b7280", marginBottom: "12px" }}>
                      {opportunityData.documentInfo?.funder} • {opportunityData.documentInfo?.type}
                    </div>
                    <div style={{ display: "flex", gap: "16px", fontSize: "14px" }}>
                      <div><strong>Amount:</strong> {opportunityData.documentInfo?.amount}</div>
                      <div><strong>Duration:</strong> {opportunityData.documentInfo?.duration}</div>
                      <div><strong>Deadline:</strong> {opportunityData.documentInfo?.deadline}</div>
                    </div>
                  </div>
                  <div>
                    <SentimentIndicator
                      sentiment={opportunityData.sentimentAnalysis?.overall}
                      score={opportunityData.sentimentAnalysis?.score}
                    />
                  </div>
                </div>
              </div>

              {/* Sentiment Analysis */}
              <div style={styles.card}>
                <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                  AI Sentiment Analysis
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "20px" }}>
                  {Object.entries(opportunityData.sentimentAnalysis?.indicators || {}).map(([key, value]) => (
                    <div key={key} style={{
                      padding: "12px", backgroundColor: "#f8fafc", borderRadius: "8px", border: "1px solid #e2e8f0"
                    }}>
                      <div style={{ fontSize: "12px", fontWeight: "600", color: "#64748b", textTransform: "uppercase", marginBottom: "4px" }}>
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </div>
                      <div style={{ fontSize: "14px", color: "#374151" }}>{value}</div>
                    </div>
                  ))}
                </div>

                <div>
                  <div style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "8px" }}>
                    Key Opportunity Phrases:
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {opportunityData.sentimentAnalysis?.keyPhrases?.map((phrase, index) => (
                      <span key={index} style={{
                        padding: "4px 8px", backgroundColor: "#dbeafe", color: "#1e40af",
                        borderRadius: "16px", fontSize: "12px", fontWeight: "500"
                      }}>
                        {phrase}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Requirements Analysis */}
              <div style={styles.card}>
                <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                  Requirements Analysis
                </h3>
                {opportunityData.requirementsExtraction?.map((category, index) => (
                  <div key={index} style={{ marginBottom: "24px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                      <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#111827", margin: 0 }}>
                        {category.category}
                      </h4>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{
                          padding: "4px 8px", borderRadius: "12px", fontSize: "12px", fontWeight: "500",
                          backgroundColor: category.ourStatus === "MEETS ALL" ? "#dcfce7" : category.ourStatus === "STRONG MATCH" ? "#dbeafe" : "#fef3c7",
                          color: category.ourStatus === "MEETS ALL" ? "#166534" : category.ourStatus === "STRONG MATCH" ? "#1e40af" : "#92400e"
                        }}>
                          {category.ourStatus}
                        </span>
                        <span style={{ fontSize: "12px", color: "#9ca3af" }}>
                          {category.confidence}% confidence
                        </span>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      {category.requirements.map((req, reqIndex) => (
                        <div key={reqIndex} style={{
                          padding: "8px 12px", backgroundColor: "#f9fafb", borderRadius: "6px",
                          fontSize: "14px", color: "#374151"
                        }}>
                          {req}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons - Matching Strategic Decision Engine */}
              <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "32px" }}>
                <button
                  onClick={() => setOpportunityStep(4)}
                  style={{
                    padding: "12px 32px", 
                    backgroundColor: "#2563eb", 
                    color: "white",
                    borderRadius: "8px", 
                    border: "none", 
                    cursor: "pointer",
                    fontSize: "16px", 
                    fontWeight: "600",
                    transition: "all 0.2s ease",
                    boxShadow: "0 2px 4px rgba(37, 99, 235, 0.2)"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#1d4ed8";
                    e.target.style.transform = "translateY(-1px)";
                    e.target.style.boxShadow = "0 4px 8px rgba(37, 99, 235, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#2563eb";
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 2px 4px rgba(37, 99, 235, 0.2)";
                  }}
                >
                  Continue to Smart Assessment
                </button>
                <button
                  style={{
                    padding: "12px 24px", 
                    backgroundColor: "white", 
                    color: "#374151",
                    borderRadius: "8px", 
                    border: "1px solid #d1d5db", 
                    cursor: "pointer",
                    fontSize: "16px", 
                    fontWeight: "500",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#f9fafb";
                    e.target.style.borderColor = "#9ca3af";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "white";
                    e.target.style.borderColor = "#d1d5db";
                  }}
                >
                  Export Analysis Report
                </button>
              </div>
            </div>
          );

        case 3:
          return (
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#111827", marginBottom: "16px", textAlign: "center" }}>
                Smart Assessment
              </h2>
              <p style={{ fontSize: "16px", color: "#6b7280", textAlign: "center", marginBottom: "32px" }}>
                Answer adaptive questions to determine strategic fit and resource requirements
              </p>

              <div style={styles.card}>
                <div style={{ backgroundColor: "#f8fafc", padding: "16px", borderRadius: "8px", marginBottom: "24px" }}>
                  <strong>AI Context:</strong> This RFP seeks {opportunityData.sentimentAnalysis?.keyPhrases?.[0]} - how does this match your approach?
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111827", marginBottom: "12px" }}>
                    How well does this opportunity align with your current programming?
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {[
                      'Perfect match - identical to current programs',
                      'Strong alignment - builds on existing work',
                      'Good fit - related but requires some adaptation',
                      'Moderate fit - significant program modification needed',
                      'Poor fit - major departure from current work'
                    ].map((option, index) => (
                      <label key={index} style={{
                        display: "flex", alignItems: "center", gap: "12px", padding: "12px",
                        backgroundColor: "#f9fafb", borderRadius: "8px", cursor: "pointer"
                      }}>
                        <input type="radio" name="alignment" value={index} />
                        <span style={{ fontSize: "14px" }}>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111827", marginBottom: "12px" }}>
                    What unique strengths do you bring to this opportunity?
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "8px" }}>
                    {[
                      'Established community relationships',
                      'Proven track record with target population',
                      'Innovative program model',
                      'Strong evaluation capabilities',
                      'Diverse funding portfolio',
                      'Experienced leadership team',
                      'Strategic partnerships in place'
                    ].map((strength, index) => (
                      <label key={index} style={{
                        display: "flex", alignItems: "center", gap: "8px", padding: "8px",
                        backgroundColor: "#f9fafb", borderRadius: "6px", cursor: "pointer"
                      }}>
                        <input type="checkbox" />
                        <span style={{ fontSize: "13px" }}>{strength}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ textAlign: "center", marginTop: "32px" }}>
                <button
                  onClick={() => { setFitScore(87); setOpportunityStep(4); }}
                  style={styles.primaryButton}
                >
                  Calculate Fit Score
                </button>
              </div>
            </div>
          );

        case 4:
          return (
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#111827", marginBottom: "16px", textAlign: "center" }}>
                Strategic Decision Engine
              </h2>

              {/* AI Recommendation */}
              <div style={{
                backgroundColor: "#059669", color: "white", padding: "24px",
                borderRadius: "12px", marginBottom: "32px"
              }}>
                <h2 style={{ margin: "0 0 16px 0", fontSize: "24px" }}>AI Recommendation: APPLY</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "16px" }}>
                  <div><strong>Fit Score:</strong> {fitScore}/100</div>
                  <div><strong>Confidence:</strong> High</div>
                  <div><strong>Priority:</strong> High Priority</div>
                  <div><strong>Timeline:</strong> Begin immediately</div>
                </div>
                <p style={{ margin: 0, fontSize: "16px" }}>
                  Excellent fit with high success probability. Strong alignment with organizational strengths and funder priorities.
                </p>
              </div>

              {/* Action Selection */}
              <div style={styles.card}>
                <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                  Choose Your Response Strategy
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
                  {[
                    {
                      id: 'apply',
                      title: 'Apply Now',
                      description: 'Full proposal development and submission',
                      effort: 'High',
                      timeline: '4-6 weeks',
                      recommended: true
                    },
                    {
                      id: 'conditional',
                      title: 'Apply with Conditions',
                      description: 'Address gaps before full commitment',
                      effort: 'Medium-High',
                      timeline: '2-3 weeks prep + 4-6 weeks'
                    }
                  ].map(option => (
                    <div
                      key={option.id}
                      onClick={() => setSelectedAction(option.id)}
                      style={{
                        border: selectedAction === option.id ? "2px solid #2563eb" : option.recommended ? "2px solid #059669" : "1px solid #e5e7eb",
                        borderRadius: "8px", padding: "20px", cursor: "pointer",
                        backgroundColor: selectedAction === option.id ? "#eff6ff" : "white",
                        position: "relative"
                      }}
                    >
                      {option.recommended && (
                        <div style={{
                          position: "absolute",
                          top: "-8px",
                          right: "12px",
                          backgroundColor: "#059669",
                          color: "white",
                          padding: "4px 8px",
                          borderRadius: "4px",
                          fontSize: "12px",
                          fontWeight: "600"
                        }}>
                          RECOMMENDED
                        </div>
                      )}
                      <h4 style={{ fontSize: "18px", fontWeight: "600", margin: "0 0 8px 0", color: "#111827" }}>
                        {option.title}
                      </h4>
                      <p style={{ fontSize: "14px", color: "#6b7280", margin: "0 0 12px 0" }}>
                        {option.description}
                      </p>
                      <div style={{ display: "flex", gap: "16px", fontSize: "14px" }}>
                        <div><strong>Effort:</strong> {option.effort}</div>
                        <div><strong>Timeline:</strong> {option.timeline}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "32px" }}>
                <button
                  onClick={() => setOpportunityStep(5)}
                  style={styles.primaryButton}
                >
                  Create Workspace
                </button>
                <button
                  style={styles.secondaryButton}
                >
                  Export Decision Report
                </button>
              </div>
            </div>
          );

        case 5:
          return (
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#111827", marginBottom: "16px", textAlign: "center" }}>
                Response Planning
              </h2>
              <p style={{ fontSize: "16px", color: "#6b7280", textAlign: "center", marginBottom: "32px" }}>
                Plan your next steps and create a workspace for proposal development
              </p>

              {/* Success Summary */}
              <div style={{
                backgroundColor: "#f0f9ff", 
                border: "1px solid #0ea5e9", 
                color: "#0c4a6e", 
                padding: "24px",
                borderRadius: "12px", 
                marginBottom: "32px"
              }}>
                <h3 style={{ margin: "0 0 16px 0", fontSize: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Icon name="checkCircle" size={24} color="#0ea5e9" />
                  Decision Complete
                </h3>
                <p style={{ margin: 0, fontSize: "16px" }}>
                  You've chosen to <strong>{selectedAction === 'apply' ? 'Apply Now' : 'Apply with Conditions'}</strong>. 
                  Your workspace is ready for proposal development.
                </p>
              </div>

              {/* Next Steps */}
              <div style={styles.card}>
                <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                  Next Steps
                </h3>
                <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "24px" }}>
                  Click on any step below to continue the demo and see how each process works:
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px" }}>
                  {[
                    {
                      title: "Create Workspace",
                      description: "Set up your proposal workspace with templates and resources",
                      icon: "bookOpen",
                      step: 6
                    },
                    {
                      title: "Review Requirements",
                      description: "Analyze detailed requirements and compliance needs",
                      icon: "fileText",
                      step: 7
                    },
                    {
                      title: "Assign Team",
                      description: "Set up collaboration and assign team members",
                      icon: "users",
                      step: 8
                    },
                    {
                      title: "Set Timeline",
                      description: "Create project timeline and milestone tracking",
                      icon: "calendar",
                      step: 9
                    }
                  ].map((step, index) => (
                    <div
                      key={index}
                      onClick={() => setOpportunityStep(step.step)}
                      style={{
                        border: "1px solid #e5e7eb",
                        borderRadius: "8px", 
                        padding: "20px", 
                        cursor: "pointer",
                        backgroundColor: "white",
                        transition: "all 0.2s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.borderColor = "#2563eb";
                        e.target.style.backgroundColor = "#f8fafc";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderColor = "#e5e7eb";
                        e.target.style.backgroundColor = "white";
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                        <Icon name={step.icon} size={20} color="#6b7280" />
                        <h4 style={{ fontSize: "16px", fontWeight: "600", margin: 0, color: "#111827" }}>
                          {step.title}
                        </h4>
                      </div>
                      <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>
                        {step.description}
                      </p>
                      <div style={{ 
                        marginTop: "12px", 
                        fontSize: "12px", 
                        color: "#2563eb", 
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px"
                      }}>
                        <Icon name="arrowRight" size={12} color="#2563eb" />
                        Click to continue
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "32px", flexWrap: "wrap" }}>
                <button
                  onClick={() => {
                    setCurrentView("workspace");
                    setDemoWorkspace({
                      id: Date.now(),
                      title: "SAMHSA Peer Recovery Training Expansion",
                      rfp: "Substance Abuse Prevention and Treatment Block Grant",
                      status: "in-progress"
                    });
                  }}
                  style={styles.primaryButton}
                >
                  Create Workspace
                </button>
                <button
                  style={styles.secondaryButton}
                >
                  Export Decision Report
                </button>
                <button
                  onClick={() => {
                    // Reset all opportunity assessment state
                    setOpportunityStep(1);
                    setOpportunityData({});
                    setAssessmentResponses({});
                    setSelectedAction(null);
                    setFitScore(null);
                    // Show confirmation
                    if (window.confirm("Are you sure you want to start over? This will reset the entire assessment process.")) {
                      // Additional reset logic if needed
                    }
                  }}
                  style={{
                    ...styles.secondaryButton,
                    backgroundColor: "#f3f4f6",
                    color: "#374151",
                    border: "1px solid #d1d5db"
                  }}
                >
                  Start Over
                </button>
              </div>
            </div>
          );

        case 6:
          return (
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#111827", marginBottom: "16px", textAlign: "center" }}>
                Create Workspace
              </h2>
              <p style={{ fontSize: "16px", color: "#6b7280", textAlign: "center", marginBottom: "32px" }}>
                Set up your proposal workspace with AI-powered templates and resources
              </p>

              <div style={styles.card}>
                <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "20px" }}>
                  Workspace Configuration
                </h3>
                
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", marginBottom: "24px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "8px" }}>
                      Workspace Name
                    </label>
                    <input 
                      type="text" 
                      defaultValue="SAMHSA Peer Recovery Training Expansion"
                      style={{
                        width: "100%", padding: "12px", border: "1px solid #d1d5db", borderRadius: "8px",
                        fontSize: "14px", backgroundColor: "white"
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "8px" }}>
                      Proposal Type
                    </label>
                    <select style={{
                      width: "100%", padding: "12px", border: "1px solid #d1d5db", borderRadius: "8px",
                      fontSize: "14px", backgroundColor: "white"
                    }}>
                      <option>Federal Grant Application</option>
                      <option>Foundation Grant</option>
                      <option>State Grant</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#111827", marginBottom: "12px" }}>
                    AI-Powered Templates
                  </h4>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
                    {[
                      { name: "Executive Summary", selected: true },
                      { name: "Program Narrative", selected: true },
                      { name: "Budget Justification", selected: true },
                      { name: "Evaluation Plan", selected: false },
                      { name: "Sustainability Plan", selected: false },
                      { name: "Timeline & Milestones", selected: true }
                    ].map((template, index) => (
                      <label key={index} style={{ 
                        display: "flex", alignItems: "center", gap: "8px", cursor: "pointer",
                        padding: "8px 12px", border: "1px solid #e5e7eb", borderRadius: "6px",
                        backgroundColor: template.selected ? "#f0f9ff" : "white"
                      }}>
                        <input type="checkbox" defaultChecked={template.selected} style={{ margin: 0 }} />
                        <span style={{ fontSize: "14px", color: "#374151" }}>{template.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
                  <button
                    onClick={() => setOpportunityStep(7)}
                    style={styles.primaryButton}
                  >
                    Create Workspace
                  </button>
                  <button
                    onClick={() => setOpportunityStep(5)}
                    style={styles.secondaryButton}
                  >
                    Back to Planning
                  </button>
                </div>
              </div>
            </div>
          );

        case 7:
          return (
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#111827", marginBottom: "16px", textAlign: "center" }}>
                Review Requirements
              </h2>
              <p style={{ fontSize: "16px", color: "#6b7280", textAlign: "center", marginBottom: "32px" }}>
                Analyze detailed requirements and compliance needs for your proposal
              </p>

              <div style={styles.card}>
                <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "20px" }}>
                  Requirements Analysis
                </h3>
                
                <div style={{ marginBottom: "24px" }}>
                  <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#111827", marginBottom: "12px" }}>
                    Key Requirements Checklist
                  </h4>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
                    {[
                      { requirement: "Evidence-based intervention approach", status: "complete", priority: "high" },
                      { requirement: "Community partnership documentation", status: "in-progress", priority: "high" },
                      { requirement: "Evaluation methodology with measurable outcomes", status: "pending", priority: "medium" },
                      { requirement: "Sustainability plan beyond grant period", status: "pending", priority: "medium" },
                      { requirement: "Budget alignment with program activities", status: "complete", priority: "high" },
                      { requirement: "Cultural competency training components", status: "in-progress", priority: "high" }
                    ].map((req, index) => (
                      <div key={index} style={{
                        padding: "16px", border: "1px solid #e5e7eb", borderRadius: "8px",
                        backgroundColor: req.status === "complete" ? "#f0fdf4" : req.status === "in-progress" ? "#fef3c7" : "#f9fafb"
                      }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                          <span style={{ fontSize: "14px", fontWeight: "500", color: "#111827" }}>
                            {req.requirement}
                          </span>
                          <span style={{
                            padding: "4px 8px", borderRadius: "4px", fontSize: "12px", fontWeight: "500",
                            backgroundColor: req.status === "complete" ? "#dcfce7" : req.status === "in-progress" ? "#fef3c7" : "#f3f4f6",
                            color: req.status === "complete" ? "#166534" : req.status === "in-progress" ? "#92400e" : "#6b7280"
                          }}>
                            {req.status}
                          </span>
                        </div>
                        <div style={{ fontSize: "12px", color: "#6b7280" }}>
                          Priority: <span style={{ fontWeight: "500", color: req.priority === "high" ? "#dc2626" : "#ca8a04" }}>
                            {req.priority}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
                  <button
                    onClick={() => setOpportunityStep(8)}
                    style={styles.primaryButton}
                  >
                    Continue to Team Assignment
                  </button>
                  <button
                    onClick={() => setOpportunityStep(6)}
                    style={styles.secondaryButton}
                  >
                    Back to Workspace
                  </button>
                </div>
              </div>
            </div>
          );

        case 8:
          return (
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#111827", marginBottom: "16px", textAlign: "center" }}>
                Assign Team
              </h2>
              <p style={{ fontSize: "16px", color: "#6b7280", textAlign: "center", marginBottom: "32px" }}>
                Set up collaboration and assign team members to proposal sections
              </p>

              <div style={styles.card}>
                <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "20px" }}>
                  Team Assignment
                </h3>
                
                <div style={{ marginBottom: "24px" }}>
                  <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#111827", marginBottom: "12px" }}>
                    Available Team Members
                  </h4>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px", marginBottom: "20px" }}>
                    {[
                      { name: "Dr. Sarah Chen", role: "Program Director", availability: "High", expertise: ["Program Design", "Evaluation"] },
                      { name: "Marcus Johnson", role: "Grant Writer", availability: "High", expertise: ["Narrative Writing", "Budget"] },
                      { name: "Elena Rodriguez", role: "Community Outreach", availability: "Medium", expertise: ["Partnerships", "Community Engagement"] },
                      { name: "David Kim", role: "Financial Analyst", availability: "High", expertise: ["Budget Development", "Financial Planning"] }
                    ].map((member, index) => (
                      <div key={index} style={{
                        padding: "16px", border: "1px solid #e5e7eb", borderRadius: "8px", backgroundColor: "white"
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                          <div style={{
                            width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#2563eb",
                            display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "600"
                          }}>
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div style={{ fontSize: "14px", fontWeight: "600", color: "#111827" }}>{member.name}</div>
                            <div style={{ fontSize: "12px", color: "#6b7280" }}>{member.role}</div>
                          </div>
                        </div>
                        <div style={{ fontSize: "12px", color: "#6b7280", marginBottom: "8px" }}>
                          Availability: <span style={{ color: member.availability === "High" ? "#059669" : "#ca8a04" }}>
                            {member.availability}
                          </span>
                        </div>
                        <div style={{ fontSize: "12px", color: "#6b7280" }}>
                          Expertise: {member.expertise.join(", ")}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#111827", marginBottom: "12px" }}>
                    Section Assignments
                  </h4>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "12px" }}>
                    {[
                      { section: "Executive Summary", assignee: "Dr. Sarah Chen", status: "assigned" },
                      { section: "Program Narrative", assignee: "Marcus Johnson", status: "assigned" },
                      { section: "Budget Justification", assignee: "David Kim", status: "assigned" },
                      { section: "Evaluation Plan", assignee: "Dr. Sarah Chen", status: "pending" },
                      { section: "Sustainability Plan", assignee: "Elena Rodriguez", status: "pending" },
                      { section: "Timeline & Milestones", assignee: "Marcus Johnson", status: "assigned" }
                    ].map((assignment, index) => (
                      <div key={index} style={{
                        padding: "12px", border: "1px solid #e5e7eb", borderRadius: "6px",
                        backgroundColor: assignment.status === "assigned" ? "#f0fdf4" : "#f9fafb"
                      }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <span style={{ fontSize: "14px", fontWeight: "500", color: "#111827" }}>
                            {assignment.section}
                          </span>
                          <span style={{
                            padding: "4px 8px", borderRadius: "4px", fontSize: "12px", fontWeight: "500",
                            backgroundColor: assignment.status === "assigned" ? "#dcfce7" : "#f3f4f6",
                            color: assignment.status === "assigned" ? "#166534" : "#6b7280"
                          }}>
                            {assignment.status}
                          </span>
                        </div>
                        <div style={{ fontSize: "12px", color: "#6b7280", marginTop: "4px" }}>
                          Assigned to: {assignment.assignee}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
                  <button
                    onClick={() => setOpportunityStep(9)}
                    style={styles.primaryButton}
                  >
                    Continue to Timeline
                  </button>
                  <button
                    onClick={() => setOpportunityStep(7)}
                    style={styles.secondaryButton}
                  >
                    Back to Requirements
                  </button>
                </div>
              </div>
            </div>
          );

        case 9:
          return (
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#111827", marginBottom: "16px", textAlign: "center" }}>
                Set Timeline
              </h2>
              <p style={{ fontSize: "16px", color: "#6b7280", textAlign: "center", marginBottom: "32px" }}>
                Create project timeline and milestone tracking for proposal development
              </p>

              <div style={styles.card}>
                <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "20px" }}>
                  Project Timeline
                </h3>
                
                <div style={{ marginBottom: "24px" }}>
                  <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                    Key Milestones
                  </h4>
                  <div style={{ position: "relative" }}>
                    {[
                      { milestone: "Workspace Setup Complete", date: "Week 1", status: "complete", assignee: "Dr. Sarah Chen" },
                      { milestone: "Requirements Analysis Complete", date: "Week 2", status: "complete", assignee: "Dr. Sarah Chen" },
                      { milestone: "Team Assignments Finalized", date: "Week 2", status: "complete", assignee: "Dr. Sarah Chen" },
                      { milestone: "First Draft Sections", date: "Week 4", status: "in-progress", assignee: "Marcus Johnson" },
                      { milestone: "Budget Development Complete", date: "Week 5", status: "pending", assignee: "David Kim" },
                      { milestone: "Internal Review", date: "Week 6", status: "pending", assignee: "Dr. Sarah Chen" },
                      { milestone: "Final Revisions", date: "Week 7", status: "pending", assignee: "Marcus Johnson" },
                      { milestone: "Submission Ready", date: "Week 8", status: "pending", assignee: "Dr. Sarah Chen" }
                    ].map((milestone, index) => (
                      <div key={index} style={{
                        display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px",
                        padding: "16px", border: "1px solid #e5e7eb", borderRadius: "8px",
                        backgroundColor: milestone.status === "complete" ? "#f0fdf4" : 
                                       milestone.status === "in-progress" ? "#fef3c7" : "#f9fafb"
                      }}>
                        <div style={{
                          width: "24px", height: "24px", borderRadius: "50%",
                          backgroundColor: milestone.status === "complete" ? "#059669" : 
                                         milestone.status === "in-progress" ? "#ca8a04" : "#d1d5db",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          color: "white", fontSize: "12px", fontWeight: "600", flexShrink: 0
                        }}>
                          {milestone.status === "complete" ? "✓" : index + 1}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: "14px", fontWeight: "600", color: "#111827", marginBottom: "4px" }}>
                            {milestone.milestone}
                          </div>
                          <div style={{ fontSize: "12px", color: "#6b7280" }}>
                            {milestone.date} • Assigned to: {milestone.assignee}
                          </div>
                        </div>
                        <div style={{
                          padding: "4px 8px", borderRadius: "4px", fontSize: "12px", fontWeight: "500",
                          backgroundColor: milestone.status === "complete" ? "#dcfce7" : 
                                         milestone.status === "in-progress" ? "#fef3c7" : "#f3f4f6",
                          color: milestone.status === "complete" ? "#166534" : 
                                milestone.status === "in-progress" ? "#92400e" : "#6b7280"
                        }}>
                          {milestone.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ 
                  backgroundColor: "#f0f9ff", border: "1px solid #0ea5e9", borderRadius: "8px", 
                  padding: "20px", marginBottom: "24px"
                }}>
                  <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#0c4a6e", marginBottom: "8px" }}>
                    🎉 Demo Complete!
                  </h4>
                  <p style={{ fontSize: "14px", color: "#0c4a6e", margin: 0 }}>
                    You've successfully completed the full FundingFrame demo workflow. This shows how the platform 
                    guides organizations through the entire grant application process from initial assessment to 
                    final submission preparation.
                  </p>
                </div>

                <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
                  <button
                    onClick={() => {
                      setOpportunityStep(1);
                      setOpportunityData({});
                      setAssessmentResponses({});
                      setSelectedAction(null);
                      setFitScore(null);
                    }}
                    style={styles.primaryButton}
                  >
                    Start New Demo
                  </button>
                  <button
                    onClick={() => setCurrentView("dashboard")}
                    style={styles.secondaryButton}
                  >
                    Return to Dashboard
                  </button>
                </div>
              </div>
            </div>
          );

        default:
          return null;
      }
    };

    return (
      <div style={{ 
        padding: "40px 32px", 
        maxWidth: "1200px", 
        margin: "0 auto",
        minHeight: "calc(100vh - 200px)"
      }}>
        <ProgressStepper currentStep={opportunityStep} phases={phases} onStepClick={handleStepClick} />
        {renderCurrentStep()}
      </div>
    );
  };

  const RFPUploadView = () => {
    const [dragActive, setDragActive] = useState(false);

    const handleDrop = (e) => {
      e.preventDefault();
      setDragActive(false);

      const files = e.dataTransfer.files;
      if (files.length > 0) {
        const file = files[0];
        simulateFileUpload(file.name);
      }
    };

    const handleFileSelect = (e) => {
      const files = e.target.files;
      if (files.length > 0) {
        const file = files[0];
        simulateFileUpload(file.name);
      }
    };

    const getAnalysisStepDisplay = () => {
      switch(analysisStep) {
        case 'uploading':
          return { text: 'Uploading document...', icon: 'upload', color: '#2563eb' };
        case 'processing':
          return { text: 'Processing document content...', icon: 'fileText', color: '#7c3aed' };
        case 'analyzing':
          return { text: 'Analyzing requirements and fit...', icon: 'brain', color: '#059669' };
        case 'calculating':
          return { text: 'Calculating compatibility score...', icon: 'target', color: '#d97706' };
        case 'complete':
          return { text: 'Analysis complete!', icon: 'checkCircle', color: '#059669' };
        default:
          return null;
      }
    };

    if (analysisResults) {
      return <AnalysisReportView />;
    }

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#111827", margin: 0 }}>
            Upload RFP for AI Analysis
          </h2>
          {analysisStep !== 'idle' && (
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{
                width: "16px", height: "16px", borderRadius: "50%",
                border: "2px solid #e5e7eb", borderTop: "2px solid #2563eb",
                animation: "spin 1s linear infinite"
              }} />
              <span style={{ fontSize: "14px", color: "#6b7280" }}>
                Processing...
              </span>
            </div>
          )}
        </div>

        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>

        {analysisStep === 'idle' && (
          <div
            style={{
              ...styles.card,
              border: dragActive ? "2px dashed #2563eb" : "2px dashed #d1d5db",
              backgroundColor: dragActive ? "#eff6ff" : "#f9fafb",
              textAlign: "center",
              padding: "64px 32px",
              transition: "all 0.2s ease",
              cursor: "pointer"
            }}
            onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
            onDragLeave={() => setDragActive(false)}
            onDrop={handleDrop}
            onClick={() => document.getElementById('file-input').click()}
          >
            <Icon name="upload" size={64} color={dragActive ? "#2563eb" : "#9ca3af"} />
            <h3 style={{ fontSize: "24px", fontWeight: "600", color: "#111827", margin: "16px 0 12px 0" }}>
              Drop your RFP here or click to browse
            </h3>
            <p style={{ fontSize: "16px", color: "#6b7280", margin: "0 0 24px 0", lineHeight: "1.5" }}>
              Upload PDF, Word, or text files. Our AI will analyze requirements, eligibility, and fit score.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "24px", fontSize: "14px", color: "#9ca3af" }}>
              <span>✓ Requirement extraction</span>
              <span>✓ Eligibility check</span>
              <span>✓ Fit score calculation</span>
              <span>✓ Risk assessment</span>
            </div>
            <input
              id="file-input"
              type="file"
              style={{ display: "none" }}
              accept=".pdf,.doc,.docx,.txt"
              onChange={handleFileSelect}
            />
          </div>
        )}

        {analysisStep !== 'idle' && analysisStep !== 'complete' && (
          <div style={styles.card}>
            <div style={{ textAlign: "center", padding: "48px 32px" }}>
              {(() => {
                const stepInfo = getAnalysisStepDisplay();
                return (
                  <>
                    <div style={{ marginBottom: "24px" }}>
                      <Icon name={stepInfo.icon} size={48} color={stepInfo.color} />
                    </div>
                    <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", margin: "0 0 12px 0" }}>
                      {stepInfo.text}
                    </h3>

                    {analysisStep === 'uploading' && (
                      <>
                        <div style={{
                          width: "100%", maxWidth: "400px", backgroundColor: "#e5e7eb",
                          borderRadius: "9999px", height: "8px", margin: "16px auto", overflow: "hidden"
                        }}>
                          <div style={{
                            backgroundColor: "#2563eb", height: "8px", borderRadius: "9999px",
                            width: `${uploadProgress}%`, transition: "width 0.3s ease"
                          }} />
                        </div>
                        <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>
                          {Math.round(uploadProgress)}% complete
                        </p>
                      </>
                    )}

                    {analysisStep !== 'uploading' && (
                      <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "16px" }}>
                        {['processing', 'analyzing', 'calculating'].map((step, index) => (
                          <div key={step} style={{
                            width: "40px", height: "4px", borderRadius: "2px",
                            backgroundColor: ['processing', 'analyzing', 'calculating'].indexOf(analysisStep) >= index ? "#2563eb" : "#e5e7eb",
                            transition: "background-color 0.5s ease"
                          }} />
                        ))}
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          </div>
        )}

        {analysisStep === 'complete' && analysisResults && (
          <div style={{ ...styles.card, border: "2px solid #059669", backgroundColor: "#f0fdf4" }}>
            <div style={{ textAlign: "center", padding: "32px" }}>
              <Icon name="checkCircle" size={64} color="#059669" />
              <h3 style={{ fontSize: "24px", fontWeight: "600", color: "#111827", margin: "16px 0 12px 0" }}>
                Analysis Complete!
              </h3>
              <p style={{ fontSize: "16px", color: "#6b7280", margin: "0 0 24px 0" }}>
                Your RFP has been analyzed. Ready to view the detailed report?
              </p>
              <button
                onClick={() => transitionToView('analysis-report', 'Loading analysis report...')}
                style={{
                  padding: "12px 24px", backgroundColor: "#059669", color: "white",
                  borderRadius: "8px", border: "none", cursor: "pointer", fontSize: "16px", fontWeight: "500"
                }}
              >
                View Analysis Report
              </button>
            </div>
          </div>
        )}

        <div style={styles.card}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111827", margin: "0 0 16px 0" }}>
            What our AI analysis provides:
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
            {[
              {
                icon: "checkCircle",
                title: "Eligibility Assessment",
                description: "Automatic verification of all eligibility criteria with page references"
              },
              {
                icon: "target",
                title: "Fit Score Calculation",
                description: "Comprehensive scoring based on alignment, capacity, and competitive advantage"
              },
              {
                icon: "fileText",
                title: "Requirements Matrix",
                description: "Complete breakdown of all proposal requirements with page limits and priorities"
              },
              {
                icon: "alertCircle",
                title: "Risk Assessment",
                description: "Identification of potential challenges and recommended mitigation strategies"
              }
            ].map((feature, index) => (
              <div key={index} style={{ display: "flex", alignItems: "start", gap: "12px" }}>
                <div style={{
                  width: "40px", height: "40px", backgroundColor: "#eff6ff", borderRadius: "8px",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                }}>
                  <Icon name={feature.icon} size={20} color="#2563eb" />
                </div>
                <div>
                  <h4 style={{ fontSize: "16px", fontWeight: "500", color: "#111827", margin: "0 0 4px 0" }}>
                    {feature.title}
                  </h4>
                  <p style={{ fontSize: "14px", color: "#6b7280", margin: 0, lineHeight: "1.4" }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const AnalysisReportView = () => {
    const [activeTab, setActiveTab] = useState('summary');

    const tabs = [
      { id: 'summary', label: 'Executive Summary', icon: 'fileText' },
      { id: 'requirements', label: 'Requirements Matrix', icon: 'target' },
      { id: 'assessment', label: 'Fit Assessment', icon: 'brain' },
      { id: 'recommendations', label: 'Recommendations', icon: 'star' }
    ];

    const MetricCard = ({ title, value, color, subtitle }) => (
      <div style={{
        ...styles.card,
        textAlign: "center",
        background: `linear-gradient(135deg, ${color}10 0%, ${color}20 100%)`,
        border: `1px solid ${color}30`
      }}>
        <h3 style={{ fontSize: "14px", fontWeight: "500", color: "#6b7280", margin: "0 0 8px 0" }}>
          {title}
        </h3>
        <div style={{ fontSize: "32px", fontWeight: "bold", color, margin: "0 0 4px 0" }}>
          {value}
        </div>
        {subtitle && (
          <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>
            {subtitle}
          </p>
        )}
      </div>
    );

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {/* Header with back button */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button
            onClick={() => {
              setAnalysisResults(null);
              setAnalysisStep('idle');
              transitionToView('rfp-upload', 'Restarting RFP upload...');
            }}
            style={{
              display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px",
              border: "1px solid #d1d5db", borderRadius: "8px", backgroundColor: "white", cursor: "pointer"
            }}
          >
            ← Back to Upload
          </button>
          <div>
            <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#111827", margin: 0 }}>
              RFP Analysis Report
            </h2>
            <p style={{ fontSize: "14px", color: "#6b7280", margin: "4px 0 0 0" }}>
              SAMHSA Substance Abuse Prevention and Treatment Block Grant
            </p>
          </div>
        </div>

        {/* Executive Summary Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
          <MetricCard title="Eligibility Status" value="PASS" color="#059669" subtitle="All criteria met" />
          <MetricCard title="Overall Fit Score" value="94%" color="#2563eb" subtitle="Excellent match" />
          <MetricCard title="Effort Level" value="Medium" color="#d97706" subtitle="6 sections required" />
          <MetricCard title="Days Until Deadline" value="45" color="#dc2626" subtitle="November 15, 2025" />
        </div>

        {/* Tabbed Interface */}
        <div style={styles.card}>
          <div style={{ borderBottom: "1px solid #e5e7eb", marginBottom: "24px" }}>
            <div style={{ display: "flex", gap: "0" }}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: "flex", alignItems: "center", gap: "8px",
                    padding: "12px 20px", border: "none", cursor: "pointer",
                    borderBottom: activeTab === tab.id ? "2px solid #2563eb" : "2px solid transparent",
                    backgroundColor: "transparent",
                    color: activeTab === tab.id ? "#2563eb" : "#6b7280",
                    fontSize: "14px", fontWeight: "500",
                    transition: "all 0.2s ease"
                  }}
                >
                  <Icon name={tab.icon} size={16} />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {activeTab === 'summary' && (
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", margin: "0 0 16px 0" }}>
                Executive Summary
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "24px" }}>
                <div>
                  <div style={{
                    padding: "16px", backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0",
                    borderRadius: "8px", marginBottom: "16px"
                  }}>
                    <h4 style={{ fontSize: "16px", fontWeight: "500", color: "#166534", margin: "0 0 8px 0" }}>
                      ✓ Eligibility Confirmed
                    </h4>
                    <p style={{ fontSize: "14px", color: "#166534", margin: 0 }}>
                      ALMSDC meets all 5 eligibility criteria including 501(c)(3) status, geographic location, experience requirements, and program focus alignment.
                    </p>
                  </div>

                  <div style={{
                    padding: "16px", backgroundColor: "#eff6ff", border: "1px solid #bfdbfe",
                    borderRadius: "8px", marginBottom: "16px"
                  }}>
                    <h4 style={{ fontSize: "16px", fontWeight: "500", color: "#1d4ed8", margin: "0 0 8px 0" }}>
                      Strong Competitive Position
                    </h4>
                    <p style={{ fontSize: "14px", color: "#1d4ed8", margin: 0 }}>
                      Your organization's 5+ years of peer recovery training experience and 89% job placement rate create significant competitive advantages.
                    </p>
                  </div>

                  <div style={{
                    padding: "16px", backgroundColor: "#fef3c7", border: "1px solid #fed7aa",
                    borderRadius: "8px"
                  }}>
                    <h4 style={{ fontSize: "16px", fontWeight: "500", color: "#92400e", margin: "0 0 8px 0" }}>
                      ⚠️ Key Considerations
                    </h4>
                    <ul style={{ fontSize: "14px", color: "#92400e", margin: "0", paddingLeft: "16px" }}>
                      <li>45-day deadline requires immediate action</li>
                      <li>Competition expected from larger regional organizations</li>
                      <li>Evaluation plan needs strengthening</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 style={{ fontSize: "16px", fontWeight: "500", color: "#111827", margin: "0 0 12px 0" }}>
                    Fit Score Breakdown
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {[
                      { label: "Eligibility", score: 100, color: "#059669" },
                      { label: "Program Alignment", score: 95, color: "#2563eb" },
                      { label: "Competitive Advantage", score: 92, color: "#7c3aed" },
                      { label: "Organizational Capacity", score: 88, color: "#d97706" }
                    ].map((item, index) => (
                      <div key={index}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                          <span style={{ fontSize: "12px", fontWeight: "500", color: "#374151" }}>{item.label}</span>
                          <span style={{ fontSize: "12px", fontWeight: "600", color: item.color }}>{item.score}%</span>
                        </div>
                        <div style={{ width: "100%", backgroundColor: "#f3f4f6", borderRadius: "4px", height: "6px" }}>
                          <div style={{
                            width: `${item.score}%`, backgroundColor: item.color,
                            height: "6px", borderRadius: "4px", transition: "width 0.5s ease"
                          }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'requirements' && (
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", margin: "0 0 16px 0" }}>
                Requirements Matrix
              </h3>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ backgroundColor: "#f9fafb" }}>
                      <th style={{ padding: "12px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "#374151", border: "1px solid #e5e7eb" }}>
                        Section
                      </th>
                      <th style={{ padding: "12px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "#374151", border: "1px solid #e5e7eb" }}>
                        Page Limit
                      </th>
                      <th style={{ padding: "12px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "#374151", border: "1px solid #e5e7eb" }}>
                        Priority
                      </th>
                      <th style={{ padding: "12px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "#374151", border: "1px solid #e5e7eb" }}>
                        Reference
                      </th>
                      <th style={{ padding: "12px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "#374151", border: "1px solid #e5e7eb" }}>
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {analysisResults?.requirements.map((req, index) => (
                      <tr key={index}>
                        <td style={{ padding: "12px", fontSize: "14px", color: "#111827", border: "1px solid #e5e7eb" }}>
                          {req.type}
                        </td>
                        <td style={{ padding: "12px", fontSize: "14px", color: "#6b7280", border: "1px solid #e5e7eb" }}>
                          {req.limit}
                        </td>
                        <td style={{ padding: "12px", border: "1px solid #e5e7eb" }}>
                          <span style={{
                            padding: "2px 8px", fontSize: "12px", fontWeight: "500", borderRadius: "12px",
                            backgroundColor: req.priority === 'high' ? '#fef2f2' : req.priority === 'medium' ? '#fef3c7' : '#f0fdf4',
                            color: req.priority === 'high' ? '#991b1b' : req.priority === 'medium' ? '#92400e' : '#166534'
                          }}>
                            {req.priority}
                          </span>
                        </td>
                        <td style={{ padding: "12px", fontSize: "12px", color: "#6b7280", border: "1px solid #e5e7eb" }}>
                          {req.reference}
                        </td>
                        <td style={{ padding: "12px", border: "1px solid #e5e7eb" }}>
                          <span style={{
                            padding: "2px 8px", fontSize: "12px", fontWeight: "500", borderRadius: "12px",
                            backgroundColor: req.completed ? '#dcfce7' : '#f3f4f6',
                            color: req.completed ? '#166534' : '#6b7280'
                          }}>
                            {req.completed ? 'Complete' : 'Pending'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'assessment' && (
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", margin: "0 0 16px 0" }}>
                Detailed Fit Assessment
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <h4 style={{ fontSize: "16px", fontWeight: "500", color: "#111827", margin: "0 0 12px 0" }}>
                    Eligibility Criteria
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {analysisResults?.eligibility.criteria.map((criterion, index) => (
                      <div key={index} style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        padding: "12px", backgroundColor: criterion.met ? "#f0fdf4" : "#fef2f2",
                        border: `1px solid ${criterion.met ? "#bbf7d0" : "#fecaca"}`,
                        borderRadius: "6px"
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <Icon name={criterion.met ? "checkCircle" : "x"} size={16} color={criterion.met ? "#059669" : "#dc2626"} />
                          <span style={{ fontSize: "14px", color: "#111827" }}>{criterion.item}</span>
                        </div>
                        <span style={{ fontSize: "12px", color: "#6b7280" }}>{criterion.reference}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 style={{ fontSize: "16px", fontWeight: "500", color: "#111827", margin: "0 0 12px 0" }}>
                    Competitive Advantages
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {analysisResults?.advantages.map((advantage, index) => (
                      <div key={index} style={{
                        display: "flex", alignItems: "center", gap: "8px",
                        padding: "8px 12px", backgroundColor: "#f0fdf4", borderRadius: "6px"
                      }}>
                        <Icon name="star" size={16} color="#059669" />
                        <span style={{ fontSize: "14px", color: "#166534" }}>{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 style={{ fontSize: "16px", fontWeight: "500", color: "#111827", margin: "0 0 12px 0" }}>
                    Risk Assessment
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {analysisResults?.risks.map((risk, index) => (
                      <div key={index} style={{
                        padding: "16px", backgroundColor: "#fef3c7", border: "1px solid #fed7aa",
                        borderRadius: "8px"
                      }}>
                        <div style={{ display: "flex", alignItems: "start", justifyContent: "space-between", marginBottom: "8px" }}>
                          <h5 style={{ fontSize: "14px", fontWeight: "500", color: "#92400e", margin: 0 }}>
                            {risk.risk}
                          </h5>
                          <span style={{
                            padding: "2px 6px", fontSize: "10px", fontWeight: "500", borderRadius: "8px",
                            backgroundColor: risk.impact === 'high' ? '#fef2f2' : '#fef3c7',
                            color: risk.impact === 'high' ? '#991b1b' : '#92400e'
                          }}>
                            {risk.impact} impact
                          </span>
                        </div>
                        <p style={{ fontSize: "12px", color: "#92400e", margin: 0 }}>
                          <strong>Mitigation:</strong> {risk.mitigation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'recommendations' && (
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", margin: "0 0 16px 0" }}>
                AI Recommendations
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {analysisResults?.recommendations.map((recommendation, index) => (
                  <div key={index} style={{
                    display: "flex", gap: "12px", padding: "16px",
                    backgroundColor: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "8px"
                  }}>
                    <div style={{
                      width: "24px", height: "24px", backgroundColor: "#2563eb", borderRadius: "50%",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      color: "white", fontSize: "12px", fontWeight: "bold"
                    }}>
                      {index + 1}
                    </div>
                    <p style={{ fontSize: "14px", color: "#1e40af", margin: 0, lineHeight: "1.5" }}>
                      {recommendation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
          <button
            onClick={createWorkspaceFromAnalysis}
            style={{
              display: "flex", alignItems: "center", gap: "8px",
              padding: "12px 24px", backgroundColor: "#2563eb", color: "white",
              borderRadius: "8px", border: "none", cursor: "pointer", fontSize: "16px", fontWeight: "500"
            }}
          >
            <Icon name="zap" size={16} />
            Start AI-Powered Workspace
          </button>
          <button
            style={{
              display: "flex", alignItems: "center", gap: "8px",
              padding: "12px 24px", backgroundColor: "white", color: "#374151",
              borderRadius: "8px", border: "1px solid #d1d5db", cursor: "pointer", fontSize: "16px", fontWeight: "500"
            }}
          >
            <Icon name="download" size={16} />
            Export Analysis Report
          </button>
          <button
            onClick={() => transitionToView('opportunities', 'Loading opportunities...')}
            style={{
              display: "flex", alignItems: "center", gap: "8px",
              padding: "12px 24px", backgroundColor: "white", color: "#6b7280",
              borderRadius: "8px", border: "1px solid #d1d5db", cursor: "pointer", fontSize: "16px", fontWeight: "500"
            }}
          >
            <Icon name="bookOpen" size={16} />
            Save for Later
          </button>
        </div>
      </div>
    );
  };

  const SettingsView = () => {
    const [activeTab, setActiveTab] = useState("organization");

    const tabs = [
      { id: "organization", label: "Organization", icon: "users" },
      { id: "team", label: "Team Management", icon: "users" },
      { id: "ai", label: "AI Settings", icon: "brain" },
      { id: "integrations", label: "Integrations", icon: "zap" },
    ];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#111827", margin: 0 }}>
          Settings
        </h2>

        <div style={{ display: "flex", gap: "24px" }}>
          {/* Sidebar */}
          <div style={{ width: "240px" }}>
            <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px",
                    border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "14px",
                    fontWeight: "500", textAlign: "left", transition: "all 0.2s ease",
                    backgroundColor: activeTab === tab.id ? "#f3f4f6" : "transparent",
                    color: activeTab === tab.id ? "#1f2937" : "#6b7280"
                  }}
                >
                  <Icon name={tab.icon} size={18} />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div style={{ flex: 1 }}>
            {activeTab === "organization" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={styles.card}>
                  <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111827", margin: "0 0 16px 0" }}>
                    Organization Profile
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "6px", display: "block" }}>
                        Organization Name
                      </label>
                      <input
                        type="text"
                        value="A Little More Support DC"
                        style={{
                          width: "100%", padding: "8px 12px", border: "1px solid #d1d5db",
                          borderRadius: "6px", fontSize: "14px"
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "6px", display: "block" }}>
                        EIN
                      </label>
                      <input
                        type="text"
                        value="XX-XXXXXXX"
                        style={{
                          width: "100%", padding: "8px 12px", border: "1px solid #d1d5db",
                          borderRadius: "6px", fontSize: "14px"
                        }}
                      />
                    </div>
                    <div style={{ gridColumn: "1 / -1" }}>
                      <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "6px", display: "block" }}>
                        Address
                      </label>
                      <input
                        type="text"
                        value="1418 Good Hope Road Southeast, Washington, DC 20020"
                        style={{
                          width: "100%", padding: "8px 12px", border: "1px solid #d1d5db",
                          borderRadius: "6px", fontSize: "14px"
                        }}
                      />
                    </div>
                    <div style={{ gridColumn: "1 / -1" }}>
                      <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "6px", display: "block" }}>
                        Mission Statement
                      </label>
                      <textarea
                        value="Addresses the Social Determinants of Health for individuals with limited means and access to resources"
                        style={{
                          width: "100%", padding: "8px 12px", border: "1px solid #d1d5db",
                          borderRadius: "6px", fontSize: "14px", minHeight: "80px", resize: "vertical"
                        }}
                      />
                    </div>
                  </div>
                  <button style={{
                    marginTop: "16px", padding: "8px 16px", backgroundColor: "#2563eb",
                    color: "white", borderRadius: "6px", border: "none", cursor: "pointer"
                  }}>
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {activeTab === "team" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={styles.card}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                    <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111827", margin: 0 }}>
                      Team Members
                    </h3>
                    <button style={{
                      display: "flex", alignItems: "center", gap: "8px", padding: "8px 16px",
                      backgroundColor: "#2563eb", color: "white", borderRadius: "6px", border: "none", cursor: "pointer"
                    }}>
                      <Icon name="plus" size={16} />
                      Invite Member
                    </button>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {mockTeamMembers.map((member) => (
                      <div key={member.id} style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        padding: "16px", backgroundColor: "#f9fafb", borderRadius: "8px"
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <div style={{
                            width: "40px", height: "40px", backgroundColor: "#d1d5db",
                            borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center"
                          }}>
                            <Icon name="user" size={20} color="#6b7280" />
                          </div>
                          <div>
                            <div style={{ fontSize: "16px", fontWeight: "500", color: "#111827" }}>
                              {member.name}
                            </div>
                            <div style={{ fontSize: "14px", color: "#6b7280" }}>
                              {member.role} • {member.department}
                            </div>
                          </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <span style={{
                            padding: "4px 8px", fontSize: "12px", fontWeight: "500", borderRadius: "12px",
                            backgroundColor: "#dcfce7", color: "#166534"
                          }}>
                            {member.status}
                          </span>
                          <button style={{
                            padding: "4px 8px", fontSize: "12px", backgroundColor: "#f3f4f6",
                            border: "none", borderRadius: "4px", cursor: "pointer"
                          }}>
                            <Icon name="edit" size={12} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "ai" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {/* AI Core Settings */}
                <div style={styles.card}>
                  <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111827", margin: "0 0 16px 0" }}>
                    AI Assistant Configuration
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div>
                        <div style={{ fontSize: "14px", fontWeight: "500", color: "#111827" }}>
                          Auto-generate proposal sections
                        </div>
                        <div style={{ fontSize: "12px", color: "#6b7280" }}>
                          Automatically generate content for standard proposal sections
                        </div>
                      </div>
                      <div style={{
                        width: "44px", height: "24px", backgroundColor: "#2563eb", borderRadius: "12px",
                        position: "relative", cursor: "pointer"
                      }}>
                        <div style={{
                          width: "20px", height: "20px", backgroundColor: "white", borderRadius: "50%",
                          position: "absolute", top: "2px", right: "2px", transition: "all 0.2s ease"
                        }} />
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div>
                        <div style={{ fontSize: "14px", fontWeight: "500", color: "#111827" }}>
                          Smart deadline reminders
                        </div>
                        <div style={{ fontSize: "12px", color: "#6b7280" }}>
                          Get intelligent notifications based on proposal complexity
                        </div>
                      </div>
                      <div style={{
                        width: "44px", height: "24px", backgroundColor: "#2563eb", borderRadius: "12px",
                        position: "relative", cursor: "pointer"
                      }}>
                        <div style={{
                          width: "20px", height: "20px", backgroundColor: "white", borderRadius: "50%",
                          position: "absolute", top: "2px", right: "2px"
                        }} />
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div>
                        <div style={{ fontSize: "14px", fontWeight: "500", color: "#111827" }}>
                          RFP sentiment analysis
                        </div>
                        <div style={{ fontSize: "12px", color: "#6b7280" }}>
                          Analyze opportunity sentiment and competitiveness automatically
                        </div>
                      </div>
                      <div style={{
                        width: "44px", height: "24px", backgroundColor: "#2563eb", borderRadius: "12px",
                        position: "relative", cursor: "pointer"
                      }}>
                        <div style={{
                          width: "20px", height: "20px", backgroundColor: "white", borderRadius: "50%",
                          position: "absolute", top: "2px", right: "2px"
                        }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Writing Tone & Style */}
                <div style={styles.card}>
                  <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111827", margin: "0 0 16px 0" }}>
                    Writing Tone & Voice
                  </h3>
                  <p style={{ fontSize: "14px", color: "#6b7280", margin: "0 0 20px 0" }}>
                    Configure how AI generates content for your organization. These settings apply globally but can be overridden per application.
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "24px" }}>
                    <div>
                      <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", display: "block", marginBottom: "8px" }}>
                        Writing Tone
                      </label>
                      <select style={{
                        width: "100%", padding: "10px 12px", border: "1px solid #d1d5db", borderRadius: "6px",
                        fontSize: "14px", backgroundColor: "white"
                      }}>
                        <option value="professional">Professional & Formal</option>
                        <option value="confident" selected>Confident & Assertive</option>
                        <option value="collaborative">Collaborative & Partnership-Focused</option>
                        <option value="compassionate">Compassionate & Mission-Driven</option>
                        <option value="innovative">Innovative & Forward-Thinking</option>
                        <option value="academic">Academic & Research-Oriented</option>
                      </select>
                      <div style={{ fontSize: "12px", color: "#6b7280", marginTop: "4px" }}>
                        Sets the overall voice and approach for generated content
                      </div>
                    </div>

                    <div>
                      <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", display: "block", marginBottom: "8px" }}>
                        Formality Level
                      </label>
                      <select style={{
                        width: "100%", padding: "10px 12px", border: "1px solid #d1d5db", borderRadius: "6px",
                        fontSize: "14px", backgroundColor: "white"
                      }}>
                        <option value="high">High - Traditional grant language</option>
                        <option value="medium" selected>Medium - Balanced professional tone</option>
                        <option value="approachable">Approachable - Clear and accessible</option>
                        <option value="conversational">Conversational - Engaging and direct</option>
                      </select>
                      <div style={{ fontSize: "12px", color: "#6b7280", marginTop: "4px" }}>
                        Controls language complexity and accessibility
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "24px" }}>
                    <div>
                      <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", display: "block", marginBottom: "8px" }}>
                        Emphasis Style
                      </label>
                      <select style={{
                        width: "100%", padding: "10px 12px", border: "1px solid #d1d5db", borderRadius: "6px",
                        fontSize: "14px", backgroundColor: "white"
                      }}>
                        <option value="impact" selected>Impact & Outcomes Focused</option>
                        <option value="evidence">Evidence & Data Driven</option>
                        <option value="community">Community & Relationships</option>
                        <option value="innovation">Innovation & Methodology</option>
                        <option value="sustainability">Sustainability & Long-term Vision</option>
                        <option value="collaboration">Collaboration & Partnerships</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", display: "block", marginBottom: "8px" }}>
                        Technical Detail Level
                      </label>
                      <select style={{
                        width: "100%", padding: "10px 12px", border: "1px solid #d1d5db", borderRadius: "6px",
                        fontSize: "14px", backgroundColor: "white"
                      }}>
                        <option value="high">High - Detailed methodology & metrics</option>
                        <option value="medium" selected>Medium - Balanced technical content</option>
                        <option value="accessible">Accessible - Clear explanations</option>
                        <option value="minimal">Minimal - Focus on outcomes</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", display: "block", marginBottom: "8px" }}>
                      Organization Voice Description
                    </label>
                    <textarea
                      style={{
                        width: "100%", minHeight: "80px", padding: "10px 12px", border: "1px solid #d1d5db",
                        borderRadius: "6px", fontSize: "14px", resize: "vertical"
                      }}
                      defaultValue="A Little More Support DC approaches our mission with compassion, evidence-based practices, and deep community connection. We emphasize lived experience, cultural competency, and sustainable solutions that empower individuals and strengthen communities."
                    />
                    <div style={{ fontSize: "12px", color: "#6b7280", marginTop: "4px" }}>
                      This custom description helps AI generate content that reflects your organization's unique perspective
                    </div>
                  </div>
                </div>

                {/* Application-Specific Settings */}
                <div style={styles.card}>
                  <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111827", margin: "0 0 16px 0" }}>
                    Application-Specific Customization
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: "500", color: "#111827" }}>
                        Adaptive tone per funder
                      </div>
                      <div style={{ fontSize: "12px", color: "#6b7280" }}>
                        Automatically adjust writing style based on funder preferences and past awards
                      </div>
                    </div>
                    <div style={{
                      width: "44px", height: "24px", backgroundColor: "#2563eb", borderRadius: "12px",
                      position: "relative", cursor: "pointer"
                    }}>
                      <div style={{
                        width: "20px", height: "20px", backgroundColor: "white", borderRadius: "50%",
                        position: "absolute", top: "2px", right: "2px"
                      }} />
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: "500", color: "#111827" }}>
                        Industry-specific language
                      </div>
                      <div style={{ fontSize: "12px", color: "#6b7280" }}>
                        Use terminology and approaches specific to healthcare, education, social services, etc.
                      </div>
                    </div>
                    <div style={{
                      width: "44px", height: "24px", backgroundColor: "#2563eb", borderRadius: "12px",
                      position: "relative", cursor: "pointer"
                    }}>
                      <div style={{
                        width: "20px", height: "20px", backgroundColor: "white", borderRadius: "50%",
                        position: "absolute", top: "2px", right: "2px"
                      }} />
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: "500", color: "#111827" }}>
                        Competition-aware positioning
                      </div>
                      <div style={{ fontSize: "12px", color: "#6b7280" }}>
                        Emphasize unique strengths based on competitive landscape analysis
                      </div>
                    </div>
                    <div style={{
                      width: "44px", height: "24px", backgroundColor: "#2563eb", borderRadius: "12px",
                      position: "relative", cursor: "pointer"
                    }}>
                      <div style={{
                        width: "20px", height: "20px", backgroundColor: "white", borderRadius: "50%",
                        position: "absolute", top: "2px", right: "2px"
                      }} />
                    </div>
                  </div>
                </div>

                {/* Save Button */}
                <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px" }}>
                  <button style={{
                    padding: "10px 20px", border: "1px solid #d1d5db", borderRadius: "6px",
                    backgroundColor: "white", color: "#374151", cursor: "pointer", fontSize: "14px"
                  }}>
                    Reset to Defaults
                  </button>
                  <button style={{
                    padding: "10px 20px", backgroundColor: "#2563eb", color: "white",
                    borderRadius: "6px", border: "none", cursor: "pointer", fontSize: "14px", fontWeight: "500"
                  }}>
                    Save AI Settings
                  </button>
                </div>
              </div>
            )}

            {activeTab === "integrations" && (
              <div style={styles.card}>
                <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111827", margin: "0 0 16px 0" }}>
                  Integrations
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { name: "Google Drive", status: "connected", icon: "fileText" },
                    { name: "Salesforce", status: "available", icon: "users" },
                    { name: "Slack", status: "connected", icon: "messageSquare" },
                    { name: "Microsoft 365", status: "available", icon: "fileText" },
                  ].map((integration, index) => (
                    <div key={index} style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "16px", backgroundColor: "#f9fafb", borderRadius: "8px"
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <Icon name={integration.icon} size={24} color="#6b7280" />
                        <div style={{ fontSize: "16px", fontWeight: "500", color: "#111827" }}>
                          {integration.name}
                        </div>
                      </div>
                      <button style={{
                        padding: "6px 12px", fontSize: "12px", borderRadius: "6px", border: "none", cursor: "pointer",
                        backgroundColor: integration.status === "connected" ? "#dcfce7" : "#2563eb",
                        color: integration.status === "connected" ? "#166534" : "white"
                      }}>
                        {integration.status === "connected" ? "Connected" : "Connect"}
                      </button>
                    </div>
                  ))}
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

  // Loading overlay component
  const LoadingOverlay = () => (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      backdropFilter: "blur(4px)"
    }}>
      <div style={{ textAlign: "center" }}>
        <div style={{
          width: "40px",
          height: "40px",
          border: "3px solid #e5e7eb",
          borderTop: "3px solid #2563eb",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
          margin: "0 auto 16px"
        }} />
        <div style={{
          fontSize: "16px",
          fontWeight: "500",
          color: "#374151",
          marginBottom: "8px"
        }}>
          {loadingMessage}
        </div>
        <div style={{
          fontSize: "14px",
          color: "#9ca3af"
        }}>
          Please wait...
        </div>
      </div>
    </div>
  );

  const renderCurrentView = () => {
    const viewStyle = {
      opacity: isTransitioning ? 0.7 : 1,
      transform: isTransitioning ? "scale(0.98)" : "scale(1)",
      transition: "all 0.3s ease-in-out"
    };

    const content = (() => {
      switch (currentView) {
        case "dashboard":
          return <DashboardView />;
        case "opportunities":
          return <OpportunitiesView />;
        case "workspace":
        case "workspaces":
          return <WorkspaceView />;
        case "applications":
          return <ApplicationsView />;
        case "knowledge":
          return <KnowledgeBaseView />;
        case "documents":
          return <DocumentsView />;
        case "reports":
          return <ReportsView />;
        case "settings":
          return <SettingsView />;
        case "new-opportunity":
          return <NewOpportunityAssessment />;
        case "rfp-upload":
          return <RFPUploadView />;
        case "rfp-analysis":
          return <RFPAnalysisView />;
        case "analysis-report":
          return <AnalysisReportView />;
        case "demo-workspace":
          return <DemoWorkspaceView />;
        default:
          return <DashboardView />;
      }
    })();

    return (
      <div style={viewStyle}>
        {content}
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <Header />
      <BreadcrumbNav />

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <Sidebar />

        <main style={styles.content}>{renderCurrentView()}</main>
      </div>

      {viewLoading && <LoadingOverlay />}
    </div>
  );
};

export default FundingFrameApp;
