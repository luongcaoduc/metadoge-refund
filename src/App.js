import { useState } from "react";
import data from "./data";

function App() {
  const [refund, setRefund] = useState(null);
  const [ethAddress, setEthAddress] = useState("");

  function getRefund() {
    const refunds = data;

    const refund = refunds.find((r) => r.ethAddress === ethAddress);

    setRefund(refund);
  }

  return (
    <div style={{ padding: "8px" }}>
      <div>
        <span style={{ fontWeight: "bold" }}>Enter your wallet address: </span>
        <input
          style={{ margin: "2px", width: "300px" }}
          onKeyDown={(event) => {
            if (event.key === "Enter") getRefund();
          }}
          onChange={(event) => {
            setEthAddress(event.target.value);
          }}
        />
        <button
          type="button"
          style={{
            backgroundColor: "purple",
            color: "white",
            borderRadius: "10%",
          }}
          onClick={() => {
            getRefund();
          }}
        >
          Search
        </button>
      </div>
      <div>==========================================================</div>
      {refund ? (
        <div>
          <div>
            <span style={{ fontWeight: "bold" }}>Value</span>: {refund.value}{" "}
            BUSD
          </div>
          {refund && refund.note ? (
            <div>
              <span style={{ fontWeight: "bold" }}>Note</span>: {refund.note}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default App;
