document.addEventListener("DOMContentLoaded", () => {
    const getJokeButton = document.getElementById("getJokeButton");
    const jokeElement = document.getElementById("joke");

    getJokeButton.addEventListener("click", () => {
        fetch("https://v2.jokeapi.dev/joke/Any?type=single")
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    jokeElement.textContent = "Failed to fetch joke. Please try again.";
                    console.log('Failed to fetch joke. Please try again.');
                } else {
                    jokeElement.textContent = data.joke;
                    console.log(data.joke);
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                jokeElement.textContent = "An error occurred while fetching the joke. Please try again later.";
            });
    });
});