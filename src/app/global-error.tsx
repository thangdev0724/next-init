'use client';

import { useEffect } from 'react';

interface IGlobalError {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * https://nextjs.org/docs/app/building-your-application/routing/error-handling#handling-errors-in-layouts
 */
export default function GlobalError({ error, reset }: IGlobalError) {
  useEffect(() => {
    console.error('global error: ', error);
  }, [error]);

  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
      </body>
    </html>
  );
}
