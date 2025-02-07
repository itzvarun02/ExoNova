"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FCLPage() {
  const router = useRouter()
  const [error, setError] = useState<string>("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError("")

    const formData = new FormData(event.currentTarget)
    const response = await fetch("/api/fcl/update", {
      method: "POST",
      body: JSON.stringify({
        policyNumber: formData.get("policyNumber"),
        provider: formData.get("provider"),
        coverage: formData.get("coverage"),
        expiryDate: formData.get("expiryDate"),
      }),
    })

    if (response.ok) {
      router.push("/booking")
    } else {
      setError("Error updating FCL information")
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Freight Carrier Liability Information</CardTitle>
          <CardDescription>Please provide your FCL insurance details to continue</CardDescription>
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
                <Label htmlFor="policyNumber">Policy Number</Label>
                <Input id="policyNumber" name="policyNumber" required className="mt-1" />
              </div>

              <div>
                <Label htmlFor="provider">Insurance Provider</Label>
                <Input id="provider" name="provider" required className="mt-1" />
              </div>

              <div>
                <Label htmlFor="coverage">Coverage Amount</Label>
                <Input id="coverage" name="coverage" type="number" min="0" step="1000" required className="mt-1" />
              </div>

              <div>
                <Label htmlFor="expiryDate">Policy Expiry Date</Label>
                <Input id="expiryDate" name="expiryDate" type="date" required className="mt-1" />
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Updating..." : "Submit FCL Information"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

