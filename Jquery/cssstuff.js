// still shoe site btw

$(document).ready(() => {
 
    $('.login-button').on('click', () => {
      $('.login-form').toggle();
    });
    
    $('.menu-button').on('mouseenter', () => {
      $('.nav-menu').show();

      // or just use css classes, you know... 
      $('.menu-button').css({
       color: '#C3FF00',
       backgroundColor: '#535353'
      });
      $('.menu-button').animate({
        fontSize: '24px'
      }, 200)
    })
    
    $('.nav-menu').on('mouseleave', () => {
      $('.nav-menu').hide();
      $('.menu-button').animate({
        fontSize: '18px'
      }, 200);
      $('.menu-button').css({
        color: '#EFEFEF',
        backgroundColor: '#303030'
      });
      
    })
    
  }); 

  // or other way with toggleclass : 
  $(document).ready(() => {
    $('.login-button').on('click', () => {
      $('.login-form').show();
    });
    
    $('.menu-button').on('click', () => {
      $('.nav-menu').toggleClass('hide');
      $('.menu-button').toggleClass('button-active');
    })  
  }); 