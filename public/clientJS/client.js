const airportBtn = document
  .querySelector(".airbtn")
  .addEventListener("click", searchAirId);
console.log("testing");

async function searchAirId(e) {
  const airportCode = e.target.previousElementSibling.value;
  try {
    console.log(airportCode);
    const response = await fetch(
      `/api/airportCodes?airportCode=${airportCode}`
    );

    //accept data from api.js controller and dynamically insert html by targeting a container in the dom and insert html into that container (div,lis,uls,etc) good use for Id.
  } catch (err) {
    console.log(err);
  }
}
