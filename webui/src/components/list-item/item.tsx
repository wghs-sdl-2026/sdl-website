import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { paths } from "@/config/paths.ts";
import { Separator } from "@/components/ui/separator.tsx";
import { useNavigate } from "react-router";

interface Props {
  group: string;
}

export const Item = ({ group }: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Button
      className="flex flex-col h-35 w-full mb-2 cursor-pointer items-start"
      variant="secondary"
      onClick={() => navigate(paths.root.home.getHref())}
    >
      <div>
        <h1 className="font-bold text-2xl text-left justify-items-left">
          {t(`presentation.${group}.items.1`)}
        </h1>
        <h2 className="font-bold text-base text-left justify-items-left">
          Author:
        </h2>
      </div>
      <Separator />
      <p className="text-sm text-left justify-items-left">
        {t(`presentation.${group}.articles.1`)}
      </p>
    </Button>
  );
};
