import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: "/",
};

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get("authorization");

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");

    if (user === process.env.BASIC_USER && pwd === process.env.BASIC_PW) {
      return NextResponse.next();
    }
  }

  return new Response("Authentication Required!", {
    status: 401,
    headers: {
      "WWW-Authenticate": "Basic realm='Private'",
    },
  });
}
