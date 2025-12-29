import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full">
      <div className="grid gap-20 mb-5 p-2 text-3xl text-stone-700 dark:text-stone-300 justify-items-left text-left break-keep">
        <h1 className="whitespace-pre-wrap">
          {t("navbar.about_outcome_exhibition")}
        </h1>
      </div>
    </div>
  );
};
