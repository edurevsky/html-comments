
const commentList = document.querySelectorAll('.comment-header')

commentList.forEach((el) => {

  el.addEventListener('click', function(e) {

    let x = el.parentElement
    if (x.classList.contains('hidden')) {
      x.classList.remove('hidden')
    } else {
      x.classList.add('hidden')
    }
    
  })
  
})
