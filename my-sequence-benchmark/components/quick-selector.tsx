"use client"

import React, { useState } from "react"

export function QuickSelector() {
  const [testData, setTestData] = useState({
    genomes: {
      Tiny: true,
      Small: false,
      Medium: false,
      Large: false,
    },
    otherDatasets: {
      DNA: false,
      RNA: false,
    },
  })

  const [selectedChartOptions, setSelectedChartOptions] = useState<string[]>([])
  const [selectedPlotOptions, setSelectedPlotOptions] = useState<string[]>([])

  const handleTestDataChange = (category: "genomes" | "otherDatasets", option?: string) => {
    setTestData((prev) => {
      return {
        ...prev,
        [category]: {
          ...prev[category],
          [option!]: !prev[category][option as keyof (typeof prev)[typeof category]],
        },
      }
    })
  }

  const handleOptionClick = (option: string, type: "chart" | "plot") => {
    const setter = type === "chart" ? setSelectedChartOptions : setSelectedPlotOptions
    const current = type === "chart" ? selectedChartOptions : selectedPlotOptions
    setter((prev) => (prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]))
  }

  return (
    <div className="bg-[#F5FFF5] border border-[#D1FFD1] rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold text-center text-[#008080] mb-6">Quick Selector</h2>

      <div className="space-y-8">
        {/* Test Data Section */}
        <div className="flex items-start">
          <span className="text-[#006400] font-medium whitespace-nowrap w-32">Benchmark data</span>
          <div className="flex-1">
            <div className="flex items-center space-x-8">
              <div>
                <span className="text-[#006400] mr-2">Genomes</span>
                <div className="inline-flex space-x-4">
                  {Object.entries(testData.genomes).map(([size, checked]) => (
                    <label key={size} className="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => handleTestDataChange("genomes", size)}
                        className="form-checkbox text-[#4A6EA9]"
                      />
                      <span className="ml-1 text-[#006400]">{size}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[#800000] mr-2">Other datasets</span>
                <div className="inline-flex space-x-4">
                  {Object.entries(testData.otherDatasets).map(([type, checked]) => (
                    <label key={type} className="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => handleTestDataChange("otherDatasets", type)}
                        className="form-checkbox text-[#4A6EA9]"
                      />
                      <span className="ml-1 text-[#800000]">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column Chart Section */}
        <div className="flex items-start space-x-4">
          <span className="text-[#0066CC] font-medium whitespace-nowrap w-24">Metrics</span>
          <div className="flex flex-wrap gap-2">
            {[
              "Compression Ratio",
              "Compression Time",
              "Compression Memory",
              "Compression CPU Usage",
              "Decompression Ratio",
              "Decompression Time",
              "Decompression Memory",
            ].map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option, "chart")}
                className={`px-4 py-1 rounded-full border ${
                  selectedChartOptions.includes(option) ? "bg-[#4A6EA9] text-white" : "bg-white text-gray-700"
                } hover:bg-gray-50 text-sm`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Scatterplot Section */}
        <div className="flex items-start space-x-4">
          <span className="text-[#8B4513] font-medium whitespace-nowrap w-24">Scatterplot</span>
          <div className="flex flex-wrap gap-2">
            {["Compression Ratio -vs- Decompression Time"].map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option, "plot")}
                className={`px-4 py-1 rounded-full border ${
                  selectedPlotOptions.includes(option) ? "bg-[#4A6EA9] text-white" : "bg-[#FFF5EE] text-gray-700"
                } hover:bg-gray-50 text-sm`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

