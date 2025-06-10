function PriceBreakdown({ selectedSkip } : any) {
  return (
    <div className="pb-2">
      <div className="flex justify-between">
        <span className="text-white/80">Skip price:</span>
        <span className="text-white">${selectedSkip?.price_before_vat}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-white/80">VAT:</span>
        <span className="text-white">${selectedSkip?.vat}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-white/80">Transportation:</span>
        <span className="text-white">${selectedSkip?.transport_cost || 0}</span>
      </div>
    </div>
  );
}

export default PriceBreakdown;
