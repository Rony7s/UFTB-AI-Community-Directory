const sheetID = "1g0Jromi5ySF25K1T6cylOTCXKS1_AeCCnSGXiyQ7dLM";
const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?tqx=out:json`;

const aiLink = "https://scontent.fdac181-1.fna.fbcdn.net/v/t39.30808-6/571334282_122093701413108275_3133929182357259310_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Af0j8xyzyeYQ7kNvwE6Rid9&_nc_oc=Admr-b74v-hZAPCPTSAW8kt1huBvTY0-Z_-oJO8mFrKx3cERcddpUOfPp2J4gf4xxik&_nc_zt=23&_nc_ht=scontent.fdac181-1.fna&_nc_gid=o3D4GDBPlxYW_yd1apQ8Qw&oh=00_AfulgN2qFSVBc_Eev712z7OTfS61_uu9QrVkticw50gjqg&oe=699A19FE";

fetch(sheetURL)
  .then(res => res.text())
  .then(data => {

    // Clean Google JSON
    const jsonData = JSON.parse(data.substring(47).slice(0, -2));
    const rows = jsonData.table.rows;

    let output = "";

    rows.forEach(row => {

      const post    = row.c[0] ? row.c[0].v : "";
      const name    = row.c[1] ? row.c[1].v : "";
      const id      = row.c[2] ? row.c[2].v : "";
      const dept    = row.c[3] ? row.c[3].v : "";
      const session = row.c[4] ? row.c[4].v : "";
      const email   = row.c[5] ? row.c[5].v : "";
      const mobile  = row.c[6] ? row.c[6].v : "";

      output += `
        <div class="single-member">
            <img src="${aiLink}" alt="${name}">
            <h3 class="name">${name}</h3>
            <p class="title">${post}</p>
            <p class="st_id">ID: ${id}</p>
            <p class="dept">${dept}</p>
            <p class="session">${session}</p>
            <p class="email">${email}</p>
            <p class="mobile">${mobile}</p>
            <a class="contact" href="mailto:${email}">Contact</a>
        </div>
      `;
    });

    document.getElementById("table-container").innerHTML = output;

  })
  .catch(err => {
    console.error("Error:", err);
  });
