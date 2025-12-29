import { useTranslation } from "react-i18next";
//import { useNavigate } from "react-router";
//import { paths } from "@/config/paths";
import { Button } from "@/components/ui/button";

export const AllWorks = () => {
  const { t } = useTranslation();
  //const navigate = useNavigate();
  const subject: string[] = ["society", "politics_and_economics", "engineering", "chemistry", "medicine", "biology"]

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl pb-2 text-stone-700 dark:text-stone-300">
        {t("home.all_works")}
      </h1>
      {subject.map((item) => (
        <Button
          variant="secondary"
          className="text-2xl h-20 cursor-pointer"
          /*onClick={() =>
            navigate(paths.root.works.wrapper.path)
          }*/
        >
          {t(`navbar.outcome_exhibition.${item}`)}
        </Button>
      ))}
    </div>
  );
};
