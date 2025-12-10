## 🧠 Architecture Overview: PokemonPetShop

This document outlines the core architecture, technology choices, and high-level structure of the PokemonPetShop application.

### 🌐 Current Technology Stack

The application is structured using a Monorepo pattern managed by **Nx** to separate concerns between the primary layers.

| Layer / Domain         | Core Technology       | Tooling & Utilities                                 | Purpose                                                                       |
| :--------------------- | :-------------------- | :-------------------------------------------------- | :---------------------------------------------------------------------------- |
| **General / Monorepo** | Nx (Workspace)        | Prettier, EsLint, Husky                             | Project scaffolding, task running, code quality, and git hooks.               |
| **Design System**      | Figma                 | Design Tokens, Style Directory                      | Central source for UI/UX specifications and reusable styles.                  |
| **Frontend (Web)**     | React, TypeScript     | Rspack, Nativewind, Tailwind CSS, Module Federation | Fast development and performant bundle generation for the web application.    |
| **State Management**   | Jotai, Tanstack Query | N/A                                                 | Global state management and server state synchronization (caching).           |
| **Backend API**        | Express, Node.js      | Webpack                                             | High-performance server-side logic and RESTful endpoint delivery.             |
| **Data Persistence**   | In-Memory Store       | N/A                                                 | Temporary, non-persistent data storage (primarily for demonstration/testing). |
| **Caching**            | Node Cache            | N/A                                                 | In-process caching layer for API responses.                                   |

---

### ✨ Future Architectural Additions (Roadmap)

These technologies and features are planned for future development and integration.

#### General & DevOps

- **CI/CD Deployment:** Automating build, test, and deployment workflows.

#### Frontend Enhancements (Web)

- **Storybook:** Isolated component development and documentation.
- **Testing:** Implementing unit/integration testing using React Testing Library and Jest.
- **E2E Testing:** End-to-end testing of user flows.
- **Mocking:** Using `msw` (Mock Service Worker) for reliable local development and testing.

#### Backend Enhancements (API)

- **Testing:** Implementing unit and integration testing using Jest.
- **E2E Testing:** End-to-end testing of API endpoints.
- **Mocking:** Using `msw` for external API mocking.

#### Dedicated Mobile Application

- **Stack:** React Native, TypeScript, Tailwind CSS, Nativewind, Rspack, Jotai, Tanstack Query, Module Federation.
- **Goal:** Leveraging the existing web stack for native mobile deployment.

---

### 💡 Design Decisions

[Section content to be added later]
