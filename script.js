const students = [
	{
		"name" : "Adi Dzocaj",
		"image": "assets/images/students/adi-dzocaj.jpg",
	},
	{
		"name" : "Alexander Bergquist",
		"image": "assets/images/students/alexander-bergquist.jpg",
	},
	{
		"name" : "Alexander Kocman",
		"image": "assets/images/students/alexander-kocman.jpg",
	},
	{
		"name" : "Benjamin Benson",
		"image": "assets/images/students/benjamin-benson.jpg",
	},
	{
		"name" : "Benjamin Tsubarah",
		"image": "assets/images/students/benjamin-tsubarah.jpg",
	},
	{
		"name" : "Calle Nilsson",
		"image": "assets/images/students/calle-nilsson.jpg",
	},
	{
		"name" : "Chikage Takahashi Molander",
		"image": "assets/images/students/chikage-takahashi-molander.jpg",
	},
	{
		"name" : "Daniel Be",
		"image": "assets/images/students/daniel-be.jpg",
	},
	{
		"name" : "Daniel Carlsson",
		"image": "assets/images/students/daniel-carlsson.jpg",
	},
	{
		"name" : "Elin Ahlgren",
		"image": "assets/images/students/elin-ahlgren.jpg",
	},
	{
		"name" : "Emma Käck",
		"image": "assets/images/students/emma-kack.jpg",
	},
	{
		"name" : "Eric Ståhl",
		"image": "assets/images/students/eric-stahl.jpg",
	},
	{
		"name" : "Frans Gustavson Påsse",
		"image": "assets/images/students/frans-gustavson-passe.jpg",
	},
	{
		"name" : "Glafira Veretennikova",
		"image": "assets/images/students/glafira-veretennikova.jpg",
	},
	{
		"name" : "Gustaf Grönlund",
		"image": "assets/images/students/gustaf-gronlund.jpg",
	},
	{
		"name" : "Hanna Håkanson",
		"image": "assets/images/students/hanna-hakanson.jpg",
	},
	{
		"name" : "Heidi Sjöberg",
		"image": "assets/images/students/heidi-sjoberg.jpg",
	},
	{
		"name" : "Hugo Carzborn",
		"image": "assets/images/students/hugo-carzborn.jpg",
	},
	{
		"name" : "Jesper Kling",
		"image": "assets/images/students/jesper-kling.jpg",
	},
	{
		"name" : "Johan Ranestam",
		"image": "assets/images/students/johan-ranestam.jpg",
	},
	{
		"name" : "Johanna Bäckström",
		"image": "assets/images/students/johanna-backstrom.jpg",
	},
	{
		"name" : "Johanna Jönsson",
		"image": "assets/images/students/johanna-jonsson.jpg",
	},
	{
		"name" : "Jona Torsson",
		"image": "assets/images/students/jona-torsson.jpg",
	},
	{
		"name" : "Josefine Ahlstedt",
		"image": "assets/images/students/josefine-ahlstedt.jpg",
	},
	{
		"name" : "Julia Jespersdotter Högman",
		"image": "assets/images/students/julia-jespersdotter-hogman.jpg",
	},
	{
		"name" : "Julia Nemell",
		"image": "assets/images/students/julia-nemell.jpg",
	},
	{
		"name" : "Linus Lindberg",
		"image": "assets/images/students/linus-lindberg.jpg",
	},
	{
		"name" : "Malin Olsson",
		"image": "assets/images/students/malin-olsson.jpg",
	},
	{
		"name" : "Maria Haara-Lundhammar",
		"image": "assets/images/students/maria-haara-lundhammar.jpg",
	},
	{
		"name" : "Maria Lövgren",
		"image": "assets/images/students/maria-lovgren.jpg",
	},
	{
		"name" : "Nikola Dimitrijoski",
		"image": "assets/images/students/nikola-dimitrijoski.jpg",
	},
	{
		"name" : "Paulina Kiendys",
		"image": "assets/images/students/paulina-kiendys.jpg",
	},
	{
		"name" : "Raymond Lam",
		"image": "assets/images/students/raymond-lam.jpg",
	},
	{
		"name" : "Robin Karlsson",
		"image": "assets/images/students/robin-karlsson.jpg",
	},
	{
		"name" : "Sara Almqvist",
		"image": "assets/images/students/sara-almqvist.jpg",
	},
	{
		"name" : "Tim Nilsson",
		"image": "assets/images/students/tim-nilsson.jpg",
	},
	{
		"name" : "Tirapat Sukjit",
		"image": "assets/images/students/tirapat-sukjit.jpg",
	},
	{
		"name" : "Tobias Silfverberg",
		"image": "assets/images/students/tobias-silfverberg.jpg",
	},
	{
		"name" : "Wiktoria Dobrzewinska",
		"image": "assets/images/students/wiktoria-dobrzewinska.jpg",
	},
];

// DOM
const quizForm = document.querySelector(".quiz-container");
const studentImgEl = document.querySelector("#studentImg");
const btnContainer = document.querySelector(".btn-container");
const attemptsDisplay = document.querySelector(".attempts-display");
const resultDisplay = document.querySelector(".result-container");
const startOverBtn = document.querySelector("#startOver");

// shuffle function for arrays
const shuffleStudents = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
};

// initialize quiz
const randomStudent = () => {
	//shuffle array
	shuffleStudents(students);

	// get 4 random students from array
	const studentsToGuess = students.slice(0, 4);

	// choose correct student from those 4
	let correctStudent = students[3];
	let correctName = correctStudent.name;
	studentImgEl.src = correctStudent.image;

	// shuffle names in array
	shuffleStudents(studentsToGuess);

	btnContainer.innerHTML = "";

	const randomisedNames = studentsToGuess.map((students) => students.name);
	console.log(randomisedNames);

	// add names to buttons
	randomisedNames.forEach((student) => {
		if (student == correctName) {
			btnContainer.innerHTML += `
			<button type="button" id="correctAnswer" class="btn btn-primary m-2 w-50">${student}</button>`;
		} else {
			btnContainer.innerHTML += `<button type="button" id="wrongAnswer" class="btn btn-primary m-2 w-50">${student}</button>`;
		}
		console.log(student);
	});
};

randomStudent(students);

// score and guesses
let guesses = 0;
let score = 0;

// counting score and guesses
quizForm.addEventListener("click", (e) => {
	if (e.target.tagName === "BUTTON") {
		guesses++;

		if (e.target.id === "correctAnswer") {
			score++;
			// show green button
			e.target.classList.replace("btn-primary", "btn-success");
		} else {
			// show red button
			e.target.classList.replace("btn-primary", "btn-danger");
		}
		checkAnswer();
		showAttempts();
	}
});

const checkAnswer = () => {
	setTimeout(() => {
		if (guesses < 10) {
			randomStudent();
		} else {
			showResult();
		}
	}, 1000);
};

// display attempts
const showAttempts = () => {
	attemptsDisplay.textContent = `Attempts: ${guesses} / 10`;
};

// display score after 10 questions 
const showResult = () => {
	quizForm.classList.add("d-none");
	resultDisplay.classList.remove("d-none");
	resultDisplay.innerHTML += `<h3> You got ${score} out of ${guesses}`;
	startOverBtn.classList.remove("d-none");
};

// start new game
startOverBtn.addEventListener("click", (e) => {
	quizForm.classList.remove("d-none");
	startOverBtn.classList.add("d-none");
	resultDisplay.classList.add("d-none");
	guesses = 0;
	score = 0;
	randomStudent(students);
	resultDisplay.innerHTML = "";
	attemptsDisplay.textContent = "Round: 0 / 10";
});