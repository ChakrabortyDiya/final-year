"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function OutputConfiguration() {
  const [chartSize, setChartSize] = useState({ width: 1500, height: 500 })

  return (
    <div className="space-y-8">
      <h3 className="text-lg font-medium text-gray-700">
        Step 3. Configure output
      </h3>

      <div className="grid grid-cols-3 gap-8">
        {/* Table Configuration */}
        <div className="space-y-4">
          <h4 className="text-lg font-medium">Table</h4>
          <div className="space-y-2">
            <Label>Columns to show:</Label>
            {[
              "Name",
              "Compressed size (B)",
              "Compression ratio (times)",
              "Compression time (s)",
              "Decompression time (s)",
              "Compression + decompression time (s)",
              "Transfer + decompression time (s)",
            ].map((column) => (
              <select key={column} className="w-full border rounded px-2 py-1">
                <option>{column}</option>
              </select>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" className="w-full sm:w-auto">Show table</Button>
            <Button variant="outline" className="w-full sm:w-auto">Save CSV</Button>
          </div>
        </div>

        {/* Column Chart Configuration */}
        <div className="space-y-4">
          <h4 className="text-lg font-medium">Column chart</h4>
          <div className="space-y-4">
            <div>
              <Label>Value to plot:</Label>
              <select className="w-full border rounded px-2 py-1 mt-1">
                <option>Measure used for sorting</option>
              </select>
            </div>

            <div>
              <Label>Scale:</Label>
              <RadioGroup defaultValue="linear" className="flex space-x-4 mt-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="linear" id="linear" />
                  <label htmlFor="linear">linear</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="logarithmic" id="logarithmic" />
                  <label htmlFor="logarithmic">logarithmic</label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label>Chart size:</Label>
              <div className="flex items-center space-x-2 mt-1">
                <Input 
                  type="number"
                  value={chartSize.width}
                  onChange={(e) => setChartSize(prev => ({ ...prev, width: Number(e.target.value) }))}
                  className="w-20"
                />
                <span>x</span>
                <Input 
                  type="number"
                  value={chartSize.height}
                  onChange={(e) => setChartSize(prev => ({ ...prev, height: Number(e.target.value) }))}
                  className="w-20"
                />
                <span>pixels</span>
              </div>
            </div>

            <label className="flex items-center space-x-2">
              <Checkbox />
              <span>Highlight specialized vs general-purpose compressors</span>
            </label>

            <Button variant="outline" className="w-full sm:w-auto">Show column chart</Button>
          </div>
        </div>

        {/* Scatterplot Configuration */}
        <div className="space-y-4">
          <h4 className="text-lg font-medium">Scatterplot</h4>
          <div className="space-y-4">
            <div>
              <Label>X axis:</Label>
              <select className="w-full border rounded px-2 py-1 mt-1">
                <option>Transfer + decompression speed (MB/s)</option>
              </select>
              <div className="mt-2">
                <label className="flex items-center space-x-2">
                  <Checkbox />
                  <span>Fixed range:</span>
                  <Input type="number" defaultValue={0} className="w-20" />
                  <span>..</span>
                  <Input type="number" defaultValue={0} className="w-20" />
                </label>
              </div>
              <RadioGroup defaultValue="linear" className="flex space-x-4 mt-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="linear" id="x-linear" />
                  <label htmlFor="x-linear">linear</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="logarithmic" id="x-logarithmic" />
                  <label htmlFor="x-logarithmic">logarithmic</label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label>Y axis:</Label>
              <select className="w-full border rounded px-2 py-1 mt-1">
                <option>Compression + transfer + decompression speed (MB/s)</option>
              </select>
              <div className="mt-2">
                <label className="flex items-center space-x-2">
                  <Checkbox />
                  <span>Fixed range:</span>
                  <Input type="number" defaultValue={0} className="w-20" />
                  <span>..</span>
                  <Input type="number" defaultValue={0} className="w-20" />
                </label>
              </div>
              <RadioGroup defaultValue="linear" className="flex space-x-4 mt-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="linear" id="y-linear" />
                  <label htmlFor="y-linear">linear</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="logarithmic" id="y-logarithmic" />
                  <label htmlFor="y-logarithmic">logarithmic</label>
                </div>
              </RadioGroup>
            </div>

            <Button variant="outline" className="w-full sm:w-auto">Show scatterplot</Button>
          </div>
        </div>
      </div>

      <footer className="text-center text-sm text-gray-600 pt-8">
        By <a href="#" className="text-blue-600 hover:underline">Contributors</a>, 2019-2024, public domain
      </footer>
    </div>
  )
}

