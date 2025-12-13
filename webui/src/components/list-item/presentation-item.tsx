import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";
import { paths } from "@/config/paths.ts";

interface Props {
  group: string;
}

export const PresentationItem = ({ group }: Props) => {
  const { t } = useTranslation();
  return (
    <ul>
      <li>
        <NavLink to={paths.root.home.getHref()}>
          <Button className="flex-col flex min-h-20 w-full" variant="secondary">
            <h1 className="font-bold text-lg text-left justify-items-left">
              {t(`presentation.${group}.items.1`)}
            </h1>
            <span className="text-sm text-left justify-items-left">
              {t(`presentation.${group}.articles.1`)}
            </span>
          </Button>
        </NavLink>
      </li>
    </ul>
  );
};
