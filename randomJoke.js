const jokebtn = document.getElementById("jokebtn");
const jokes = document.getElementById("jokes");
jokebtn.onclick = () => {
  fetch("https://api.api-ninjas.com/v1/jokes", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": "jUNqRQrqZBfvnjcvxy2GYw==8Rl6dN2dq6mkDZqA",
    },
  })
    .then((response) => response.json())
    .then(json =>{
       let result = json[0].joke;
       jokes.innerHTML = result; 
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
