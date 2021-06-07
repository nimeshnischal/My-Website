const req_params = {
    headers : { "Content-Type" : "application/json; charset=UTF-8" },
    method : "POST",
    mode : "cors"
};

contactForm.addEventListener('submit', sendEmail);

function sendEmail(event) {
    event.preventDefault();
    const form = document.getElementById("contact-form");
    if (!form) return;
    const inputFields = form.getElementsByClassName("input-field");
    if (!inputFields) return;
    const emailData = {};
    for (let i = 0; i < inputFields.length; i++) {
        emailData[inputFields[i].name] = inputFields[i].value;
    }
    req_params.body = JSON.stringify(emailData);
    fetch('http://localhost:8081/send-email', req_params)
        .then(res => {
            if (res.ok) {
                Toast.show('Email sent!', 'success');
                return res.json();
            } else {
                Toast.show('An error occurred', 'error');
                throw new Error("Could not call API: " + res.statusText);
            }
        })
        .catch(err => {
            Toast.show('An error occurred', 'error');
            console.error(err);
        });
}