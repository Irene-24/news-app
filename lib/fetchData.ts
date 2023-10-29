import "server-only";

import {
  getRatesApiUrl,
  NEWS_PAGE_SIZE,
  NEWS_API,
  getSupportedSymbolsApiUrl,
  JOKES_API,
} from "@/lib/constants";
import { Category, FirstPageArgs } from "./types/requests.types";
import { FullJokesRes } from "./types/responses.types";

const DAY = 86400;

export async function getFirstPageOfArticles({
  categories,
  keywords = [],
}: FirstPageArgs) {
  let status = 500;

  // console.log({ categories });

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

const fallbackJokes: FullJokesRes = {
  amount: 10,
  jokes: [
    {
      category: "Programming",
      type: "twopart",
      setup: "Why did the functional programmer get thrown out of school?",
      delivery: "Because he refused to take classes.",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 48,
      safe: true,
      lang: "en",
    },
    {
      category: "Pun",
      type: "twopart",
      setup:
        'The gas Argon walks into a bar.\nThe barkeeper says "What would you like to drink?"',
      delivery: "But Argon doesn't react.",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 148,
      safe: true,
      lang: "en",
    },
    {
      category: "Spooky",
      type: "twopart",
      setup: "Why didn't the skeleton go for prom?",
      delivery: "Because it had nobody.",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 183,
      safe: true,
      lang: "en",
    },
    {
      category: "Pun",
      type: "twopart",
      setup: "Why did the koala get rejected?",
      delivery: "Because he did not have any koalafication.",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 192,
      safe: true,
      lang: "en",
    },
    {
      category: "Programming",
      type: "twopart",
      setup: "Why did the JavaScript heap close shop?",
      delivery: "It ran out of memory.",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 31,
      safe: true,
      lang: "en",
    },
    {
      category: "Pun",
      type: "twopart",
      setup: "I just got fired from my job at the keyboard factory.",
      delivery: "They told me I wasn't putting in enough shifts.",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      safe: true,
      id: 302,
      lang: "en",
    },
    {
      category: "Pun",
      type: "twopart",
      setup: "What do you call a caveman's fart?",
      delivery: "A blast from the past.",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      safe: true,
      id: 317,
      lang: "en",
    },
    {
      category: "Programming",
      type: "twopart",
      setup: "How can you tell an extroverted programmer?",
      delivery: "He looks at YOUR shoes when he's talking.",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 17,
      safe: true,
      lang: "en",
    },
    {
      category: "Pun",
      type: "twopart",
      setup: "What did the customer say to the waiter?",
      delivery: "I'm all fed up with your service.",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 190,
      safe: true,
      lang: "en",
    },
    {
      category: "Pun",
      type: "twopart",
      setup: "Two peanuts were walking.",
      delivery: "One was assaulted.",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 169,
      safe: true,
      lang: "en",
    },
  ],
};

export async function getJokes() {
  try {
    const res = await fetch(JOKES_API, {
      next: { revalidate: DAY },
    });

    let value: FullJokesRes = await res.json();

    if (!res.ok) {
      value = fallbackJokes;
    }

    return value;
  } catch {
    return fallbackJokes;
  }
}
