export function QuickSelector() {
  return (
    <div className="bg-[#F5FFF5] border border-[#D1FFD1] rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
        Quick Selector
      </h2>
      
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-700">Test data</span>
            <div className="flex space-x-4">
              {['Tiny', 'Small', 'Medium', 'Large'].map((size) => (
                <label key={size} className="flex items-center space-x-2">
                  <input 
                    type="checkbox"
                    className="form-checkbox text-[#4A6EA9]"
                    defaultChecked={size === 'Small'}
                  />
                  <span className="text-gray-600">{size}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-center space-x-8">
            {['DNA', 'RNA', 'Protein', 'Alignments'].map((type) => (
              <label key={type} className="flex items-center space-x-2">
                <input 
                  type="checkbox"
                  className="form-checkbox text-[#4A6EA9]"
                />
                <span className="text-gray-600">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-700">Column chart</span>
            <div className="flex flex-wrap justify-center gap-2 max-w-full overflow-x-auto py-2">
              {[
                'Compression Ratio',
                'Decompression Speed',
                'Compression / Decompression Speed',
                'Transfer / Decompression Speed',
                'Compression / Transfer / Decompression Speed'
              ].map((metric) => (
                <button
                  key={metric}
                  className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-600 hover:bg-gray-50 whitespace-nowrap"
                >
                  {metric}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-700">Scatterplot</span>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                'Compression Ratio -vs- Decompression Speed',
                'Compression Ratio -vs- Compression / Decompression Speed',
                'Transfer / Decompression Speed -vs- Compression / Transfer / Decompression Speed'
              ].map((plot) => (
                <button
                  key={plot}
                  className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-600 hover:bg-gray-50"
                >
                  {plot}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

