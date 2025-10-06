import { RouterProvider } from '@tanstack/react-router';
import { router } from '../router';

// ✅ This component is the entry point exposed to the shell.
// It renders the router for this microfrontend.
export default function AuthModule() {
  return <RouterProvider router={router} />;
}
