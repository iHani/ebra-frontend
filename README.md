# Ebra Store - Modern E-Commerce

A modern, elegant e-commerce store built with Next.js 14+ (App Router), TypeScript, and Tailwind CSS. This project demonstrates best practices for building production-ready web applications, including server-side data fetching, granular loading states, and robust error handling.

## Core Features

-   **Next.js App Router:** Utilizes the latest features for routing, layouts, and server components.
-   **Server Actions:** All API interactions are handled securely on the server.
-   **Granular Loading with Suspense:** No more full-page flashes. Loading skeletons are shown only for the components that are actively fetching data, providing a seamless user experience.
-   **Zustand for Client State:** Manages purely client-side state like the shopping cart efficiently and without boilerplate.
-   **Robust Error Handling:** Gracefully handles API errors and non-existent routes with dedicated `error.tsx` and `not-found.tsx` pages.
-   **Styled with Tailwind CSS & shadcn/ui:** A modern, responsive, and accessible UI.

## Getting Started

### Prerequisites

-   Node.js (v18 or later)
-   A package manager like npm, pnpm, or yarn

### Installation

1.  **Clone the repository:**
  \`\`\`bash
  git clone <repository-url>
  cd <repository-directory>
  \`\`\`

2.  **Install dependencies:**
  \`\`\`bash
  npm install
  \`\`\`

### Running the Development Server

To start the development server, run:

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
