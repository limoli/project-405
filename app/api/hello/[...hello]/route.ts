import {NextRequest} from "next/server";

export async function GET(request: NextRequest) {
  return Response.json({hello: "World!"})
}

export async function POST(request: NextRequest) {
  return Response.json({hello: "World!"})
}

export async function DELETE(request: NextRequest) {
  return Response.json({hello: "World!"})
}

export async function PUT(request: NextRequest) {
  return Response.json({hello: "World!"})
}

export async function PATCH(request: NextRequest) {
  return Response.json({hello: "World!"})
}

export async function HEAD(request: NextRequest) {
  return Response.json({hello: "World!"})
}
