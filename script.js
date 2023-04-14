const value = document.querySelector('#button');
value.addEventListener('click', () => {
  const initialWight = document.getElementById('weight').value;
  const result = countProtein(initialWight);
  document.querySelector('.input_result').innerHTML = `
    <div class="position_text"><h1 class="subtitle d-flex">With a weight of ${initialWight} kilograms =</h1></div>

    <div class="position"><img src="./picture/bodybuilding_nutrition_protein_fitness_diet_icon_149055.svg" alt="protein">${result} gram</p></div>`;
});
