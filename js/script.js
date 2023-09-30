import data from "../data.json" assert { type: "json" };
const rows = document.querySelector(".rows");
let rowTemp = "";
data.forEach(
    (el) =>
        (rowTemp += `
        <div class="row">
                        <div class="bage">
                            <img
                                src="${el.icon}"
                                alt="icon"
                            />
                            <p>${el.category}</p>
                        </div>
                        <div>
                            <p><b>${el.score}</b> / 100</p>
                        </div>
                    </div>
`)
);

rows.innerHTML = rowTemp;

console.log(rowTemp);
