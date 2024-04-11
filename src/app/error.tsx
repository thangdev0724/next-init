'use client';

import { useEffect } from 'react';

/**
 * https://nextjs.org/docs/app/building-your-application/routing/error-handling
 */
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error('error: ', error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      {/* <button onClick={reset}>Try again</button> */}
    </div>
  );
}
