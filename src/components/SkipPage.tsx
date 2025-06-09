import useFetchSkips from "@/hooks/useFetchSkips";
import type { Skip } from "@/types/Skip";
import React, { useState } from "react";

const SKIP_API =
  "/api/y/ct/?l=XDl3Kn&m=8kKiA5Xs4lyuOBlr&b=LN4zdPOCY2wffjE5vH.B0w";

function SkipPage() {
  const { data: skips } = useFetchSkips(SKIP_API);

  const [selectedSkip, setSelectedSkip] = useState();

  const handleSkipSelect = (skip_id: number) => {
    console.log("skip", skip_id);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold">Select Skip</h2>
      <span>Select a skip that suits to your usecase</span>

      {/* Card container */}
      <div className="grid justify-center grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-yellow-300 w-full">
        {skips.map((skip: Skip) => (
          <div
            key={skip.id}
            className="bg-red-900 max-w-72 flex flex-col"
            onClick={() => handleSkipSelect(skip.id)}
          >
            <span>Title</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkipPage;
