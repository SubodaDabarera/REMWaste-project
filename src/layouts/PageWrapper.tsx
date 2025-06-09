import React from "react";

function PageWrapper({ children }: any) {
  return <div className="m-auto py-10 max-w-xl md:max-w-7xl">{children}</div>;
}

export default PageWrapper;
