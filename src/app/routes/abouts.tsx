import { useTranslation } from "react-i18next";

export const Abouts = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-full p-6">
      <h1 className="text-3xl font-bold mb-4">{t("navbar.outcome_exhibition.abouts")}</h1>
      {}
    </div>
  );
};