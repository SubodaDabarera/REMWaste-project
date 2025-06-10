import type { Skip } from "@/types/Skip";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

function PriceBreakdown({ selectedSkip }: Skip) {
  return (
    <div className="pt-3">
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
