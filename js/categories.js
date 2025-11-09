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
                    <div class="categories-card-hover bg-main theStyle text-center">
                        <h2>${categore.strCategory}</h2>
                        <p>${categore.strCategoryDescription}</p>
                    </div>
                </div>
            </div>
        
        `
        fullCategory.push(categore);

    }

    rowContent.innerHTML = htmlCollection

})();



nextPathCategore.addEventListener('click', (e) => {
    console.log(e.target);

    var categoriesElement = e.view.fullCategory
    for (var categoryElement of categoriesElement) {
        categoriesName.push(categoryElement.strCategory)
    }
    for (var categoreName of categoriesName) {
        var test = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoreName}`
    }

}
)




