"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Что-то пошло не по плану!</h2>
        <button onClick={() => reset()}>Сброс ошибки</button>
      </body>
    </html>
  );
}
