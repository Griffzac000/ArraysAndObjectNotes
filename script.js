/* ── Warm-Up Data ── */
const roster = [
    {name: "Amara Johnson", gpa: 3.8},
    {name: "Devon Carter", gpa: 3.2},
    {name: "Sofia Reyes", gpa: 3.9},
    {name: "Marcus Lee", gpa: 2.7},
    {name: "Priya Patel", gpa: 4.0},
    {name: "Tyler Brooks", gpa: 3.5},
    {name: "Leila Hassan", gpa: 3.6},
    {name: "Caleb Wright", gpa: 2.9}
];

const warmupBtn = document.querySelector('#warmup-btn');

warmupBtn.addEventListener('click', () => {
    const highGpa = roster.filter(student => student.gpa >= 3.5);
    document.querySelector('#warmup-result').textContent =
        highGpa.length + " students with GPA ≥ 3.5";
});

const warmupSearch = document.querySelector('#warmup-search');

warmupSearch.addEventListener('input', () => {
    const term = warmupSearch.value.toLowerCase();

    const results = roster.filter(student =>
        student.name.toLowerCase().includes(term)
    );

    document.querySelector('#warmup-result').textContent =
        results.length + " students match '" + term + "'";
});




fetch("url")
    .then(response => response.json())
    .then(data => { console.log(data); })
    .catch(err => { console.error(err); });


fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => console.log(data));


const fetchBtn = document.querySelector('#fetch-btn');

fetchBtn.addEventListener('click', () => {
    const status = document.querySelector('#fetch-status');
    const grid = document.querySelector('#user-grid');

    status.textContent = "Loading...";

    fetch(url)
        .then(res => res.json())
        .then(data => {

            let html = "";

            data.forEach(user => {
                html += `
          <div class="card">
            <h3>${user.name}</h3>
            <p>${user.email}</p>
          </div>
        `;
            });

            grid.innerHTML = html;


            status.textContent = "Loaded " + data.length + " users";


            document.querySelector('#json-viewer').textContent =
                JSON.stringify(data, null, 2);

            document.querySelector('#json-viewer').classList.add("open");
            document.querySelector('#json-toggle').classList.add("open");


        })
        .catch(err => {
            const status = document.querySelector('#fetch-status');

            status.textContent = "Error: " + err.message;
            status.style.color = "#f07178";

            const errorDisplay = document.querySelector('#error-display');
            errorDisplay.classList.add("open");
            errorDisplay.textContent = err.message;
        });
});

const endpoint = document.querySelector('#fetch-select').value;
const url = "https://jsonplaceholder.typicode.com" + endpoint;


let html = "";

if (endpoint === "/users") {
    data.forEach(user => {
        html += `
      <div class="card">
        <h3>${user.name}</h3>
        <p>${user.email}</p>
      </div>
    `;
    });

} else if (endpoint === "/posts") {
    data.forEach(post => {
        html += `
      <div class="card">
        <h3>${post.title.slice(0,50)}</h3>
        <p>${post.body.slice(0,80)}</p>
      </div>
    `;
    });

} else if (endpoint === "/todos") {
    data.forEach(todo => {
        html += `
      <div class="card">
        <h3>${todo.title}</h3>
        <p>${todo.completed ? "✓ done" : "○ pending"}</p>
      </div>
    `;
    });
}

grid.innerHTML = html;


// Add a number input and button to the output panel.
// On click, fetch /users/{id} (single object, not array).
// Render: name, email, phone, website, company.name.


/* ── JSON toggle (wired for you) ── */
document.querySelector('#json-toggle').addEventListener('click', () => {
    const viewer = document.querySelector('#json-viewer');
    const toggle = document.querySelector('#json-toggle');
    viewer.classList.toggle('open');
    toggle.textContent = viewer.classList.contains('open')
        ? '▴ hide raw JSON'
        : '▾ show raw JSON';
});