import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "./swagger.json",
  apiFile: "./src/app/services/mwApi2.ts",
  apiImport: "mwApi",
  outputFile: "./src/app/services/mw",
  outputFiles: {
    "./src/app/services/mwQueries/otf_asset.ts": {
      filterEndpoints: [/otf_asset/i],
    },
    "./src/app/services/mwQueries/admin.ts": {
      filterEndpoints: [/admin/i],
    },
    "./src/app/services/mwQueries/prototype.ts": {
      filterEndpoints: [/space_prototype/i],
    },
    "./src/app/services/mwQueries/auth.ts": {
      filterEndpoints: [/auth/i],
    },
    "./src/app/services/mwQueries/payment.ts": {
      filterEndpoints: [/payment/i],
    },
    "./src/app/services/mwQueries/superadmin.ts": {
      filterEndpoints: [/user/i],
    },
    "./src/app/services/mwQueries/project.ts": {
      filterEndpoints: [/project/i],
    },
    "./src/app/services/mwQueries/release.ts": {
      filterEndpoints: [/releases/i],
    },
    "./src/app/services/mwQueries/selectionPanel.ts": {
      filterEndpoints: [/selectionpanel/i],
    },
    "./src/app/services/mwQueries/smartboard.ts": {
      filterEndpoints: [/smartboard/i],
    },
    "./src/app/services/mwQueries/space.ts": {
      filterEndpoints: [/space/i],
    },
    "./src/app/services/mwQueries/story.ts": {
      filterEndpoints: [/story/i],
    },
    "./src/app/services/mwQueries/stained_installer.ts": {
      filterEndpoints: [/stained_installer/i],
    },
  },
  exportName: "mwApi",
  hooks: true,
};

export default config;
