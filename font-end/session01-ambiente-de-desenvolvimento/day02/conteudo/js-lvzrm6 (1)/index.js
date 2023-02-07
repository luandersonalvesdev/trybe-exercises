import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';
fetch(USERS_API)
  .then((response) => response.json())
  .then((data) => {
    fillUsersSelect(data.users);
  });

usersSelect.addEventListener('change', () => {
  clearPageData();

  // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
  const USER_SELECT = `https://dummyjson.com/posts/user/${usersSelect.value}`;
  fetch(USER_SELECT)
    .then((response) => response.json())
    .then((data) => {
      const allPosts = data.posts;
      fillPosts(allPosts);

      const firstPost = data.posts[0].id;
      const GET_COMMENTS = `https://dummyjson.com/posts/${firstPost}/comments`;
      return fetch(GET_COMMENTS);
    })
    .then((commentsJson) => commentsJson.json())
    .then((comments) => {
      const commentsArr = comments.comments;
      fillFeaturedPostComments(commentsArr);
    })
    .catch((error) => {
      fillErrorMessage(error.message);
    });
});
