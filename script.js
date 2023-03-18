function resultCount() {
    const initialWight = document.getElementById('weight').value;
    const result = countProtein(initialWight);
    document.querySelector(".input_result").innerHTML = `
    <div class="position_text"><h1 class="subtitle d-flex">With a weight of ${initialWight} kilograms =</h1></div>

    <div class="position"><img src="./picture/protein.svg" alt="sugar">${result} gram</p></div>`
}