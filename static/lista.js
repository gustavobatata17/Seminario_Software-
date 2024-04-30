function clicar1(){
    let texto1 = document.getElementById('texto1');
  
    if (texto1) {
    
      if (texto1.innerHTML !== "") {
     
        texto1.innerHTML = "";
      } else {
        texto1.innerHTML = "<p  >   Divida o software em componentes independentes que lidem com preocupações específicas. Isso facilita a manutenção e a evolução do software.</p>";
      }
    }
  }

  function clicar2(){
    let texto2 = document.getElementById('texto2');
  
    if (texto2) {
    
      if (texto2.innerHTML !== "") {
        texto2.innerHTML = "";
      } else {
        texto2.innerHTML = "<p>Cada classe ou módulo deve ter apenas uma razão para mudar. Isso promove a coesão e reduz o acoplamento.</p>";
      }
    }
  }

  function clicar3(){
    let texto3 = document.getElementById('texto3');
  
    if (texto3) {
    
      if (texto3.innerHTML !== "") {
     
        texto3.innerHTML = "";
      } else {
        texto3.innerHTML = "<p>Entidades de software devem ser abertas para extensão, mas fechadas para modificação. Isso significa que você pode estender o comportamento de uma classe sem modificar seu código-fonte.</p>";
      }
    }
  }

  function clicar4(){
    let texto4 = document.getElementById('texto4');
  
    if (texto4) {
    
      if (texto4.innerHTML !== "") {
     
        texto4.innerHTML = "";
      } else {
        texto4.innerHTML = "<p>Objetos de uma superclasse devem ser substituíveis por objetos de suas subclasses sem afetar a integridade do programa.</p>";
      }
    }
  }
  
  function clicar5(){
    let texto5 = document.getElementById('texto5');
  
    if (texto5) {
    
      if (texto5.innerHTML !== "") {
     
        texto5.innerHTML = "";
      } else {
        texto5.innerHTML = "<p>Clientes não devem ser forçados a depender de interfaces que não utilizam. Em vez disso, interfaces específicas devem ser fornecidas para cada cliente.</p>";
      }
    }
  }
  
  function clicar6(){
    let texto6 = document.getElementById('texto6');
  
    if (texto6) {
    
      if (texto6.innerHTML !== "") {
     
        texto6.innerHTML = "";
      } else {
        texto6.innerHTML = "<p>Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações. Além disso, detalhes de implementação devem depender de abstrações.</p>";
      }
    }
  }

  function clicar7(){
    let texto7 = document.getElementById('texto7');
  
    if (texto7) {
    
      if (texto7.innerHTML !== "") {
     
        texto7.innerHTML = "";
      } else {
        texto7.innerHTML = "<p> Evite repetir o mesmo código em diferentes partes do sistema. Isso promove a reutilização, facilita a manutenção e reduz erros.</p>";
      }
    }
  }

  function clicar8(){
    let texto8 = document.getElementById('texto8');
  
    if (texto8) {
    
      if (texto8.innerHTML !== "") {
     
        texto8.innerHTML = "";
      } else {
        texto8.innerHTML = "<p>Mantenha o design do software simples e direto. Evite soluções complexas quando uma solução simples é suficiente.</p>";
      }
    }
  }
  
  function clicar9(){
    let texto9 = document.getElementById('texto9');
  
    if (texto9) {
    
      if (texto9.innerHTML !== "") {
     
        texto9.innerHTML = "";
      } else {
        texto9.innerHTML = "<p>Não adicione funcionalidades ao software até que sejam necessárias. Isso evita o desperdício de tempo e esforço em recursos que podem nunca ser usados.</p>";
      }
    }
  }

  function clicar10(){
    let texto10 = document.getElementById('texto10');
  
    if (texto10) {
    
      if (texto10.innerHTML !== "") {
     
        texto10.innerHTML = "";
      } else {
        texto10.innerHTML = "<p>Projete o software de forma que seja fácil de testar. Isso inclui a escrita de código limpo, modular e a utilização de técnicas como injeção de dependência para facilitar a escrita de testes automatizados.</p>";
      }
    }
  }

  function clicar11(){
    let texto11 = document.getElementById('texto11');
  
    if (texto11) {
    
      if (texto11.innerHTML !== "") {
     
        texto11.innerHTML = "";
      } else {
        texto11.innerHTML = "<p>Mantenha a documentação e os comentários atualizados e claros. Isso ajuda os desenvolvedores a entenderem o propósito e o funcionamento do código.</p>";
      }
    }
  }

  function clicar12(){
    let texto12 = document.getElementById('texto12');
  
    if (texto12) {
    
      if (texto12.innerHTML !== "") {
     
        texto12.innerHTML = "";
      } else {
        texto12.innerHTML = "<p> Familiarize-se com padrões de design de software comuns, como Singleton, Factory, Strategy, Observer, entre outros. Esses padrões fornecem soluções comprovadas para problemas recorrentes no design de software.</p>";
      }
    }
  }

  function clicar(numero){
    let texto = document.getElementById(`texto${numero}`);
  
    if (texto) {
      if (texto.classList.contains("mostrar")) {
        texto.classList.remove("mostrar");
      } else {
        // Adiciona a classe para mostrar a descrição
        texto.classList.add("mostrar");
      }
    }
}
