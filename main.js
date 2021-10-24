const linksSocialMedia = {
  github: 'GabrielSnows',
  youtube: 'channel/UCC-5qjc6_c7QV9mCxOFCvoA',
  facebook: 'GabrielStreets',
  instagram: 'gabriel_snoows',
  twitter: 'SnowsGabriel'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGithub.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
