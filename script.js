document.querySelector('.tabs').addEventListener('click', function (event) {
    // console.log(event.target)
    // if (event.target.getAttribute('data-alt') == null) {
    //   return;
    // } 
    if (event.target == this){
        return;
      } 
    else {
        for (i = 0; i < document.querySelector('.tabs').children.length; i++) {
            document.querySelector('.tabs').children[i].classList.remove('active')
        }
        event.target.classList.add('active');

        for (i = 0; i < document.querySelector('.text').children.length; i++) {
            document.querySelector('.text').children[i].classList.remove('active')
        }
        document.querySelector(event.target.getAttribute('data-alt')).classList.add('active')
    }
})
