import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { jwtVerify } from "jose"
import { ObjectId } from "mongodb"
import clientPromise from "@/lib/db"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

export async function POST(request: Request) {
  try {
    // Verify authentication
    const token = cookies().get("auth-token")?.value
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const verified = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET))
    const userId = verified.payload.userId as string

    // Get FCL data from request
    const { policyNumber, provider, coverage, expiryDate } = await request.json()

    if (!policyNumber || !provider || !coverage || !expiryDate) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("shipping-portal")

    // Update user's FCL information
    await db.collection("users").updateOne(
      { _id: new ObjectId(userId) },
      {
        $set: {
          fcl: {
            policyNumber,
            provider,
            coverage,
            expiryDate,
            updatedAt: new Date(),
          },
        },
      },
    )

    return NextResponse.json({ message: "FCL information updated successfully" })
  } catch (error) {
    console.error("FCL update error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

