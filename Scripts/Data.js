export let setScore = (user, score) => {
    localStorage.setItem(`${user}`, JSON.stringify(score));
}

export let getScore = (user) => {
    return JSON.parse(localStorage.getItem(user)) || [];
}

