var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

function copy_data(tipo) {
    let element = document.getElementById(`span-${tipo}`);
    let copiado = document.getElementById(`copiado`);
    copiado.style.display = "flex";
    element.style.color = "#ffa500";
    setTimeout(() => {
        copiado.style.display = "none";
    } , 300);
    setTimeout(() => {
        element.style.color = '#fff';
    } , 1000);
    if (tipo == 'phone') {
        navigator.clipboard.writeText('+525525605025');
    }
    if (tipo == 'email') {
        navigator.clipboard.writeText('ojitos369@gmail.com');
    }
}