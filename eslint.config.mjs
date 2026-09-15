import next from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
  ...next,
];

export default eslintConfig;
