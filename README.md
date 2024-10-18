# Pokéshop

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Built With](#built-with)
- [Process of the building Pokeshop](#process-of-the-building-pokeshop)

## Overview

As a personal challenge, I set out to build a project that maximizes code sharing across web, native, and API applications, without compromising the capabilities of any platform. Below are links showcasing various parts of the project.

- Figma -> TBD
- Web -> TBD
- Mobile -> TBD

## Installation

You can either use the nx commands or use docker compose

### General

1. install npm modules

   ```
   npm install
   ```

2. Update .env file

   Refer to the .env.example file for easy setup instructions.

### Known Issues

If the 'npx nx' command below returns an error, try running 'npx nx reset' first, then run the original command again.

### Web Development Serve

Nx commands

- Run API App

  ```
  npx nx run api:serve --configuration=development
  ```

- Run Web App

  ```
  npx nx run web-app:serve
  ```

Docker

1. Run the build dev Docker command

   ```
   npm run docker-web-build:dev
   ```

2. then run the start dev Docker command

   ```
   npm run docker-web-up:dev
   ```

### Mobile Development Serve

(ie: the .env variables needs to be updated)

Nx commands

- Run API App

  ```
  npx nx run api:serve --configuration=development
  ```

- Run Mobile App

  ```
  npx nx run mobile-app:serve
  ```

Docker

- Currently being worked on

## Built With

- Nx
- React
- Vite (I’m considering switching to Rspack based on Zack's feedback and once Nx adds those changes: [Zack's X comment - last paragraph](https://x.com/scriptedalchemy/status/1844142742747955410?s=46&t=5iUg3_2JUDlizQ0tJFJ3mA))
- React Native (Expo)
- Node JS (Express)
- Zustand
- Tanstack Query
- Docker and Docker Compose
- Style Directory
- Figma
- Husky / ESLint / Prettier / Stylelint
- Github Actions
- Future Additions
  - Storybook
  - React Testing Library and Jest
  - Azure

## Process of the building Pokéshop

This application covers key stages of building a Greenfield project, including design, app architecture, APIs, CI/CD, and future deployment. Below, I’ve outlined each step of the process with a detailed explanation. Since this is a personal project, there are certain aspects I approached differently compared to how I would handle a client project.

### Design

Once I decided to build a Pokédex with a unique twist—allowing users to purchase Pokémon as pets—I turned my attention to designing in Figma. I created three distinct pages, focusing on the Design System, Web, and App. By creating reusable components and leveraging local variables for general, light, and dark themes, I was able to streamline the design process and ensure consistency across the project.

### Design/App DS Token Handoff

To simplify the handoff process, I installed the "Design Tokens" plugin, which allows me to export local variables in JSON format. I then add this JSON file to the "libs/ds-token" project and run a command that compiles the design tokens into both CSS and JS formats. This setup makes it easy to update tokens across applications whenever I modify Figma's local variables, ensuring a smooth and efficient workflow.

### App Architecture

When building the applications, my primary goal was to maximize code reusability across all platforms without compromising the unique capabilities of each. As the sole developer, sharing code between platforms was essential for maintaining efficiency. To achieve this, I used Nx to set up a monorepo, organizing the codebase into apps (API, web, mobile) and libraries (features, types, store, UI) to ensure clear separation of concerns.

While I considered using React Native and React Native Web for quicker development, I chose not to, as it would limit my flexibility on the web. Specifically, I wanted to keep options open for using technologies like micro-frontends, Vite, CSS modules, and React-specific components. This approach allowed me to maintain flexibility and avoid constraints. For the API project, I structured the directory with scalability in mind, enabling a smooth transition to microservices if needed in the future.

### CI/CD

In this project, I aimed to demonstrate my expertise in CI/CD deployments by utilizing GitHub Actions.

### Deployment

TBD
