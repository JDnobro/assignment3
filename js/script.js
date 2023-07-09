const submit_btn = document.querySelector('.btn');
const take_email = document.querySelector('.form-control');
const info = document.querySelector('.hidden');
const input_place = document.querySelector('.input-email');

const regex =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//email

let email;
let true_email;

function getEmail() {
	email = take_email.value;
	true_email = regex.test(email);

	if (true_email === true) {
		info.classList.remove('hidden');
		input_place.classList.add('hidden');
	} else if (email === '') {
		alert('Please input your email to access personal info');
	} else {
		alert('Email format is incorrect');
	}
}

//info

function addStyle(num) {
	const jobinfo_content = document.getElementById('jobinfo-content-' + num);

	const view_more_near = document
		.getElementById('view-more-' + num)
		.closest('.jobinfo-jr');

	const tieu_de_block_near = document
		.getElementById('view-more-' + num)
		.closest('.tieu-de-block');

	const btn_text_content = document.getElementById('view-more-' + num);

	if (!jobinfo_content.classList.contains('jr-max-height')) {
		jobinfo_content.classList.add('jr-max-height');
		view_more_near.style.height = 'auto';
		btn_text_content.textContent = '+ VIEW LESS';
		// setTimeout(function () {
		// 	view_more_near.style.height = view_more_near.offsetHeight + 'px';
		// }, 600);

		// view_more_near.classList.add('jr-border-add');
		// tieu_de_block_near.classList.add('tieu-de-block-remove');
	} else {
		btn_text_content.textContent = '+ VIEW MORE';
		jobinfo_content.classList.remove('jr-max-height');
		view_more_near.style.height = view_more_near.offsetHeight + 'px';

		//dòng trên để có một height cụ thể cho cái transition ạ
		//do em thấy có lẽ nhanh quá nên nó không chạy dòng code phía trên
		//nên em delay dòng dưới một xíu thì nó được ạ:))

		setTimeout(function () {
			view_more_near.style.removeProperty('height');
		}, 1);

		// view_more_near.classList.remove("jr-border-add");
		// tieu_de_block_near.classList.remove("tieu-de-block-remove");
		// fail ạ, phức tạp hoá vấn đề lên cuối cùng bỏ hơn 1 nửa ;-;
	}
}

submit_btn.addEventListener('click', getEmail);

for (let num = 0; num < 6; num++) {
	document
		.getElementById('view-more-' + num)
		.addEventListener('click', function () {
			addStyle(num);
		});
}
