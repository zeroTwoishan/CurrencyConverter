# 💱 Premium Currency Converter

A responsive, and interactive Currency Converter web application built using **React (v19)**, **Vite**, and **Tailwind CSS**. It fetches live, real-time exchange rates dynamically from a public currency API.

---

## ✨ Features

- **Live Exchange Rates**: Dynamically fetches the latest exchange rates for dozens of currencies on-demand.
- **Glassmorphic UI**: Premium visual aesthetics including dynamic backdrops, transparency, and a curated color palette.
- **Seamless Swapping**: Instantly swap the "From" and "To" currencies along with their corresponding conversion values.
- **Accessibility & SEO**: Semantic HTML structures and unique dynamically-generated element IDs using React's `useId` hook.
- **Optimized Performance**: Built with Vite and compiled into clean production assets under 200KB in size.

---

## 🛠️ Tech Stack

- **Framework**: React 19 (Functional Components, Custom Hooks)
- **Build Tool**: Vite (Lightning fast Hot Module Replacement)
- **Styling**: Tailwind CSS (Modern Utility Classes)
- **Data Source**: [Fawaz Ahmed's Currency API](https://github.com/fawazahmed0/currency-api) (Free and updated daily)

---

## 📂 Project Structure

```
currencyConverter/
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Background images & visual assets
│   ├── components/         # Reusable UI Components
│   │   ├── InputBox.jsx    # Form input card (from/to currency selector)
│   │   ├── Swap.jsx        # absolute-centered swap button
│   │   └── components.js   # Components barrel file for clean imports
│   ├── hook/
│   │   └── currencyHook.js # Custom hook for API data fetching
│   ├── App.jsx             # Main state coordinator and layout structure
│   ├── main.jsx            # Application entry point
│   └── index.css           # Tailwind CSS theme configurations
├── index.html              # HTML structure
├── package.json            # Scripts & project dependencies
└── layout_reference.md     # Reference breakdown of UI layouts
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** installed on your system.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/currencyConverter.git
   cd currencyConverter
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/`.

### Building for Production

To compile and optimize your project for hosting:
```bash
npm run build
```
This compiles the code into the `dist/` directory, which is ready to be uploaded to hosting platforms such as Vercel, Netlify, or GitHub Pages.
