//JOKES

interface Flags {
  nsfw: boolean;
  religious: boolean;
  political: boolean;
  racist: boolean;
  sexist: boolean;
  explicit: boolean;
}

export interface Joke {
  category: string;
  type: string;
  setup: string;
  delivery: string;
  flags: Flags;
  safe: boolean;
  id: number;
  lang: string;
}

export interface FullJokesRes {
  jokes: Joke[];
  amount: number;
}

//ARTICLES
export interface ArticlesPagination {
  limit: number;
  offset: number;
  count: number;
  total: number;
}

export interface Articles {
  author?: string;
  title: string;
  description: string;
  url: string;
  source: string;
  image?: string;
  category: string;
  language: string;
  country: string;
  published_at: string;
}

export interface FullArticlesRes {
  pagination: ArticlesPagination;
  data: Articles[];
}

//CURRENCY

export interface SupportedSymbols {
  symbols: Record<string, string>;
}

export interface CurrencyItem {
  symbol: string;
  name: string;
}

export interface Rate {
  [key: string]: number;
}

export interface RateRes {
  base: string;
  rates: Rate;
}
