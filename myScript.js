// alert("This is an illegal website. Use it at your own risk")
const input = document.getElementById('username');
const submit = document.querySelector('input[type="submit"]');
const insert = document.querySelector('.insert');

let username = "";
submit.addEventListener('click', function(){
    username = input.value;
    getAccount(username);
})

async function getAccount(username) {
    let api = "https://api.github.com/users/"
    api += username;
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    insert.innerHTML = 
    `
    <div class="card">
        <div>
            <img src="${data.avatar_url}" alt="">
        </div>
        <div class="user-info">
            <h2>${data.name}</h2>
            <p>${data.bio}</p>

            <ul class="info">
                <li>${data.followers}<strong>Followers</strong></li>
                <li>${data.following}<strong>Following</strong></li>
                <li>${data.public_repos}<strong>Repos</strong></li>
            </ul>

            <div class="repos">
                <a href="#" class="repo" target="_blank">Repo 1</a>
                <a href="#" class="repo" target="_blank">Repo 2</a>
                <a href="#" class="repo" target="_blank">Repo 3</a>
            </div>
        </div>
    </div>
    `
  }

