import { buildConfig } from "payload/config";
import Page from "./src/collections/Page";

export default buildConfig({
  cors: ["https://46vhx-3000.sse.codesandbox.io"],
  serverURL: "https://46vhx-3000.sse.codesandbox.io",
  collections: [Page],
  localization: {
    locales: ["en", "es"],
    defaultLocale: "en",
    fallback: true
  }
});
