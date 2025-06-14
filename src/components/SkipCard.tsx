import React from "react";
import SKIP_IMG from "@/assets/skip_img.png";
import classNames from "classnames";
import type { Skip } from "@/types/Skip";

interface Props {
  selectedSkip: Skip | null;
  data: Skip;
}

const NotAllowFlag = ({ text } : any) => {
  return (
    <div className="bg-red-800 text-sm py-0.5 px-2 rounded-full w-fit">
      {text}
    </div>
  );
};

function SkipCard({ selectedSkip, data }: Props) {
  return (
    <div
      className={classNames(
        selectedSkip?.id == data.id ? "bg-orange-500" : "",
        "relative flex-shrink-0 max-w-xs overflow-hidden cursor-pointer rounded-lg shadow-lg border-2 border-orange-500 transition-all"
      )}
    >
      <svg
        className="absolute bottom-0 left-0 mb-8"
        viewBox="0 0 375 283"
        fill="none"
        style={{ transform: "scale(1.5)", opacity: "0.1" }}
      >
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>
      <div className="absolute right-2 top-2 flex flex-col items-end gap-1">
        {!data.allowed_on_road && (
          <NotAllowFlag text={"Not Allowed on the Roads"} />
        )}
        {!data.allows_heavy_waste && (
          <NotAllowFlag text={"Not allowed Heavy Weight"} />
        )}
      </div>
      <div className="relative pt-14 px-6 flex items-center justify-center">
        <div
          className="absolute w-48 h-48 bottom-0 left-0 -mb-20 ml-6"
          style={{
            background: "radial-gradient(black, transparent 70%)",
            opacity: "0.4",
          }}
        />
        <img className="relative w-56" src={SKIP_IMG} alt="" />
      </div>
      <div className="relative text-white px-6 pb-6 mt-6">
        <span className="block opacity-75 -mb-1">
          Hire for {data.hire_period_days} days
        </span>
        <div className="flex justify-between">
          <span className="block font-semibold text-xl">
            {data.size} Yards Skip
          </span>
          <span className="bg-white rounded-full text-orange-500 text-md font-bold px-3 py-2 leading-none flex items-center">
            ${data.price_before_vat}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SkipCard;
