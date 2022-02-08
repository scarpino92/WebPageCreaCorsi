class Corsi {
    nome;
    argomento;
    durata;
    constructor(_nome, _materia1,_materia2,_materia3,_materia4,_materia5,_durata){
        this.nome = _nome;
        this.materia1 = _materia1;
        this.materia2 = _materia2;
        this.materia3 = _materia3;
        this.materia4 = _materia4;
        this.materia5 = _materia5;
        this.durata = _durata;
    }
    descrizioneCorso(){
    return `Programma del corso:<hr><li>${this.materia1}</li><br>
    <li>${this.materia2}</li><br>
    <li>${this.materia3}</li><br>
    <li>${this.materia4}</li><br>
    <li>${this.materia5}</li><br>`;
    }
}

$(() => {
    let user = localStorage.getItem('user');
    $('#logged').html('Benvenuto ' + user + '!');

    $('#logout').on('click',function(){
        localStorage.clear();
        location.href = 'login.html';
    });

    var corso1 = new Corsi (
        'Medicina Veterinaria',
        'Anatomia',
        'Fisiologia',
        'Farmacologia',
        'Dietetica',
        'Patologia Generale',
        '5 anni');
    
    var corso2 = new Corsi (
        'TAAEC',
        'Etologia',
        'Valutazione Morfofunzionale',
        'Fisica',
        'Biochimica',
        'Alimentazione', 
        '3 anni');

    var corso3 = new Corsi (
        'Osteopatia Animale',
        'Muscolo-scheletrico',
        'Miofasciale',
        'Cranio-sacrale',
        'Sintesi',
        'Razionale', 
        '3 anni');


    $('#corso1').html(corso1.nome);
    $('#corso2').html(corso2.nome);
    $('#corso3').html(corso3.nome);
    $('#descrizione1').html(corso1.descrizioneCorso());
    $('#descrizione2').html(corso2.descrizioneCorso());
    $('#descrizione3').html(corso3.descrizioneCorso());
    $('#durata1').html(corso1.durata);
    $('#durata2').html(corso2.durata);
    $('#durata3').html(corso3.durata);
});