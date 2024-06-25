import type { Config } from "tailwindcss";
import tailwindCommonConfig from "@tracklab/commons/tailwind.config";

const config: Config = {
  ...tailwindCommonConfig,
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
