
	document.addEventListener('DOMContentLoaded', function() {
		function showRecoverPasswordForm() {
			document.getElementById('my-account-recover').style.display = 'block';
			document.getElementById('my-account-login').style.display='none';
		}

		function hideRecoverPasswordForm() {
			document.getElementById('my-account-recover').style.display = 'none';
			document.getElementById('my-account-login').style.display = 'block';
		}

		if (window.location.hash == '#recover') { showRecoverPasswordForm() }
	});
