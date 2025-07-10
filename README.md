# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

when you have new tailwind version  above 4.0  you have to use this to creat tailwind.config.css file 
npm i -D taiwindcss@3 postcss autoprefixer


Here i use tailwind 3.14.17


thes thing only suit for this version new version complete different 


```bash
01 .Install Tailwind CSS
Install tailwindcss via npm, and create your tailwind.config.js file.

--> npm install -D tailwindcss@3
--> npx tailwindcss init

02 .Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.

 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {},
   },
   plugins: [],
 } 

03 . dd the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.

src/input.css
@tailwind base;
@tailwind components;
@tailwind utilities;

04 .Start the Tailwind CLI build process
Run the CLI tool to scan your template files for classes and build your CSS.

npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

Start using Tailwind in your HTML
Add your compiled CSS file to the <head> and start using Tailwind’s utility classes to style your content.


<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>

