import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input.tsx";
import { useTranslation } from "react-i18next";
// import { Checkbox } from "@/components/ui/checkbox.tsx";
// import { Label } from "@radix-ui/react-dropdown-menu";
import { Separator } from "@/components/ui/separator.tsx";
import { type ArticleInfoShort, listArticle } from "@/services/article.ts";
import { toast } from "sonner";
import { NavLink } from "react-router";
import { paths } from "@/config/paths.ts";
import { PaginationSelector } from "@/components/ui/pagination-selector.tsx";

export const ArticleSearch = () => {
  const { t, i18n } = useTranslation();
  const [query, setQuery] = useState<string>("");
  // const [tags, setTags] = useState<string[]>([]);
  const [tags] = useState<string[]>([]);
  const [articles, setArticles] = useState<ArticleInfoShort[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const limit = 20;

  useEffect(() => {
    const getArticles = async () => {
      if (offset < 0) {
        setOffset(0);
      }
      const res = await listArticle({
        keyword: query,
        limit: limit,
        offset: offset,
        tags: tags,
      });
      if (typeof res !== "number") {
        setArticles(res.data);
        setCount(res.count);
        if (offset > res.count) {
          setOffset((Math.ceil(res.count / limit) - 1) * limit);
        }
      } else {
        toast.error(() => {
          switch (res) {
            case 500:
              return `${t("error.no_server_connection")} (500)`;
            default:
              return `${t("error.general_error")} (${res})`;
          }
        });
      }
    };

    void (async () => await getArticles())();
  }, [query, tags, offset]);

  return (
    <div className="w-full h-full p-8">
      <div>
        <Input
          placeholder={t("article.search.enter_keywords")}
          onInput={(event) => {
            setQuery(event.currentTarget.value);
            setOffset(0);
          }}
        />
        {/* TODO tags */}
        {/*<div>*/}
        {/*  <Checkbox id=""/>*/}
        {/*  <Label></Label>*/}
        {/*</div>*/}
      </div>
      <Separator className="my-6" />
      <div className="w-full flex flex-col px-4">
        {articles.map((article) => (
          <div key={article.id}>
            <NavLink
              className="w-full"
              to={paths.root.article.getHrefId(article.id)}
            >
              <div className="w-full flex flex-col gap-2">
                <div className="w-full flex flex-row justify-between gap-4 items-end">
                  <div className="flex gap-4 items-end">
                    <p>{article.title}</p>
                    <p className="text-sm">
                      {(() => {
                        if (
                          i18n.language == "zh-Hant" ||
                          i18n.language == "ja"
                        ) {
                          return article.author.join("、");
                        } else {
                          return article.author.join(", ");
                        }
                      })()}
                    </p>
                  </div>
                  <p className="text-sm text-stone-500">
                    {(() => {
                      if (i18n.language == "zh-Hant" || i18n.language == "ja") {
                        return article.tags.join("、");
                      } else {
                        return article.tags.join(", ");
                      }
                    })()}
                  </p>
                </div>
                <p className="text-justify text-stone-500">{article.summary}</p>
              </div>
            </NavLink>
            <Separator className="my-4" />
          </div>
        ))}
      </div>
      <PaginationSelector
        offset={offset}
        setOffset={setOffset}
        limit={limit}
        count={count}
      />
    </div>
  );
};
