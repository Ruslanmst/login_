const signUpBtnLink = document.querySelector('.signUpBtn__link');
const signInBtnLink = document.querySelector('.signInBtn__link');
const container = document.querySelector('.container');


signUpBtnLink.addEventListener('click', () => {
    container.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () => {
    container.classList.toggle('active');
});