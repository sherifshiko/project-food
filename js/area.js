//area variables
var areaContent=document.getElementById("areaContent");

//area fetch

    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list/key=1")
    .then((response) => {        
        return response.json()
    })
    .then((data) => {
        var places = data.meals
        
        var htmlCollection = ``
        for (var place of places) {
            htmlCollection += `

            <div class="col-md-4">
                <div class="text-main-color theStyle text-center">
                    <a href="./areaCards.html?c=${place.strArea}" class="text-main-color theStyle text-decoration-none">
                        <i class="fa-solid fa-house-laptop area-icon"></i>
                        <h2 class="">${place.strArea}</h2>
                    </a>
                    
                </div>
            </div>

        `
            areaContent.innerHTML = htmlCollection
        }
    })

