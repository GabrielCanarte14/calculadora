const funcionPredeterminada = () => {
    const formulario = document.getElementById('formulario')

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const valorPorHora = document.getElementById('valorPorHora').value;
        const valorInterfaz = document.getElementById('interfazHoras').value;
        const valorHtml = document.getElementById('htmlHoras').value;
        const valorCss = document.getElementById('cssHoras').value;
        const valorJavaScript = document.getElementById('javaScriptHoras').value;
        const valorApi = document.getElementById('apiHoras').value;
        const valorPruebas = document.getElementById('pruebasHoras').value;

        const totalHoras = (valorInterfaz * valorPorHora) + (valorHtml * valorPorHora) + (valorCss * valorPorHora) + (valorJavaScript * valorPorHora) + (valorApi * valorPorHora) + (valorPruebas * valorPorHora);

        document.getElementById("valorTotal").value = totalHoras;
    })
};

funcionPredeterminada();