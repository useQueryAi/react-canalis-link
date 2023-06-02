import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const EXTENSIONS = [".ts", ".tsx", ".js", ".jsx"];

export default {
  input: "src/index.ts",
  output: [
    { file: "dist/index.js", format: "cjs", sourcemap: true },
    { file: "dist/index.esm.js", format: "esm", sourcemap: true },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions: EXTENSIONS }),
    commonjs(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
        },
      },
      // useTsconfigDeclarationDir: true,
    }),
    babel({ extensions: EXTENSIONS }),
  ],
};
