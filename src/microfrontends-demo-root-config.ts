import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@microfrontends-demo/mfe-react",
  app: () => System.import("@microfrontends-demo/mfe-react"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@microfrontends-demo/mfe-angular",
  app: () => System.import("@microfrontends-demo/mfe-angular"),
  activeWhen: ["/"],
});

start();
