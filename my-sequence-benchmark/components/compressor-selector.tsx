"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export function CompressorSelector() {
  const [showTop, setShowTop] = useState(false)
  const [showRelative, setShowRelative] = useState(false)

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-700">
        Step 2. Select compressors to compare
      </h3>

      <div className="space-y-4">
        <div className="flex items-start space-x-8">
          <div className="flex-1 space-y-2">
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <Checkbox defaultChecked />
                <span>Sequence compressors</span>
              </label>
              <label className="flex items-center space-x-2">
                <Checkbox defaultChecked />
                <span>General-purpose compressors</span>
              </label>
              <label className="flex items-center space-x-2">
                <Checkbox defaultChecked />
                <span>Copy (no compression)</span>
              </label>
              <label className="flex items-center space-x-2">
                <Checkbox />
                <span>Wrappers</span>
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
                  defaultValue={1}
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
                  <Checkbox onChange={(e) => setShowTop((e.target as HTMLInputElement).checked)} />
                  <span>Show only top</span>
                  <Input 
                    type="number"
                    defaultValue={10}
                    className="w-16 px-2 py-1"
                    disabled={!showTop}
                  />
                  <span>entries</span>
                </label>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span>Link speed:</span>
                  <Input 
                    type="number"
                    defaultValue={100}
                    className="w-24 px-2 py-1"
                  />
                  <span>Mbit/s (for estimating transfer time)</span>
                </div>

                <label className="flex items-center space-x-2">
                  <Checkbox onChange={(e) => setShowRelative((e.target as HTMLInputElement).checked)} />
                  <span>Show all values relative to</span>
                  <Input 
                    type="text"
                    defaultValue="gzip-9"
                    className="w-32 px-2 py-1"
                    disabled={!showRelative}
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <Label>Select individual compressors:</Label>
            <select multiple className="w-full h-64 border rounded mt-2">
              <option>cmix</option>
              <option>gzip</option>
              <option>lizard</option>
              <option>lz4</option>
              <option>lzop</option>
              <option>lzturbo</option>
              <option>nakamichi</option>
              <option>pbzip2</option>
              <option>pigz</option>
              <option>snzip</option>
              <option>xz</option>
              <option>zpaq</option>
              <option>zstd</option>
            </select>
          </div>

          <div className="flex-1">
            <Label>Select individual compressor settings:</Label>
            <select multiple className="w-full h-64 border rounded mt-2">
              <option>zstd-15-1t</option>
              <option>zstd-15-4t</option>
              <option>zstd-16-1t</option>
              <option>zstd-16-4t</option>
              <option>zstd-17-1t</option>
              <option>zstd-17-4t</option>
              <option>zstd-18-1t</option>
              <option>zstd-18-4t</option>
              <option>zstd-19-1t</option>
              <option>zstd-19-4t</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

