declare module "eslint-plugin-react" {
  import type { Linter } from "eslint";
  const plugin: {
    configs: {
      flat: {
        recommended: Linter.Config;
      };
    };
  };
  export default plugin;
}
