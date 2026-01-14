/*
import { isAxiosError } from "axios";
import { getArticle } from "@/services/client.ts";

const getData = async (id: string) => {
  try{
    return await getArticle(id);
  }
  catch (error) {
    if (isAxiosError(error)) {
      throw error;
    }
  }
}
*/

import {useTranslation} from "react-i18next";

export const Work = () => {
  const { t } = useTranslation();
  return (
    <div className="grid gap-20 mb-5 p-2 text-3xl text-stone-700 dark:text-stone-300 justify-items-left text-left break-keep">
      {/* title */}
      <h1>{t("title")}</h1>
      {/* author */}
      <h2>{t("author")}</h2>
      {/* tags */}
      <h2>{t("tags")}</h2>
      <article>{t("article")}</article>
    </div>
  )
}