$(function(){
	setTabEvent();
	setGalleryEvent();
  setCloseEvent();
  setAddCartEvent();
});

// 상세보기 탭 클릭
function setTabEvent(){	
  $('.coupon_tab > section').click(function(){
    $(this).removeClass('tab_off').siblings().addClass('tab_off');
  });
}

// 갤러리 이미지 클릭
function setGalleryEvent(){
  var bigPhoto = $('.big_photo > img');
  $('.photo_list a').click(function(event){
    event.preventDefault(); // 브라우저의 기본동작 취소(페이지 이동 X), a 태그를 안하면 포커스가 가지 않음.(접근성을 위해 a 태그 사용)
    bigPhoto.attr('src', $(this).attr('href'));
  });
}

// 상세보기 닫기 클릭
function setCloseEvent(){
	$('.btn_close_coupon_detail').click(function(){
    window.history.back();
  });
}

// 관심쿠폰 등록 이벤트
function setAddCartEvent(){
	
}

// 관심 쿠폰 등록(로컬 스토리지에 저장)
function addCart(coupon){
	var couponId = coupon.data('couponid');
  var couponName = coupon.children('h1').text();
  var couponImg = coupon.children('.list_img').attr('src');
  
  // TODO 관심 쿠폰 목록을 localStorage에서 꺼낸다.
  
  
  if(cart.length == 5){
    alert('관심 쿠폰은 최대 5개 등록 가능합니다.');
  }else if(cart[couponId]){
    alert(couponName + '\n이미 등록되어 있습니다.');
  }else{
    // TODO 관심 쿠폰을 localStorage에 저장한다.

    // TODO 알림메세지 사용 여부 체크
    
  }
}