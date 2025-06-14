import React from "react";

function PageWrapper({ children }: any) {
  return (
    <div className="m-auto flex justify-content-center justify-center py-10 px-8 max-w-xl md:max-w-7xl">
      {children}
    </div>
  );
}

export default PageWrapper;
