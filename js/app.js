//  variables btn close and open in nav bar 
var closeBtn = document.getElementById("closeBtn");
var openListBtn = document.getElementById("openListBtn");
var closeListtBtn = document.getElementById("closeListtBtn");


// event btn close and open in nav bar

$('.navbar').animate({ left: '-200px' });
closeListtBtn.classList.add('d-none')
openListBtn.classList.remove('d-none')



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

