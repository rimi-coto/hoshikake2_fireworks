{
  'use strict'

  //メニューの切り替え
  $('.navbtn').on('click', (event) => {
    event.preventDefault()
    $e = $(event.currentTarget)
    if($e.hasClass('close')) {
      // メニューが開いている状態から閉まる状態へ
      $('.header-nav').slideUp()
      $e.removeClass('close')
      $('.header-nav').addClass('collapse')
    } else {
      // メニューが閉じている状態から開く状態へ
      $('.header-nav').slideDown()
      $e.addClass('close')
      $('.header-nav').removeClass('collapse')
    }
  })


  //ローディング　logoの表示
  $(window).on('load',function(){
    $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
  });

}
