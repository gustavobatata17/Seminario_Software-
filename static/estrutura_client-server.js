function des_cliente() {
    var apresenta = document.getElementById('leg_cliente');
    if (apresenta) {
        if (apresenta.innerHTML !== "") {
            apresenta.innerHTML = "";
        } else {
            apresenta.innerHTML = "<ul><li>Em uma infraestrutura cliente-servidor, cliente é um dispositivo de computação, como desktops, laptops, smartphones, tablets ou aplicativos que, através de protocolos de rede se conectam a servidores para fazer uma solicitação de serviço ou recurso e aguarda a resposta. </li></ul>";
        }
    }
}

function des_servidor() {
    var logica = document.getElementById('leg_servidor');
    if (logica) {
        if (logica.innerHTML !== "") {
            logica.innerHTML = "";
        } else {
            logica.innerHTML = "<ul><li>Já o servidor é o componente do sistema que fornece os serviços ou recursos solicitados pelos clientes. Estes servidores podem ser um computador projetado especificamente para gerenciar e fornecer serviços aos clientes, ou ainda, um software que é executado em um servidor de rede.</li></ul>";
        }
    }
}

function des_rede() {
    var dados = document.getElementById('leg_rede');
    if (dados) {
        if (dados.innerHTML !== "") {
            dados.innerHTML = "";
        } else {
            dados.innerHTML = "<ul><li>A rede é a infraestrutura que conecta os clientes ao servidor. Ela pode ser local, como uma rede de área local (LAN), ou global, como a internet</li></ul>";
        }
    }
}
function des_comuni() {
    var infraestrutura = document.getElementById('leg_comuni');
    if (infraestrutura) {
        if (infraestrutura.innerHTML !== "") {
            infraestrutura.innerHTML = "";
        } else {
           infraestrutura.innerHTML = "<ul><li>Os protocolos de comunicação trata-se de um conjunto de regras e procedimentos que regem a comunicação entre o cliente e o servidor. Entre os protocolos mais comuns estão o HTTP (Hypertext Transfer Protocol) usado na web, o SMTP (Simple Mail Transfer Protocol) usado no e-mail e o FTP (File Transfer Protocol) usado para transferir arquivos.</li></ul>"
        }
    }
}

function des_BD() {
    var servicos = document.getElementById('leg_BD');
    if (servicos) {
        if (servicos.innerHTML !== "") {
            servicos.innerHTML = "";
        } else {
           servicos.innerHTML ="<ul><li> O banco de dados é um componente opcional em uma estrutura cliente-server e pode ser usado pelo servidor para armazenar e gerenciar dados usados pelos clientes. Estes dados, podem incluir informações do usuário, de aplicativos ou informações críticas de negócios.</li></ul>"
        }
    }
}

function des_API() {
    var seguranca = document.getElementById('leg_API');
    if (seguranca) {
        if (seguranca.innerHTML !== "") {
            seguranca.innerHTML = "";
        } else {
           seguranca.innerHTML = "<ul> <li>Trata-se de uma camada de software que permite que os aplicativos se comuniquem com o servidor e acessem seus serviços ou recursos. As APIs podem ser usadas para desenvolver aplicativos personalizados que se integram facilmente com o servidor.</li></ul>"
        }
    }
}
function des_DT() {
    var apresenta = document.getElementById('leg_DT');
    if (apresenta) {
        if (apresenta.innerHTML !== "") {
            apresenta.innerHTML = "";
        } else {
            apresenta.innerHTML = "<ul><li> A estrutura cliente-servidor permite que as tarefas sejam distribuídas entre o cliente, que solicita os serviços e recursos, e o servidor, que gerencia e fornece esses serviços e recursos.</li></ul>";
        }
    }
}

function des_CBM() {
    var logica = document.getElementById('leg_CBM');
    if (logica) {
        if (logica.innerHTML !== "") {
            logica.innerHTML = "";
        } else {
            logica.innerHTML = "<ul><li>A comunicação entre o cliente e o servidor é baseada em trocas de mensagens, em que o cliente envia uma solicitação e o servidor retorna com uma resposta. Essa comunicação pode ser do tipo síncrona ou assíncrona.</li><li>A comunicação síncrona ocorre quando o cliente aguarda a resposta do servidor antes de continuar a executar outras ações. Já a comunicação assíncrona permite que o cliente continue executando outras tarefas enquanto aguarda a resposta do servidor.</li></ul>";
        }
    }
}

function des_Esca() {
    var dados = document.getElementById('leg_Esca');
    if (dados) {
        if (dados.innerHTML !== "") {
            dados.innerHTML = "";
        } else {
            dados.innerHTML = "<ul><li>Uma estrutura cliente-servidor é escalável, o que significa que é possível adicionar mais clientes ou servidores para atender a um número maior de solicitações ou para lidar com cargas de trabalho mais pesadas.</li></ul>";
        }
    }
}
function des_Centra() {
    var infraestrutura = document.getElementById('leg_Centra');
    if (infraestrutura) {
        if (infraestrutura.innerHTML !== "") {
            infraestrutura.innerHTML = "";
        } else {
           infraestrutura.innerHTML = "<ul><li> Essa estrutura pode ser centralizada, o que significa que o servidor é responsável por gerenciar os recursos compartilhados. Isso pode permitir uma maior eficiência e segurança no gerenciamento de recursos.</li></ul>"
        }
    }
}

function des_Confi() {
    var servicos = document.getElementById('leg_Confi');
    if (servicos) {
        if (servicos.innerHTML !== "") {
            servicos.innerHTML = "";
        } else {
           servicos.innerHTML ="<ul><li>A estrutura client-server é geralmente mais confiável do que outras estruturas, pois o servidor é capaz de monitorar e gerenciar as solicitações de clientes para garantir que todas as solicitações sejam atendidas.</li></ul>"
        }
    }
}

function des_Reu() {
    var seguranca = document.getElementById('leg_Reu');
    if (seguranca) {
        if (seguranca.innerHTML !== "") {
            seguranca.innerHTML = "";
        } else {
           seguranca.innerHTML = "<ul> <li>Com esta estrutura, é possível reutilizar o código em diferentes aplicativos e serviços, o que pode aumentar a eficiência no desenvolvimento de software.</li></ul>"
        }
    }
}
function des_CA() {
    var seguranca = document.getElementById('leg_CA');
    if (seguranca) {
        if (seguranca.innerHTML !== "") {
            seguranca.innerHTML = "";
        } else {
           seguranca.innerHTML = "<ul> <li>A estrutura cliente-servidor pode incluir recursos para controle de acesso, permitindo que o servidor gerencie o acesso a recursos específicos para diferentes usuários ou grupos de usuários.</li></ul>"
        }
    }
}