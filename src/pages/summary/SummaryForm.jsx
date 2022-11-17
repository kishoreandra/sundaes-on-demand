import React, { useState } from "react";
import { Popover, OverlayTrigger } from "react-bootstrap";

export default function SummaryForm() {
  const [disable, setDisable] = useState(false);

  const popoverRight = (
    <Popover id="popover-positioned-right" title="Popover right">
      <p>Ice creams are fictional to buy</p>
    </Popover>
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <OverlayTrigger placement="right" overlay={popoverRight}>
        <label>
          terms and conditions
          <input
            type="checkbox"
            onClick={(e) => setDisable(e.target.checked)}
          />
        </label>
      </OverlayTrigger>
      <button disabled={!disable}>submit</button>
    </div>
  );
}
