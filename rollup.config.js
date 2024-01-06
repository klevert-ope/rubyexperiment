import resolve from "@rollup/plugin-node-resolve";

export default [
  {
    input: "app/javascript/application.js",
    output: {
      file: "app/assets/builds/application.js",
      format: "iife",
      inlineDynamicImports: true,
      sourcemap: true,
    },
    plugins: [resolve()],
  },
  {
    input: "app/javascript/animate.js",
    output: {
      file: "app/assets/builds/animate.js",
      format: "iife",
      inlineDynamicImports: true,
      sourcemap: true,
    },
    plugins: [resolve()],
  },
  {
    input: "app/javascript/smoothscroll.js",
    output: {
      file: "app/assets/builds/smoothscroll.js",
      format: "iife",
      inlineDynamicImports: true,
      sourcemap: true,
    },
    plugins: [resolve()],
  },
];
