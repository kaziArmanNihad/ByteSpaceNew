# ByteSpace New — Frontend Assessment

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](YOUR_VERCEL_LIVE_URL_HERE)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](YOUR_GITHUB_REPO_URL_HERE)

---

## 📋 Interview Task Details

| Detail | Value |
| :--- | :--- |
| **Company** | ByteSpace |
| **Position** | Jr. Software Engineer (Frontend) |
| **Task Name** | Build the "ByteSpace New" Website |
| **Tracking ID** | `1abaf4cb-d9b9-42f5-972b-eaa1a27986f7` |
| **Deadline** | October 01, 2026 |
| **Figma Design** | [ByteSpace New Figma Design](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f&t=eQOrqJmq6rMG5b6L-0) |

---

## 💡 Overview & Requirements

### Functional Requirements
- **Landing Page (Core):** Pixel-perfect implementation of the full ByteSpace landing page based on the Figma design specifications.
- **Hero & Search Component:** Responsive hero section with unified input search bar and dynamic background grid overlays.
- **Course Explorer & Filtering:** Dynamic category filter pills, skill level selection, and responsive card grid display.
- **Brand Showcase:** Interactive partner brand bar supporting SVG & PNG media rendering.
- **Feature & Growth Sections:** Highlighting stats, 3D visual graphics, happy student testimonials, and creator management features.
- **Authentication Pages (Bonus/Extra Credit):** Fully implemented Login and Registration (Signup) user interfaces with form validation and social sign-in UI.
- **Course Explorer Page (Bonus):** Standalone learning catalog page complete with pagination controls and category filtering.
- **404 Not Found Page (Bonus):** Customized brand-themed error page.

### Non-Functional Requirements
- **Responsive Design:** Fully responsive layout across mobile, tablet, and desktop viewports.
- **Component Architecture:** Modular, reusable, and cleanly organized React component hierarchy.
- **Code Quality:** Clean code practices, standardized formatting, and clear file naming conventions.
- **Version Control & Git Flow:** Developed on a dedicated feature branch with pull requests merged into `main`.
- **Deployment:** Continuous deployment configured on Vercel with public accessibility.

---

## 🧩 Problem Understanding

### Problem Statement
The goal is to translate complex Figma visual designs into a high-performance, pixel-perfect React web application. The application needs to preserve brand identity through vibrant color palettes (`#1052FE` primary blue, `#CBFF00` accent lime), custom gradient typography, soft blur effects, and 3D visual decorations while maintaining strong code reusability and mobile responsiveness.

### Expected Result
A fully functional, deployed web application that mirrors the design precision of the Figma prototypes, delivering smooth micro-interactions, responsive search/filter components, and clean UI state management.

### Assumptions
- The application currently operates with dynamic mock JSON data for course items, categories, and creator profiles to demonstrate interactive features like pagination and search filtering.
- Modern browsers with standard CSS Backdrop Filter / Flexbox / Grid support are targeted.

---

## 📐 System Architecture & Project Structure

```text
Browser Client (React SPA)
 ├── Components (UI Layer)
 │    ├── Hero (Search & Brand Banner)
 │    ├── Brands (Partner Logos)
 │    ├── FeatureComponent (Category Filters & Course Cards)
 │    ├── GrowthAndManagement (Platform Metrics)
 │    ├── CreatorBanner (Call to Action)
 │    ├── Testimonials (Community Feedback)
 │    └── Shared (GridBG Overlay & Toast Provider)
 │
 ├── Pages (View Layer)
 │    ├── Home (Landing Page Assembly)
 │    ├── CourseExplorer (Catalog with Pagination)
 │    ├── CreatorProfile (Creator Details & Portfolio)
 │    ├── Login & Register (Authentication UI)
 │    └── NotFound (Custom 404)
 │
 └── Assets & Configs
      ├── Images & Vector Graphics
      ├── Tailwind CSS Configuration
      └── Vite Build Tool

```

---

## 🛠️ Tech Stack & Dependencies

* **Framework:** [React](https://react.dev/) (Vite)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
* **Routing:** `react-router`
* **Hosting & Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Local Setup & Installation

1. **Clone the repository:**
```bash
git clone https://github.com/kaziArmanNihad/ByteSpaceNew.git
cd ByteSpaceNew

```


2. **Install dependencies:**
```bash
npm install

```


3. **Run the development server:**
```bash
npm run dev

```


4. **Build for production:**
```bash
npm run build

```

