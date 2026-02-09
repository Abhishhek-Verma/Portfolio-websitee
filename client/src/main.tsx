import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { AnimationProvider } from "./context/AnimationContext";
import emailjs from '@emailjs/browser';

// Initialize EmailJS with public key
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
if (publicKey) {
  emailjs.init(publicKey);
}

createRoot(document.getElementById("root")!).render(
  <AnimationProvider>
    <App />
  </AnimationProvider>
);
