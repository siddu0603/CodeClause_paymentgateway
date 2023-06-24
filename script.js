function openPaymentModal() {
    let fn=document.getElementById("firstName").value;
    let ln=document.getElementById("lastName").value;
    let em=document.getElementById("email").value;
    if(fn=="" || ln=="" || em=="")
    alert('enter every field');

    var donationAmount = document.getElementById('donationAmount').value; 
    if (donationAmount <= 0) {
      alert('Please enter a valid donation amount.');
      return;
    }
    var selectedCurrency = document.getElementById('currencySelect').value;
    
    var options = {
      key: 'rzp_test_2ylEtFnin6E8eL',
      amount: donationAmount * 100, 
      currency: selectedCurrency,
      name: 'Abhilekha',
      description: 'Payment',
      image: 'l0g0.png',
      handler: function(response) {
        console.log(response.razorpay_payment_id);
        alert('Payment done successfully!');
      },
    };
    
    var rzp = new Razorpay(options);
    rzp.open();
  }