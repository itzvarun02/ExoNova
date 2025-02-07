"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Container } from "@/components/ui/container"
import { ArrowRight } from "lucide-react"

export default function BookingPage() {
  const [cargoType, setCargoType] = useState<"fcl" | "lcl">("fcl")

  return (
    <div className="min-h-screen bg-white py-12">
      <Container className="max-w-3xl">
        <div className="space-y-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold">New Booking</h1>
            <p className="mt-2 text-gray-600">Tell us about your shipment</p>
          </div>

          <div className="space-y-8">
            <RadioGroup
              defaultValue="fcl"
              className="grid grid-cols-2 gap-4"
              onValueChange={(value) => setCargoType(value as "fcl" | "lcl")}
            >
              <div
                className={`relative rounded-lg border-2 p-6 cursor-pointer ${
                  cargoType === "fcl" ? "border-black" : "border-gray-200"
                }`}
              >
                <RadioGroupItem value="fcl" id="fcl" className="sr-only" />
                <Label htmlFor="fcl" className="cursor-pointer">
                  <div className="font-medium">Full Container</div>
                  <div className="text-sm text-gray-500">Ship entire containers</div>
                </Label>
              </div>

              <div
                className={`relative rounded-lg border-2 p-6 cursor-pointer ${
                  cargoType === "lcl" ? "border-black" : "border-gray-200"
                }`}
              >
                <RadioGroupItem value="lcl" id="lcl" className="sr-only" />
                <Label htmlFor="lcl" className="cursor-pointer">
                  <div className="font-medium">Less than Container</div>
                  <div className="text-sm text-gray-500">Ship partial loads</div>
                </Label>
              </div>
            </RadioGroup>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="from">From</Label>
                  <Input
                    id="from"
                    placeholder="Origin port"
                    className="mt-1 rounded-none border-x-0 border-t-0 border-b-2 px-0 focus-visible:ring-0"
                  />
                </div>
                <div>
                  <Label htmlFor="to">To</Label>
                  <Input
                    id="to"
                    placeholder="Destination port"
                    className="mt-1 rounded-none border-x-0 border-t-0 border-b-2 px-0 focus-visible:ring-0"
                  />
                </div>
              </div>

              {cargoType === "fcl" ? (
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="containers">Containers</Label>
                    <Input
                      id="containers"
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="mt-1 rounded-none border-x-0 border-t-0 border-b-2 px-0 focus-visible:ring-0"
                    />
                  </div>
                  <div>
                    <Label htmlFor="type">Container Type</Label>
                    <Input
                      id="type"
                      placeholder="e.g. 40ft High Cube"
                      className="mt-1 rounded-none border-x-0 border-t-0 border-b-2 px-0 focus-visible:ring-0"
                    />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="weight">Total Weight (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      min="0"
                      className="mt-1 rounded-none border-x-0 border-t-0 border-b-2 px-0 focus-visible:ring-0"
                    />
                  </div>
                  <div>
                    <Label htmlFor="volume">Volume (m³)</Label>
                    <Input
                      id="volume"
                      type="number"
                      min="0"
                      className="mt-1 rounded-none border-x-0 border-t-0 border-b-2 px-0 focus-visible:ring-0"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end">
              <Button size="lg" className="rounded-full">
                Search Routes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

