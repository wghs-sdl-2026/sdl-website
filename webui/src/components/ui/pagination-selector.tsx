import { Button } from "@/components/ui/button.tsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

interface PaginationSelectorProps {
  offset: number;
  setOffset: (arg0: number) => void;
  limit: number;
  count: number;
}
export const PaginationSelector = ({
  offset,
  setOffset,
  limit,
  count,
}: PaginationSelectorProps) => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-row gap-4 items-center justify-center">
      <Button
        variant={offset > 0 ? "outline" : "ghost"}
        disabled={offset <= 0}
        size="icon"
        onClick={() => {
          setOffset(offset - limit);
          window.scrollTo(0, 0);
        }}
      >
        {offset > 0 ? <ChevronLeft /> : <div />}
      </Button>

      <div>
        {t("article.search.page", {
          page: Math.floor(offset / limit) + 1,
          max_page: Math.ceil(count / limit),
        })}
      </div>

      <Button
        variant={offset + limit < count ? "outline" : "ghost"}
        disabled={offset + limit >= count}
        size="icon"
        onClick={() => {
          setOffset(offset + limit);
          window.scrollTo(0, 0);
        }}
      >
        {offset + limit < count ? <ChevronRight /> : <div />}
      </Button>
    </div>
  );
};
