//JOKES

//ARTICLES

export type Category =
  '"business" | "entertainment" | "health" | "sports" | "technology"';

export type FirstPageArgs =
  | ({ categories: Category } & { keywords?: string[] })
  | ({ categories?: Category } & { keywords: string[] });

export type NewsReqParams = { offset: number } & FirstPageArgs;

//CURRENCY
