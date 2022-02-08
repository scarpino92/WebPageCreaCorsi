$(() => {
    let user = localStorage.getItem('user');
    $('#logged').html('Benvenuto ' + user + '!');

    $('#logout').on('click', function () {
        localStorage.clear();
        location.href = 'login.html';
    });

    let materia1 = ['Anatomia', 'Fisiologia', 'Farmacologia', 'Dietetica', 'Patologia Generale'];
    let materia2 = ['','Etologia', 'Valutazione Morfofunzionale', 'Fisica', 'Biochimica', 'Alimentazione'];
    let materia3 = ['','Muscolo-scheletrico', 'Miofasciale', 'Cranio-sacrale', 'Sintesi', 'Razionale'];

    for (i = 0; i < materia1.length; i++) {
        $('#materia1').append(`<option value = "${i}">${materia1[i]}</option>`);
    }
    for (i = 0; i < materia2.length; i++) {
        $('#materia2').append(`<option value = "${i}">${materia2[i]}</option>`);
    }
    for (i = 0; i < materia3.length; i++) {
        $('#materia3').append(`<option value = "${i}">${materia3[i]}</option>`);
    }

    $('#crea').on('click', function () {
        let corso = $('#nomeCorso').val();
        let durata = $('#durataCorso').val();
        let mat1 = $('#materia1').val();
        let mat2 = $('#materia2').val();
        let mat3 = $('#materia3').val();
        let user = localStorage.getItem('user');

        if (corso === '') {
            $('#error').text('Il nome del corso è obbligatorio!');
        } else if (durata === '') {
            $('#error').text('La durata del corso è obbligatoria!');
        } else if (mat1 === '') {
            $('#error').text('Devi inserire almeno una materia!');
        } else {
            $('#corsoCreato').append(`Corso creato da ${user}: Il nome del corso è ${corso} e dura ${durata}, le materie scelte sono ${materia1[mat1]}, ${materia2[mat2]}, ${materia3[mat3]}.<br>`);
            $('#error').text('');
            $('#nomeCorso').val('');
            $('#durataCorso').val('');
            $('#materia1').val('');
            $('#materia2').val('');
            $('#materia3').val('');
        }
    });
});