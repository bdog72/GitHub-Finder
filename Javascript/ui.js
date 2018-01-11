class UI {
    constructor() {
        this.profile = document.getElementById('profile')
    }
    showProfile(user) {
        this.profile.innerHTML = `
            <div class='card card-body mb-3'>
                <div class='row'>
                    <div class='col-md-3'>
                        <img class='img-fluid mb-2' src='${user.avatar_url}'>
                        <a href='${
                            user.html_url
                        }' target='_blank' class='btn btn-primary btn-block mb-4'>View Profile</a>
                    </div>
                    <div class='col-md-9'>
                        <span class='badge badge-primary m-1'>Public Repos: ${
                            user.public_repos
                        }</span>
                        <span class='badge badge-secondary m-1'>Public Gists: ${
                            user.public_gists
                        }</span>
                        <span class='badge badge-success m-1'>Followers: ${
                            user.followers
                        }</span>
                        <span class='badge badge-primary m-1'>Following: ${
                            user.following
                        }</span>
                        <br><br>
                        <ul class='list-group'>
                            <li class='list-group-item'>Company: ${
                                user.company
                            }</li>
                            <li class='list-group-item'>Website/blog: ${
                                user.blog
                            }</li>
                            <li class='list-group-item'>Location: ${
                                user.location
                            }</li>
                            <li class='list-group-item'>Member Since:: ${
                                user.created_at
                            }</li>                            
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class='page-heading mb-3'>Latest Repos</h3>
            <div id='repos'></div>
`
    }

    // Show alert
    showAlert(message, className) {
        // Clear any remaining alerts
        this.clearAlert()
        // Create a div
        const div = document.createElement('div')
        // Add classes
        div.className = className
        // Add text
        div.appendChild(document.createTextNode(message))
        // Get Parent
        const container = document.querySelector('.searchContainer')
        // Get Search box
        const search = document.querySelector('.search')
        // Insert alert
        container.insertBefore(div, search)
        // Timeout after 2 sec
        setTimeout(() => {
            this.clearAlert()
        }, 3000)
    }

    // Clear Alert
    clearAlert() {
        const currentAlert = document.querySelector('.alert')
        if (currentAlert) {
            currentAlert.remove()
        }
    }

    // Clear Profile
    clearProfile() {
        this.profile.innerHTML = ''
    }
}
