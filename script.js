const output = document.getElementById("output");
const button = document.getElementById("button");

const test = "success";

button.addEventListener("click", () => {
	console.log("init");
	if (test === "success") {
		output.innerText = "success";
	}
});
