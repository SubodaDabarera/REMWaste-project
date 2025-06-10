import { useSkipContext } from "@/contexts/skipContext";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";
import PriceBreakdown from "./PriceBreakdown";

function ActionBar() {
  const { selectedSkip, setSelectedSkip } = useSkipContext();

  const totalAmount = useMemo(() => {
    if (!selectedSkip) return 0;
    return (
      selectedSkip.price_before_vat +
      selectedSkip.vat +
      selectedSkip.transport_cost
    );
  }, [selectedSkip]);

  const handleContinue = () => {
    console.log("continue", totalAmount);
  };

  return (
    <AnimatePresence>
      {selectedSkip && (
        <motion.div
          key="action-bar"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 300,
          }}
          className="fixed bottom-0 left-0 right-0 z-50 shadow-lg bg-slate-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3 py-3">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setSelectedSkip(null)}
                className="text-white outline rounded-md px-4 py-1 outline-orange-500 text-lg font-medium hover:opacity-90 transition-opacity"
              >
                Back
              </button>

              <div className="flex items-center space-x-4">
                <Disclosure as="div" className="md:mr-6 sm:mr-3 mr-0">
                  <DisclosurePanel className="mb-2 text-sm/5 text-white/50 ">
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <PriceBreakdown selectedSkip={selectedSkip} />
                      </motion.div>
                    </AnimatePresence>
                  </DisclosurePanel>
                  <DisclosureButton className="group flex w-full items-center justify-between ">
                    <div className="flex align-middle items-center">
                      <ChevronUpIcon className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
                      <span className="ms-1 text-white text-md">Total:</span>
                    </div>
                    <span className="ms-4 text-white text-md font-bold leading-none ">
                      ${totalAmount.toFixed(2)}
                    </span>
                  </DisclosureButton>
                </Disclosure>

                <button
                  onClick={handleContinue}
                  className="bg-orange-500 text-white text-md font-bold py-2 px-5 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ActionBar;
