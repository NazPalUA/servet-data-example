This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Demo Overview

This repository serves as a demo for my upcoming Medium post discussing the new React 19 "use" API. In this demo you'll find three different approaches for handling data fetching in React components:

1. **Bad Approach:** A single parent server component fetches data for two client components, blocking rendering until data is available (1 server + 2 client components).
2. **Good Approach:** The parent server component delegates data fetching to two dedicated server components wrapped in Suspense (3 server + 2 client components).
3. **Best Approach:** The parent component initiates data fetching without awaiting results and passes promises to client components that use the new "use" API to suspend rendering until data is ready (1 server + 2 client components).

Check out the code examples in this repository and learn how the "use" API simplifies data fetching in React.

## Implementation Details

### 🚫 Bad Approach (Minimum)

- **Components**:
  - 1 Server Component (`components/minimum/parent.server.tsx`)
  - 2 Client Components (`components/minimum/child-*.client.tsx`)
- **Data Flow**:
  ```mermaid
  graph TD
    A[Parent Server] -->|await| B[Fetch Data 1]
    A -->|await| C[Fetch Data 2]
    B --> D[Client Child 1]
    C --> E[Client Child 2]
  ```

### 👍 Good Approach (With Suspense)

- **Components**:
  - 1 Parent Server (`components/with-suspense/parent.server.tsx`)
  - 2 Server Children (`components/with-suspense/child-*.server.tsx`)
  - 2 Client Children (`components/with-suspense/child-*.client.tsx`)
- **Data Flow**:
  ```mermaid
  graph TD
    A[Parent Server] --> B[Suspense Boundary 1]
    A --> C[Suspense Boundary 2]
    B --> D[Server Child 1]
    C --> E[Server Child 2]
    D --> F[Client Child 1]
    E --> G[Client Child 2]
  ```

### 🏆 Best Approach (Suspense + use)

- **Components**:
  - 1 Server Component (`components/with-suspense-and-use/parent.server.tsx`)
  - 2 Client Components (`components/with-suspense-and-use/child-*.client.tsx`)
- **Key Innovation**:
  ```typescript:components/with-suspense-and-use/child-1.client.tsx
  startLine: 6
  endLine: 15
  ```
  Uses React 19's `use()` hook to directly consume promises in client components

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
