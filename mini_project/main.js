// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.


fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
        users.forEach(user => {
            let div = document.createElement('div');
            div.className = 'user-block';
            div.textContent = `ID: ${user.id}, Name: ${user.name}`;
            let button = document.createElement('button');
            button.textContent = 'Details';
            button.onclick = () => location.href = `user-details.html?userId=${user.id}`;
            div.appendChild(button);
            document.getElementById('users').appendChild(div);
        });
    });


