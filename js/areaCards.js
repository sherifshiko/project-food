
var areaCardsContent = document.getElementById("areaCardsContent");
var country = window.location.search.slice(3, 12)

fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
    .then((response) => response.json())
    .then((data) => {
        var countriesData = data.meals
        var htmlCollection = ``;
        for (var element of countriesData) {
            htmlCollection += `
            
                        <div class="col-md-4">
                <div class="position-relative overflow-hidden border-0 rounded-3 main-card">
                    <a href="#">
                        <img src="${element.strMealThumb}" class="border-0 rounded-3 w-100" alt="">
                    </a>
                    <a href="#" onclick="openModel(${element.idMeal})" class="text-dark">
                        <div
                            class="position-absolute card-home d-flex align-items-center justify-content-center border-0 rounded-3">
                            <h2>${element.strMeal}</h2>
                        </div>
                    </a>
                </div>
            </div>
            
            
            `
            areaCardsContent.innerHTML=htmlCollection
        }

    })

    //   

    function openModel(id) {
        
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response) => response.json())
        .then((data)=>{
            console.log(data.meals);
            
        })

    }