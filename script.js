const output = document.getElementById("output");
const button = document.getElementById("button");

const test = "success";

button.addEventListener("click", () => {
	console.log("init");
	if (test) {
		output.innerText = "success";
	}
});
