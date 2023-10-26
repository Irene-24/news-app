import axios from "axios";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  const response = await axios.get(url as string, {
    responseType: "stream",
  });

  const stream = response.data;

  return new Response(stream);
}
