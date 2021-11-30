// // example one
// const playerOneName = "tim"
// const playerTwoName = "jenn"
// const playerOneMarker = "X"
// const playerTwoMarker = "O"

// // example two
// const playerOne = {
// 	name: "tim",
// 	marker: "X"
// }

// const playerTwo = {
// 	name: "jenn",
// 	marker: "O"
// }

// // object constructor
// function Player(name, marker) {
// 	this.name = name
// 	this.marker = marker
// 	this.sayName = function() {
// 		console.log(name)
// 	}
// }

// // call constructor
// const player = new Player('steve', 'X')
// console.log(player.name) // 'steve'

function book(title, author, pages, read) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
	this.info = function() {
		return(title + " by " + author + ", " + pages + " pages, " + read)
	}
}

// create book
const book1 = new book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet');

console.log(book1.info());