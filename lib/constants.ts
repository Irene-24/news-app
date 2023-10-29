export const NEWS_PAGE_SIZE = 30;
export const NEWS_API = "http://api.mediastack.com/v1/news";

export const getRatesApiUrl = (access_key?: string) =>
  `http://data.fixer.io/api/latest?access_key=${access_key}`;

export const getSupportedSymbolsApiUrl = (access_key?: string) =>
  `http://data.fixer.io/api/symbols?access_key=${access_key}`;

export const JOKES_API =
  "https://v2.jokeapi.dev/joke/Programming,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=10";
