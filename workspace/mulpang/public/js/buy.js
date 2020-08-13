$(function(){
	setCancelEvent();
	setBuyEvent();
	setPriceEvent();	
});

// 취소 버튼 클릭
function setCancelEvent(){
	$('form button[type=reset]').click(function(){
    window.history.back();
  });
}

// 구매 버튼 클릭
function setBuyEvent(){
	$('.detail form').submit(function(){
    // 폼의 모든 입력 요소를 queryString으로 변환
    var body = $(this).serialize();
    $.ajax('/purchase', {
      method: 'post',
      data: body,
      success: function(result) {
        if(result.errors) {
          alert(result.errors.massage);
        } else {
          alert('구매가 완료 되었습니다.');
          location.href = '/'; 
        }
      }
    });

    return false; // submmit 취소

  });
}

// 구매수량 수정시 결제가격 계산
function setPriceEvent(){
  $('input[name=quantity]').bind('change', function(){
    $('output[name=totalPrice').text($(this).val() * $('input[name=unitPrice]').val())
  })
}