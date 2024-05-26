import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path");

  const typeParam = request.nextUrl.searchParams.get("type") ?? "";
  const type = (["page", "layout"].includes(typeParam) ? typeParam : "page") as
    | "page"
    | "layout";

  if (path) {
    path === "news" ? revalidateNews() : revalidatePath(`/${path}`, type);
    return Response.json({ revalidated: true, now: Date.now() });
  }

  return Response.json({
    revalidated: false,
    now: Date.now(),
    message: "Missing path to revalidate",
  });
}

function revalidateNews() {
  revalidatePath("/", "page");
  revalidatePath(`/news/${new Date().getFullYear()}`, "page");
  revalidatePath(`/news/${new Date().getFullYear()}/news`, "page");
  revalidatePath(`/news/${new Date().getFullYear()}/article`, "page");
}
