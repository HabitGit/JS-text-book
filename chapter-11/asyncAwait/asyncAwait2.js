class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    let fetchUrl = await fetch(url);
            if (fetchUrl.status == 200) {
                return fetchUrl.json();
            } else {
                throw new HttpError(fetchUrl.status);
            }
        }


async function demoGithubUser() {
    let user;

    while(true) {
        let name = prompt("Введите логин?", "iliakan");

        try {
            user = await loadJson(`https://api.github.com/users/${name}`);
            break;
        } catch(err) {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
            } else {
                throw err;
            }
            }
    }
}

demoGithubUser();