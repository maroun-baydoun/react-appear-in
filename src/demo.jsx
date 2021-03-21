import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";

import CellContainer from "./CellContainer";

const Demo = () => {
  const [demoVisible, setDemoVisible] = useState(false);

  return (
    <Fragment>
      {demoVisible ? <CellContainer /> : null}
      {!demoVisible ? (
        <button className="button" onClick={() => setDemoVisible(true)}>
          Start
        </button>
      ) : null}
    </Fragment>
  );
};

ReactDOM.render(<Demo />, document.querySelector(".demo-container"));
