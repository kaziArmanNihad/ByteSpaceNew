# ByteSpace New

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](YOUR_VERCEL_LIVE_URL_HERE)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/kaziArmanNihad/ByteSpaceNew.git)

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase_Auth-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=flat-square&logo=reacthookform&logoColor=white)

---

## ✨ Summary

**ByteSpace New** is a responsive online-learning platform built with **React, Vite and Tailwind CSS**. It turns the ByteSpace Figma design into a working web application: a landing page with course search, a filterable and paginated course catalog, creator profiles, and a complete authentication flow backed by **Firebase Authentication**.

### What it is

A single-page application where learners can browse courses, filter them by category, search by title, view creator portfolios, and create an account or sign in. The interface follows the ByteSpace brand (`#1052FE` blue, lime accents, 3D decorative graphics) and adapts to mobile, tablet and desktop screens.

### How it was built

- **Authentication with Firebase.** Sign-up uses `createUserWithEmailAndPassword` and stores the user's full name with `updateProfile`. Sign-in uses `signInWithEmailAndPassword`. Firebase error codes are mapped to readable messages (wrong password, email already in use, weak password, network errors).
- **Global auth state with the Context API.** An `AuthProvider` subscribes to Firebase's `onAuthStateChanged` and shares `user`, `loading` and `logOut` through `AuthContext`. Any component reads them with `useContext(AuthContext)`. The `loading` flag prevents a signed-in user from briefly seeing signed-out UI on refresh.
- **Forms with React Hook Form.** Login and Register use `useForm` and `register()` for uncontrolled inputs, with rules for required fields, email format, and password strength, plus inline error messages and a disabled submit button while a request is in flight.
- **Auth-aware navigation.** The navbar shows **Logout** for signed-in users and **Sign In / Join Us** for guests.
- **Icons with Lucide.** UI icons (search, filters, course stats, show/hide password) come from `lucide-react`. Brand icons such as Google and Facebook come from `react-icons`.
- **Responsive by design.** Layouts use Tailwind breakpoints and fluid, percentage-based positioning for the hero illustration, so the design scales from small phones to large monitors.
- **Feedback with toasts.** `react-hot-toast` reports success and error states (logout, unavailable features).

---

## 📋 Interview Task Details

| Detail           | Value                                                                                                                                              |
| :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Company**      | ByteSpace                                                                                                                                          |
| **Position**     | Jr. Software Engineer (Frontend)                                                                                                                   |
| **Task Name**    | Build the "ByteSpace New" Website                                                                                                                  |
| **Tracking ID**  | `1abaf4cb-d9b9-42f5-972b-eaa1a27986f7`                                                                                                             |
| **Deadline**     | October 01, 2026                                                                                                                                   |
| **Figma Design** | [ByteSpace New Figma Design](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f&t=eQOrqJmq6rMG5b6L-0) |

---

## 🚀 Features

- **Landing page** with a responsive hero, a search bar and dynamic background grid overlays.
- **Course catalog** with category pills, live title search, and pagination.
- **Creator profile** page with stats, a follow toggle and the creator's courses.
- **Authentication** with email and password through Firebase: register, login, logout, and a persistent session across page reloads.
- **Form validation** with React Hook Form: required fields, email format, minimum password length and password strength.
- **Show / hide password** toggle on both auth forms.
- **Auth-aware navbar** that changes based on the signed-in state.
- **Brand showcase, growth and testimonial sections** with 3D graphics and partner logos.
- **Custom 404 page** in the brand theme.
- **Fully responsive** on mobile, tablet and desktop.

> **Note:** Google and Facebook buttons are UI only for now. Email/password is the active sign-in method.

---

## 💡 Overview & Requirements

### Functional Requirements

- **Landing Page (Core):** Pixel-perfect implementation of the full ByteSpace landing page based on the Figma design specifications.
- **Hero & Search Component:** Responsive hero section with unified input search bar and dynamic background grid overlays.
- **Course Explorer & Filtering:** Dynamic category filter pills, skill level selection, and responsive card grid display.
- **Brand Showcase:** Interactive partner brand bar supporting SVG & PNG media rendering.
- **Feature & Growth Sections:** Highlighting stats, 3D visual graphics, happy student testimonials, and creator management features.
- **Authentication Pages (Bonus/Extra Credit):** Login and Registration pages connected to Firebase Authentication, with form validation and social sign-in UI.
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

- Course items, categories and creator profiles use mock data (`src/utils/Datas`) to demonstrate pagination and search filtering. User accounts are real and handled by Firebase.
- Modern browsers with standard CSS Backdrop Filter / Flexbox / Grid support are targeted.

---

## 🔐 Authentication Flow

```text
Register / Login form (React Hook Form)
        │  validated input
        ▼
Firebase Auth  ──  createUserWithEmailAndPassword / signInWithEmailAndPassword
        │
        ▼
onAuthStateChanged  (inside AuthProvider)
        │  user, loading
        ▼
AuthContext  ──►  Navbar (Logout vs Sign In / Join Us)
              ──►  any component via useContext(AuthContext)
```

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
 │    └── Shared (Navbar, GridBG Overlay & Toast Provider)
 │
 ├── Pages (View Layer)
 │    ├── Home (Landing Page Assembly)
 │    ├── Courses (Catalog with Pagination)
 │    ├── CreatorProfile (Creator Details & Portfolio)
 │    ├── Login & Register (Firebase Authentication)
 │    └── NotFound (Custom 404)
 │
 ├── Auth Layer
 │    ├── Firebase (Firebase.Config: app + auth instance)
 │    └── AuthProvider (Context API: user, loading, logOut)
 │
 └── Assets & Configs
      ├── Images & Vector Graphics
      ├── Tailwind CSS Configuration
      └── Vite Build Tool
```

---

## 🛠️ Tech Stack & Dependencies

| Area               | Technology                                                                                                    |
| :----------------- | :------------------------------------------------------------------------------------------------------------ |
| **Framework**      | [React](https://react.dev/) (Vite)                                                                            |
| **Styling**        | [Tailwind CSS](https://tailwindcss.com/)                                                                      |
| **Authentication** | [Firebase Authentication](https://firebase.google.com/docs/auth) (email and password)                         |
| **State**          | React Context API (`AuthContext`)                                                                             |
| **Forms**          | [React Hook Form](https://react-hook-form.com/)                                                               |
| **Icons**          | [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)               |
| **Notifications**  | [React Hot Toast](https://react-hot-toast.com/)                                                               |
| **Routing**        | `react-router`                                                                                                |
| **Hosting**        | [Vercel](https://vercel.com/)                                                                                 |

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

3. **Set up Firebase:**

- Create a project in the [Firebase Console](https://console.firebase.google.com/).
- Go to **Authentication → Sign-in method** and enable **Email/Password**.
- Add your web app's config values to `src/Firebase/Firebase.Config.js`. To keep keys out of source control, store them in a `.env` file instead:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

- If you deploy on Vercel, add the same variables under **Project Settings → Environment Variables**.

4. **Run the development server:**

```bash
npm run dev
```

5. **Build for production:**

```bash
npm run build
```

---

## 🗺️ Possible Next Development

- Protected routes for signed-in users, using `loading` and `user` from `AuthContext`.
- Working Google sign-in through Firebase's `signInWithPopup`.
- Replace mock course data with a real backend or Firestore.
- Course details page and a working shopping cart.