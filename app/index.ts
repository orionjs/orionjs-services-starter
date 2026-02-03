import { startApp } from "./config";
import exampleComponent from "./exampleComponent";

const { router } = await startApp([exampleComponent]);

const caller = router.createCaller({});

console.log(
  "router",
  await caller.getExample({
    exampleId: "ex-1234",
  }),
);
