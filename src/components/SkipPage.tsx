import useFetchSkips from "@/hooks/useFetchSkips";
import type { Skip } from "@/types/Skip";
import SkipCard from "@/components/SkipCard";
import { useSkipContext } from "@/contexts/skipContext";
import LoadingVIew from "./LoadingVIew";

const SKIP_API =
  "/api/y/ct/?l=XDl3Kn&m=8kKiA5Xs4lyuOBlr&b=LN4zdPOCY2wffjE5vH.B0w";

function SkipPage() {
  const { data: skips, loading: skipLoading } = useFetchSkips(SKIP_API);
  const { selectedSkip, setSelectedSkip } = useSkipContext();

  const handleSkipSelect = (skip: Skip) => {
    setSelectedSkip((prev: Skip | null) => (prev?.id == skip.id ? null : skip));
  };

  return (
    <div className="mb-10">
      <div className="mb-10">
        <h2 className="mb-2 md:text-4xl text-2xl font-bold">
          Choose Your Skip
        </h2>
        <span>Select the skip size that best suits your needs</span>
      </div>

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
      </div>
      {skipLoading && <LoadingVIew />}
    </div>
  );
}

export default SkipPage;
