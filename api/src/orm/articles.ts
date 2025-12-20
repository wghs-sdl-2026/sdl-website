import { em } from "../server.js";
import { Article } from "../modules/article/article.entity.js";
import { FilterQuery, FindOptions, serialize } from "@mikro-orm/core";
import { nanoid } from "nanoid";

interface TagProps {
  tags: string[];
}
interface ListProps {
  limit: number | undefined;
  offset: number | undefined;
}
export const dbListArticles = async (
  { tags }: TagProps,
  { limit, offset }: ListProps,
) => {
  let where: FilterQuery<Article> = {};
  if (tags.length > 0) where.tags = { $overlap: tags };

  const [articles, count] = await em
    .fork()
    .findAndCount(Article, where, { limit: limit, offset: offset });

  return {
    count: count,
    data: serialize(articles, { forceObject: true }),
  };
};

interface GetArticleProps {
  articleId: string;
}
export const dbGetArticle = async ({ articleId }: GetArticleProps) => {
  const article = await em.fork().findOne(Article, { id: articleId }, {});

  if (article !== null) {
    return serialize(article, { forceObject: true });
  } else {
    return null;
  }
};

interface ArticleProps {
  title: string;
  author: string;
  authorId: string;
  summary: string;
  contents: string;
  link: string;
  tags: string[];
  multilanguage: { lang: string; id: string }[];
}
export const dbNewArticle = async (article: ArticleProps) => {
  const articleId = nanoid();

  let articleObject = new Article();
  articleObject.id = articleId;
  Object.assign(articleObject, article);

  await em.fork().persist(articleObject).flush();

  return { articleId: articleId };
};
