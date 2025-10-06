import React from "react";

function Donate() {
  return (
    <section>
      <h1>Donate</h1>
      <p>____ [Donation information and impact] ____</p>
      <form>
        <input type="number" placeholder="Amount" />
        <button type="submit">Donate</button>
      </form>
      <h3>Other Ways to Give</h3>
      <ul>
        <li>____ [In-kind, corporate, planned giving] ____</li>
      </ul>
    </section>
  );
}

export default Donate;