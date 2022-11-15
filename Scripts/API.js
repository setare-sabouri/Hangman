
fetch('https://random-word-api.herokuapp.com/word')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${data}}?key=3c7337f3-d36d-475e-8b55-314ff964d224`)
            .then(response => response.json())
            .then(data => console.log(data[0]));

    });

