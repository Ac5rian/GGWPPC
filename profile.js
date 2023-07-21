// script.js
// JavaScript code to toggle between login and register forms
const loginButton = document.getElementById('login-button');
const registerButton = document.getElementById('register-button');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

loginButton.addEventListener('click', function() {
  loginButton.classList.add('active');
  registerButton.classList.remove('active');
  loginForm.style.display = 'block';
  registerForm.style.display = 'none';
});

registerButton.addEventListener('click', function() {
  registerButton.classList.add('active');
  loginButton.classList.remove('active');
  registerForm.style.display = 'block';
  loginForm.style.display = 'none';
});