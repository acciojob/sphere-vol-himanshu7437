let form = document.getElementById('MyForm');

form.addEventListener("submit", (e) => {
	e.preventDefault();
	volume_sphere();
})
function volume_sphere() {
    //Write your code here
	let volume = document.querySelector("#volume");
	let radius = Number(document.querySelector("#radius").value);;

	if (isNaN(radius) || radius < 0) {
        volume.value = "NaN";
        return;
    }

	let result = (4 / 3) * Math.PI * Math.pow(radius, 3);

	volume.value = result.toFixed(4);
} 
