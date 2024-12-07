import { Heading, Text } from "@chakra-ui/react"
import { HeartIcon, ClockIcon } from "@heroicons/react/24/outline"

import { getTranslations } from "../../translations/translate"

export default async function I18nPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const { t, f, d } = await getTranslations(lang)

  return (
    <main className="p-4 container mx-auto">
      <header className="my-10">
        <Heading as="h1" size="lg" className="">
          {t("heading")}
        </Heading>
        <Text fontSize="md">{t("description")}</Text>
      </header>
      <ul>
        <li className="flex items-center my-2">
          <HeartIcon className="h-5 w-5 mr-2 inline-block" /> {t("balance")}: $
          {f(10_000.38)}
        </li>
        <li className="flex items-center my-2">
          <ClockIcon className="h-5 w-5 mr-2 inline-block" /> {t("date")}:{" "}
          {d(new Date())}
        </li>
      </ul>
    </main>
  )
}
