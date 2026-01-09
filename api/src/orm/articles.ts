import { em } from "../server.js";
import { Article } from "../modules/article/article.entity.js";
import { FilterQuery, FindOptions, serialize } from "@mikro-orm/core";
import { nanoid } from "nanoid";

interface TagProps {
  keyword: string;
  tags: string[];
}
interface ListProps {
  limit: number | undefined;
  offset: number | undefined;
}
export const dbListArticles = async (
  { keyword, tags }: TagProps,
  { limit, offset }: ListProps,
) => {
  let keyword_array = keyword.match(/\p{L}+/gu) ?? [];

  const qb = em.fork().createQueryBuilder(Article).select("*");

  keyword_array.forEach((word) => {
    qb.andWhere(
      `(title ILIKE ? OR EXISTS (SELECT 1 FROM unnest(author) au WHERE au ILIKE ?))`,
      [`%${word}%`, `%${word}%`],
    );
  });

  if (tags.length > 0) {
    qb.andWhere("tags && ?", [tags]);
  }

  qb.limit(limit);

  qb.offset(offset);

  const [articles, count] = await qb.getResultAndCount();

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
