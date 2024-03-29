/**
 * UI module
 * Module for displaying data in html
 * 
 * @version 1.0.0
 * @author Kevin Michael
 * @license MIT
 * 
**/

class UI {
  constructor() {
    this.profile = document.getElementById('profile');
    this.repos = document.getElementById('repos');
  }

  // Display profile in UI
  showProfile(user) {
    console.log(user);
    this.profile.innerHTML = `
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-128x128">
              <img src="${user.avatar_url}" alt="GitHub User Profile Picture">
            </figure>
            <a class="button is-primary is-fullwidth" style="margin-top:12px;" href="${user.html_url}" target="_blank">View Profile</a>
          </div>
          <div class="media-content">
            <p class="title is-4">${user.name}</p>
            <p class="subtitle is-6">${user.login}</p>
            <div class="tags">
              <span class="tag is-primary">Public Repos: ${user.public_repos}</span>
              <span class="tag is-link">Public Gists: ${user.public_gists}</span>
              <span class="tag is-info">Followers: ${user.followers}</span>
              <span class="tag is-success">Following: ${user.following}</span>
            </div>
            <ul>
              <li>Company: ${user.company}</li>
              <li>Blog: ${user.blog}</li>
              <li>Location: ${user.location}</li>
              <li>Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  // Display repos in UI
  showRepos(repos) {
    // Add box class to repos
    this.repos.className = 'box';
    // Create h4
    const h4 = document.createElement('h4');
    h4.className = 'title has-text-grey-light';
    h4.textContent = 'Latest Repos'
    this.repos.append(h4);
    let output = '';
    
    repos.forEach(repo => {
      output += `
        <div class="card">
          <div class="card-content">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            <div class="tags">
              <span class="tag is-primary">Stars: ${repo.stargazers_count}</span>
              <span class="tag is-link">Watchers: ${repo.watchers_count}</span>
              <span class="tag is-info">Folks: ${repo.folks_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    // Output repos
    this.repos.append(output);
  }

  // Show alert message
  showAlert(message, className) {
    // Clear any remaining alerts
    this.clearAlert();
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const parent = document.getElementById('searchBox');
    // Get sibling
    const sibling = parent.firstElementChild;
    // Insert alert
    sibling.after(div);

    // Timeout after 3 secs
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.notification');

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
}