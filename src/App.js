import { useState } from 'react';
import data from './data';

function App() {
  const [refund, setRefund] = useState(null);
  const [ethAddress, setEthAddress] = useState('');

  function getRefund() {
    const refunds = data;

    const refund = refunds.find(r => r.ethAddress === Number(ethAddress));

    setRefund(refund);
  }

  return (
    <div style={{padding: '8px'}}>
      <div>
        <span>Please enter wallet address: </span>
        <input style={{ margin: '2px', width: '300px'}} onChange={(event) => {
          setEthAddress(event.target.value);
        }} />
        <button type='button' onClick={() => {
          getRefund();
        }}>Search</button>
      </div>
      <div>===========================================================</div>
      { refund ? <div>
        <div>Refund: {refund.ethAddress}</div>
        { refund && refund.note ? <div>Note: {refund.note}</div>: null}
      </div>: null}
    </div>
  );
}

export default App;
