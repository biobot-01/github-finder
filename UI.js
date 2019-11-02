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
  }

  showProfile(user) {
    console.log(user);
    this.profile.innerHTML = `
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-128x128">
              <img src="${user.avatar_url}" alt="Placeholder image">
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
}