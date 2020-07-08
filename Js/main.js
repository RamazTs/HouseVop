// Video Controls
const myVideo = document.getElementById("testVideo");
const btn = document.querySelector('.playButton')

btn.addEventListener('click', () => {
  myVideo.play();
  btn.style.display = "none"
})

myVideo.addEventListener('click', () => {
  if(myVideo.play()){
    myVideo.pause();
    btn.style.display = "block"
  }
})


// Maps
function initMap() {
  const kiev = {lat: 50.450100, lng: 30.523399};

  const map = new google.maps.Map(
    document.getElementById('googleMap'), {zoom: 8, center: kiev});

  const marker = new google.maps.Marker({position: kiev, map: map});
}

// navigation
window.addEventListener('scroll', () =>{
  stickyNav()
})
const nav = document.querySelector("nav");
function stickyNav() {
  nav.classList.toggle('fixed', window.pageYOffset > 0)
}

// small-nav

const hamburger = document.querySelector('.hamburger')
const exit = document.querySelector('.exit')
const navLinks = document.querySelector('.small-nav-links')

hamburger.addEventListener('click', () =>{
  navLinks.classList.add('open');
})

exit.addEventListener('click', () =>{
  navLinks.classList.remove('open');
})
