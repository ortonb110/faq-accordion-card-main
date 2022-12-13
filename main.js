// const accordionText = document.querySelector(".panel p");


// let acc = document.getElementsByClassName("accordion");


// const toggleAction =()=> {
//     accordionText.classList.toggle("active");
// }

// for (i = 0; i < acc.length; i++) {
// //   acc[i].addEventListener("click", function() {
// //     this.classList.toggle("active");
// //     var panel = this.nextElementSibling;
// //     if (panel.style.display === "block") {
// //       panel.style.display = "none";
// //     } else {
// //       panel.style.display = "block";
// //     }
// //   });
//     acc[i].addEventListener("click", toggleAction);

// }

const accordion = document.getElementsByClassName('container');


for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
    
  })
}