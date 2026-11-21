import type { Project } from '@/types/project';

/** Linked from the "View all" button next to the Projects heading. */
export const allProjectsUrl = 'https://github.com/piyush00868?tab=repositories';

/**
 * Projects, in display order. The card and its detail modal both render
 * from the same entry, so edit a project here and both stay in sync.
 */
export const projects: readonly Project[] = [
  {
    slug: 'mindora',
    title: 'Mindora',
    tagline: 'AI knowledge workspace, NotebookLM-style.',
    summary:
      'Drop in PDFs, web URLs, YouTube videos or plain text, then chat with your sources and get grounded answers with inline citations.',
    modalSubtitle: 'AI Knowledge Workspace',
    status: 'live',
    ribbon: 'RAG · Featured',
    cover: {
      kind: 'screenshot',
      gradient: 'blue',
      image: '/assets/mindora.webp',
      alt: 'Mindora landing page',
    },
    cardTags: ['React', 'Node.js', 'PostgreSQL', 'Pinecone'],
    tags: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Prisma',
      'Pinecone',
      'Mistral Embeddings',
      'Groq API',
      'Supadata API',
      'Clerk',
    ],
    highlights: [
      'Developed a NotebookLM-style application supporting ingestion of PDFs, web URLs, YouTube videos and plain text, letting users query their documents through an AI-powered chat interface.',
      'Implemented an end-to-end RAG pipeline using Mistral embeddings and Pinecone vector search, integrating Groq LLMs to generate source-grounded answers with inline citations.',
      'Built RESTful APIs using Node.js, Express.js and TypeScript for document processing, notebook management and persistent chat history; integrated Clerk authentication and PostgreSQL with Prisma.',
      'Manually validated YouTube ingestion and question answering across 10–20 video URLs covering different topics, testing multiple questions per video for response relevance.',
    ],
    links: [
      {
        label: 'Live site',
        href: 'https://www.mindor.me/',
        icon: 'globe',
        onCard: true,
        cardTitle: 'Live site',
      },
      {
        label: 'Frontend',
        href: 'https://github.com/piyush00868/notebook-llm-frontend',
        icon: 'github',
      },
      {
        label: 'Backend',
        href: 'https://github.com/piyush00868/notebook-llm-backend',
        icon: 'github',
        onCard: true,
        cardTitle: 'Backend repo',
      },
    ],
  },
  {
    slug: 'research',
    title: 'Multi-Agent Research',
    tagline: 'Automated research reports with self-critique.',
    summary:
      'A 4-stage LangChain pipeline that turns a topic into a structured, sourced report, then has an independent critic agent review it.',
    modalSubtitle: 'Automated report generation with self-critique',
    cover: { kind: 'terminal', gradient: 'green' },
    cardTags: ['Python', 'LangChain', 'Groq', 'Tavily'],
    tags: ['Python', 'LangChain', 'Groq API', 'Tavily API', 'BeautifulSoup', 'Streamlit'],
    highlights: [
      'Architected a 4-stage multi-agent LangChain system, with tool-using search and reader agents feeding writer and critic chains, autonomously turning a topic into a structured, sourced research report with independent review.',
      'Built custom LLM-callable tools (Tavily web search, BeautifulSoup scraper) with safeguards: request timeouts, graceful error handling, boilerplate stripping and capped snippet/page lengths to fit prompt limits.',
      'Implemented grounded generation: the writer is limited to gathered research (no outside knowledge, invented facts or fabricated citations), while a separate LLM critic scores each report out of 10 with strengths, weaknesses and a verdict.',
      'Composed writer and critic as LCEL chains (prompt → LLM → parser), orchestrating all four stages sequentially over shared state, with every model at temperature 0 for repeatable results.',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/piyush00868/Multi-Agent-AI-Research-System',
        icon: 'github',
        onCard: true,
        cardTitle: 'GitHub repo',
      },
    ],
  },
  {
    slug: 'eventera',
    title: 'EventEra',
    tagline: 'Full-stack event booking platform.',
    summary:
      'Discover events, book tickets and manage reservations, with OTP-verified accounts, role-based access and an admin dashboard.',
    modalSubtitle: 'Full-stack event booking platform',
    cover: { kind: 'event-dashboard', gradient: 'orange' },
    cardTags: ['React', 'Express', 'MongoDB', 'JWT'],
    tags: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'Tailwind CSS',
      'JWT',
      'bcryptjs',
      'Nodemailer',
      'Axios',
    ],
    highlights: [
      'Developed a full-stack event booking platform using React.js, Node.js, Express.js and MongoDB, enabling event discovery, ticket booking and reservation management.',
      'Implemented JWT-based authentication, bcrypt password hashing, email OTP verification and role-based access control (RBAC) to secure accounts and restrict admin operations.',
      'Designed RESTful APIs for event management, booking creation, cancellation and approval, with duplicate-booking validation and seat availability tracking.',
      'Built an admin dashboard for event CRUD, booking approval, payment-status management and booking analytics; integrated Nodemailer for automated OTP and booking confirmation emails.',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/piyush00868/EventPlatform',
        icon: 'github',
        onCard: true,
        cardTitle: 'GitHub repo',
      },
    ],
  },
  {
    slug: 'agent-builder',
    title: 'Agent Builder',
    tagline: 'Visual builder for creating and testing AI agents.',
    summary:
      'Design an agent on a visual canvas, attach built-in or custom HTTP tools, start from templates and test it live in a streaming chat.',
    modalSubtitle: 'Create, configure and test AI agents',
    status: 'live',
    cover: {
      kind: 'screenshot',
      gradient: 'violet',
      image: '/assets/agent-builder.webp',
      alt: 'Agent Builder template picker',
    },
    cardTags: ['Next.js', 'LangChain', 'PostgreSQL'],
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'Better Auth',
      'LangChain',
      'Groq',
      'Zod',
      'React Flow',
      'Zustand',
      'TanStack Query',
      'Tailwind CSS',
      'Tavily',
    ],
    highlights: [
      'Built a web app for creating, configuring and testing AI agents on a visual Start → Agent → End workflow canvas, with saved agent definitions and canvas layouts.',
      'Ships ready-made templates (weather, web research, travel, writing, coding and PR review) alongside blank agents with configurable instructions, model, memory and tool limits.',
      'Implemented a tool registry with calculator, weather, web search, webpage extraction and GitHub tools, plus user-defined custom HTTP tools with parameters, headers and request bodies, validated with Zod.',
      'Agent runs execute with LangChain and Groq and stream back to a Test Chat as server-sent events (text deltas, tool start/finish, completion), with conversations, messages and tool events stored in PostgreSQL via Prisma.',
      "Added GitHub OAuth sign-in with Better Auth; GitHub tools act through the connected account's token. Canvas state lives in Zustand and client data fetching uses TanStack Query.",
    ],
    links: [
      {
        label: 'Live site',
        href: 'https://agent-builder-kappa-gilt.vercel.app',
        icon: 'globe',
        onCard: true,
        cardTitle: 'Live site',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/piyush00868/agent-builder',
        icon: 'github',
        onCard: true,
        cardTitle: 'GitHub repo',
      },
    ],
  },
];
