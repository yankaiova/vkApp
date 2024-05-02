import { createRoot } from "react-dom/client";
import vkBridge from "@vkontakte/vk-bridge";
import { AppConfig } from "./app/index.ts";

vkBridge.send("VKWebAppInit");

createRoot(document.getElementById("root")!).render(<AppConfig />);

if (import.meta.env.MODE === "development") {
  import("./eruda.ts");
}
