import express from "express";
import z from "zod";
import { Request, Response } from "express";
import { dbGetArticle, dbListArticles, dbNewArticle } from "../orm/articles.js";
import { paths } from "../config/paths.js";

export const articlesRouter = express.Router();

const getArticlesBody = z.object({
  keyword: z.string(),
  tags: z.array(z.string()),
});
const getArticlesQuery = z.object({
  limit: z.int().optional(),
  offset: z.int().optional(),
});
const getArticles = async (req: Request, res: Response) => {
  const bodyParseResult = getArticlesBody.safeParse(req.body);
  const queryParseResult = getArticlesQuery.safeParse(req.query);

  if (bodyParseResult.success && queryParseResult.success) {
    const ormRes = await dbListArticles(
      {
        keyword: bodyParseResult.data.keyword,
        tags: bodyParseResult.data.tags,
      },
      {
        limit: queryParseResult.data.limit,
        offset: queryParseResult.data.offset,
      },
    );
    res.json(ormRes);
  } else {
    res.sendStatus(400);
  }
};

const getArticlesByIdParams = z.object({
  articleId: z.nanoid(),
});
const getArticleById = async (req: Request, res: Response) => {
  const paramsParseResult = getArticlesByIdParams.safeParse(req.params);
  if (paramsParseResult.success) {
    const ormRes = await dbGetArticle({
      articleId: paramsParseResult.data.articleId,
    });

    if (ormRes !== null) {
      res.json(ormRes);
    } else {
      res.sendStatus(404);
    }
  } else {
    res.sendStatus(400);
  }
};

const newArticleBody = z.object({
  title: z.string(),
  author: z.string(),
  authorId: z.nanoid(),
  summary: z.string(),
  contents: z.string(),
  link: z.string(),
  tags: z.array(z.string()),
  multilanguage: z.array(
    z.object({
      lang: z.string(),
      id: z.nanoid(),
    }),
  ),
});
const newArticle = async (req: Request, res: Response) => {
  const bodyParseResult = newArticleBody.safeParse(req.body);
  if (bodyParseResult.success) {
    const ormRes = await dbNewArticle({ ...bodyParseResult.data });
    res.json(ormRes);
  } else {
    res.sendStatus(400);
  }
};

articlesRouter.use(express.json());
articlesRouter.get("/", getArticles);
// articlesRouter.post("/", newArticle);  //  do not use when released
articlesRouter.get(paths.root.articles.articleById.path, getArticleById);
