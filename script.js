// Harry Potter API example

// fetch('http://hp-api.herokuapp.com/api/characters')
// .then(res => res.json())
// .then(characterData => {  //characterData is just an array of objects. Each object represents a character.
//     // now since we have our array of information. We use .map in order to loop over it
//     characterData.map(character => {
//         console.log(character.name);
//         const ul = document.getElementById('names');
//         const li = document.createElement('li');
//         li.innerHTML =  `
//         <div class="character">
//             <h3>${character.name} | ${character.species} | ${character.gender}</h3>
//             <p>House: ${character.house}</p>
//         </div>`
//         ul.appendChild(li);
//     });
// })
// .catch(e => console.error(e.message))

// Joke API call
// Two buttons
//   random
//   jod

//some kind of code to generate random jokes

// create functionality for on click

// joke box needs to disappear
//   toast box


// generate a random string
fetch('https://api.jokes.one/jod')
.then(res => res.json())
.then(jokeData => {
    console.log(jokeData);
    const jokeOfDay = jokeData.contents.jokes[0].joke.text;
    console.log(jokeOfDay);
    const jodButton = document.getElementById('JOD');
    jodButton.addEventListener('click', () => {
        const jodText = document.getElementById('toast');
        jodText.innerHTML = jokeOfDay;
        if (jodText.style.display === "none") {
            jodText.className = "show";
            jodText.style.display = "block";
        }
        else {
            jodText.className = "";
            jodText.style.display = "none";
        }
        });
        
    });


const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
const rjodButton = document.getElementById('RJOD');
rjodButton.addEventListener('click', () => {
fetch(url)
.then(res => res.json())
.then(randomJokeData => {
    console.log(randomJokeData);
    const randomJoke = randomJokeData.joke;
       const rjodText = document.getElementById('random-toast');
       rjodText.innerHTML = randomJoke;
       if (rjodText.style.display === "none") {
        rjodText.className = "show";
        rjodText.style.display = "block";
        }
        else {
        rjodText.className = "";
        rjodText.style.display = "none";
        }
    });
 })


