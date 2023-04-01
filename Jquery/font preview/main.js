$(document).ready(() => {

    $('#text').on('keyup', event => {
      // transpose ce que j'écris en temps reel
      $('.preview').html($(event.currentTarget).val());
  
    });
  
    $('#font').on('change', event => {
      // change police selon celle selectionnee
      $('.preview').css({fontFamily: $(event.currentTarget).val()});
    });
  
    $('#weight').on('change', event => {
      // change type (gras etc) police sleon celle selectionnee
      $('.preview').css({fontWeight: $(event.currentTarget).val()});
    });
  
    $('#size').on('keyup', event => {
      var fontSize = $(event.currentTarget).val() + 'px';
      $('.preview').css({fontSize: fontSize});
    });
  });