## 🏁 Getting Started with Pokémon Pet Shop

This guide provides the necessary steps to set up and run the entire **Pokémon Pet Shop** application on your local machine.

The project is currently under development. I created a backlog of tickets to address identified issues and integrate planned enhancements.

### 📋 Prerequisites

Before proceeding, ensure you have the following installed. Using the specified versions will prevent the most common setup issues.

| Tool        | Requirement      | Purpose                                                              |
| :---------- | :--------------- | :------------------------------------------------------------------- |
| **Git**     | Installed        | For cloning the repository.                                          |
| **Node.js** | **Version 24.x** | The required runtime environment.                                    |
| **pnpm**    | Installed        | The project's package manager, essential for the monorepo structure. |

> **Tip:** If you use a Node Version Manager (like nvm or Volta), you can quickly switch to the correct version with a command like `nvm install 24`.

### 💻 Local Setup

#### 1. Clone the Repository

Clone the project using Git on the command line, or use software to download it to your machine.

#### 2. Install Dependencies

Use `pnpm i` to install dependencies for the project

#### 3. Running the Applications

Run the commands below to begin the apps.

Web App: `npx nx run web:serve`

Backend App: `npx nx run @pokemon-pet-shop/api:serve:development`

### 🧠 Architecture

To understand the design choices, technology stack, and structure of the application, please take a look at the **Architecture Overview**.

➡️ **Read the full document: [README_ARCHITECTURE.md](./README_ARCHITECTURE.md)**
