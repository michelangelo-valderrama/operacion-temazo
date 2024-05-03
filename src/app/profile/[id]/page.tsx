import { notFound } from "next/navigation"
import { users } from "@/mocks/users.mock"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Props {
  params: {
    id: string
  }
}

export default function Page({ params }: Props) {
  const user = users.find((user) => user.id === params.id)
  if (!user) notFound()

  return (
    <div className="mt-6">
      <div className="flex gap-x-8 items-end">
        <Avatar className="size-56">
          <AvatarImage src={user.avatar} />
          <AvatarFallback>{user.username}</AvatarFallback>
        </Avatar>
        <div className="mb-10">
          <h1 className="text-lg text-muted-foreground font-medium">Perfíl</h1>
          <p className="text-6xl font-bold">{user.username}</p>
        </div>
      </div>
    </div>
  )
}
