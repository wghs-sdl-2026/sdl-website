import { useTranslation } from "react-i18next";
import { Item } from "@/components/list-item/item";

export const Presentation = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full">
      <div className="grid gap-20 mb-10 text-3xl text-stone-700 dark:text-stone-300 justify-items-left text-left break-keep">
        <h1 className="whitespace-pre-wrap">
          {t("navbar.outcome_exhibition.presentation")}
        </h1>
      </div>
      <Item group={"biology"} />
      <Item group={"geography"} />
    </div>
  );
};
