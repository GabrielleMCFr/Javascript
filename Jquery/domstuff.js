// methods : children() to target an element’s child elements.
//.siblings() to target elements adjacent to an element.
//.parent() to target an element’s parent.
//.closest() travels up the DOM tree from the current element to target the closest element with a given selector.
//.next() to target the element immediately following the selected element.
//.prev() to target the element that is immediately preceding the selected element.
//.find() to target descendant elements by some selector, ie- class, id, tag etc.
//In addition to these methods, there are even more, including .prevUntil(), .nextUntil() and others. 

$(document).ready(() => {
  
    $('.more-details-button').on('click', event => {
      $(event.currentTarget).closest('.product-details').next().toggle()
      $(event.currentTarget).find('img').toggleClass('rotate')
    });  
    
    $('.shoe-details li').on('click', event => {
      $(event.currentTarget).addClass('active');
      
      $(event.currentTarget).siblings().removeClass('active')
      
      $(event.currentTarget).closest('.shoe-details').children().removeClass('disabled')
      
      
    });
    
    
    
    ///////////////////////////////////////////
    $('.login-button').on('click', () => {
      $('.login-form').toggle();
      $('.login-button').toggleClass('button-active');
    });
  
    $('.product-photo').on('mouseenter', () => {
      $(this).addClass('photo-active');
    }).on('mouseleave', function() {
      $(this).removeClass('photo-active');
    });
  
    $('.menu-button').on('click', () => {
      $('.menu-button').toggleClass('button-active');
      $('.nav-menu').toggleClass('hide');
    });
  })