// app/not-found.tsx
"use client";

import BackgroundCarousel from "./home/parts/BackgroundCarousel";



export default function NotFound() {
  return (
    <>

    <BackgroundCarousel/>
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-pretty text-lg font-medium text-white sm:text-xl/8">
          Sorry, we couldnt find the page youre looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            className="rounded-full bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            href="/"
          >
            Go back home
          </a>
          <a className="text-sm font-semibold text-green-900" href="/contactus">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
    </>
  );
}
