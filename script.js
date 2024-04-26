document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('otpForm');
    const otpDisplay = document.getElementById('otpDisplay');

    function generateOTP() {
        const OTP_LENGTH = 6;
        const characters = '0123456789';
        let OTP = '';
        for (let i = 0; i < OTP_LENGTH; i++) {
            OTP += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return OTP;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const generatedOTP = generateOTP();
        otpDisplay.value = generatedOTP;
    });
});

document.getElementById("togglePassword").addEventListener("change", function () {
    var passwordInput = document.getElementById("password");
    if (this.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password"
    }
});

