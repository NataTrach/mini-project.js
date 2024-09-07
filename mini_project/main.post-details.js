// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформації про пост, вивести всі коментарі поточного поста (ендпоінт  -
// https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
// post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
// Всі елементи котрі характеризують users, posts, comments візуалізувати, так,
// щоб було видно що це блоки (дати фон. марджини і тд)


async function fetchPostDetails() {
    let urlParams = new URLSearchParams(Location.search);
    let postId = urlParams.get('id');

    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        let post = await response.json();
        let postInfoDiv = document.getElementById('post-info');
        postInfoDiv.innerHTML = `
    <div class="post-info">
    <p>ID: ${post.id}</p>
    <p>Title: ${post.title}</p>
    <p>Body: ${post.body}</p>
</div>
    `;
    } catch (e) {
        console.log(e);
    }
}
async function fetchComments (){
    let urlParams = new URLSearchParams(location.search);
    let postId = urlParams.get('id');
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        let postId = await response.json();
        let commentsContainer = document.getElementById('comments-container');
        commentsContainer.innerHTML = '';
        commentsContainer.forEach(comment =>{
            let commentBlock = document.createElement('div');
            commentBlock.className = 'comment-block';
            commentBlock.innerHTML = `
            <p><strong>${comment.name}</strong></p>
            <p>Email: ${comment.email}</p>
            <p>Comment: ${comment.body}</p>
            `;
            commentsContainer.appendChild(commentBlock);

        });
    }catch (e){
        console.log(e);
    }
}
fetchPostDetails()



