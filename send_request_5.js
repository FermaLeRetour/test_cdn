const url = 'http://website-3f3pye.inst.malicecyber.com/activate-plugin/1';

const headers = {
  'Cookie': 'session=.eJwljjkOwzAMwP7iuYPlQ7LzmUInmiEZkmYq-vcG6EYOBPhJzzj8fKXlfVz-SM_V0pKMqlYtE4r45GCHEZSzzaDOnVtD1AFSOwyMTCAdGoIHEUqW2XhEs8ESpjxlKhTX0vOda5PmEQW6cbZA6qRjaClk7jUGzYqK6R65Tj_-N3DrzpvfyLate_r-AOkZNLA.ZV9wPg.XQruJH2KOBPhPtCyCvSUN0_e5I0',

};

fetch(url, {
  method: 'GET',
  headers: headers
})
  .then(response => {
    // Process the response as needed
    console.log('Response:', response);
    // Handle the response data, e.g., response.json(), response.text(), etc.
  })
  .catch(error => {
    console.error('Error:', error);
  });




