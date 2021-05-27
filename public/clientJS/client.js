document.querySelector(".airbtn").addEventListener("click", searchAirId);

console.log("testing");

function searchAirId(e) {
  const airportCode = e.target.previousElementSibling.value;
  //   document.querySelector(".airbtn").value = airportCode;
  //   console.log(airportCode);

  //need to get value of select to api/controllers need to form data from select.

  //   try {
  //     console.log(airportCode);
  //     const response = await fetch(
  //       `/api/airportCodes?airportCode=${airportCode}`,
  //       {}
  //     );

  //     //accept data from api.js controller and dynamically insert html by targeting a container in the dom and insert html into that container (div,lis,uls,etc) good use for Id.
  //   } catch (err) {
  //     console.log(err);
  //   }
}
