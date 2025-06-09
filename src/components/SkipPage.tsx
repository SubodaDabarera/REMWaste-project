import useFetchSkips from "@/hooks/useFetchSkips";
import type { Skip } from "@/types/Skip";
import { useState } from "react";
import SkipCard from "@/components/SkipCard";

const SKIP_API =
  "/api/y/ct/?l=XDl3Kn&m=8kKiA5Xs4lyuOBlr&b=LN4zdPOCY2wffjE5vH.B0w";

function SkipPage() {
  const { data: skips } = useFetchSkips(SKIP_API);

  const [selectedSkip, setSelectedSkip] = useState(0);

  const handleSkipSelect = (skip_id: number) => {
    setSelectedSkip(skip_id);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold">Select Your Skip</h2>
      <span>Select a skip that suits to your usecase</span>

      {/* Card container */}
      <div className="grid justify-center grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
        {skips.map((skip: Skip) => (
          <div
            key={skip.id}
            className="flex flex-col"
            onClick={() => handleSkipSelect(skip.id)}
          >
            <SkipCard selectedSkip={selectedSkip} data={skip} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkipPage;
