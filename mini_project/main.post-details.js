// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформації про пост, вивести всі коментарі поточного поста (ендпоінт  -
// https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
// post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
// Всі елементи котрі характеризують users, posts, comments візуалізувати, так,
// щоб було видно що це блоки (дати фон. марджини і тд)


let postId = new URLSearchParams(location.search).get('postId');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(post => {
        let postInfo = document.getElementById('post-info');
        let postTitle = document.createElement('h2');
        postTitle.textContent = `Title: ${post.title}`;
        let postBody = document.createElement('p');
        postBody.textContent = `Body: ${post.body}`;
        postInfo.appendChild(postTitle);
        postInfo.appendChild(postBody);

        return fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
    })
    .then(res => res.json())
    .then(user => {
        let userInfo = document.getElementById('user-info');
        let userName = document.createElement('p');
        userName.textContent = `Name: ${user.name}`;
        let userEmail = document.createElement('p');
        userEmail.textContent = `Email: ${user.email}`;
        let userAddress = document.createElement('p');
        userAddress.textContent = `Address: ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`;
        let userCompany = document.createElement('p');
        userCompany.textContent = `Company: ${user.company.name} - ${user.company.catchPhrase}`;
        userInfo.appendChild(userName);
        userInfo.appendChild(userEmail);
        userInfo.appendChild(userAddress);
        userInfo.appendChild(userCompany);
    });

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(res => res.json())
    .then(comments => {
        let commentDiv = document.getElementById('comments');
        comments.forEach(comment => {
            let div = document.createElement('div');
            div.className = 'comment-block';
            div.textContent = comment.body;
            commentDiv.appendChild(div);
        });
    });




