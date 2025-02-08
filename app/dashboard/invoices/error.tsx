'use client';
 
import { useEffect } from 'react';
 
/**
 * @description
 *   一个 fallback 组件，用于在遇到异步渲染错误时，
 *   重新尝试渲染 invoices 路由
 *
 * @param {Error & { digest?: string; }} error - 一个 Error 对象，
 *   可以包含一个可选的 digest 字段，用于标识这个错误
 *
 * @param {() => void} reset - 一个函数，用于 reset  Next.js Router
 *   并尝试重新渲染 invoices 路由
 */

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}