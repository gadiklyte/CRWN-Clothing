import { loadStripe } from "@stripe/stripe-js";

// export const stripePromise = loadStripe("pk_test_51QnKx4G0WWqYhVsxrXcJq8RP5ILpSUaJPzWjO7jr3gVysvulV7ilZAJSceAPzljKZVGP793ike5sEFWL9lCkNrVP00ZqTw2Slu");

export const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
);