import { useTranslation } from "react-i18next";
import {PresentationItem} from "@/components/list-item/presentation-item";

export const Presentation = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full">
      <div className="grid gap-20 mb-10 text-3xl text-stone-700 dark:text-stone-300 justify-items-center text-center break-keep">
        <h1 className="whitespace-pre-wrap">
          {t("navbar.outcome_exhibition.presentation")}
        </h1>
      </div>
        <PresentationItem group={'biology'}/>
    </div>
  );
};
