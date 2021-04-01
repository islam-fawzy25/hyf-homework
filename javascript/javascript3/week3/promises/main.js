
//Getting into promises


const body = document.querySelector('body')


async function clas(userName) {
    let url = ` https://api.github.com/search/repositories?q=user:${userName}`
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
    })
}

const promiseAll = Promise.all([clas('Hani-far'), clas('Gohar33'), clas('Saidemm')])
promiseAll.then(data => console.log(data))
promiseAll.then((data) => {

    data.forEach((user) => {
        console.log(user.items[0].owner.login)
        const repoFullname = user.items[0].full_name
        const repoUrl = user.items[0].html_url
        const ownerName = user.items[0].owner.login

        const ul = document.createElement('ul')
        const li = document.createElement('li')
        const secondLi = document.createElement('li')

        body.appendChild(ul)
        body.appendChild(li)
        body.appendChild(secondLi)

        ul.innerText = ownerName
        li.innerText = repoFullname
        secondLi.innerText = repoUrl

    })
})
// render the fullname of the repo,
//url of the repo,
// and the owner of the repo.
