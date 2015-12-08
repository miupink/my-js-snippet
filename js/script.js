$(function(){

  // ページトップスクロール
  $('.js-pagetop').click(function(){
    $('body, html').animate({scrollTop : 0}, 500);
    return false
  });

  // アンカーリンクスクロール
  $('a[href^=#]').click(function(){ // ^= : 前方一致(#ではじまるリンク)
    var speed = 400;
    var href = $(this).attr('href');
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body, html').animate({scrollTop : position}, speed, 'swing');
    return false;
  });

  // タブ切り替え
  $('.tab-item1').hide();
  $('.js-tabmenu').click(function(){
      console.log('aaa');
    if($(this).index() == 0){
      $('.tab-item0').show();
      $('.tab-item1').hide();
    } else if($(this).index() == 1){
      $('.tab-item0').hide();
      $('.tab-item1').show();
    }
    return false;
  });

  // アコーディオンメニュー(ホバー)
  $(".js-accordion-item").hide();
  $("#sideNavi").find('.js-accordion-menu').hover(function() {
      $(this).find('.js-accordion-item').stop().slideDown();
  }, function() {
         $(this).find('.js-accordion-item').stop().slideUp();
  });

  // ページ離脱時アラート
  $('.js-unload input').change(function(){
    $(window).on('beforeunload', function() {
      return 'このページを離れようとしています。'
    });
  });
  
});

