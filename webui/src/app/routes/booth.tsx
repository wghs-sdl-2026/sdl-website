import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button.tsx";

export const Booth = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full h-full">
        <div className="grid gap-20 mb-30 text-3xl text-stone-700 dark:text-stone-300 justify-items-left text-left break-keep">
          <h1 className="whitespace-pre-wrap">
            {t("navbar.outcome_exhibition.booth")}
          </h1>
        </div>
        <ul className="flex flex-wrap">
          <li className="justify-items-center text-center gap-20">
            <Button variant="secondary">1</Button>
          </li>
        </ul>
      </div>
    </>
  );
};
