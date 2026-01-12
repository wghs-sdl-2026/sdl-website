import { Button } from "@/components/ui/button.tsx";
import { NavLink } from "react-router";
import { paths } from "@/config/paths.ts";
import { useTranslation } from "react-i18next";

export const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className="h-full w-full mt-10 flex flex-col items-center font-semibold">
      <h1>404 - Not Found</h1>
      <p>{t("not_found.page_not_found")}</p>
      <Button variant="link" className="mt-5" asChild>
        <NavLink to={paths.root.home.getHref()}>
          {t("not_found.return_to_home")}
        </NavLink>
      </Button>
    </div>
  );
};
