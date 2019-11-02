/**
 * GitHub module
 * Module for making requests to GitHub API
 * 
 * @version 1.0.0
 * @author Kevin Michael
 * @license MIT
 * 
 * // https://api.github.com/users/${username}
 * // https://api.github.com/repos/${username}
**/

class GitHub {
  constructor() {
    this.clientId = this.getClientId();
    this.clientSecret = this.getClientSecret();
    this.reposCount = 5;
    this.reposSort = 'created: asc';
  }

  async getClientId() {
    const response = await fetch('github_secrets.json');
    const data = await response.json();
    const clientId = data.web.client_id;
    return clientId;
  }

  async getClientSecret() {
    const response = await fetch('github_secrets.json');
    const data = await response.json();
    const clientSecret = data.web.client_secret;
    return clientSecret;
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}