let students = [];

// Initialize the page
window.addEventListener('DOMContentLoaded', function() {
    displayStudents();
});

// Add a new student dynamically
function addStudent() {
    const studentName = document.getElementById('student-name').value.trim();
    const companyName = document.getElementById('company-name').value.trim();
    
    if (studentName === '' || companyName === '') {
        alert('Please fill in both fields');
        return;
    }
    
    const newStudent = {
        id: students.length + 1,
        name: studentName,
        company: companyName
    };
    
    students.push(newStudent);
    document.getElementById('student-name').value = '';
    document.getElementById('company-name').value = '';
    displayStudents();
}

// Display all students in the list
function displayStudents() {
    const studentList = document.getElementById('student-list');
    studentList.innerHTML = '';
    
    students.forEach(student => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${student.name}</strong> - <span>${student.company}</span>`;
        studentList.appendChild(li);
    });
}

// Fetch students from JSON file using AJAX
function fetchStudents() {
    console.log('Fetching students...');
    
    fetch('./data.json')
        .then(response => {
            console.log('Response status:', response.status);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Data received:', data);
            if (data.students && Array.isArray(data.students)) {
                students = students.concat(data.students);
                displayStudents();
                alert('✅ Students loaded successfully! Total: ' + students.length);
            } else {
                alert('❌ Invalid JSON format');
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
            alert('❌ Error: ' + error.message + '\n\nMake sure:\n1. data.json exists in the same folder\n2. You\'re using Live Server (not file://)\n3. data.json has correct format');
        });
}