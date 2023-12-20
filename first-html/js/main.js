document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  var message = document.getElementById('message')

  var firstname = document.getElementById('firstname').value
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value
  var phone = document.getElementById('phone').value
  var comments = document.getElementById('comments').value
  var country = document.getElementById('country').value

  var genders = document.querySelectorAll("input[name='gender']:checked")
  var gender = genders.length > 0 ? genders[0].value : ''

  var interests = document.querySelectorAll("input[name='interests']:checked")
  var interest = Array.from(interests).map(item => item.value)

  if (
      firstname.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      phone.trim() === '' ||
      comments.trim() === '' ||
      country.trim() === '' ||
      gender.trim() === '' ||
      interest.length === 0
  ) {
    message.textContent = 'Bu saheni bos saxlamayin'
    message.style.color = 'red'
    return;
  }

  if (!email.includes('@')) {
    message.textContent = 'Daxil edilen format duzgun deyildir'
    message.style.color = 'red'
    return;
  }
})