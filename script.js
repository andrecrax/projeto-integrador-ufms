const paginas = {
  inicio: `
    <h2 class="text-3xl font-semibold mb-4">Descarte eletrônico consciente</h2>
    <p class="max-w-2xl mx-auto mb-8">
      Facilite o descarte de resíduos eletrônicos de forma sustentável.
      Cadastre-se, encontre um ponto de coleta próximo ou agende uma coleta domiciliar.
    </p>
    <div class="flex justify-center gap-6">
      <button onclick="mostrarPagina('login')" class="btn-principal">Cadastrar</button>
      <button onclick="mostrarPagina('login')" class="btn-secundario">Entrar</button>
    </div>
  `,

  pontos: `
    <h2 class="text-3xl font-semibold mb-6">Pontos de Coleta</h2>
    <p class="mb-8 text-gray-700">Encontre locais próximos para descartar seus resíduos eletrônicos com segurança.</p>
    <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <div class="card-ponto">
        <h3>EcoTech Recicla</h3>
        <p>Rua das Flores, 120 - Centro</p>
        <p>Horário: 8h às 18h</p>
      </div>
      <div class="card-ponto">
        <h3>Ponto Verde</h3>
        <p>Avenida Brasil, 345 - Bairro Novo</p>
        <p>Horário: 9h às 17h</p>
      </div>
      <div class="card-ponto">
        <h3>ReEletro</h3>
        <p>Rua São José, 45 - Industrial</p>
        <p>Horário: 10h às 19h</p>
      </div>
    </div>
  `,

  agendar: `
    <h2 class="text-3xl font-semibold mb-6">Agendar Coleta</h2>
    <form class="formulario">
      <label>Nome completo:</label>
      <input type="text" placeholder="Digite seu nome">

      <label>Endereço:</label>
      <input type="text" placeholder="Rua, número, bairro">

      <label>Tipo de resíduo:</label>
      <select>
        <option>Computador</option>
        <option>Celular</option>
        <option>Televisor</option>
        <option>Outros</option>
      </select>

      <label>Peso estimado (kg):</label>
      <input type="number" placeholder="Ex: 2.5">

      <label>Data da coleta:</label>
      <input type="date">

      <button type="button" onclick="alert('Coleta agendada com sucesso!'); mostrarPagina('inicio');" class="btn-principal w-full">
        Agendar Coleta
      </button>
    </form>
  `,

  login: `
    <h2 class="text-3xl font-semibold mb-6">Acesse sua conta</h2>
    <form class="formulario">
      <label>E-mail:</label>
      <input type="email" placeholder="Digite seu e-mail">

      <label>Senha:</label>
      <input type="password" placeholder="Digite sua senha">

      <button type="button" onclick="alert('Login realizado com sucesso!'); mostrarPagina('inicio');" class="btn-principal w-full mb-4">
        Entrar
      </button>

      <p class="text-center text-sm">Ainda não tem conta?
        <a href="#" onclick="mostrarPagina('cadastro')" class="text-green-700 font-semibold hover:underline">Cadastre-se</a>
      </p>
    </form>
  `,

  cadastro: `
    <h2 class="text-3xl font-semibold mb-6">Crie sua conta</h2>
    <form class="formulario">
      <label>Nome completo:</label>
      <input type="text">

      <label>E-mail:</label>
      <input type="email">

      <label>Telefone:</label>
      <input type="tel">

      <label>Senha:</label>
      <input type="password">

      <button type="button" onclick="alert('Cadastro realizado com sucesso!'); mostrarPagina('inicio');" class="btn-principal w-full">
        Cadastrar
      </button>
    </form>
  `
};

function mostrarPagina(pagina) {
  const conteudo = document.getElementById("conteudo");
  conteudo.classList.add("opacity-0");

  setTimeout(() => {
    conteudo.innerHTML = paginas[pagina];
    conteudo.classList.remove("opacity-0");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 200);
}

document.addEventListener("DOMContentLoaded", () => mostrarPagina('inicio'));
