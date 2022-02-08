$(() => {
    localStorage.clear();
    $('#accedi').on('click', function () {
        // creo una variabile "valido" per contenere la validità del campo.
        let valido = true;
        // Uso la regular expression per validare l'inserimento dell'email.
        // Lo schema regex è /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/
        const schemaEmail = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        // Creo una variabile che mi contiene il contenuto del campo email.
        const user = $('#user').val().trim();
        // Devo verificare se il campo è vuoto e se l'indirizzo email è valido (uso regex).
        if (user == '') {
            $('#user').next().text('Questo campo è richiesto.');
            valido = false;
        } else if (!schemaEmail.test(user)) {
            $('#user').next().text('Devi inserire un indirizzo email valido.');
            valido = false;
        } else {
            $('#user').next().text('');
        }
        $('#user').val(user);

        // Ora passo al controllo della password salvando il contenuto inserito in una variabile.
        const password = $('#password').val().trim();
        const schemaPassword = new RegExp("^(((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
        // La password è più corta di 6 caratteri?
        if (password.length < 6) {
            $('#password').next().text('Deve essere di almeno 6 caratteri.');
            valido = false;
        } else if (!schemaPassword.test(password)) {
            $('#password').next().text('Devi inserire una password di almeno 6 caratteri che contenga un numero');
            valido = false;
        } else {
            $('#password').next().text('');
        }
        $('#password').val(password);

        if (valido == false) {
            e.preventDefault();
        } else {
            progressBar();
            localStorage.setItem('user', user);
        }

        function progressBar() {
            let barra = $('#progress');
            let larghezza = 1;
            let intervallo = setInterval(loading, 10);

            function loading() {
                if (larghezza > 500) {
                    clearInterval(intervallo);
                    location.href = 'corsi.html';
                } else {
                    larghezza++
                    barra.css('width', larghezza + 'px');
                }
            }
        }
    });
});