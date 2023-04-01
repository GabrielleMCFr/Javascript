var main = function() {
    $('.more-btn').on('click', event => {
      $(event.currentTarget).siblings('.more-menu').toggle()
      
    });
  
    $('.share').on('click', event => {
        $(event.currentTarget).next().toggle()
      });
  
    $('.bell').on('click', event => {
      $(event.currentTarget).children('.notification').toggleClass('active');
    })
  };
  
  $(document).ready(main);