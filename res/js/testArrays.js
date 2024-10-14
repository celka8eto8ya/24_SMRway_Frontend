const inputElement = document.getElementById("title");
const btnCreate = document.getElementById("create");
const listElement = document.getElementById("list");

const notes = [
  "Lorem ipsum dolor sit amet.",
  "Lorem ipsum dolor, sit amet consectetur adipisicing.",
  "Lorem ipsum dolor.",
];

function render(inputEl, listEl, arrayData) {
  //   console.log(inputEl.value);
  for (let i = 0; i < arrayData.length; i++) {
    if (arrayData[i].length > 0) {
      listEl.innerHTML += `
                    <li
                      class="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <span>${arrayData[i]}</span>
                      <span>
                        <span class="btn btn-sm btn-success">&check;</span>
                        <span class="btn btn-sm btn-danger">&times;</span>
                      </span>
                    </li>
                    `;
    }
  }
}

function add(inputEl, listEl) {
  //   console.log(inputEl.value);
  if (inputEl.value.length > 0) {
    listEl.innerHTML += `
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>${inputEl.value}</span>
                <span>
                  <span class="btn btn-sm btn-success">&check;</span>
                  <span class="btn btn-sm btn-danger">&times;</span>
                </span>
              </li>
              `;
    inputEl.value = "";
  }
}

render(inputElement, listElement, notes);

btnCreate.onclick = function () {
  add(inputElement, listElement);
};
