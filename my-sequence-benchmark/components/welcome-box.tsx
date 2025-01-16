export function WelcomeBox() {
  return (
    <div className="bg-[#F5F9FF] border border-[#D1E4FF] rounded-lg p-4 mb-8">
      <p className="text-gray-700">
        Welcome! We benchmark compressors on DNA, RNA and protein sequences.
        <br />
        Currently we use 28 test datasets, and 555 settings of 52 compressors. Please use
        the <span className="text-[#4A6EA9]">Quick Selector</span>,{' '}
        <span className="text-[#4A6EA9]">Examples</span>, or jump to{' '}
        <span className="text-[#4A6EA9]">Custom Comparison</span>.
      </p>
    </div>
  )
}

