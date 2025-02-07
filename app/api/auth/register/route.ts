import { NextResponse } from "next/server"
import { hash } from "bcrypt"
import clientPromise from "@/lib/db"

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, password, userType } = await request.json()

    if (!firstName || !lastName || !email || !phone || !password || !userType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("shipping-portal")

    // Check if user already exists
    const existingUser = await db.collection("users").findOne({ email })
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    // Hash password
    const hashedPassword = await hash(password, 10)

    // Create user
    const result = await db.collection("users").insertOne({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
      userType,
      createdAt: new Date(),
    })

    return NextResponse.json({ message: "User created successfully" }, { status: 201 })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

