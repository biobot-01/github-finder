// Init GitHub
const github = new GitHub;
console.log(github);
// Init UI
const ui = new UI;
console.log(ui);
// Search input
const username = document.getElementById('username');

// Search input event listener
username.addEventListener('keyup', (e) => {
  // Get input text
  const userInput = e.target.value;

  if (userInput !== '') {
    // console.log(userInput);
    // Make http call
    github.getUser(userInput)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show alert
          ui.showAlert('User not found', 'notification is-danger');
        } else {
          // Show profile
          ui.showProfile(data.profile);
        }
      });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});