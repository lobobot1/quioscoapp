import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * @param {NextRequest} req
 * @return {NextResponse}
 */
export async function GET(req) {
  const data = await prisma.producto.findMany();
  return NextResponse.json(
    {
      data,
      message: "Productos encontrados",
      ok: true,
    },
    {
      status: 200,
      statusText: "OK",
    }
  );
}
