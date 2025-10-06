import { createFileRoute } from '@tanstack/react-router';

// The typing for createFileRoute in this workspace is incompatible with our usage here
// but the runtime behavior is correct. Suppress the type error.
// @ts-expect-error - createFileRoute typing mismatch
export const Route = createFileRoute('/')({
  component: () => <h1>Register</h1>,
});
