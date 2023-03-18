import { SSTConfig } from "sst";
import { InfraStack } from "./infra/stack";

export default {
  config(_input) {
    return {
      name: "nextjs-app",
      region: "eu-west-2",
    };
  },
  stacks(app) {
    app.stack(InfraStack);
  }
} satisfies SSTConfig;
