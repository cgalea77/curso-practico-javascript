const notes=[
    {
    course: "Matemticas",
    note: 10,
    credit: 6,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Diseño",
        note: 7,
        credit: 4,
    },
    {
        course: "Lógica",
        note: 8,
        credit: 5,
    },
];

const notasConCredito = notes.map(function(notesObjets){
    return notesObjets.note * notesObjets.credit;
});

const sumaDeNotasConCredito = notasConCredito.reduce(
    function (sum = 0, nuevoValor) {
        return sum + nuevoValor;
    }
);

const credits = notes.map(function(noteObjet){
    return noteObjet.credit;
});

const sumaDeCreditos= credits.reduce(
    function (sum = 0, nuevoValor) {
        return sum + nuevoValor;
    }
);

const promedioPonderadoDeNotasConCredito = sumaDeNotasConCredito / sumaDeCreditos;
    