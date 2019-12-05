const carBrands = document.querySelector(".brands");
const colors = document.querySelector("colors");
const shwButton = document.querySelector(".showButton");
const display = document.querySelector(".display");
// http://api-tutor.herokuapp.com/v1/colors

const makesTemplateSource = document.querySelector(".makesTemplate");
const makesTemplate = Handlebars.compile(makesTemplateSource.innerHTML);

const carsTable = document.querySelector(".allCars");
const displayCars = Handlebars.compile(carsTable.innerHTML);
const colorsElem = document.querySelector(".colors");
axios.get("http://api-tutor.herokuapp.com/v1/colors").then(function(response) {
  // handle success

  
  colorsElem.innerHTML = makesTemplate({
    brands: response.data
  });
});

axios.get("http://api-tutor.herokuapp.com/v1/makes").then(function(response) {
  // handle success
  console.log(response.data);
  const colorsElem = document.querySelector(".brands");
  colorsElem.innerHTML = makesTemplate({
    brands: response.data
  });
});

shwButton.addEventListener("click", function() {
  let list = [];
  let color = colorsElem.value;
  axios
    .get("http://api-tutor.herokuapp.com/v1/cars/color/"+color)
    .then(function(response) {
	  var mks = response.data;
	  

      
      console.log(mks)
      const displayElem = document.querySelector(".display");
      displayElem.innerHTML = displayCars({
        carshow: mks
      });
    });
});
