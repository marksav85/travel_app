function handleSubmit(event) {
    event.preventDefault();

    postData('http://localhost:8010/api', {name: formText})
   .then(function(res) {
     document.getElementById('name').innerHTML = 'Agreement: ' + res.agreement;
     document.getElementById('company').innerHTML = 'Confidence: ' + res.confidence;
     document.getElementById('country').innerHTML = 'Irony: ' + res.irony;
   })
}

const postData = async (url = "", data = {}) => {
   const response = await fetch(url, {
       method: 'POST',
       credentials: 'same-origin',
       mode: 'cors',
       headers: {
       'Content-Type': 'application/json',
       },
       body: JSON.stringify(data)
   });
   try {
       const newData = await response.json();
       console.log('Data received:', newData)
       return newData;
   } catch (error) {
       console.log('error', error);
   }
};

export { handleSubmit }
