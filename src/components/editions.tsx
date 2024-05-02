import { editions } from "@/mocks/editions.mock"
import { EditionItem } from "@/components/edition-item"

export function Editions() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Ediciones</h2>
      <article>
        <p className="text-lg font-bold text-foreground/80 mb-2.5">2024</p>
        <div className="flex gap-x-4 md:gap-x-6">
          {
            editions.map((edition, i) => (
              <EditionItem key={i} {...edition} />
            ))
          }
        </div>
      </article>
    </section>
  )
}