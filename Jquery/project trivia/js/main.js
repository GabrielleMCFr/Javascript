$(document).ready(() =>{

    $('.hint-box').on('click', () => {
      $('.hint').slideToggle(500);
    });
  
    $('.wrong-answer-one').on('click', () => {
      $('.wrong-text-one').fadeOut();
      $('.frown').show();
    });
  
    $('.wrong-answer-two').on('click', () => {
      $('.wrong-text-two').fadeOut();
      $('.frown').show();
    });
  
    $('.wrong-answer-three').on('click', () => {
      $('.wrong-text-three').fadeOut();
      $('.frown').show();
    });
  
    $('.correct-answer').on('click', () => {
      $('.frown').hide();
      $('.smiley').show();
      $('.wrong-text-one').fadeOut();
      $('.wrong-text-two').fadeOut();
      $('.wrong-text-three').fadeOut();
    });
  
    $('#reset').on('click', () => {
      $('.wrong-text-one').show();
      $('.wrong-text-two').show();
      $('.wrong-text-three').show();
      $('.frown').hide();
      $('.smiley').hide();
    })
  });