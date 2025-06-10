import { useSkipContext } from "@/contexts/skipContext";
import { useCallback, useMemo, useState } from "react";

function ActionBar() {
  const { selectedSkip } = useSkipContext();

  const totalAmount = useMemo(() => {
    const tot =
      selectedSkip?.price_before_vat +
      selectedSkip?.vat +
      selectedSkip?.transport_cost;
    return tot;
  }, [selectedSkip]);

  const handleContinue = () => {
    console.log("continue", totalAmount);
  };

  if (!selectedSkip) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-700 z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3 py-3">
        <div className="flex items-center justify-between">
          <button
            // onClick={onBack}
            className="text-white outline rounded-md px-4 py-1 outline-orange-500 text-lg font-medium hover:opacity-90 transition-opacity"
          >
            Back
          </button>

          <div className="flex items-center space-x-4">
            <span className="text-white text-md font-bold px-4 py-2 leading-none">
              Total: ${totalAmount}
            </span>
            <button
              onClick={handleContinue}
              className="bg-orange-500 text-white text-md font-bold py-2 px-5 rounded-lg hover:bg-orange-800 transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActionBar;
