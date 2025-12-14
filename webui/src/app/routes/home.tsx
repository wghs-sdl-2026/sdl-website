import { Button } from "@/components/ui/button.tsx";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full">
      <div className="grid gap-20 mt-40 mb-30 text-4xl text-stone-700 dark:text-stone-300 justify-items-center text-center break-keep">
        <h2 className="whitespace-pre-wrap">{t("home.title")}</h2>
        <div className="flex flex-col md:flex-row gap-5">
          <Button variant="secondary" className="w-[200px]">
            {t("home.exhibited_works_introduction")}
          </Button>
          <Button variant="secondary" className="w-[200px]">
            {t("home.all_works")}
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full gap-8 p-8">
        <div className="grid gap-5 text-xl text-stone-600 dark:text-stone-400 text-justify content-center">
          <p>{t("home.theme_description0")}</p>
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-2 w-full gap-8 p-8">
        <div></div>
        <div className="grid gap-5 text-xl text-stone-600 dark:text-stone-400 text-justify content-center">
          <p>{t("home.theme_description1")}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full gap-8 p-8">
        <div className="grid gap-5 text-xl text-stone-600 dark:text-stone-400 text-justify content-center">
          <p>{t("home.theme_description2")}</p>
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-2 w-full gap-8 p-8">
        <div></div>
        <div className="grid gap-5 text-xl text-stone-600 dark:text-stone-400 text-justify content-center">
          <p>{t("home.theme_description1")}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full gap-8 p-8">
        <div className="grid gap-5 text-xl text-stone-600 dark:text-stone-400 text-justify content-center">
          <p>{t("home.theme_description2")}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};
