import { HeaderButtons } from "@/components/header-buttons";

export function Content({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="bg-background flex-1 relative"
    >
      <header className="pt-4 pb-2 px-2 sm:px-4 xl:px-8 absolute top-0 left-0 z-20">
        <div className="flex gap-x-2 *:rounded-full *:size-9">
          {/* <HeaderButtons /> */}
        </div>
      </header>
      <main className="px-2 sm:px-4 xl:px-8 pt-16 size-full">
        {children}
      </main>
    </div>
  )
}