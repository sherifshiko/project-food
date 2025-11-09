//  variables btn close and open in nav bar 
var closeBtn = document.getElementById("closeBtn");
var openListBtn = document.getElementById("openListBtn");
var closeListtBtn = document.getElementById("closeListtBtn");
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

            <div class="col-4">
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
                        <div class="col-5">
                            <h2>Details meals</h2>
                            <div class="my-3">
                                <img src="${categore.strMealThumb}" class="w-100" alt="">
                            </div>
                            <h3>${categore.strMeal}</h3>
                        </div>
                        <div class="col-7">
                   
                            <h2>Instructions</h2>
                            <p>
                                ${categore.strInstructions}
                            </p>
                            <h3>Area : ${categore.strArea}</h3>
                            <h3>Category : ${categore.strMeal}</h3>
                            <h3>Recipes :</h3>
                            <div class="row my-3">
                                <div class="col-4">
                                    <div class="border rounded-2 w-fit-content text-black bg-info-subtle p-2">${categore.strMeasure1} ${categore.strIngredient1}</div>
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






// event btn close and open in nav bar
closeBtn.addEventListener('click', (e) => {
    e.preventDefault
    $('.navbar').animate({ left: '-200px' });
    closeListtBtn.classList.add('d-none')
    openListBtn.classList.remove('d-none')
})

closeListtBtn.addEventListener('click', (e) => {
    e.preventDefault
    $('.navbar').animate({ left: '-200px' });
    closeListtBtn.classList.add('d-none')
    openListBtn.classList.remove('d-none')
})

openListBtn.addEventListener('click', (e) => {
    e.preventDefault
    $('.navbar').animate({ left: '0px' });
    closeListtBtn.classList.remove('d-none')
    openListBtn.classList.add('d-none')
})

//btn close model

btnCloseModel.addEventListener('click', () => {
    indexModel.classList.add('d-none');
    divBtnCloseModel.classList.add('d-none')

})

