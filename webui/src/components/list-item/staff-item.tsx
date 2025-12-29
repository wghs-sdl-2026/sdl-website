import { useTranslation } from "react-i18next";
import { Separator } from "@/components/ui/separator"

interface groupProps {
  group: string;
}

export const StaffItem = ({ group }: groupProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl text-stone-700 dark:text-stone-300">{t(`staff.${group}.title`)}</h1>
      <Separator />
      <div className="text-lg ml-4">
        <p>{/* TODO: backend */}</p>
      </div>
    </div>
  );
};
