export function CustomComparison() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-center text-[#4A6EA9]">
        Custom Comparison
      </h2>

      <div className="space-y-6">
        <h3 className="text-lg font-medium text-gray-700">
          Step 1. Select test data
        </h3>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-2">
              Genomes (less repetitive)
            </h4>
            <div className="border rounded-lg p-4 space-y-2 bg-white">
              {[
                'Gordonia phage GAL1 GCF_001854635.1 (50.7 kB)',
                'WST bacterium J81 000005.9-K21 GCA_000398605.1 (522 kB)',
                'Astrammina rara GCA_000211355.2 (1.71 MB)',
                // Add more genome options...
              ].map((genome) => (
                <label key={genome} className="flex items-center space-x-2">
                  <input 
                    type="checkbox"
                    className="form-checkbox text-[#4A6EA9]"
                  />
                  <span className="text-sm text-gray-600">{genome}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-2">
              Other datasets (more repetitive)
            </h4>
            <div className="border rounded-lg p-4 space-y-2 bg-white">
              {[
                'Mitochondrion (245 MB)',
                'NCBI Virus Complete Nucleotide Human (482 MB)',
                'Influenza (1.22 GB)',
                // Add more dataset options...
              ].map((dataset) => (
                <label key={dataset} className="flex items-center space-x-2">
                  <input 
                    type="checkbox"
                    className="form-checkbox text-[#4A6EA9]"
                  />
                  <span className="text-sm text-gray-600">{dataset}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <input 
            type="checkbox" 
            id="aggregate"
            className="form-checkbox text-[#4A6EA9]"
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
              />
              <span className="ml-2 text-gray-600">sum</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="aggregate-type"
                className="form-radio text-[#4A6EA9]"
                defaultChecked
              />
              <span className="ml-2 text-gray-600">average</span>
            </label>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-4">
          Step 2. Select compressors to compare
        </h3>
        <div className="flex items-start space-x-8">
          <div className="flex-1">
            <label className="flex items-center space-x-2 mb-2">
              <input 
                type="checkbox"
                className="form-checkbox text-[#4A6EA9]"
                defaultChecked
              />
              <span className="text-gray-700">Sequence compressors</span>
            </label>
          </div>
          <div className="flex-1 text-center">
            <span className="text-gray-700">Select</span>
          </div>
          <div className="flex-1 text-right">
            <span className="text-gray-700">Select individual settings</span>
          </div>
        </div>
      </div>
    </div>
  )
}

