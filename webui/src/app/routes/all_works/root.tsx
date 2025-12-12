import { useParams } from "react-router";
import { useTranslation } from "react-i18next";

export const WorkWrapper = () => {
  const path = useParams();
  switch (path.workType) {
    case "biology":
      return Work({ workType: "biology" });
    case "chemistry":
      return Work({ workType: "chemistry" });
    case "engineering":
      return Work({ workType: "engineering" });
    case "medicine":
      return Work({ workType: "medicine" });
    case "politics_and_economics":
      return Work({ workType: "politics_and_economics" });
    case "society":
      return Work({ workType: "society" });
    default:
      return <></>;
  }
};

export interface WorkProp {
  workType:
    | "biology"
    | "chemistry"
    | "engineering"
    | "medicine"
    | "politics_and_economics"
    | "society";
}

export const Work = ({ workType }: WorkProp) => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full">
      <div className="grid gap-20 mb-30 text-3xl text-stone-700 dark:text-stone-300 justify-items-center text-center break-keep">
        <h1 className="whitespace-pre-wrap">{t(`navbar.outcome_exhibition.${workType}`)}</h1>
      </div>
    </div>
  );
};
