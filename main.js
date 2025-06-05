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

  bikeButtons.forEach(function (bikeButton) {
    let bikeName = bikeButton.dataset.bikeName;

    bikeButton.addEventListener("click", function () {
      updateLicenseTables(bikeName);
    });
  });

  updateLicenseTables("normal");
});
