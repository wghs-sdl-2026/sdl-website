import { useEffect, useState } from "react";
import { type ArticleInfo, getArticleById } from "@/services/article.ts";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { NotFound } from "@/app/routes/not-found.tsx";
import { Separator } from "@/components/ui/separator.tsx";

export const ArticleWrapper = () => {
  const path = useParams();
  console.log(path.articleId);
  if (path.articleId && path.articleId.match(/^[a-zA-Z0-9_-]{21}$/)) {
    return <Article id={path.articleId} />;
  } else {
    return <NotFound />;
  }
};

export interface ArticleProps {
  id: string;
}
export const Article = ({ id }: ArticleProps) => {
  const { t, i18n } = useTranslation();

  const [articleInfo, setArticleInfo] = useState<ArticleInfo | undefined>(
    undefined,
  );

  useEffect(() => {
    const getArticleInfo = async (id: string) => {
      const res = await getArticleById(id);
      if (typeof res !== "number") {
        setArticleInfo(res);
      } else {
        setArticleInfo(undefined);
        switch (res) {
          case 500: {
            toast.error(`${t("error.no_server_connection")} (500)`, {
              duration: Infinity,
            });
            break;
          }
          default: {
            toast.error(`${t("error.general_error")} (${res})`, {
              duration: Infinity,
            });
          }
        }
      }
    };

    void (async (id: string) => await getArticleInfo(id))(id);
  }, [id]);

  return (
    <div className="w-full h-full flex">
      {articleInfo !== undefined && (
        <div className="w-full flex flex-col p-10 gap-4">
          <div className="w-full flex flex-col gap-1">
            <p className="text-2xl text-justify">{articleInfo.title}</p>
            <div className="w-full flex flex-col md:flex-row justify-between">
              <p className="text-sm text-stone-500">
                {(() => {
                  if (articleInfo !== undefined) {
                    if (i18n.language == "zh-Hant" || i18n.language == "ja") {
                      return articleInfo.author.join("、");
                    } else {
                      return articleInfo.author.join(", ");
                    }
                  } else {
                    return "";
                  }
                })()}
              </p>
              <p className="text-sm text-stone-500">
                {(() => {
                  if (articleInfo !== undefined) {
                    if (i18n.language == "zh-Hant" || i18n.language == "ja") {
                      return articleInfo.tags.join("、");
                    } else {
                      return articleInfo.tags.join(", ");
                    }
                  } else {
                    return "";
                  }
                })()}
              </p>
            </div>
          </div>
          <Separator />
          <div className="w-full">
            <p className="mx-2 text-justify">{articleInfo.contents}</p>
          </div>
        </div>
      )}
    </div>
  );
};
