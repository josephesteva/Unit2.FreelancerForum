const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

const body = document.body;
const title = document.createElement(`h1`);
const averageMessage = document.createElement(`p`);
const subHeading = document.createElement(`h2`);
const container = document.createElement(`section`);
const nameBox = document.createElement(`section`);
const occupationBox = document.createElement(`section`);
const priceBox = document.createElement(`section`);
const nameHeading = document.createElement(`h3`);
const occupationHeading = document.createElement(`h3`);
const priceHeading = document.createElement(`h3`);
const nameList = document.createElement(`section`);
const occupationList = document.createElement(`section`);
const priceList = document.createElement(`section`);

title.textContent = `Freelancer Forum`;
subHeading.textContent = `Available Freelancers`;
nameHeading.textContent = `Name`;
occupationHeading.textContent = `Occupation`;
priceHeading.textContent = `Starting Price`;

body.appendChild(title);
body.appendChild(averageMessage);
body.appendChild(subHeading);
body.appendChild(container);
container.appendChild(nameBox)
container.appendChild(occupationBox)
container.appendChild(priceBox)
nameBox.appendChild(nameHeading)
nameBox.appendChild(nameList)
occupationBox.appendChild(occupationHeading)
occupationBox.appendChild(occupationList)
priceBox.appendChild(priceHeading)
priceBox.appendChild(priceList)

body.style= `text-align: center`
container.style = `display: flex; justify-content: space-around`

//iterate through the array to take a specific apecific value for an object and place it in the appropriate list within the website

for (i = 0; i < freelancers.length; i++) {
	nameList.appendChild(document.createElement(`p`));
	nameList.children[i].textContent = freelancers[i].name;
}

for (i = 0; i < freelancers.length; i++) {
	occupationList.appendChild(document.createElement(`p`));
	occupationList.children[i].textContent = freelancers[i].occupation;
}

for (i = 0; i < freelancers.length; i++) {
	priceList.appendChild(document.createElement(`p`));
	console.log(freelancers[i].price)
	priceList.children[i].textContent = `$ ${freelancers[i].price} / hr`;
}

let totPrice = 0
for (i = 0; i < freelancers.length; i++) {
	totPrice += freelancers[i].price
}
let avPrice = totPrice / freelancers.length
averageMessage.textContent = `The average starting price is ${avPrice}`;
console.log(avPrice)

// freelancers.forEach(element => {
// 	nameList.appendChild(document.createElement(`li`));
// 	console.log(element.name)
// 	console.log(freelancers.name)
// 	// nameList.children[i].textContent = element.name[i];
// });

// console.log(freeN)