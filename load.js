var postlist = document.getElementById('postlist')
postlist.innerHTML = ''
var splash = document.getElementById('splash')


posts.reverse().forEach(item => {
    var listItem = document.createElement('li')
    var link = document.createElement('a')
    link.innerText = item.title

    link.href = 'javascript:void(0)'

    link.addEventListener('click', e=>{
        readPost(item)
    })

    listItem.appendChild(link)
    postlist.appendChild(listItem)
});

function readPost(postItem){
    window.history.pushState('page2', 'Title', `?${postItem.title}`);
    splash.style = 'display: none'
    var postTitle = document.getElementById('postTitle')
    var post = document.getElementById('post')
    post.innerHTML = postItem.body + '<br><br><a href="javascript:void(0)"onclick="clearPost()">back</a>'
    postTitle.innerHTML = postItem.title
}

function clearPost(){
    window.history.pushState('page2', 'Title', `/`)
    splash.style = 'display: block'
    var postTitle = document.getElementById('postTitle')
    var post = document.getElementById('post')
    post.innerHTML = ''
    postTitle.innerHTML = ''
}

if(window.location.search){
    var urlthing = decodeURIComponent(window.location.search)
    var otherthing = urlthing.split('?')[1]
    var postThing = posts.find(x => x.title == otherthing)
    readPost(postThing)
}