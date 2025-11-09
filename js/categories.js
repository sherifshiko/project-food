var rowContent = document.querySelector('.row');
var nextPathCategore = document.getElementById("nextPathCategore");
var categoreContent = document.getElementById("categoreContent");


var categoriesName = [];
var fullCategory = [];


(async function () {

    var response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')


    response = await response.json();

    var categories = response.categories


    var htmlCollection = ''

    for (var categore of categories) {

        htmlCollection += `
            <div class="col-md-4">
                <div class="position-relative rounded-4 overflow-hidden categore-card">
                    <img src="${categore.strCategoryThumb}" alt="" class="w-100">
                    <a href="./nextCategore.html?c=${categore.strCategory}" class="text-black" id="nextPathCategore">
                        <div class="categories-card-hover bg-main theStyle text-center">
                            <h2>${categore.strCategory}</h2>
                            <p>${categore.strCategoryDescription}</p>
                        </div>
                    </a>
                </div>
            </div>
        
        `
        fullCategory.push(categore);

    }

    rowContent.innerHTML = htmlCollection

})();








