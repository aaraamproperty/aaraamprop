import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import "./index.css";

console.log("Main.tsx loading...");
console.log("Root element:", document.getElementById("root"));

try {
  createRoot(document.getElementById("root")!).render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
  console.log("App rendered successfully");
} catch (error) {
  console.error("Error rendering app:", error);
}
