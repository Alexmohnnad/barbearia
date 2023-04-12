
/*function pad(valor) { // completa com zeros à esquerda, caso necessário
  return valor.toString().padStart(2, '0');
}

function formata(data) {
  return `${data.getFullYear()}-${pad(data.getMonth() + 1)}-${pad(data.getDate())}`;
}

const campo = document.querySelector('#horario');

window.addEventListener('DOMContentLoaded', function () {
  var data = new Date(); // data de hoje
  campo.min = formata(data);
  // 2 anos à frente
  data.setFullYear(data.getFullYear() + 2);
  campo.max = formata(data);
});

// mensagens de validação
campo.addEventListener('input', () => {
  campo.setCustomValidity('');
  campo.checkValidity();
});

// se tentar submeter o form com data fora do intervalo, mostra o erro
campo.addEventListener('invalid', () => {
  campo.setCustomValidity('A data deve estar entre hoje e 2 anos à frente');
});




$(function () {
  jQuery.datetimepicker.setLocale('pt-BR');
  $('.horario').datetimepicker({
    format: 'd/m/Y H:i',
    allowTimes: ['10:00', '10:30', '11:00', '11:30', '12:00',
      '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'],
    beforeShowDay: function (date) {
      var day = date.getDay();
      return [(day != 0 && day != 1)];
    }
  });
});*/
//função do menu lateral 
$(function menu() {
  var menu_width = 290;
  var menu = $(".menu");
  var menu_open = $(".menu-open");
  var menu_close = $(".menu-close");
  var overlay = $(".overlay");
 
  menu_open.click(function (e) {
    e.preventDefault();
    menu.css({"right": "0px"});
    overlay.css({"opacity": "1", "width": "100%"});
  });
  
  menu_close.click(function (e) {
    e.preventDefault();
    menu.css({"right": "-" + menu_width + "px"});
    overlay.css({"opacity": "0", "width": "0"});
  });
 });
//função bloquear horario
//teste de comit
