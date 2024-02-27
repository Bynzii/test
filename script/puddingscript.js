$(function(){
  
  
  // 쿠키버튼 클릭시 모바일메뉴 나타나고, 다시 사라지게
  $(".menuB").click(function(){
    $(".m_menu").animate({ right:'0' })
  });
  $(".closeB").click(function(){
    $(".m_menu").animate({ right:'-100%'})
  });


  // 마우스오버 이미지 전환
  $(".left .img2").on({
    mouseover:function(){
      $(".left .img2").css({
        opacity:'0',
        transition:'0.5s'
      })
    },
    mouseout:function(){
      $(".left .img2").css({
        opacity:'1',
        transition:'0.5s'
      })
    }
  })

  $(".right .img4").on({
    mouseover:function(){
      $(".right .img4").css({
        opacity:'0',
        transition:'0.5s'
      })
    },
    mouseout:function(){
      $(".right .img4").css({
        opacity:'1',
        transition:'0.5s'
      })
    }
  })


/////////////////////
});