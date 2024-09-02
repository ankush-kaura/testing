// script.js

document.getElementById('billingForm').addEventListener('submit', function (event)
{
  event.preventDefault();

  const shipFrom = {
    name: document.getElementById('shipFromName').value,
    address: document.getElementById('shipFromAddress').value,
    city: document.getElementById('shipFromCity').value,
    state: document.getElementById('shipFromState').value,
    pincode: document.getElementById('shipFromPincode').value,
    gst: document.getElementById('shipFromGST').value,
  };

  const shipTo = {
    name: document.getElementById('shipToName').value,
    address: document.getElementById('shipToAddress').value,
    city: document.getElementById('shipToCity').value,
    state: document.getElementById('shipToState').value,
    pincode: document.getElementById('shipToPincode').value,
    gst: document.getElementById('shipToGST').value,
  };

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
        <h2>Billing Summary</h2>
        <h3>Ship From</h3>
        <p><strong>Name:</strong> ${ shipFrom.name }</p>
        <p><strong>Address:</strong> ${ shipFrom.address }, ${ shipFrom.city }, ${ shipFrom.state } - ${ shipFrom.pincode }</p>
        <p><strong>GST Number:</strong> ${ shipFrom.gst }</p>
        
        <h3>Ship To</h3>
        <p><strong>Name:</strong> ${ shipTo.name }</p>
        <p><strong>Address:</strong> ${ shipTo.address }, ${ shipTo.city }, ${ shipTo.state } - ${ shipTo.pincode }</p>
        <p><strong>GST Number:</strong> ${ shipTo.gst }</p>
    `;
});
