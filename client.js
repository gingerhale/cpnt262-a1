
const searchList = function () {
  const names = document.querySelector('.people');
  const answer = document.querySelector('.answer');

  const searchTerm = prompt('Are you invited? Enter your name to find out');

  const result = names.innerHTML.includes(searchTerm);

  if (result) {
    answer.innerHTML = "Yes, don't forget Haley's Gift!"
  } else {
    answer.innerHTML = "Nope! Invite must've been lost in the mail"
  }

  names.innerHTML = names.innerHTML.replace(searchTerm, `<strong>${searchTerm}</strong>`);

}

const button = document.querySelector('button');

button.addEventListener('click', searchList);