import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log("Starting React app...");

try {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error("Root element not found");
  }
  
  console.log("Root element found, creating React root...");
  const root = createRoot(rootElement);
  
  console.log("Rendering App component...");
  root.render(<App />);
  
  console.log("React app successfully mounted!");
} catch (error) {
  console.error("Failed to mount React app:", error);
  document.body.innerHTML = `
    <div style="padding: 20px; color: red; font-family: Arial, sans-serif;">
      <h1>Application Error</h1>
      <p>The application failed to start. Error: ${error.message}</p>
      <p>Please check the browser console for more details.</p>
    </div>
  `;
}
