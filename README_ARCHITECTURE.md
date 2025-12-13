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

### ✨ Future Architectural Roadma

These items represent the planned enhancements and architectural integrations for the next phases of the PokemonPetShop project.

| Domain                   | Feature / Technology                            | Goal & Benefit                                                                                                                                           |
| :----------------------- | :---------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **DevOps / Automation**  | **CI/CD Deployment** (e.g., GitHub Actions)     | Automate the build, test, and deployment pipelines to ensure rapid, reliable, and consistent releases across all environments.                           |
| **Frontend Testing**     | Storybook                                       | Isolate and document UI components for easier development, review, and state management.                                                                 |
| **Frontend Testing**     | React Testing Library & Jest                    | Implement robust unit and integration tests for all components and complex client logic.                                                                 |
| **Frontend Testing**     | **E2E Testing** (End-to-End)                    | Ensure critical user flows and application journeys function correctly from start to finish.                                                             |
| **Frontend Development** | **Mock Service Worker (msw)**                   | Use request interception to mock API responses, enabling decoupled and reliable local development and testing without needing the live backend.          |
| **Backend Testing**      | Jest & E2E Testing                              | Implement comprehensive unit, integration, and end-to-end testing for all API endpoints and server-side logic.                                           |
| **Backend Development**  | **Mock Service Worker (msw)**                   | Mock external service dependencies (if applicable) for the API to ensure isolated and deterministic testing.                                             |
| **Mobile Application**   | **Dedicated Mobile Stack** (React Native, etc.) | Leverage the existing web stack and technologies (Tailwind CSS, Jotai, Module Federation) to achieve native mobile deployment and maximize code sharing. |

---

### 💡 Design Decisions

This application serves as a comprehensive Greenfield project, designed to showcase key stages of development, from initial design to scalable architecture and future planning. Below, we outline the primary technical and architectural choices made during development.

#### 1. **Project Management and Structure (Monorepo)**

| Decision                | Rationale                                                                                                                                                                                                                                                                                                           |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Nx Monorepo**         | Chosen to maximize **code reusability** across the frontend (`web`) and backend (`api`), which is essential for a project with a single developer. It enforces a standardized structure and provides powerful tooling.                                                                                              |
| **Separated Libraries** | Codebase is strictly organized into distinct libraries (`features`, `types`, `services`, `ui`, `utils`). This design enforces a **strong separation of concerns**, preventing circular dependencies and allowing specific libraries (e.g., `types`) to be imported into both web and API projects without conflict. |

#### 2. **Design System & Developer Handoff**

| Decision                           | Rationale                                                                                                                                                                                                                                                                                                                            |
| :--------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Figma as Source of Truth**       | All design components, styles, and themes (light/dark) are managed in Figma to ensure visual **consistency** across all platforms (web and mobile).                                                                                                                                                                                  |
| **Automated Design Token Handoff** | Utilized a "Design Tokens" plugin and custom tooling to automatically export Figma variables into a JSON format. This JSON is compiled into **Tailwind configuration** and **JS variables** via the `libs/ds-token` project. This minimizes manual updates and ensures the development environment always matches the latest design. |

#### 3. **UI and Styling Stack**

| Decision                      | Rationale                                                                                                                                                                                                                                                                                            |
| :---------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tailwind CSS & Nativewind** | The previous multi-tool styling approach was abandoned in favor of a unified **utility-first** CSS solution. This choice significantly reduces complexity and improves **maintainability** by allowing a single styling approach that works across both React Web and React Native/Mobile platforms. |

#### 4. **Technology Trade-offs**

| Decision                               | Rationale                                                                                                                                                                                                                                                                                                                      |
| :------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Standard React/Web vs. Expo/RN-Web** | While **Expo/React Native Web** offers faster initial setup for cross-platform development, this approach was declined. The standard React/Web stack provides greater **flexibility** and avoids the constraints and vendor lock-in that can occur with the Expo ecosystem, ensuring maximum control over the web application. |

#### 5. **API Scalability**

| Decision                             | Rationale                                                                                                                                                                                                                                                                       |
| :----------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Scalable API Directory Structure** | The API project directory was structured with **scalability** in mind. The organization of resources and services allows for a smooth, future transition to a **microservices** architecture should the project grow beyond the capabilities of the current monolithic service. |

---

### 🛣️ Future Roadmap

- **CI/CD:** To be implemented using **Github Actions** for automated testing and deployment.
- **Deployment:** Details regarding hosting and environment setup are **TBD**.
