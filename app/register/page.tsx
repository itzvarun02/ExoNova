"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

type UserType = "EXPORTER_IMPORTER" | "FREIGHT_FORWARDER"

export default function RegisterPage() {
  const router = useRouter()
  const [error, setError] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const [userType, setUserType] = useState<UserType>("EXPORTER_IMPORTER")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError("")

    const formData = new FormData(event.currentTarget)
    const password = formData.get("password")
    const retypePassword = formData.get("retypePassword")

    if (password !== retypePassword) {
      setError("Passwords do not match")
      setLoading(false)
      return
    }

    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        phone: `${formData.get("phoneCountry")}${formData.get("phone")}`,
        password: formData.get("password"),
        userType,
      }),
    })

    if (response.ok) {
      router.push("/login")
    } else {
      const data = await response.json()
      setError(data.error || "Error creating account")
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Create Account</CardTitle>
          <CardDescription>Join ExoNova to start shipping</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-4">
              <div>
                <Label>User Type</Label>
                <RadioGroup
                  defaultValue={userType}
                  onValueChange={(value) => setUserType(value as UserType)}
                  className="grid grid-cols-2 gap-4 mt-2"
                >
                  <div className="flex items-center space-x-2 rounded-lg border p-4">
                    <RadioGroupItem value="EXPORTER_IMPORTER" id="exporter" />
                    <Label htmlFor="exporter" className="font-normal">
                      EXPORTER / IMPORTER
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-lg border p-4">
                    <RadioGroupItem value="FREIGHT_FORWARDER" id="forwarder" />
                    <Label htmlFor="forwarder" className="font-normal">
                      FREIGHT FORWARDER
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" name="firstName" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" required className="mt-1" />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required className="mt-1" />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <Input id="phoneCountry" name="phoneCountry" defaultValue="+91" required />
                  <Input id="phone" name="phone" type="tel" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" name="password" type="password" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="retypePassword">Retype Password</Label>
                  <Input id="retypePassword" name="retypePassword" type="password" required className="mt-1" />
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={loading}>
              {loading ? "Creating account..." : "Create account"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

