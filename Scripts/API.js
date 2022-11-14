
fetch('https://random-word-api.herokuapp.com/word')
    .then(response => response.json())
    .then(response => {
        console.log(response[0]);
        fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${response[0]}?key=3c7337f3-d36d-475e-8b55-314ff964d224`)
            .then(response => response.json())
            .then(response => console.log(response[0]));

    });

