import useFetchSkips from "@/hooks/useFetchSkips";
import type { Skip } from "@/types/Skip";
import SkipCard from "@/components/SkipCard";
import { useSkipContext } from "@/contexts/skipContext";

const SKIP_API =
  "/api/y/ct/?l=XDl3Kn&m=8kKiA5Xs4lyuOBlr&b=LN4zdPOCY2wffjE5vH.B0w";

function SkipPage() {
  const { data: skips, loading: skipLoading } = useFetchSkips(SKIP_API);
  const { selectedSkip, setSelectedSkip } = useSkipContext();

  const handleSkipSelect = (skip: Skip) => {
    setSelectedSkip((prev: Skip | null) => (prev?.id == skip.id ? null : skip));
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
            onClick={() => handleSkipSelect(skip)}
          >
            <SkipCard selectedSkip={selectedSkip} data={skip} />
          </div>
        ))}
        <div>{skipLoading && <div>Loading</div>}</div>
      </div>
    </div>
  );
}

export default SkipPage;
