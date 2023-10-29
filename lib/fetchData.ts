import "server-only";

import {
  getRatesApiUrl,
  NEWS_PAGE_SIZE,
  NEWS_API,
  getSupportedSymbolsApiUrl,
} from "@/lib/constants";
import { Category, FirstPageArgs } from "./types/requests.types";

const DAY = 86400;

export async function getFirstPageOfArticles({
  categories,
  keywords = [],
}: FirstPageArgs) {
  let status = 500;

  console.log({ categories });

  try {
    if (!categories && !keywords.length) {
      return {
        data: [],
        pagination: {
          limit: NEWS_PAGE_SIZE,
          offset: 0,
          count: 0,
          total: 0,
        },
      };
    }

    const params = new URLSearchParams({
      categories: categories as Category,
      language: "en",
    });

    const key = `&access_key=${process.env.NEWS_KEY}`;

    keywords.forEach((keyword) => params.append("keywords", keyword));
    const res = await fetch(`${NEWS_API}?${params.toString()}`, {
      next: { revalidate: DAY },
    });

    const value = await res.json();
    status = res.status;

    if (!res.ok) {
      throw new Error(value?.error?.message || "Unable to load articles");
    }

    return value;
  } catch (error: any) {
    const body = {
      error: {
        data: error,
        status,
        message: error.message || "Unable to load articles",
      },
    };
    console.log(body);
    return body;
  }
}
