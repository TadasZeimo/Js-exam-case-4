/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
const ENDPOINT = "cars.json";

async function getDataFromUrl(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function drawCard(url) {
  try {
    const data = await getDataFromUrl(url);
    autoData(data);
  } catch (error) {
    console.error(error);
    return null;
  }
}
drawCard(ENDPOINT);

function autoData(data) {
  const output = document.getElementById("output");

  data.forEach((dataItem) => {
    const cardItem = document.createElement("div");
    cardItem.classList.add("property-card");

    const autoBrand = document.createElement("h2");
    autoBrand.textContent = dataItem.brand;

    const autoModels = document.createElement("p");
    autoModels.textContent = "MODELS: " + dataItem.models + ".";
    autoModels.classList.add("property-p");

    cardItem.append(autoBrand, autoModels);
    output.append(cardItem);
  });
}
