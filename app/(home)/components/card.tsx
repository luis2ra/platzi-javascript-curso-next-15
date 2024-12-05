import { ArrowUpRightIcon } from "@heroicons/react/24/solid"
import { Heading, Text } from "@chakra-ui/react"

type CardProps = {
  term: string
  desc?: string
  icon: React.ReactNode
}

export function Card({ term, desc, icon }: CardProps) {
  return (
    <div className="border-2 border-black hover:border-slate-500 rounded p-4 md:p-6 min-h-48 flex flex-col justify-between">
      <header className="flex justify-between">
        {icon}
        <ArrowUpRightIcon className="size-6" />
      </header>
      <div>
        <Heading size="md">{term}</Heading>
        <Text fontSize="sm">{desc}</Text>
      </div>
    </div>
  )
}
