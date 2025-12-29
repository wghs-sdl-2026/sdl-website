import { useTranslation } from "react-i18next";

export const ExhibitedWorksIntroduction = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-3 pl-3">
      <h1 className="text-3xl pb-2 text-stone-700 dark:text-stone-300 justify-items-left text-left">
        {t("home.exhibited_works_introduction")}
      </h1>
    </div>
  );
};
