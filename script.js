const header = document.querySelector('nav');

window.addEventListener('scroll', () => {
  this.scrollY > 700 ? header.classList.add('solid-navbar'): header.classList.remove('solid-navbar');
})

const data = document.getElementsByClassName("effect")

if(window. innerWidth < 767){
  for(var element in data){
      data[element].addEventListener('click', () => {
          document.getElementById("ul").style.transform = "translate("+ -150 +"%)";
      })
  }
}