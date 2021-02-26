import axios from 'axios';

const addCommentForm = document.querySelector('#jsAddCommentForm');
const textInput = document.querySelector('#jsText');
const creatorInput = document.querySelector('#jsCreator');
const commentsContents = document.querySelector('#jsCommentsContents');
const commentsNumber = document.querySelector('#jsCommentsNumber');

const formatDate = () => {
  const year = new Date().getFullYear();
  const date = new Date().getDate();
  const monthList = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const getMonth = new Date().getMonth();
  const month = monthList[getMonth];
  const createdAt = `${month} ${date}, ${year}`;
  return createdAt;
};

const increaseNumber = () => {
  commentsNumber.innerHTML = parseInt(commentsNumber.innerHTML, 10) + 1;
};

const addComment = (text, creator) => {
  const commentBlock = document.createElement('div');
  commentBlock.classList.add('comments_block');
  const createdAt = formatDate();
  commentBlock.innerHTML = `
    <div class="comments_avatar">
    </div>
    <div class="comments_column">
      <div class="comments_info">
        <span class="comments_creator">${creator}</span>
        <span class="comments_createdat">${createdAt}</span>    
      </div>
      <p class="comments_text">${text}</p>
    </div>
  `;
  commentsContents.prepend(commentBlock);
  increaseNumber();
};

const sendComment = async (text, creator) => {
  const videoId = window.location.href.split('/videos/')[1];
  const response = await axios({
    url: `/api/${videoId}/comments`,
    method: 'POST',
    data: {
      text,
      creator,
    },
  });
  if (response.status === 200) {
    addComment(text, creator);
  }
};

const handleSubmit = (event) => {
  event.preventDefault();

  const text = textInput.value;
  const creator = creatorInput.value;
  sendComment(text, creator);
  textInput.value = '';
  creatorInput.value = '';
};

function init() {
  addCommentForm.addEventListener('submit', handleSubmit);
}

if (addCommentForm) {
  init();
}
