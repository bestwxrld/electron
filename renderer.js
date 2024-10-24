const users = [];
let userId = 1;

document.getElementById('addUserBtn').addEventListener('click', () => {
    document.getElementById('userForm').style.display = 'block';
});

document.getElementById('saveUserBtn').addEventListener('click', () => {
    const userName = document.getElementById('userName').value;
    if (userName) {
        users.push({ id: userId++, name: userName });
        updateUserTable();
        document.getElementById('userForm').style.display = 'none';
        document.getElementById('userName').value = '';  
    }
});

function updateUserTable() {
    const tbody = document.getElementById('usersTable').getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';  

    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${user.id}</td><td>${user.name}</td>`;
        tbody.appendChild(row);
    });
}