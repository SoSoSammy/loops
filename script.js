//? Changing the h1 with a for loop
const HEROIMG = document.querySelector(".hero-image");
let string = "My ";

for (let i=0; i<3; i++) {
	string = string + "Hero ";
}
document.querySelector(".hero-h1").innerHTML = string;

//? Add even numbers in a while loop
const scores = [
	320, 340, 287, 118, 336, 281, 269, 209, 155, 62, 236, 246, 206, 211, 266, 333, 349, 69, 93, 290,
	197, 108, 128, 310, 168, 121, 295, 163, 98, 295, 193, 206, 132, 302, 267, 306, 224, 57, 247,
	147, 303, 136, 97, 255, 299, 79, 197, 118, 302, 188, 186, 81, 131, 269, 300, 171, 132, 154, 224,
	348, 127, 121, 225, 93, 195, 340, 186, 159, 173, 275, 128, 256, 211, 47, 307, 107, 123, 48, 284,
	162, 214, 207, 135, 325, 251, 191, 114, 156, 249, 294, 230, 343, 168, 234, 165, 299, 289, 301,
];

let evenNumberSum = 0;
let i = 0;

while (i < scores.length) {
	if ((scores[i] % 2) === 0) {
		evenNumberSum = evenNumberSum + scores[i];
	}
	i++;
}
console.log("The result of adding every even number in the scores array is " + evenNumberSum);


//? Append bug.jpg img to all item elements using a do-while loop
const ITEMDIVS = document.querySelectorAll(".item");
let k = 0;

do {
	let imgElement;
	imgElement = document.createElement("img");
	imgElement.setAttribute("src", "bug.jpg");
	ITEMDIVS[k].appendChild(imgElement);
	k++;
} while (k < ITEMDIVS.length);

