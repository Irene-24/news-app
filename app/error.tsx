"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <code>
        <pre>{error.message}</pre>
      </code>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
