import { useTranslation } from "react-i18next";
import { StaffItem } from "@/components/list-item/staff-item.tsx";

export const Staff = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full ml-5">
      <div className="grid gap-20 mt-5 mb-10 text-3xl text-stone-700 dark:text-stone-300 justify-items-left text-left break-keep">
        <h1 className="whitespace-pre-wrap">{t("navbar.staff_list")}</h1>
      </div>
      <ul className="ml-8 mb-5 grid break-keep text-stone-700 dark:text-stone-300 justify-items-left text-left break-keep">
        <li>
          <StaffItem group={"coordinator_group"} />
        </li>
        <li>
          <StaffItem group={"art_group"} />
        </li>
        <li>
          <StaffItem group={"group"} />
        </li>
      </ul>
    </div>
  );
};
