
//ingredients variables
var ingredientsContent = document.getElementById("ingredientsContent");

// ingredients fetch

fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list/key=1")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        var ingredients = data.meals


        var htmlCollection = ``
        for (var ingredient of ingredients) {            
            htmlCollection += `

             <div class="col-md-4">
                <div class="text-main-color theStyle text-center">
                    <a href="./ingredientsCards.html?i=${ingredient.strIngredient}" class="text-main-color theStyle text-decoration-none">
                        <i class="fa-solid fa-drumstick-bite ingredients-icon"></i>
                        <h2>${ingredient.strIngredient}</h2>
                    </a>
                    
                </div>
            </div>

        `

        }
        ingredientsContent.innerHTML = htmlCollection


        var test = ``
        for (var element of ingredients) {

        }
    })

