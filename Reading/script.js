// Get DOM elements
const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const addRowButton = document.getElementById('add-row');
const bookTable = document.getElementById('book-table');
const bookInput = document.getElementById('book-input'); // Input field for book title
const suggestionsDiv = document.getElementById('suggestions'); // Div for book title suggestions

// Timer variables
let timerInterval;
let startTime = 0;
let isRunning = false;

// Event listeners for buttons
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
addRowButton.addEventListener('click', addRow);

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - (startTime || 0);
        timerInterval = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timerInterval);

        // Update last column in the table with the time read
        const currentTime = Date.now();
        const elapsedTime = new Date(currentTime - startTime);
        const hours = String(elapsedTime.getUTCHours()).padStart(2, '0');
        const minutes = String(elapsedTime.getUTCMinutes()).padStart(2, '0');
        const seconds = String(elapsedTime.getUTCSeconds()).padStart(2, '0');

        const selectedRow = bookTable.insertRow(bookTable.rows.length);
        const titleCell = selectedRow.insertCell(0);
        const authorCell = selectedRow.insertCell(1);
        const lastPageCell = selectedRow.insertCell(2);
        const timeReadCell = selectedRow.insertCell(3);
        //The book title is declared to be searched
        titleCell.innerHTML = `<input type="text" value="${bookInput.value}" disabled>`;
      authorCell.innerHTML = '<input type="text" value="${authorInput.value}"disabled>'; ///First attempt to automate author 
      //Author needs to be declared as a search item as well 
        authorCell.innerHTML = `<input type="text" placeholder="Enter author">`;
        lastPageCell.innerHTML = `<input type="number" placeholder="Last page">`;
        timeReadCell.textContent = `${hours}:${minutes}:${seconds}`;

        // Clear input and suggestions and reset variables
        bookInput.value = '';
       authorInput.value = '';   ////
        suggestionsDiv.innerHTML = '';
    }
}

function resetTimer() {
    isRunning = false;
    clearInterval(timerInterval);
    startTime = 0;
    updateTimer();
}

function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = new Date(currentTime - startTime);
    timerElement.textContent = elapsedTime.toISOString().substr(11, 8);
}

const apiKey = 'AIzaSyBtuVlpSHyGOIHK6Q-2ZiXGy6Yvd9TequY'; // Replace 'YOUR_API_KEY' with your actual API key

function addRow() {
    const newRow = bookTable.insertRow();
    const titleCell = newRow.insertCell(0);
    const authorCell = newRow.insertCell(1);
    const lastPageCell = newRow.insertCell(2);
    const timeReadCell = newRow.insertCell(3);

    titleCell.innerHTML = `<input id="book-title-${bookTable.rows.length}" type="text" placeholder="Enter title">`;
  //First attemp to automate author 
    authorCell.innerHTML = '<input id="author-${bookTable.rows.length}" type="text" placeholder="Enter author">';
    lastPageCell.innerHTML = '<input type="number" placeholder="Last page">';
    timeReadCell.textContent = '0:00:00';

    // Add event listener to input for book title suggestions
    const bookTitleInput = document.getElementById(`book-title-${bookTable.rows.length}`);
    bookTitleInput.addEventListener('input', function () {
        const searchQuery = bookTitleInput.value;
        const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${apiKey}`;

        fetch(apiUrl).then((response) => {
                if (!response.ok) {
            throw new Error(`Network response was not ok     
                 status:${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                const books = data.items || [];

                // Clear previous suggestions
                suggestionsDiv.innerHTML = '';

                // Create and append a list of suggestions
                const ul = document.createElement('ul');
                books.forEach((book) => {
                    const li = document.createElement('li');
                    li.textContent = book.volumeInfo.title;
                    li.addEventListener('click', function () {
                        // Set the selected book title in the input
                        bookTitleInput.value = book.volumeInfo.title;
                        suggestionsDiv.innerHTML = '';
                    });
                    ul.appendChild(li);
                });
                suggestionsDiv.appendChild(ul);
            })
            .catch((error) => {
                console.error('Error fetching book suggestions:', error);
            });
    });
}
