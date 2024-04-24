// for the dark mode button
let themeButton = document.getElementById("theme-button")

const toggleDarkMode = () => {

  document.body.classList.toggle("dark-mode");
}

themeButton.addEventListener("click", toggleDarkMode);



// for the form
let fullname = document.getElementById("fullname");
let hometown = document.getElementById("hometown");
let email = document.getElementById("email");
let form = document.getElementById("form");

let fullname_error = document.getElementById("fullname_error");
let hometown_error = document.getElementById("hometown_error");
let email_error = document.getElementById("email_error");
let form_error = document.getElementById("form_error")

let form_data = [hometown, fullname, email]



form.addEventListener('submit', (e) => {

  var email_check = /^(?!\.)[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  let containsErrors = false;

  //go through each form field
  for (let i = 0; i < form_data.length; i++) {
    error = ""
    //check if the current element is missing data
    if (form_data[i].value == null || form_data[i].value == "") {

      e.preventDefault();
      //its empty, throw an error
      containsErrors = true;
      error = document.getElementById(form_data[i].id + "_error")
        .innerHTML = "Please enter your " + form_data[i].id + "."
    }
    //if it's not emplty 
    else {
      containsErrors = false;
      form_data[i].classList.remove("_error")
      error = document.getElementById(form_data[i].id + "_error")
        .innerHTML = ""
      toggleModal()
      e.preventDefault();
    }
  }

  if (containsErrors == false) {
    addSignature()
    form_data[i].value = "";
    e.preventDefault();
    toggleModal();
    clearForm();
  }

})



//modal functionalities
function toggleModal(person) {
  var modal = document.getElementById("thanks-modal");
  var modalContent = document.getElementById(thanks-content-modal); modal.style.display = "flex";
  modal.textContent = "Thank you for your support" + " " + fullname.value + '!';
  setTimeout(() => {
    modal.style.display = "flex";
  }, 4000);
}

function clearForm() {
  document.getElementById("form").reset();
}




const closeBtn = document.getElementById('closeModal')





//website animations
let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuraion: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease',
}
let revealableContainers = document.querySelectorAll('.revealable');
let revealableContainersytvid = document.querySelectorAll('.revealableytvid');

const reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active'); // Add the active class
    } else {
      revealableContainers[i].classList.remove('active'); // Remove the active class
    }
  }
};
window.addEventListener('scroll', reveal);
// Define the reduceMotion function
const reduceMotion = () => {
  // Update animation object with new values
  animation.transitionDuration = '0s'; // Set transition duration to 0s to remove animation
  animation.transitionDelay = '0s'; // Set transition delay to 0s to remove animation delay

  // Loop through revealableContainers and update animation properties
  for (let i = 0; i < revealableContainers.length; i++) {
    revealableContainers[i].style.transitionProperty = animation.transitionProperty;
    revealableContainers[i].style.transitionDuration = animation.transitionDuration;
    revealableContainers[i].style.transitionDelay = animation.transitionDelay;
    revealableContainers[i].style.transitionTimingFunction = animation.transitionTimingFunction;
  }
};



const revealytvid = () => {
  for (let i = 0; i < revealableContainersytvid.length; i++) {
    let windowHeightytvid = window.innerHeight;
    let topOfRevealableContainerytvid = revealableContainersytvid[i].getBoundingClientRect().top;
    if (topOfRevealableContainerytvid < windowHeightytvid - animation.revealDistance) {
      revealableContainersytvid[i].classList.add('active'); // Add the active class
    } else {
      revealableContainersytvid[i].classList.remove('active'); // Remove the active class
    }
  }
};


window.addEventListener('scroll', revealytvid);
// Define the reduceMotion function
const reduceMotionytvid = () => {
  // Update animation object with new values
  animation.transitionDuration = '0s'; // Set transition duration to 0s to remove animation
  animation.transitionDelay = '0s'; // Set transition delay to 0s to remove animation delay

  // Loop through revealableContainers and update animation properties
  for (let i = 0; i < revealableContainersytvid.length; i++) {
    revealableContainersytvid[i].style.transitionProperty = animation.transitionProperty;
    revealableContainersytvid[i].style.transitionDuration = animation.transitionDuration;
    revealableContainersytvid[i].style.transitionDelay = animation.transitionDelay;
    revealableContainersytvid[i].style.transitionTimingFunction = animation.transitionTimingFunction;
  }
};



// Now, initialize the button and add the event listener
const reduceMotionButton = document.getElementById('reduce-motion-button');
reduceMotionButton.addEventListener("click", reduceMotion);