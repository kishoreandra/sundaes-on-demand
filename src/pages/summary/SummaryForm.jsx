import React, { useState } from "react";

export default function SummaryForm() {
  const [disable, setDisable] = useState(false);

  return (
    <div>
      <label>
        terms and conditions
        <input type="checkbox" onClick={(e) => setDisable(e.target.checked)} />
      </label>
      <button disabled={!disable}>submit</button>
    </div>
  );
}
