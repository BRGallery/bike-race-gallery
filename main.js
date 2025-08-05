document.addEventListener("DOMContentLoaded", async function () {
  function updateLicenseTables(bikeName) {
    tables.forEach(function (table) {
      let licenseName = table.dataset.licenseName;
      let fullLicenseName = `${bikeName}${licenseName.slice(0, 1).toUpperCase()}${licenseName.slice(1)}`;

      let license = licenses.find(
        (license) => license.licenseID === fullLicenseName,
      );

      console.log(`${license.level1} | ${license.time1}`);
      table.innerHTML = `<tr>
                    <td>${license.level1}</td>
                    <td>${license.time1}</td>
                  </tr>
                  <tr>
                    <td>${license.level2}</td>
                    <td>${license.time2}</td>
                  </tr>
                  <tr>
                    <td>${license.level3}</td>
                    <td>${license.time3}</td>
                  </tr>
                  <tr>
                    <td>${license.level4}</td>
                    <td>${license.time4}</td>
                  </tr>
                  <tr>
                    <td>${license.level5}</td>
                    <td>${license.time5}</td>
                  </tr>`;
    });
  }

  let response = await fetch("./licenseStandards.json");
  let data = await response.json();
  let licenses = data.Licenses;

  const bikeSelectors = document.getElementById("bikeSelectors");
  const licenseTables = document.getElementById("licenseTables");

  const bikeButtons = bikeSelectors.querySelectorAll("button");
  const tables = licenseTables.querySelectorAll("tbody");

  // bikeButtons.forEach(function (bikeButton) {
  //   let bikeName = bikeButton.dataset.bikeName;

  //   bikeButton.addEventListener("click", function () {
  //     updateLicenseTables(bikeName);
  //   });
  // });

  bikeButtons.forEach(function (bikeButton) {
  let bikeName = bikeButton.dataset.bikeName;

  bikeButton.addEventListener("click", function () {
    // Set all buttons to inactive
    bikeButtons.forEach(function (btn) {

      btn.classList.remove("bg-red-300");
    });

    // Step 2: Add the active class to the clicked button
    bikeButton.classList.add("bg-red-300");

      btn.dataset.active = "false";
    });

    // Set the clicked button to active
    bikeButton.dataset.active = "true";

    // Update the tables
    updateLicenseTables(bikeName);
  });
});

  updateLicenseTables("normal");
});