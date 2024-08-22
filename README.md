# Kanban Board Application

##URL

# https://snopbear.github.io/benify-kanban-board-code-test/

## Project Overview

The Kanban Board application is designed to manage tasks by organizing them into three columns: "To Do", "Implementing", and "Done". This application allows users to create, move, and delete tasks. Two different state management approaches were implemented: **Angular Signals** and **NgRx**. This document outlines the features of the application, implementation details, and how to set up and run the project.

---

## Features

1. **Three Columns for Task Management**:
   - **To Do**: New tasks are added to this column.
   - **Implementing**: Tasks in progress are moved here.
   - **Done**: Completed tasks are moved to this column.

2. **Task Creation**:
   - Users can create new tasks using a form with a text input and button.
   - Newly created tasks are added to the "To Do" column.

3. **Task Movement**:
   - Tasks can be moved between columns using drag-and-drop functionality or buttons for "Move Left" and "Move Right".

4. **Task Deletion**:
   - Users can delete tasks from any column.

5. **State Management**:
   - Implemented with two approaches: **Angular Signals** and **NgRx**.

---

## State Management Approaches

### 1. Angular Signals

**Description**:  
Angular Signals provide a reactive way to manage state within the application. This approach leverages Angular's built-in reactive features, simplifying state management without relying on external libraries.

- **Reactive State Updates**: Automatic tracking of dependencies and state updates.
- **Task Management**: Tasks are stored in a signal, and task operations (create, move, delete) modify the signal's value directly.
- **Advantages**: Simplicity and no need for additional dependencies.

### 2. NgRx

**Description**:  
NgRx is a powerful state management library for Angular that follows the Redux pattern. It provides a centralized store for the application state, with actions, reducers, and effects to handle state changes and side effects.

- **Centralized State Management**: The application state is stored in a single store, and all updates are made through dispatched actions.
- **Effects for Side Effects**: Effects are used to handle side effects such as API calls.
- **Advantages**: Scalability, predictability, and rich community support.

---

## How to Run the Project

### Prerequisites

- Node.js and npm installed
- Angular CLI installed (`npm install -g @angular/cli`)

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/kanban-board.git
   cd kanban-board

2. **Install Dependencies**:

   ```bash
   npm install


3. **Run the Application**:

   ```bash
   ng serve


4. **Access the Application**:

   Open your browser and navigate to http://localhost:4200.

   Building the Application
   To build the application for production, run:

   ```bash
   ng build


---

## Folder Structure

> **Note**: The following implementation is based on Angular's traditional module-based architecture. I have since transitioned to using **Standalone Components** and **Standalone Services**, which provide a more modular and efficient development experience in Angular. However, this section covers the legacy module-based approach for context and compatibility with older Angular projects.

### 1. Core Module

- **Purpose**: Acts as a singleton module at the application level, providing services, state management, and utilities that should be available globally.
- **Characteristics**:
  - Imported only once in the root `AppModule` and should not be imported in any other module.
  - Contains application-wide services, state, models, utilities, interceptors, guards, and resolvers.
  - **Avoid**: Components, directives, and pipes to ensure that it remains a singleton without affecting UI elements.

- **Contents**:
  - **State Management**
  - **Models**
  - **Services**: Shared across the entire application.
  - **Utilities**: Functional utilities like logging, messaging, etc.
  - **Interceptors**
  - **Guards**
  - **Resolvers**

### 2. Shared Module

- **Purpose**: Contains reusable code that can be shared across multiple feature modules, like common components, directives, and pipes, but without any providers.
- **Characteristics**:
  - No providers to prevent multiple instances of services in lazy-loaded modules.
  - Can re-export common Angular modules (e.g., `CommonModule`, `FormsModule`, `ReactiveFormsModule`) to make them available to all feature modules.
  - Avoids importing or re-exporting modules with providers.

- **Contents**:
  - Common reusable components (e.g., shared UI components like a Star Rating component).
  - Re-exported Angular modules (e.g., `CommonModule`, `FormsModule`).

### 3. Block Module

- **Purpose**: Similar to the Core Module but focused on UI elements that need to be singleton throughout the application, such as the layout or navigation components.
- **Characteristics**:
  - Should be imported only once in the root `AppModule` to ensure the components are singleton.
  - Contains components like Navbar, Footer, Sidebar, and Layout, which are common across the entire application.
  - Should not depend on feature modules but can depend on the Shared Module.

- **Contents**:
  - **Singleton Components**: Navbar, Footer, Sidebar, Toolbar, etc.
  - **Directives**: e.g., Loading Screen directive.
  - **Layout Components**: Application layout structure.

### 4. Feature Module

- **Purpose**: Encapsulates a specific feature or business logic within the application.
- **Characteristics**:
  - Represents business use cases or specific features (e.g., Add to Cart button, Product listing).
  - Should not depend on another feature module but can depend on the Shared Module for common utilities and components.
  - Contains feature-specific components, services (if scoped to the feature), and routes.

- **Contents**:
  - **Feature-specific Components**
  - **Feature-specific Routes**
  - **Services (Scoped to the feature)**

---

### Shared Module Best Practices

- **Import**: Common Angular modules (e.g., `CommonModule`, `RouterModule`, Angular Material).
- **Export**: Reusable modules like `FormsModule`, `ReactiveFormsModule`, `RouterModule`, `FlexLayoutModule` for use in feature modules.

---

## Transition to Standalone Components and Services

With Angular's more recent versions, I have transitioned to using **Standalone Components** and **Standalone Services**. This approach offers several advantages:

1. **Module-Free Components**: Components no longer need to be declared in a module, reducing boilerplate code and improving reusability.
2. **Lazy Loading and Smaller Bundles**: By using standalone components, lazy loading is easier, and the application bundles are smaller, leading to improved performance.
3. **Streamlined Dependency Management**: Dependency management becomes more straightforward without the need for shared or core modules. Each standalone component or service can declare its own dependencies.

While this README explains the legacy module-based approach, the current implementation leverages Angular's standalone features, which are more modern and efficient for modular development.

---

---
### Author

Mohammed Mahmoud Assaf

# https://www.linkedin.com/in/mohammed-assaf-7a08a8133/
