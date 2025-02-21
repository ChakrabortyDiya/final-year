"use client"

import React, { useState } from "react"

export function CustomComparison() {
  const [selectedGenomes, setSelectedGenomes] = useState<string[]>([])
  const [selectedDatasets, setSelectedDatasets] = useState<string[]>([])
  const [aggregateChecked, setAggregateChecked] = useState(false)
  const [aggregateType, setAggregateType] = useState("average")

  const handleGenomeChange = (genome: string) => {
    setSelectedGenomes((prev) => (prev.includes(genome) ? prev.filter((g) => g !== genome) : [...prev, genome]))
    console.log(`Genome ${genome} ${selectedGenomes.includes(genome) ? "deselected" : "selected"}`)
  }

  const handleDatasetChange = (dataset: string) => {
    setSelectedDatasets((prev) => (prev.includes(dataset) ? prev.filter((d) => d !== dataset) : [...prev, dataset]))
    console.log(`Dataset ${dataset} ${selectedDatasets.includes(dataset) ? "deselected" : "selected"}`)
  }

  const handleAggregateChange = () => {
    setAggregateChecked((prev) => !prev)
    console.log(`Aggregate results ${aggregateChecked ? "unchecked" : "checked"}`)
  }

  const handleAggregateTypeChange = (type: string) => {
    setAggregateType(type)
    console.log(`Aggregate type changed to ${type}`)
  }

  const genomes = [
    "Gordonia phage GAL1 GCF_001854635.1 (50.7 kB)",
    "WS1 bacterium JGI 000005.9-K21 GCA_000398605.1 (522 KB)",
    "Astrammina rara GCA_000211355.2 (1.71 MB)",
    "Nosema ceranae GCA_000988165.1 (5.81 MB)",
    "Cryptosporidium parvum Iowa II GCA_000165345.1 (9.22 MB)",
    "Spironucleus salmonicida GCA_000497125.1 (13.1 MB)",
    "Tieghemostelium lacteum GCA_001606155.1 (23.7 MB)",
    "Fusarium graminearum PH-1 GCF_000240135.3 (36.9 MB)",
    "Salpingoeca rosetta GCA_000188695.1 (56.2 MB)",
    "Chondrus crispus GCA_000350225.2 (106 MB)",
    "Kappaphycus alvarezii GCA_002205965.2 (341 MB)",
    "Strongylocentrotus purpuratus GCF_000002235.4 (1.01 GB)",
    "Homo sapiens GCA_000001405.28 (3.31 GB)",
  ]

  const datasets = {
    dna: [
      "Mitochondrion (245 MB)",
      "NCBI Virus Complete Nucleotide Human (482 MB)",
      "Influenza (1.22 GB)",
      "Helicobacter (2.76 GB)",
      "NCBI SARS-CoV-2 random-100k (3.05 GB)",
    ],
    rna: ["SILVA 132 LSURef (610 MB)", "SILVA 132 SSURef Nr99 (1.11 GB)", "SILVA 132 SSURef (3.28 GB)"],
    alignments: ["Multiple DNA sequence alignments"],
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-center text-[#4A6EA9]">Custom Comparison</h2>

      <div className="space-y-6">
        <h3 className="text-lg font-medium text-gray-700">Step 1. Select test data</h3>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-2">Genomes (less repetitive)</h4>
            <div className="border rounded-lg p-4 space-y-2 bg-white max-h-96 overflow-y-auto">
              {genomes.map((genome) => (
                <label key={genome} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox text-[#4A6EA9]"
                    checked={selectedGenomes.includes(genome)}
                    onChange={() => handleGenomeChange(genome)}
                  />
                  <span className="text-sm text-gray-600">{genome}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-2">Other datasets (more repetitive)</h4>
            <div className="border rounded-lg p-4 space-y-6 bg-white max-h-96 overflow-y-auto">
              <div className="space-y-2">
                <h5 className="font-medium text-gray-600">DNA datasets</h5>
                {datasets.dna.map((dataset) => (
                  <label key={dataset} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="form-checkbox text-[#4A6EA9]"
                      checked={selectedDatasets.includes(dataset)}
                      onChange={() => handleDatasetChange(dataset)}
                    />
                    <span className="text-sm text-gray-600">{dataset}</span>
                  </label>
                ))}
              </div>

              <div className="space-y-2">
                <h5 className="font-medium text-gray-600">RNA datasets</h5>
                {datasets.rna.map((dataset) => (
                  <label key={dataset} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="form-checkbox text-[#4A6EA9]"
                      checked={selectedDatasets.includes(dataset)}
                      onChange={() => handleDatasetChange(dataset)}
                    />
                    <span className="text-sm text-gray-600">{dataset}</span>
                  </label>
                ))}
              </div>

              
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <input
            type="checkbox"
            id="aggregate"
            className="form-checkbox text-[#4A6EA9]"
            checked={aggregateChecked}
            onChange={handleAggregateChange}
          />
          <label htmlFor="aggregate" className="text-gray-700">
            Aggregate results from multiple datasets using:
          </label>
          <div className="space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="aggregate-type"
                className="form-radio text-[#4A6EA9]"
                checked={aggregateType === "sum"}
                onChange={() => handleAggregateTypeChange("sum")}
              />
              <span className="ml-2 text-gray-600">sum</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="aggregate-type"
                className="form-radio text-[#4A6EA9]"
                checked={aggregateType === "average"}
                onChange={() => handleAggregateTypeChange("average")}
              />
              <span className="ml-2 text-gray-600">average</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

