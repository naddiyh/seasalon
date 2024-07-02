import { NextResponse, NextRequest } from "next/server";
import { IUser } from "./interface/user";
import { cookies } from "next/headers";

export function middleware(request: NextRequest) {
  const userCookies = cookies().get("user")?.value;
  const user = userCookies ? (JSON.parse(userCookies) as IUser) : null;

  if (request.nextUrl.pathname.startsWith("/login")) {
    if (user) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith("/admin")) {
    if (!user) {
      return NextResponse.redirect(new URL("/login/admin", request.url));
    }

    if (user.role !== "admin") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith("/reservation")) {
    if (!user) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}
