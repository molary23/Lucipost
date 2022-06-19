import * as React from "react";

import { LoaderView, Loading } from "../styles/all";

function Loader() {
  return (
    <LoaderView>
      <Loading animating={true} size={50} />
    </LoaderView>
  );
}

export default Loader;
