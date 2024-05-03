function des_cfsoa() {
    var servicos = document.getElementById('leg_cfsoa');
    if (servicos) {
        if (servicos.innerHTML !== "") {
            servicos.innerHTML = "";
        } else {
           servicos.innerHTML ="<ul><li>Antes do surgimento da SOA, no final da década de 1990, a conexão de uma aplicação a serviços em outro sistema era um processo complexo que envolvia integração point-to-point (P2P) - conectividade, roteamento, modelos de tradução de dados etc. Em cada projeto novo, os desenvolvedores precisavam recriar essa integração. Esse modelo era conhecido como 'monolítico' porque o código da aplicação inteira era incorporado a uma implantação. Se apenas um aspecto da aplicação não funcionasse corretamente, seria necessário colocar tudo offline temporariamente para fazer as devidas correções e depois implantar a aplicação de novo como uma nova versão.Ao expor serviços usando protocolos de rede padrão, como SOAP, JSON, ActiveMQ ou Apache Thrift, para enviar solicitações ou acessar dados, a SOA facilita a vida dos desenvolvedores, pois eles não precisam fazer a integração do zero.</li> Em vez disso, eles podem usar padrões chamados enterprise service buses (ESBs), que realizam a integração entre um componente central e sistemas de back-end e depois os tornam acessíveis como interfaces de serviços. Isso também ajuda os desenvolvedores a reutilizar funções existentes, em vez de recriá-las.No estilo de arquitetura orientada a serviços, a comunicação entre os serviços é realizada por um sistema de 'baixo acoplamento'. Essa é uma maneira de interconectar componentes, também chamados de 'elementos', em um sistema ou rede para transmitirem informações ou coordenem processos empresariais e reduzam as dependências entre eles. Efetivamente, isso cria uma aplicação nova</li></ul>"
        }
    }
}
function des_fssoa() {
    var servicos = document.getElementById('leg_fssoa');
    if (servicos) {
        if (servicos.innerHTML !== "") {
            servicos.innerHTML = "";
        } else {
           servicos.innerHTML ="<ul><li>A base de uma arquitetura orientada a serviço é constituída de três funções.Provedor de serviçosUm provedor de serviços cria serviços web e os oferece para um registro de serviços. Ele é responsável pelos termos de uso desse serviço.Broker ou registro de serviçosUm broker de serviços ou registro de serviços é responsável por oferecer informações solicitadas sobre o serviço. O broker pode ser público ou privado.Solicitante ou cliente de serviços Um solicitante de serviços encontra um serviço no broker ou no registro de serviços. Então, conecta-se ao provedor de serviços para recebê-lo.</li></ul>"
        }
    }
}
