

axios.get('http://api-tutor.herokuapp.com/v1/colors')
  .then(function (response) {

    const colorsElem = document.querySelector('.colors');
    console.log("response: ", response.data)
    colorsElem.innerHTML = colorsTemplate({
        colors: response.data
    })
   
  });

    
  