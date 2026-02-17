// ===== LIVE SEARCH FUNCTION =====
document.getElementById("searchInput").addEventListener("keyup", function () {

    const searchValue = this.value.toLowerCase();
    const members = document.querySelectorAll(".single-member");

    members.forEach(member => {

        const name = member.querySelector(".name").innerText.toLowerCase();
        const title = member.querySelector(".title").innerText.toLowerCase();
        const dept = member.querySelector(".dept").innerText.toLowerCase();

        if (
            name.includes(searchValue) ||
            title.includes(searchValue) ||
            dept.includes(searchValue)
        ) {
            member.style.display = "block";
        } else {
            member.style.display = "none";
        }

    });

});
