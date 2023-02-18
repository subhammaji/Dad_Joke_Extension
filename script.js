fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');

        jokeElement.innerHTML = jokeText;
    })


// fetch('https://icanhazdadjoke.com/jokeElement', {
//   headers: {
//     'Accept': 'application/json'
//   }
// })
// .then(response => response.json())
// .then(data => console.log(data.joke))
// .catch(error => console.error(error));