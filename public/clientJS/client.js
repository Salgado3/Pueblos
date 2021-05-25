
const airportBtn = document.querySelectorAll(".airbtn").addEventListener('click',searchAirId)



async function searchAirId() {
    try{
        console.log("the button is working")
    }catch (err) {
              console.log(err);
            }
}


//template not working at the moment
// async function searchAirId() {
//     const sName = this.parentNode.querySelector(".stageName").innerText;
//     const bName = this.parentNode.querySelector(".birthName").innerText;
//     const tLikes = Number(this.parentNode.querySelector(".likes").innerText);
//     try {
//       const response = await fetch("/feed", {
//         method: "put",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           stageNameS: sName,
//           birthNameS: bName,
//           likesS: tLikes,
//         }),
//       });
//       const data = await response.json();
//       console.log(data);
//       location.reload();
//     } catch (err) {
//       console.log(err);
//     }
//   }