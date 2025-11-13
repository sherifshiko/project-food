//index variables
var indexContent = document.getElementById("indexContent");
//model variables
var indexModel = document.getElementById("indexModel");
var btnCloseModel = document.getElementById("btnCloseModel");
var divBtnCloseModel=document.getElementById("divBtnCloseModel");




(async function () {

    var response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Egyptian')
    response = await response.json();
    var categories = response.meals
    var htmlCollection = ``

    for (const categorie of categories) {
        htmlCollection += `

            <div class="col-md-4">
                <div class="position-relative overflow-hidden border-0 rounded-3 main-card">
                    <a href="#">
                          <img src="${categorie.strMealThumb}" class="border-0 rounded-3 w-100"  alt="">
                     </a>
                     <a href="#" onclick="openModel(${categorie.idMeal})" class="text-decoration-none text-black">
                        <div class="position-absolute card-home d-flex align-items-center justify-content-center border-0 rounded-3">
                            <h2>${categorie.strMeal}</h2>
                        </div>
                    </a>
                </div>
            </div>

        `
        indexContent.innerHTML = htmlCollection
    }


})();


//index model

function openModel(id) {
    indexModel.classList.remove('d-none');
    divBtnCloseModel.classList.remove('d-none')

    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response) => response.json())
        .then((data) => {
            var categories = data.meals
            

            for (var categore of categories) {
            console.log(categore);

                indexModel.innerHTML = `
                            <div class="index-content-model bg-black h-100 py-5 px-3 theStyle text-main-color">
                    <div class="row">
                        <div class="col-md-5">
                            <h2>Details meals</h2>
                            <div class="my-3">
                                <img src="${categore.strMealThumb}" class="w-100" alt="">
                            </div>
                            <h3>${categore.strMeal}</h3>
                        </div>
                        <div class="col-md-7">
                   
                            <h2>Instructions</h2>
                            <p>
                                ${categore.strInstructions}
                            </p>
                            <h3>Area : ${categore.strArea}</h3>
                            <h3>Category : ${categore.strMeal}</h3>
                            <h3>Recipes :</h3>
                            <div class="row my-3">
                                <div class="col-4 row">
                                   ${(categore.strIngredient1 !== "") && `<div class="border rounded-2 w-fit-content text-black bg-info-subtle p-2 col-md-4">${categore.strMeasure1} ${categore.strIngredient1}</div>`} 
                                   ${(categore.strIngredient2 !== "") && `<div class="border rounded-2 w-fit-content text-black bg-info-subtle p-2 col-md-4">${categore.strMeasure2} ${categore.strIngredient2}</div>`} 
                                   ${(categore.strIngredient3 !== "") && `<div class="border rounded-2 w-fit-content text-black bg-info-subtle p-2 col-md-4">${categore.strMeasure3} ${categore.strIngredient3}</div>`} 
                                   ${(categore.strIngredient4 !== "") && `<div class="border rounded-2 w-fit-content text-black bg-info-subtle p-2 col-md-4">${categore.strMeasure4} ${categore.strIngredient4}</div>`} 
                                   ${(categore.strIngredient5 !== "") && `<div class="border rounded-2 w-fit-content text-black bg-info-subtle p-2 col-md-4">${categore.strMeasure5} ${categore.strIngredient5}</div>`} 
                                   ${(categore.strIngredient6 !== "") && `<div class="border rounded-2 w-fit-content text-black bg-info-subtle p-2 col-md-4">${categore.strMeasure6} ${categore.strIngredient6}</div>`} 
                                   ${(categore.strIngredient7 !== "") && `<div class="border rounded-2 w-fit-content text-black bg-info-subtle p-2 col-md-4">${categore.strMeasure6} ${categore.strIngredient7}</div>`} 
                                   ${(categore.strIngredient8 !== "") && `<div class="border rounded-2 w-fit-content text-black bg-info-subtle p-2 col-md-4">${categore.strMeasure6} ${categore.strIngredient8}</div>`} 
                                   ${(categore.strIngredient9 !== "") && `<div class="border rounded-2 w-fit-content text-black bg-info-subtle p-2 col-md-4">${categore.strMeasure6} ${categore.strIngredient9}</div>`} 
                                   ${(categore.strIngredient10 !== "") && `<div class="border rounded-2 w-fit-content text-black bg-info-subtle p-2 col-md-4">${categore.strMeasure6} ${categore.strIngredient10}</div>`} 
                                   ${(categore.strIngredient11 !== "") && `<div class="border rounded-2 w-fit-content text-black bg-info-subtle p-2 col-md-4">${categore.strMeasure6} ${categore.strIngredient11}</div>`} 
                                   ${(categore.strIngredient12 !== "") && `<div class="border rounded-2 w-fit-content text-black bg-info-subtle p-2 col-md-4">${categore.strMeasure6} ${categore.strIngredient12}</div>`} 
                                   ${(categore.strIngredient13 !== "") && `<div class="border rounded-2 w-fit-content text-black bg-info-subtle p-2 col-md-4">${categore.strMeasure6} ${categore.strIngredient13}</div>`} 
                                   ${(categore.strIngredient14 !== "") && `<div class="border rounded-2 w-fit-content text-black bg-info-subtle p-2 col-md-4">${categore.strMeasure6} ${categore.strIngredient14}</div>`} 
                                   ${(categore.strIngredient15 !== "") && `<div class="border rounded-2 w-fit-content text-black bg-info-subtle p-2 col-md-4">${categore.strMeasure6} ${categore.strIngredient15}</div>`} 
                                   ${(categore.strIngredient16 !== "") && `<div class="border rounded-2 w-fit-content text-black bg-info-subtle p-2 col-md-4">${categore.strMeasure6} ${categore.strIngredient16}</div>`} 
                                   ${(categore.strIngredient17 !== "") && `<div class="border rounded-2 w-fit-content text-black bg-info-subtle p-2 col-md-4">${categore.strMeasure6} ${categore.strIngredient17}</div>`} 
                                   ${(categore.strIngredient18 !== "") && `<div class="border rounded-2 w-fit-content text-black bg-info-subtle p-2 col-md-4">${categore.strMeasure6} ${categore.strIngredient18}</div>`} 
                                   ${(categore.strIngredient19 !== "") && `<div class="border rounded-2 w-fit-content text-black bg-info-subtle p-2 col-md-4">${categore.strMeasure16} ${categore.strIngredient19}</div>`}
                                   ${(categore.strIngredient20 !== "") && `<div class="border rounded-2 w-fit-content text-black bg-info-subtle p-2 col-md-4">${categore.strMeasure16} ${categore.strIngredient20}</div>`}
                                </div>
                            </div>
                            <div class="my-3">
                                <button class="me-2 btn btn-success"><a class="text-decoration-none text-white" href="${categore.strSource}">Source</a></button>
                                <button class="btn btn-danger"><a class="text-decoration-none text-white" href="${categore.strYoutube}">Youtube</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                
                `
                
            }


        })

}



