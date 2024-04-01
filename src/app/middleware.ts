import {NextResponse, type NextRequest} from "next/server"

export function middleware(request: NextRequest){
  console.log("request.url"+request.url)
  console.log("request.nextUrl"+request.nextUrl)
  console.log("request.nextUrl.pathname"+request.nextUrl.pathname)
  if(request.nextUrl.pathname === "/lol"){
    return NextResponse.redirect(new URL("/",request.url))
  }
  return NextResponse.redirect(new URL("/",request.url))
}
export const config ={
  matcher:"/lol"
}