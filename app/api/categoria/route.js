import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 *
 * @param {NextRequest} req
 * @returns {NextResponse}
 */
export async function GET(req) {
  const data = await prisma.categoria.findMany({
    include: {
      productos: true,
    }
  });

  return NextResponse.json(
    {
      data,
      message: "Categorias encontradas",
      ok: true,
    },
    {
      status: 200,
      statusText: "OK",
    }
  );
}
