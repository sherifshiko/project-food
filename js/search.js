
var searchName = document.getElementById("searchName");
var searchChar = document.getElementById("searchChar");
var searchContent = document.getElementById("searchContent");
//model variables
var modelSearch = document.getElementById("modelSearch");
var btnCloseModel = document.getElementById("btnCloseModel");
var divBtnCloseModel=document.getElementById("divBtnCloseModel");






searchName.addEventListener('input', () => {
    
    var searchNameValue = searchName.value;
    if (searchNameValue !== '') {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchNameValue}`)
            .then((response) => response.json())
            .then((data) => {

                var SearchInformation = data.meals
                 
                


                var htmlCollection = ``
                for (var information of SearchInformation) {
                    htmlCollection += `

            <div class="col-4">
                 <div class="position-relative overflow-hidden border-0 rounded-3 main-card">
                     <a href="#">
                    <img src="${information.strMealThumb}" class="border-0 rounded-3 w-100"  alt="">
               </a> 
                <a href="#" onclick="openModel(${information.idMeal})" class="text-decoration-none text-black">
                <div class="position-absolute card-search d-flex align-items-center justify-content-center border-0 rounded-3">
                    <h2>${information.strMeal}</h2>
                </div>
                </a>
                 </div>
             </div>

        `
                    searchContent.innerHTML = htmlCollection
                }




            });
    }
});


searchChar.addEventListener('input', () => {
    var searchCharValue = searchChar.value;
    if (searchCharValue !== '') {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchCharValue}`)
            .then((response) => response.json())
            .then((data) => {

                var SearchInformation = data.meals
                console.log(SearchInformation);


                var htmlCollection = ``
                for (var information of SearchInformation) {
                    htmlCollection += `

            <div class="col-4">
                 <div class="position-relative overflow-hidden border-0 rounded-3 main-card">
                     <a href="#">
                    <img src="${information.strMealThumb}" class="border-0 rounded-3 w-100"  alt="">
               </a>

                 <a href="#" onclick="openModel(${information.idMeal})" class="text-decoration-none text-black">
                <div class="position-absolute card-search d-flex align-items-center justify-content-center border-0 rounded-3">
                    <h2>${information.strMeal}</h2>
                </div>
                </a>
                 </div>
             </div>

        `
                    searchContent.innerHTML = htmlCollection
                }




            });
    }
});


//the model




function openModel(id) {
    modelSearch.classList.remove('d-none');
    divBtnCloseModel.classList.remove('d-none')

    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json())
    .then((data)=>{
        var arryData=data.meals
        for (var modelData of arryData) {
        
        modelSearch.innerHTML=`
        <div class="content-model bg-black  py-5 px-3 theStyle text-main-color">
            <div class="row">
                <div class="col-5">
                    <h2>Details meals</h2>
                    <div class="my-3">
                        <img src="${modelData.strMealThumb}" class="w-100" alt="">
                    </div>
                    <h3>${modelData.strMeal}</h3>
                </div>
                <div class="col-7">
                    
                    <h2>Instructions</h2>
                    <p>
                      ${modelData.strInstructions}
                    </p>
                    <h3>Area : ${modelData.strArea}</h3>
                    <h3>Category : ${modelData.strCategory}</h3>
                    <h3>Recipes :</h3>
                    <div class="row my-3">
                    
                        <div class="col-3">
                            <div class="border rounded-2 w-fit-content text-black bg-info-subtle p-2">${modelData.strMeasure1} ${modelData.strIngredient1}</div>
                        </div>

                        <div class="col-3">
                            <div class="border rounded-2 w-fit-content text-black bg-info-subtle p-2">${modelData.strMeasure2} ${modelData.strIngredient2}</div>
                        </div>
                    </div>
                    <div class="my-3">
                        <button class="me-2 btn btn-success"><a class="text-decoration-none text-white" href="${modelData.strSource}">Source</a></button>
                        <button class="btn btn-danger"><a class="text-decoration-none text-white" href="${modelData.strYoutube}">Youtube</a></button>
                    </div>
                </div>
            </div>
        </div>
        
        
        
        `
        }
        
    })
    
    
}


btnCloseModel.addEventListener('click', () => {
    modelSearch.classList.add('d-none');
    divBtnCloseModel.classList.add('d-none')

})