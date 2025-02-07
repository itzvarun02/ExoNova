"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"

type Bid = {
  id: string
  srNo: number
  ie: "Import" | "Export"
  inquiryType: string
  loading: string
  dischargePort: string
  status: "Pending" | "Accepted" | "Rejected"
}

export default function BidsPage() {
  const [search, setSearch] = useState("")
  const [entries, setEntries] = useState("10")

  // This would normally come from an API
  const bids: Bid[] = []

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Bids</h1>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <span>Show</span>
          <select value={entries} onChange={(e) => setEntries(e.target.value)} className="border rounded px-2 py-1">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <span>entries</span>
        </div>

        <div className="flex items-center gap-2">
          <span>Search:</span>
          <Input type="search" value={search} onChange={(e) => setSearch(e.target.value)} className="max-w-sm" />
        </div>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <input type="checkbox" />
              </TableHead>
              <TableHead>Sr No.</TableHead>
              <TableHead>I/E</TableHead>
              <TableHead>Inquiry Type</TableHead>
              <TableHead>Loading</TableHead>
              <TableHead>Discharge Port</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bids.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center">
                  No data available in table
                </TableCell>
              </TableRow>
            ) : (
              bids.map((bid) => (
                <TableRow key={bid.id}>
                  <TableCell>
                    <input type="checkbox" />
                  </TableCell>
                  <TableCell>{bid.srNo}</TableCell>
                  <TableCell>{bid.ie}</TableCell>
                  <TableCell>{bid.inquiryType}</TableCell>
                  <TableCell>{bid.loading}</TableCell>
                  <TableCell>{bid.dischargePort}</TableCell>
                  <TableCell>{bid.status}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div>Showing 0 to 0 of 0 entries</div>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded" disabled>
            Previous
          </button>
          <button className="px-3 py-1 border rounded" disabled>
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

