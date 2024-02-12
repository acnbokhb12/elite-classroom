const volBtns = document.querySelectorAll('.js-buy-ticket') 
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalBesideContainer = document.querySelector('.js-modal-beside-container')
const modalClose = document.querySelector('.js-modal-close') //button close

function showVolTickets (){
    modal.classList.add('open')
}
function hideVolTickets(){
    modal.classList.remove('open')
    

}

for ( const volBtn of volBtns) {
    volBtn.addEventListener('click', showVolTickets)
}

modalClose.addEventListener('click', hideVolTickets )

modal.addEventListener('click',  hideVolTickets)

//tat noi bot
modalContainer.addEventListener('click', function(event){
   event.stopPropagation()
} )

modalBesideContainer.addEventListener('click', function(event){
   event.stopPropagation()
})
