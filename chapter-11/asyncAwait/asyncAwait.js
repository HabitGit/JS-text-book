async function loadJson(url) {
    let fetchUrl = await fetch(url);

        if (fetchUrl.status == 200) {
            return fetchUrl.json();
        }

        throw new Error(fetchUrl.status);
}

loadJson('no-such-user.json')
    .catch(console.log);