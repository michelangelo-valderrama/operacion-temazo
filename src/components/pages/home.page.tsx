"use client"

import { HomeBanner } from "@/components/home-banner";

export function HomePage() {
  return (<div className="size-full">
    <div className="relative z-10">
      <HomeBanner className="mb-8" />
      <article>
        <h2>Ediciones</h2>
        <div>
          <p>Lorem ipsum dolor sit.</p>
        </div>
      </article>
    </div>
  </div>)
}