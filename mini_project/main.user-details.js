// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.
// user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
// блоки з короткою іфною про post - в ряд по 5 .

// async function fetchUserDetails() {
//     let urlParams = new URLSearchParams(Location.search);
//     let userId = urlParams.get('id');
//     try {
//         let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//         let user = await response.json();
//         let userInfoDiv = document.getElementById('user-info');
//         userInfoDiv.innerHTML = `
//         <div class="user-info">
//         <p>Id: ${user.id}</p>
//         <p>Name: ${user.name}</p>
//         <p>Email: ${user.email}</p>
//         <p>Adress: ${user.adress.street}, ${user.adress.city}</p>
//         <p>Phone: ${user.phone}</p>
//         <p>Website: ${user.website}</p>
//         <p>Company: ${user.company.name}</p>
//         </div>`;
//     }catch (e){
//         console.log(e);
//     }
// }
// async function fetchPost(){
//     let urlParams = new URLSearchParams(Location.search);
//     let userId = urlParams.get('id');
//
//     try {
//         let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
//         let post = await response.json();
//         let postsContainer = document.getElementById('posts-container');
//         postsContainer.innerHTML = '';
//
//
//        post.forEach(post=>{
//            let postBlock = document.createElement('div');
//            postBlock.className = 'post-block';
//            postBlock.innerHTML = `
//            <p>Title:${post.title}</p>
//            <button onclick="location.href='post-details.html?id=${post.id}'">Post of current user</button>
//            `;
//        })
//
//     }catch (e){
//         console.log(e);
//     }
// }
// fetchUserDetails();

async function fetchUserDetails() {
    const urlParams = new URLSearchParams(location.search);
    const userId = urlParams.get('id');

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const user = await response.json();
        const userInfoDiv = document.getElementById('user-info');

        userInfoDiv.innerHTML = `
                    <div class="user-info">
                        <p>ID: ${user.id}</p>
                        <p>Name: ${user.name}</p>
                        <p>Email: ${user.email}</p>
                        <p>Address: ${user.address.street}, ${user.address.city}</p>
                        <p>Phone: ${user.phone}</p>
                        <p>Website: ${user.website}</p>
                        <p>Company: ${user.company.name}</p>
                    </div>`;
    } catch (error) {
        console.error(error);
    }
}


async function fetchPosts() {
    const urlParams = new URLSearchParams(location.search);
    const userId = urlParams.get('id');

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
        const posts = await response.json();
        const postsContainer = document.getElementById('posts-container');
        postsContainer.innerHTML = '';

        posts.forEach(post => {
            const postBlock = document.createElement('div');
            postBlock.className = 'post-block';
            postBlock.innerHTML = `
                        <p>Title: ${post.title}</p>
                        <button onclick="location.href='post-details.html?id=${post.id}'">View Post Details</button>
                    `;
            postsContainer.appendChild(postBlock);
        });
    } catch (error) {
        console.error(error);
    }
}
fetchUserDetails()
