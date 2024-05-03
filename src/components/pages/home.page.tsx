import { HomeBanner } from "@/components/home-banner";
import { Editions } from "@/components/editions";

export function HomePage() {
  return (<div className="size-full">
    <div className="relative z-10">
      <HomeBanner className="mb-8" />
      <Editions />
    </div>
  </div>)
}
