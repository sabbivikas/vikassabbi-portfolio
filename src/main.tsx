import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// third-party widgets can trigger a benign ResizeObserver loop warning;
// swallow it so it never blanks the page
const isResizeObserverLoop = (msg: unknown) =>
  typeof msg === 'string' && msg.includes('ResizeObserver loop')

window.addEventListener('error', (e) => {
  if (isResizeObserverLoop(e.message)) {
    e.stopImmediatePropagation()
    e.preventDefault()
  }
})
window.addEventListener('unhandledrejection', (e) => {
  if (isResizeObserverLoop(e.reason?.message ?? e.reason)) {
    e.preventDefault()
  }
})

createRoot(document.getElementById("root")!).render(<App />);
