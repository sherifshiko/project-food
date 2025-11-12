var ingredientSearch = window.location.search.slice(3,12)
var ingredientsCards=document.getElementById("ingredientsCards");


fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientSearch}`)
.then(response => response.json())
.then(data =>{
    console.log(data.meals);
    var ingredientsData = data.meals

    for (var element of ingredientsData) {
        ingredientsCards.insertAdjacentHTML('afterbegin',`
            
                        <div class="col-4">
                <div class="position-relative overflow-hidden border-0 rounded-3 main-card">
                    <a href="#">
                    <img src="${element.strMealThumb}" class="border-0 rounded-3 w-100"  alt="">
                </a>

                <a href="#" class="text-dark">
                <div class="position-absolute card-home d-flex align-items-center justify-content-center border-0 rounded-3">
                    <h2>${element.strMeal}</h2>
                </div>
                </a>
                </div>
            </div>
            
            
            
            `)
    }
    
})
