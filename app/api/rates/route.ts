import { DAY } from "@/lib/constants";
import { SupportedSymbols } from "@/types/responses.types";
import { serializeError } from "serialize-error";

export async function GET(req: Request) {
  let code = 500;
  try {
    const res = await fetch(
      `http://data.fixer.io/api/latest?access_key=${process.env.RATES_KEY}`,
      {
        next: { revalidate: DAY },
      }
    );

    if (!res.ok) {
      code = res.status;
      throw new Error(`Unable to load supported symbols`);
    }

    const data: SupportedSymbols = await res.json();

    const symsArray = Object.keys(data.symbols).map((s) => ({
      symbol: s,
      name: data.symbols[s],
    }));

    return Response.json(symsArray);
  } catch (error) {
    return new Response(JSON.stringify(serializeError(error)), {
      status: code,
    });
  }
}
