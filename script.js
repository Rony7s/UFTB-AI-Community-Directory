const sheetID = "1g0Jromi5ySF25K1T6cylOTCXKS1_AeCCnSGXiyQ7dLM";
const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?tqx=out:json`;

const imgLink = "img/ai-uftb.jpg";

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
            <img src="${imgLink}" alt="${name}">
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
