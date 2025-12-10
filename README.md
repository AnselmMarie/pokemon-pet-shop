## 🏁 Getting Started with PokemonPetShop

This guide provides the necessary steps to set up and run the entire **PokemonPetShop** application on your local machine.

### 📋 Prerequisites

Before proceeding, ensure you have the following installed. Using the specified versions will prevent most common setup issues.

| Tool        | Requirement      | Purpose                                                              |
| :---------- | :--------------- | :------------------------------------------------------------------- |
| **Git**     | Installed        | For cloning the repository.                                          |
| **Node.js** | **Version 24.x** | The required runtime environment.                                    |
| **pnpm**    | Installed        | The project's package manager, essential for the monorepo structure. |

> **Tip:** If you use a Node Version Manager (like nvm or Volta), you can quickly switch to the correct version with a command like `nvm install 24`.

### 💻 Local Setup

#### 1. Clone the Repository

Clone the project using Git on the command line or use a software to download the project to your machine.

#### 2. Install Dependencies

Use `pnpm i` to install dependencies for the project

#### 3. Running the Applications

Run the commands below to begin the apps.

Web app: `npx nx run web:serve`

backend app: `npx nx run @pokemon-pet-shop/api:serve:development`
