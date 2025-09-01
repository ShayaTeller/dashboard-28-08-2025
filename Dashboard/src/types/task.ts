export interface Task {
  id: string;
  title: string;
  done: boolean;
  assignedTo: string;
}

export const tasksExample = [
  {
    id: "task-001",
    title: "Design new user interface",
    done: false,
    assignedTo: "1"
  },
  {
    id: "task-002", 
    title: "Fix homepage bugs",
    done: true,
    assignedTo: "2"
  },
  {
    id: "task-003",
    title: "Write API documentation",
    done: false,
    assignedTo: "3"
  },
  {
    id: "task-004",
    title: "Optimize database queries",
    done: true,
    assignedTo: "4"
  },
  {
    id: "task-005",
    title: "Implement authentication system",
    done: false,
    assignedTo: "5"
  },
  {
    id: "task-006",
    title: "Add automated form testing",
    done: false,
    assignedTo: "6"
  },
  {
    id: "task-007",
    title: "Update third-party libraries",
    done: true,
    assignedTo: "7"
  },
  {
    id: "task-008",
    title: "Setup production environment",
    done: false,
    assignedTo: "8"
  },
  {
    id: "task-009",
    title: "Create user registration flow",
    done: true,
    assignedTo: "9"
  },
  {
    id: "task-010",
    title: "Implement password reset functionality",
    done: false,
    assignedTo: "10"
  },
  {
    id: "task-011",
    title: "Design mobile responsive layout",
    done: false,
    assignedTo: "11"
  },
  {
    id: "task-012",
    title: "Add search functionality",
    done: true,
    assignedTo: "12"
  },
  {
    id: "task-013",
    title: "Implement data validation",
    done: false,
    assignedTo: "13"
  },
  {
    id: "task-014",
    title: "Create admin dashboard",
    done: true,
    assignedTo: "14"
  },
  {
    id: "task-015",
    title: "Add email notifications",
    done: false,
    assignedTo: "15"
  },
  {
    id: "task-016",
    title: "Implement file upload feature",
    done: false,
    assignedTo: "16"
  },
  {
    id: "task-017",
    title: "Setup CI/CD pipeline",
    done: true,
    assignedTo: "17"
  },
  {
    id: "task-018",
    title: "Add unit tests for components",
    done: false,
    assignedTo: "18"
  },
  {
    id: "task-019",
    title: "Implement dark mode theme",
    done: true,
    assignedTo: "19"
  },
  {
    id: "task-020",
    title: "Add internationalization support",
    done: false,
    assignedTo: "20"
  },
  {
    id: "task-021",
    title: "Create user profile page",
    done: false,
    assignedTo: "21"
  },
  {
    id: "task-022",
    title: "Implement real-time chat",
    done: true,
    assignedTo: "22"
  },
  {
    id: "task-023",
    title: "Add data export functionality",
    done: false,
    assignedTo: "23"
  },
  {
    id: "task-024",
    title: "Setup monitoring and logging",
    done: true,
    assignedTo: "24"
  },
  {
    id: "task-025",
    title: "Implement shopping cart feature",
    done: false,
    assignedTo: "25"
  },
  {
    id: "task-026",
    title: "Add payment processing",
    done: false,
    assignedTo: "26"
  },
  {
    id: "task-027",
    title: "Create inventory management system",
    done: true,
    assignedTo: "27"
  },
  {
    id: "task-028",
    title: "Implement user roles and permissions",
    done: false,
    assignedTo: "28"
  },
  {
    id: "task-029",
    title: "Add calendar integration",
    done: true,
    assignedTo: "29"
  },
  {
    id: "task-030",
    title: "Create reporting dashboard",
    done: false,
    assignedTo: "30"
  },
  {
    id: "task-031",
    title: "Implement social media login",
    done: false,
    assignedTo: "31"
  },
  {
    id: "task-032",
    title: "Add image compression feature",
    done: true,
    assignedTo: "32"
  },
  {
    id: "task-033",
    title: "Create backup and restore system",
    done: false,
    assignedTo: "33"
  },
  {
    id: "task-034",
    title: "Implement content management system",
    done: true,
    assignedTo: "34"
  },
  {
    id: "task-035",
    title: "Add push notifications",
    done: false,
    assignedTo: "35"
  },
  {
    id: "task-036",
    title: "Create SEO optimization features",
    done: false,
    assignedTo: "36"
  },
  {
    id: "task-037",
    title: "Implement analytics tracking",
    done: true,
    assignedTo: "37"
  },
  {
    id: "task-038",
    title: "Add multi-language support",
    done: false,
    assignedTo: "38"
  },
  {
    id: "task-039",
    title: "Create feedback collection system",
    done: true,
    assignedTo: "39"
  },
  {
    id: "task-040",
    title: "Implement rate limiting",
    done: false,
    assignedTo: "40"
  },
  {
    id: "task-041",
    title: "Add webhook support",
    done: false,
    assignedTo: "41"
  },
  {
    id: "task-042",
    title: "Create documentation site",
    done: true,
    assignedTo: "42"
  },
  {
    id: "task-043",
    title: "Implement caching strategy",
    done: false,
    assignedTo: "43"
  },
  {
    id: "task-044",
    title: "Add API versioning",
    done: true,
    assignedTo: "44"
  },
  {
    id: "task-045",
    title: "Create health check endpoints",
    done: false,
    assignedTo: "45"
  },
  {
    id: "task-046",
    title: "Implement queue management",
    done: false,
    assignedTo: "46"
  },
  {
    id: "task-047",
    title: "Add load balancing configuration",
    done: true,
    assignedTo: "47"
  },
  {
    id: "task-048",
    title: "Create error handling middleware",
    done: false,
    assignedTo: "48"
  },
  {
    id: "task-049",
    title: "Implement data migration scripts",
    done: true,
    assignedTo: "49"
  },
  {
    id: "task-050",
    title: "Add security headers configuration",
    done: false,
    assignedTo: "50"
  },
  {
    id: "task-051",
    title: "Create automated testing suite",
    done: false,
    assignedTo: "1"
  },
  {
    id: "task-052",
    title: "Implement GraphQL API",
    done: true,
    assignedTo: "2"
  },
  {
    id: "task-053",
    title: "Add drag and drop functionality",
    done: false,
    assignedTo: "3"
  },
  {
    id: "task-054",
    title: "Create audit logging system",
    done: true,
    assignedTo: "4"
  },
  {
    id: "task-055",
    title: "Implement two-factor authentication",
    done: false,
    assignedTo: "5"
  },
  {
    id: "task-056",
    title: "Add bulk operations support",
    done: false,
    assignedTo: "6"
  },
  {
    id: "task-057",
    title: "Create performance monitoring",
    done: true,
    assignedTo: "7"
  },
  {
    id: "task-058",
    title: "Implement lazy loading",
    done: false,
    assignedTo: "8"
  },
  {
    id: "task-059",
    title: "Add keyboard shortcuts",
    done: true,
    assignedTo: "9"
  },
  {
    id: "task-060",
    title: "Create component library",
    done: false,
    assignedTo: "10"
  },
  {
    id: "task-061",
    title: "Implement virtual scrolling",
    done: false,
    assignedTo: "11"
  },
  {
    id: "task-062",
    title: "Add accessibility features",
    done: true,
    assignedTo: "12"
  },
  {
    id: "task-063",
    title: "Create PDF generation feature",
    done: false,
    assignedTo: "13"
  },
  {
    id: "task-064",
    title: "Implement WebSocket connections",
    done: true,
    assignedTo: "14"
  },
  {
    id: "task-065",
    title: "Add batch processing capabilities",
    done: false,
    assignedTo: "15"
  },
  {
    id: "task-066",
    title: "Create data visualization charts",
    done: false,
    assignedTo: "16"
  },
  {
    id: "task-067",
    title: "Implement content delivery network",
    done: true,
    assignedTo: "17"
  },
  {
    id: "task-068",
    title: "Add machine learning integration",
    done: false,
    assignedTo: "18"
  },
  {
    id: "task-069",
    title: "Create automated deployment scripts",
    done: true,
    assignedTo: "19"
  },
  {
    id: "task-070",
    title: "Implement data compression",
    done: false,
    assignedTo: "20"
  },
  {
    id: "task-071",
    title: "Add geolocation services",
    done: false,
    assignedTo: "21"
  },
  {
    id: "task-072",
    title: "Create workflow automation",
    done: true,
    assignedTo: "22"
  },
  {
    id: "task-073",
    title: "Implement blockchain integration",
    done: false,
    assignedTo: "23"
  },
  {
    id: "task-074",
    title: "Add voice recognition feature",
    done: true,
    assignedTo: "24"
  },
  {
    id: "task-075",
    title: "Create progressive web app",
    done: false,
    assignedTo: "25"
  },
  {
    id: "task-076",
    title: "Implement cloud storage integration",
    done: false,
    assignedTo: "26"
  },
  {
    id: "task-077",
    title: "Add video streaming capabilities",
    done: true,
    assignedTo: "27"
  },
  {
    id: "task-078",
    title: "Create smart recommendations engine",
    done: false,
    assignedTo: "28"
  },
  {
    id: "task-079",
    title: "Implement offline functionality",
    done: true,
    assignedTo: "29"
  },
  {
    id: "task-080",
    title: "Add OCR text recognition",
    done: false,
    assignedTo: "30"
  },
  {
    id: "task-081",
    title: "Create automated email campaigns",
    done: false,
    assignedTo: "31"
  },
  {
    id: "task-082",
    title: "Implement biometric authentication",
    done: true,
    assignedTo: "32"
  },
  {
    id: "task-083",
    title: "Add augmented reality features",
    done: false,
    assignedTo: "33"
  },
  {
    id: "task-084",
    title: "Create IoT device integration",
    done: true,
    assignedTo: "34"
  },
  {
    id: "task-085",
    title: "Implement natural language processing",
    done: false,
    assignedTo: "35"
  },
  {
    id: "task-086",
    title: "Add cryptocurrency payment support",
    done: false,
    assignedTo: "36"
  },
  {
    id: "task-087",
    title: "Create predictive analytics dashboard",
    done: true,
    assignedTo: "37"
  },
  {
    id: "task-088",
    title: "Implement edge computing optimization",
    done: false,
    assignedTo: "38"
  },
  {
    id: "task-089",
    title: "Add quantum encryption protocols",
    done: true,
    assignedTo: "39"
  },
  {
    id: "task-090",
    title: "Create neural network training pipeline",
    done: false,
    assignedTo: "40"
  },
  {
    id: "task-091",
    title: "Implement 3D visualization engine",
    done: false,
    assignedTo: "41"
  },
  {
    id: "task-092",
    title: "Add robotic process automation",
    done: true,
    assignedTo: "42"
  },
  {
    id: "task-093",
    title: "Create distributed computing cluster",
    done: false,
    assignedTo: "43"
  },
  {
    id: "task-094",
    title: "Implement digital twin simulation",
    done: true,
    assignedTo: "44"
  },
  {
    id: "task-095",
    title: "Add holographic user interface",
    done: false,
    assignedTo: "45"
  },
  {
    id: "task-096",
    title: "Create autonomous system monitoring",
    done: false,
    assignedTo: "46"
  },
  {
    id: "task-097",
    title: "Implement quantum computing algorithms",
    done: true,
    assignedTo: "47"
  },
  {
    id: "task-098",
    title: "Add space-time data synchronization",
    done: false,
    assignedTo: "48"
  },
  {
    id: "task-099",
    title: "Create interdimensional API gateway",
    done: true,
    assignedTo: "49"
  },
  {
    id: "task-100",
    title: "Implement consciousness transfer protocol",
    done: false,
    assignedTo: "50"
  }
];