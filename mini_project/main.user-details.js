// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.
// user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
// блоки з короткою іфною про post - в ряд по 5 .


let userId = new URLSearchParams(location.search).get('userId');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.json())
    .then(user => {
        let userInfo = document.getElementById('user-info');

        let nameElem = document.createElement('p');
        nameElem.textContent = `Name: ${user.name}`;

        let emailElem = document.createElement('p');
        emailElem.textContent = `Email: ${user.email}`;

        let addressElem = document.createElement('p');
        addressElem.textContent = `Address: ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`;

        let companyElem = document.createElement('p');
        companyElem.textContent = `Company: ${user.company.name} - ${user.company.catchPhrase}`;

        userInfo.appendChild(nameElem);
        userInfo.appendChild(emailElem);
        userInfo.appendChild(addressElem);
        userInfo.appendChild(companyElem);
    });

document.getElementById('load-posts').onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(res => res.json())
        .then(posts => {

            let postDiv = document.getElementById('posts');
            postDiv.innerHTML = '';
            posts.forEach(post => {
                let div = document.createElement('div');
                div.className = 'post-block';
                div.textContent = post.title;
                let button = document.createElement('button');
                button.textContent = 'Post';
                button.onclick = () => location.href = `post-details.html?postId=${post.id}`;
                div.appendChild(button);
                postDiv.appendChild(div);
            });
        });
};
