const myButton = document.querySelector('#my-button')

const testURL = 'https://jsonplaceholder.typicode.com/posts'  // change this URL to whatever endpoint you want to test

myButton.addEventListener('click', () => {
  fetch(testURL)
    .then(response => response.json())
    .then(json => console.log(json))
})