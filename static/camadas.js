function des_apresentar() {
    var apresenta = document.getElementById('leg_apresentar');
    if (apresenta) {
        if (apresenta.innerHTML !== "") {
            apresenta.innerHTML = "";
        } else {
            apresenta.innerHTML = "<ul><li>Interface do usuário (UI): Páginas da web, aplicativos móveis, interfaces gráficas de desktop.</li><li>Responsável por apresentar informações aos usuários e receber entrada deles.</li></ul>";
        }
    }
}

function des_logica() {
    var logica = document.getElementById('leg_logica');
    if (logica) {
        if (logica.innerHTML !== "") {
            logica.innerHTML = "";
        } else {
            logica.innerHTML = "<ul><li>Processa e manipula dados.</li><li>Implementa a lógica de negócios da aplicação.</li><li>Pode incluir serviços, controladores, classes de negócios, etc.</li></ul>";
        }
    }
}

function des_dados() {
    var dados = document.getElementById('leg_dados');
    if (dados) {
        if (dados.innerHTML !== "") {
            dados.innerHTML = "";
        } else {
            dados.innerHTML = "<ul><li>Responsável por interagir com o banco de dados ou outros sistemas de armazenamento de dados.</li> <li>Realiza operações CRUD (Create, Read, Update, Delete) no banco de dados.</li><li>Pode incluir classes de acesso a dados, mapeadores de objeto-relacional (ORM), etc.</li></ul>";
        }
    }
}
function des_infraestrutura() {
    var infraestrutura = document.getElementById('leg_infraestrutura');
    if (infraestrutura) {
        if (infraestrutura.innerHTML !== "") {
            infraestrutura.innerHTML = "";
        } else {
           infraestrutura.innerHTML = "<ul><li>Fornece suporte para as outras camadas.</li><li>Inclui componentes como logging, autenticação, autorização, gerenciamento de configuração, etc.</li><li>Pode abranger bibliotecas e frameworks utilizados em toda a aplicação.</li></ul>"
        }
    }
}

function des_servicos() {
    var servicos = document.getElementById('leg_servicos');
    if (servicos) {
        if (servicos.innerHTML !== "") {
            servicos.innerHTML = "";
        } else {
           servicos.innerHTML ="<ul><li>Fornece funcionalidades reutilizáveis para diferentes partes da aplicação.</li><li>Pode ser usado para expor serviços via API para comunicação com outras aplicações.</li></ul>"
        }
    }
}

function des_seguranca() {
    var seguranca = document.getElementById('leg_seguranca');
    if (seguranca) {
        if (seguranca.innerHTML !== "") {
            seguranca.innerHTML = "";
        } else {
           seguranca.innerHTML = "<ul> <li>Lida com questões relacionadas à segurança, como autenticação, autorização, criptografia, etc.</li> <li>Pode ser uma camada separada ou integrada com outras camadas, dependendo da complexidade das necessidades de segurança.</li></ul>"
        }
    }
}