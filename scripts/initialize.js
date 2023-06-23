const login = document.getElementById('login'),
      form = document.getElementById('form'),
      submit = document.getElementById('submit'),
      app = document.getElementById('app'),
      counter = document.getElementById('counter'),
      ip = document.getElementById('ip'),
      result = document.getElementById('result'),
      interval = 300;

submit.addEventListener('click', createFormData());

showLogin();