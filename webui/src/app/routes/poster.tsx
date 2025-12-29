import { useTranslation } from "react-i18next";

export const Poster = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full">
      <div className="grid gap-20 mb-30 text-3xl text-stone-700 dark:text-stone-300 justify-items-left text-left break-keep">
        <h1 className="whitespace-pre-wrap">
          {t("navbar.outcome_exhibition.poster")}
        </h1>
      </div>
    </div>
  );
};
