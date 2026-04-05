const API = "/students";

/* ADD STUDENT */
async function addStudent() {

  const data = {
    name: document.getElementById("name").value,
    department: document.getElementById("dept").value,
    company: document.getElementById("company").value,
    package: document.getElementById("package").value
  };

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  loadStudents();
}

/* LOAD STUDENTS */
async function loadStudents() {

  const res = await fetch(API);
  const students = await res.json();

  const list = document.getElementById("list");
  list.innerHTML = "";

  students.forEach(s => {

    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <span>
        ${s.name} | ${s.department} | ${s.company} | ${s.package}
      </span>

      <button class="delete"
        onclick="deleteStudent('${s._id}')">
        Delete
      </button>
    `;

    list.appendChild(div);
  });
}

/* DELETE STUDENT */
async function deleteStudent(id) {

  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });

  loadStudents();
}

loadStudents();