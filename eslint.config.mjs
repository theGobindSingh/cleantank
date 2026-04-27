import config from "@kami-ui/eslint-config/next";
import pluginQuery from "@tanstack/eslint-plugin-query";

export default [...config, ...pluginQuery.configs["flat/recommended-strict"]];
