# 💱 Premium Currency Converter

🔗 **Live Demo**: [zerotwoishan.github.io/CurrencyConverter/](https://zerotwoishan.github.io/CurrencyConverter/)

A modern, responsive, and highly interactive Currency Converter web application built using **React (v19)**, **Vite**, and **Tailwind CSS**. It fetches live, real-time exchange rates dynamically from a public currency API, featuring fluid animations, automatic calculation updates, error handling safeguards, and a premium glassmorphic UI.

---

## ✨ Features

- **Live Asynchronous Exchange Rates**: Dynamically fetches the latest exchange rates for dozens of currencies on-demand.
- **Real-Time Auto-Calculation**: Instantly recalculates the output as you type or change selected currencies (powered by React `useEffect`).
- **Loading State Feedback**: Displays `"Loading..."` placeholder indicators inside inputs during active network requests.
- **Robust Error Handling**: Displays a warning alert banner in the UI if connection is lost, falling back safely to offline states.
- **UX Form Safeguards**: 
  - Generates zero-safe outputs (no annoying leading-zero issues).
  - Clears inputs cleanly on clear events.
  - Automatically selects all text inside the input on click or tab-focus (`onFocus={(e) => e.target.select()}`).
- **Glassmorphic UI**: Premium visual aesthetics including dynamic backdrops, transparency, and a rotating vector exchange logo.
- **Seamless Swapping**: Instantly swap the "From" and "To" currencies along with their corresponding values.
- **Accessibility & SEO**: Semantic HTML structures and unique dynamically-generated element IDs using React's `useId` hook.

---

## 🛠️ Tech Stack

- **Framework**: React 19 (Functional Components, Custom Hooks, Effects)
- **Build Tool**: Vite (Lightning fast Hot Module Replacement)
- **Styling**: Tailwind CSS (Modern Utility Classes)
- **Data Source**: [Fawaz Ahmed's Currency API](https://github.com/fawazahmed0/currency-api) (Free and updated daily)
- **Deployment**: Automated build pipeline via **GitHub Actions** (`deploy.yml`)

---

## 📂 Project Structure

```
currencyConverter/
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD automated build and deploy pipeline
├── public/                 # Static public assets (Favicon, logos)
├── src/
│   ├── assets/             # Background images & visual assets
│   ├── components/         # Reusable UI Components
│   │   ├── InputBox.jsx    # Form input card (from/to currency selector)
│   │   ├── Swap.jsx        # Absolute-centered swap button
│   │   ├── Headers.jsx     # App title & animated gradient SVG logo
│   │   └── components.js   # Components barrel file for clean imports
│   ├── hook/
│   │   └── currencyHook.js # Custom hook for async API data fetching & loading states
│   ├── App.jsx             # Main state coordinator and layout structure
│   ├── main.jsx            # Application entry point
│   └── index.css           # Tailwind CSS theme configurations
├── index.html              # HTML structure
├── package.json            # Scripts & project dependencies
└── layout_reference.md     # In-depth technical breakdown of UI & State
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** installed on your system.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/CurrencyConverter.git
   cd CurrencyConverter
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/` (or `http://localhost:5174/`).

### Building for Production

To compile and optimize your project for hosting:
```bash
npm run build
```
This compiles the code into the `dist/` directory, which is ready to be uploaded to hosting platforms such as Vercel, Netlify, or GitHub Pages.
