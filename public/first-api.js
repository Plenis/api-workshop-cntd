var brandList = [];

document.addEventListener("DOMContentLoaded", function() {
  const brandsElem = document.querySelector(".brands");
  const brandListTemplateElem = document.querySelector(".brandListTemplate");
  const brandListTemplate = Handlebars.compile(brandListTemplateElem.innerHTML);
  const inputBox = document.querySelector(".brandName");
  const addBtn = document.querySelector(".addBrandBtn");
  const clearBtn = document.querySelector(".clear");

  function addBrands() {
    var brandName = inputBox.value;
	
	axios.post('/api/brand_add',{
		brandName: brandName
	}).then(function(){
		brandList.push(brandName)
		brandsElem.innerHTML = brandListTemplate({
			brands: brandList
		  });
		  brandName = "";
	})

  }

  function clearBrands(){
	var brandList = [];
	brandsElem.innerHTML = brandList;	

  }

  //call the API to get the brands
  axios.get ('api/brand_list')
  .then (function(results){
	  //get the brand name from the server
	  const response = results.data
	  brandList = response
	  //showing brand names on screen, using API
	  brandsElem.innerHTML = brandListTemplate({
		brands: brandList
	  });

  })

  addBtn.addEventListener("click", addBrands);
  clearBtn.addEventListener("click", clearBrands)
});
