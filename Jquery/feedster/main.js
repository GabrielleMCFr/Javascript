$(document).ready(() => {

    $('.menu').on('mouseenter', () => {
      $('.nav-menu').show()
    })
    $('.nav-menu').on('mouseleave', () => {
      $('.nav-menu').hide()
    })
  
    $('.btn').on('mouseenter', event => {
      $(event.currentTarget).addClass('btn-hover')
    }).on('mouseleave', event => {
      $(event.currentTarget).removeClass('btn-hover')
    })
  
    // remaining characters of a post
    $('.postText').on('keyup', event => {
      $('.postText').focus();
      var post = $(event.currentTarget).val();
      var remaining = 140 - post.length;
      $('.characters').html(remaining);
  
      if (remaining <= 0) {
        $('.wordcount').addClass('red');
      }
      else {
        $('.wordcount').removeClass('red');
      }
    })
  }); 
  