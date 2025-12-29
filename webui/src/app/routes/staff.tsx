import { useTranslation } from "react-i18next";
import { StaffItem } from "@/components/list-item/staff-item.tsx";

export const Staff = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full pl-5">
      <div className="mt-5 mb-10 text-3xl text-stone-700 dark:text-stone-300 justify-items-left text-left break-keep">
        <h1 className="whitespace-pre-wrap">{t("navbar.staff_list")}</h1>
      </div>
      <div className="flex flex-col m-8 gap-4 break-keep">
        <StaffItem group={"coordinator_group"} />
        <StaffItem group={"art_group"} />
        <StaffItem group={"group"} />
      </div>
    </div>
  );
};
