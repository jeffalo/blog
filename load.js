var postlist = document.getElementById('postlist')
postlist.innerHTML = ''

posts.reverse().forEach(item => {
    var listItem = document.createElement('li')
    var link = document.createElement('a')
    link.innerText = item.title

    link.href = '#'+item.title

    link.addEventListener('click', e=>{
        readPost(item)
    })

    listItem.appendChild(link)
    postlist.appendChild(listItem)
});

function readPost(postItem){
    var postTitle = document.getElementById('postTitle')
    var post = document.getElementById('post')
    post.innerHTML = postItem.body + '<br><a href="#"onclick="clearPost()">close</a>'
    postTitle.innerHTML = postItem.title
}

function clearPost(){
    var postTitle = document.getElementById('postTitle')
    var post = document.getElementById('post')
    post.innerHTML = ''
    postTitle.innerHTML = ''
}