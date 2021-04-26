## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Basic Setup for NextJS & Tailwind CSS

```bash
npx create-next-app
npm install --save-dev tailwindcss postcss-preset-env postcss
npx tailwindcss init
```

Create ~/postcss.config.js and insert:

```bash
module.exports = {
  plugins: ['tailwindcss', 'postcss-preset-env'],
}
```

Next, delete ~/Home.module.css and in ~/styles/global.css insert:

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```
