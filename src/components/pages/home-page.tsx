"use client"

import { HomeBanner } from "@/components/home-banner";

export function HomePage() {
  return (<div className="size-full">
    <div className="pt-2 px-8 relative z-10">
      <HomeBanner className="mb-4" />
      <article>
        <h2>Ediciones</h2>
        <div>
          <p>Lorem ipsum dolor sit.</p>
        </div>
      </article>
    </div>
  </div>)
}