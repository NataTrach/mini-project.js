// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.

// async function fetchUsers() {
//     try {
//         let response = await fetch(`https://jsonplaceholder.typicode.com/users`);
//         let users = await response.json();
//         let container = document.getElementById('users-container');
//         users.forEach(user => {
//             let userBlock = document.createElement('div');
//             userBlock.className = 'user-block';
//             userBlock.innerHTML = `
//             <p>ID:${user.id}</p>
//             <p>${user.name}</p>
//             <button onclick = "location.href='user-details.html?id=${user.id}">Details</button>
// `;
//             container.appendChild(userBlock);
//         });
//     } catch (e) {
//         console.log(e);
//     }
// }
//
// fetchUsers()

async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        const container = document.getElementById('users-container');

        users.forEach(user => {
            const userBlock = document.createElement('div');
            userBlock.className = 'user-block';
            userBlock.innerHTML = `
                        <p>ID: ${user.id}</p>
                        <p>Name: ${user.name}</p>
                        <button onclick="location.href='user-details.html?id=${user.id}'">View Details</button>
                    `;
            container.appendChild(userBlock);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchUsers();


