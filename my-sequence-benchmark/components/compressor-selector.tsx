"use client"

import React, { useState } from "react"
import { Checkbox } from "../components/ui/checkbox"
import { Input } from "./ui/input"
import { Label } from "../components/ui/label"

export function CompressorSelector() {
  const [showTop, setShowTop] = useState(false)
  const [showRelative, setShowRelative] = useState(false)
  const [compressorTypes, setCompressorTypes] = useState({
    proposed: true,
    standard: true,
  })
  const [bestSettingsCount, setBestSettingsCount] = useState(1)
  const [linkSpeed, setLinkSpeed] = useState(100)
  const [relativeCompressor, setRelativeCompressor] = useState("gzip-9")
  const [selectedProposed, setSelectedProposed] = useState<string[]>([])
  const [selectedStandard, setSelectedStandard] = useState<string[]>([])
  const [selectedSettings, setSelectedSettings] = useState<string[]>([])

  const handleCompressorTypeChange = (type: "proposed" | "standard") => {
    setCompressorTypes((prev) => ({ ...prev, [type]: !prev[type] }))
    console.log(`${type} compressors ${compressorTypes[type] ? "unchecked" : "checked"}`)
  }

  const handleShowTopChange = (checked: boolean) => {
    setShowTop(checked)
    console.log(`Show only top ${checked ? "checked" : "unchecked"}`)
  }

  const handleShowRelativeChange = (checked: boolean) => {
    setShowRelative(checked)
    console.log(`Show all values relative to ${checked ? "checked" : "unchecked"}`)
  }

  const handleProposedChange = (compressor: string) => {
    setSelectedProposed((prev) =>
      prev.includes(compressor) ? prev.filter((c) => c !== compressor) : [...prev, compressor],
    )
    console.log(
      `Proposed compressor ${compressor} ${selectedProposed.includes(compressor) ? "deselected" : "selected"}`,
    )
  }

  const handleStandardChange = (compressor: string) => {
    setSelectedStandard((prev) =>
      prev.includes(compressor) ? prev.filter((c) => c !== compressor) : [...prev, compressor],
    )
    console.log(
      `Standard compressor ${compressor} ${selectedStandard.includes(compressor) ? "deselected" : "selected"}`,
    )
  }

  const handleSettingsChange = (setting: string) => {
    setSelectedSettings((prev) => (prev.includes(setting) ? prev.filter((s) => s !== setting) : [...prev, setting]))
    console.log(`Compressor setting ${setting} ${selectedSettings.includes(setting) ? "deselected" : "selected"}`)
  }

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-700">Step 2. Select compressors to compare</h3>

      <div className="space-y-4">
        <div className="flex items-start space-x-8">
          <div className="flex-1 space-y-2">
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <Checkbox
                  checked={compressorTypes.proposed}
                  onCheckedChange={() => handleCompressorTypeChange("proposed")}
                />
                <span>Proposed compressors</span>
              </label>
              <label className="flex items-center space-x-2">
                <Checkbox
                  checked={compressorTypes.standard}
                  onCheckedChange={() => handleCompressorTypeChange("standard")}
                />
                <span>Standard compressors</span>
              </label>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span>Include</span>
                <select className="border rounded px-2 py-1">
                  <option>free and non-free</option>
                </select>
                <span>compressors</span>
              </div>

              <div className="flex items-center space-x-2">
                <span>Include</span>
                <select className="border rounded px-2 py-1">
                  <option>open and closed source</option>
                </select>
                <span>compressors</span>
              </div>

              <div className="flex items-center space-x-2">
                <span>Use results from</span>
                <select className="border rounded px-2 py-1">
                  <option>1 and 4 thread</option>
                </select>
                <span>tests</span>
              </div>
            </div>

            <div className="space-y-4">
              <label className="flex items-center space-x-2">
                <Checkbox defaultChecked />
                <span>Only</span>
                <Input
                  type="number"
                  value={bestSettingsCount}
                  onChange={(e) => setBestSettingsCount(Number(e.target.value))}
                  className="w-16 px-2 py-1"
                />
                <span>best setting(s) in terms of</span>
              </label>

              <select className="w-full border rounded px-2 py-1">
                <option>Transfer + decompression speed</option>
              </select>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span>Sort by</span>
                  <select className="flex-1 border rounded px-2 py-1">
                    <option>Measure used for selecting best settings</option>
                  </select>
                </div>

                <label className="flex items-center space-x-2">
                  <Checkbox />
                  <span>Reverse sort order</span>
                </label>

                <label className="flex items-center space-x-2">
                  <Checkbox checked={showTop} onCheckedChange={handleShowTopChange} />
                  <span>Show only top</span>
                  <Input type="number" defaultValue={10} className="w-16 px-2 py-1" disabled={!showTop} />
                  <span>entries</span>
                </label>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span>Link speed:</span>
                  <Input
                    type="number"
                    value={linkSpeed}
                    onChange={(e) => setLinkSpeed(Number(e.target.value))}
                    className="w-24 px-2 py-1"
                  />
                  <span>Mbit/s (for estimating transfer time)</span>
                </div>

                <label className="flex items-center space-x-2">
                  <Checkbox checked={showRelative} onCheckedChange={handleShowRelativeChange} />
                  <span>Show all values relative to</span>
                  <Input
                    type="text"
                    value={relativeCompressor}
                    onChange={(e) => setRelativeCompressor(e.target.value)}
                    className="w-32 px-2 py-1"
                    disabled={!showRelative}
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <Label>Select proposed compressor setting:</Label>
            <select
              multiple
              className="w-full h-64 border rounded mt-2"
              value={selectedProposed}
              onChange={(e) => setSelectedProposed(Array.from(e.target.selectedOptions, (option) => option.value))}
            >
              <option>P-7zip</option>
              <option>P-PAQ8</option>
              <option>P-BSC</option>
              <option>P-GZIP</option>
              <option>P-ZSTD</option>
              <option>P-BZIP2</option>
              <option>P-ZPAQ</option>
              <option>P-Huffman</option>
            </select>
          </div>

          <div className="flex-1">
            <Label>Select standard compressor setting:</Label>
            <select
              multiple
              className="w-full h-64 border rounded mt-2"
              value={selectedStandard}
              onChange={(e) => setSelectedStandard(Array.from(e.target.selectedOptions, (option) => option.value))}
            >
              <option>S-7zip</option>
              <option>S-PAQ8</option>
              <option>S-BSC</option>
              <option>S-GZIP</option>
              <option>S-ZSTD</option>
              <option>S-BZIP2</option>
              <option>S-ZPAQ</option>
              <option>S-Huffman</option>
            </select>
          </div>

          <div className="flex-1">
            <Label>Select individual compressor settings:</Label>
            <select
              multiple
              className="w-full h-64 border rounded mt-2"
              value={selectedSettings}
              onChange={(e) => setSelectedSettings(Array.from(e.target.selectedOptions, (option) => option.value))}
            >
              <option></option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

