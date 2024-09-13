document.getElementById("copyButton").addEventListener("click", function() {
  // Obtém o URL atual
  const currentUrl = window.location.href;
  // Copia o URL para o clipboard
  navigator.clipboard.writeText(currentUrl).then(function() {
      // Exibe uma mensagem de sucesso
      document.getElementById("copyFeedback").textContent = "O link da vaga foi copiado!";
      // Define um timeout para remover a mensagem após 3 segundos
      setTimeout(function() {
        copyFeedback.textContent = "";
      }, 3000);
  }, function(err) {
      // Exibe uma mensagem de erro, se houver
      document.getElementById("copyFeedback").textContent = "Por algum motivo o link não foi copiado :(";
      console.error("Erro ao copiar o URL: ", err);
      setTimeout(function() {
        copyFeedback.textContent = "";
      }, 3000);
  });
});