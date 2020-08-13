Util.require('common_upload.js');

$(function(){	
	// TODO 프로필 이미지 선택 시(common_upload.js의 uploadProfileImage 함수를 호출한다.)
  $('#profile').change(uploadProfileImage);
	
	// TODO 회원 가입 버튼 클릭 이벤트
  $('.form_section form').submit(registMember);
	
});

// 회원 가입
function registMember(){
	if($('#password').val() != $('#password2').val()){
		alert('비밀번호와 비밀번호 확인이 맞지 않습니다.');
	}else{
		// 회원 가입을 요청한다.
		$.ajax({
			type: 'post',
			url: '/users/new',
			data: $(this).serialize(),			
			success: function(result){
				// TODO 가입 결과 출력
				if(result.errors) {
          alert(result.errors.message);
        } else {
          alert($('#email').val() + '님 회원 가입이 완료되었습니다.');
          location.href = '/';
        }
			}
		});
	}
	return false;
}
