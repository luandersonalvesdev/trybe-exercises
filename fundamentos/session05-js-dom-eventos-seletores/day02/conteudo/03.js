let whereIAm = document.querySelector('#elementoOndeVoceEsta');
let childWhereIAm = whereIAm.firstElementChild;

// DOIS JEITOS DE REMOVER

whereIAm.removeChild(childWhereIAm); // REMOVENDO FILHO DIRETAMENTE DO PAI
whereIAm.firstElementChild.remove(); // REMOVENDO A SI PROPRIO