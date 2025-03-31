// rollup.config.js
import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "dart/generated/index.ts",
    output: [
      {
        file: "dist/index.mjs",
        format: "es",
        sourcemap: false,
        exports: "named",
      },
      {
        file: "dist/index.umd.js",
        name: "DartTools",
        format: "umd",
        globals: {
          axios: "axios",
          "form-data": "FormData",
        },
        sourcemap: false,
        exports: "named",
      },
    ],
    external: ["axios", "form-data"],
    plugins: [
      typescript({
        tsconfig: "./configs/tsconfig.esm.json",
        sourceMap: false,
      }),
    ],
  },
];
