import { publicFetcher } from "@/services/fetcher.ts";
import { isAxiosError } from "axios";

export interface ArticleInfo {
  id: string;
  title: string;
  author: string[];
  authorId: string[];
  summary: string;
  contents: string;
  link: string;
  tags: string[];
  multilanguage: { lang: string; id: string }[] | null;
}
export const getArticleById = async (id: string) => {
  try {
    const res = await publicFetcher.get<ArticleInfo>(`/api/articles/${id}`);
    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.status ?? 500;
    }
    return 500;
  }
};

export interface ArticleInfoShort {
  id: string;
  title: string;
  author: string[];
  authorId: string[];
  summary: string;
  link: string;
  tags: string[];
  multilanguage: { lang: string; id: string }[] | null;
}
export interface ArticleQuery {
  keyword: string;
  tags: string[];
  limit: number | undefined;
  offset: number | undefined;
}
export const listArticle = async ({
  keyword,
  tags,
  limit,
  offset,
}: ArticleQuery) => {
  try {
    const res = await publicFetcher.get<{
      count: number;
      data: ArticleInfoShort[];
    }>(`/api/articles`, {
      params: {
        limit: limit,
        offset: offset,
        keyword: keyword,
        tags: tags,
      },
      paramsSerializer: { indexes: null },
    });
    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.status ?? 500;
    }
    return 500;
  }
};
