const share = document.getElementById('share-icon');
const author = document.getElementsByClassName('author');
const furniture = document.getElementsByClassName('furniture');

share.addEventListener('click', function(){ 
    author[0].innerHTML =  ` <p> SHARE </p>
    <img  id="fb-icon" src="images/icon-facebook.svg" alt="Facebook Icon"> 
    <img id="twitter-icon" src="images/icon-twitter.svg" alt="Twitter Icon">
    <img id="Pinterest" src="images/icon-pinterest.svg" alt="Pinterest Icon">`;

    furniture[0].className = furniture.className + 'furniture-active'
});

