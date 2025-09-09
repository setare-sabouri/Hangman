//two api's used . first return a random word & the second one the meaning of it
export async function getWord() {
    // let res = await fetch('https://random-word-api.herokuapp.com/word');
    let res = await fetch('https://random-word-api.vercel.app/api?words=5');
    const RndmWord = await res.json();
    console.log(RndmWord[0])
    
    //finding its diffinition
    res = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${RndmWord[0]}}?key=3c7337f3-d36d-475e-8b55-314ff964d224`);
    const data = await res.json();
    let WordData = {
        word: RndmWord,
        meaning: data
    }
    return (WordData);
}
