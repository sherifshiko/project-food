var theNextCategoreContent=document.getElementById("theNextCategoreContent");
var indexModel=document.getElementById("indexModel");
var divBtnCloseModelCategory=document.getElementById("divBtnCloseModelCategory");
var btnCloseModelCategory=document.getElementById("btnCloseModelCategory");




var clickCategory = window.location.search.slice(3,10)
console.log(clickCategory);


fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${clickCategory}`)
.then((response)=> response.json())
.then((data)=>{
    var categories= data.meals
    var htmlCollection=``
    for (var categore of categories) {
        
        htmlCollection +=`
        
                    <div class="col-4">
                <div class="position-relative overflow-hidden border-0 rounded-3 main-card">
                    <a href="#">
                        <img src="${categore.strMealThumb}" class="border-0 rounded-3 w-100" alt="">
                    </a>
                    <a href="#" onclick="openTheNextCategoreModel(${categore.idMeal})" class="text-black">
                        <div class="position-absolute card-home d-flex align-items-center justify-content-center border-0 rounded-3">
                        <h2>${categore.strMeal}</h2>
                    </div>
                    </a>
                </div>
            </div>
        
        `
        theNextCategoreContent.innerHTML=htmlCollection
    }


    
})



function openTheNextCategoreModel(id) {
    
    indexModel.classList.remove('d-none');
    divBtnCloseModelCategory.classList.remove('d-none')

    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response) => response.json())
        .then((data) => {
            var modelData=data.meals
            for (var element of modelData) {
                console.log(element);
                indexModel.innerHTML=`
                
                        <div class="index-content-model bg-black h-100 py-5 px-3 theStyle text-main-color">
            <div class="row">
                <div class="col-5">
                    <h2>Details meals</h2>
                    <div class="my-3">
                        <img src="${element.strMealThumb}" class="w-100" alt="">
                    </div>
                    <h3>${element.strCategory}</h3>
                </div>
                <div class="col-7">
                    <div class="text-end"><button class="bg-black text-main-color border-0 theStyle"
                            id="btnCloseModel"><i class="fa-solid fa-xmark fs-2"></i></button></div>
                    <h2>Instructions</h2>
                    <p>
                        ${element.strInstructions}
                    </p>
                    <h3>Area : Japanese</h3>
                    <h3>Category : ${element.strCategory}</h3>
                    <h3>Recipes :</h3>
                    <div class="row my-3">
                        <div class="col-4">
                            <div class="border rounded-2 w-fit-content text-black bg-info-subtle p-2">${element.strMeasure1} ${element.strIngredient1}</div>
                        </div>
                    </div>
                    <div class="my-3">
                        <button class="me-2 btn btn-success"><a class="text-decoration-none text-white"
                                href="${element.strSource}">Source</a></button>
                        <button class="btn btn-danger"><a class="text-decoration-none text-white"
                                href="${element.strYoutube}">Youtube</a></button>
                    </div>
                </div>
            </div>
        </div>
                
                
                
                `
                
            }
            

        })
    
}

btnCloseModelCategory.addEventListener('click', () => {
    indexModel.classList.add('d-none');
    divBtnCloseModelCategory.classList.add('d-none')
    btnCloseModelCategory.classList.add('d-none')
})
