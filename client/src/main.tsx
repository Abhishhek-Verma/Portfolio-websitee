import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { AnimationProvider } from "./context/AnimationContext";
import emailjs from '@emailjs/browser';

// Initialize EmailJS with public key
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
console.log('EmailJS Public Key loaded:', publicKey ? `${publicKey.substring(0, 5)}...${publicKey.substring(publicKey.length - 3)}` : 'MISSING');
console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);

if (publicKey) {
  emailjs.init(publicKey);
  console.log('EmailJS initialized successfully');
} else {
  console.error('EmailJS Public Key is missing!');
}

createRoot(document.getElementById("root")!).render(
  <AnimationProvider>
    <App />
  </AnimationProvider>
);
