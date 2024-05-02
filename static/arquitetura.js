let his = document.getElementById("his")
let ling = document.getElementById("ling")
let lista = document.getElementById("lista")


function his_MVC(){
    if(his.innerHTML !== ""){
        his.innerHTML = "";
    }else {
        his.innerHTML = "O MVC é um padrão antigo, apresentado pela primeira vez no fim da década de 70. Tornou-se popular devido à sua aplicabilidade em soluções web e é um padrão bastante adotado por frameworks em diversas linguagens qlique aqui parta saber algumas linguagens do padrão MVC"
    }
}
function ling_MVC(){
    if(ling.innerHTML !== ""){
        ling.innerHTML = "";
    }else {
        ling.innerHTML = "<ul> <li> Spring MVC, em Java</li> <li> Ruby on Rails, em Ruby</li> <li> Django, em Python</li> <li>AngularJS, Ember, em JavaScript.</li><li>  ASP.NET MVC, em.net  </li></ul>"
    }
}
function lista_micro(){
    if(lista.innerHTML !== ""){
        lista.innerHTML = "";
    }else {
        lista.innerHTML = "<ul><li> Serviços de notificação </li> <li>Serviços de autenticação</li><li> Serviços de cache</li><li> Serviços de integração com serviços externos</li></ul>"
    }
}

