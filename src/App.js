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
      <div style={{ borderBottomStyle: 'solid', borderColor: 'purple'}}>
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
            marginBottom: '10px'
          }}
          onClick={() => {
            getRefund();
          }}
        >
          Search
        </button>
      </div>
      {refund ? (
        <div style={{ marginTop: '10px'}}>
          <div>
            <span style={{ fontWeight: "bold" }}>Value</span>: {refund.value}{" "}
            BUSD
          </div>
          <br />
          {/* {refund && refund.note ? (
            <div>
              <span style={{ fontWeight: "bold" }}>Note</span>: {refund.note}
            </div>
          ) : null} */}
        </div>
      ) : null}
    </div>
  );
}

export default App;
