document.addEventListener('DOMContentLoaded', () => {
  const btns1 = document.querySelectorAll('.btn-1');

  btns1.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      const target = btn.getAttribute('data-target');
      const section = document.querySelector(target);
      section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', duration: 2000 });
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const btns2 = document.querySelectorAll('.btn-2');

  btns2.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      const target = btn.getAttribute('data-target');
      const section = document.querySelector(target);
      section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', duration: 2000 });
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const btns3 = document.querySelectorAll('.btn-3');

  btns3.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      const target = btn.getAttribute('data-target');
      const section = document.querySelector(target);
      section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', duration: 2000 });
    });
  });
});

document.getElementById('btnConvertir').addEventListener('click', function(event) {
  event.preventDefault();

  var valor = document.getElementById('monto').value;
  var monedaOrigen = document.getElementById('monedaOrigen').value;
  var monedaDestino = document.getElementById('monedaDestino').value;

  if (isNaN(valor) || valor === '') {
      Swal.fire({
          title: 'Este no es un valor numérico',
          customClass: {
              content: 'white-alert',
          },
      });
      return;
  }

  var conversion;
  if (monedaOrigen === monedaDestino) {
      Swal.fire({
          title: 'Selecciona un tipo de moneda distinta (Origen o destino)',
          customClass: {
              content: 'white-alert',
          },
      });
      return;
  }

  if (monedaOrigen === 'mxn') {
      if (monedaDestino === 'usd') {
          conversion = valor * 0.058; //Tipo de cambio actual 
      } else if (monedaDestino === 'eur') {
          conversion = valor * 0.053; //Tipo de cambio actual 
      } else if (monedaDestino === 'jpy') {
          conversion = valor * 8.29; //Tipo de cambio actual 
      }
  } else if (monedaOrigen === 'usd') {
      if (monedaDestino === 'mxn') {
          conversion = valor * 17.15; //Tipo de cambio actual 
      } else if (monedaDestino === 'eur') {
          conversion = valor * 0.91; //Tipo de cambio actual
      } else if (monedaDestino === 'jpy') {
          conversion = valor * 142.12; //Tipo de cambio actual 
      }
  } else if (monedaOrigen === 'eur') {
      if (monedaDestino === 'mxn') {
          conversion = valor * 22.2; //Tipo de cambio actual
      } else if (monedaDestino === 'usd') {
          conversion = valor * 1.10; //Tipo de cambio actual
      } else if (monedaDestino === 'jpy') {
          conversion = valor * 155.96 ; //Tipo de cambio actual 
      }
  } else if (monedaOrigen === 'jpy') {
      if (monedaDestino === 'mxn') {
          conversion = valor * 0.12; //Tipo de cambio actual 
      } else if (monedaDestino === 'usd') {
          conversion = valor * 0.0070; //Tipo de cambio actual 
      } else if (monedaDestino === 'eur') {
          conversion = valor * 0.0064; 
      }
  }

  Swal.fire({
      title: 'El resultado de la conversión es: ' + conversion.toFixed(2) + ' ' + monedaDestino.toUpperCase(),
      customClass: {
          content: 'white-alert',
      },
  });
});

document.getElementById('btnConvertir2').addEventListener('click', function(event) {
  event.preventDefault();

  var valor = document.getElementById('valor').value;
  var gradoOrigen = document.getElementById('gradoOrigen').value;
  var gradoDestino = document.getElementById('gradoDestino').value;

  if (isNaN(valor) || valor === '') {
    Swal.fire({
      title: 'Este no es un valor numérico',
      customClass: {
        content: 'white-alert',
      },
    });
    return;
  }

  var conversion;
  if (gradoOrigen === gradoDestino) {
    Swal.fire({
      title: 'Selecciona un tipo de grado distinto (Origen o destino)',
      customClass: {
        content: 'white-alert',
      },
    });
    return;
  }

  if (gradoOrigen === 'celsius') {
    if (gradoDestino === 'fahrenheit') {
      conversion = (valor * 9/5) + 32;
    } else if (gradoDestino === 'kelvin') {
      conversion = parseFloat(valor) + 273.15;
    }
  } else if (gradoOrigen === 'fahrenheit') {
    if (gradoDestino === 'celsius') {
      conversion = (valor - 32) * 5/9;
    } else if (gradoDestino === 'kelvin') {
      conversion = (parseFloat(valor) + 459.67) * 5/9;
    }
  } else if (gradoOrigen === 'kelvin') {
    if (gradoDestino === 'celsius') {
      conversion = parseFloat(valor) - 273.15;
    } else if (gradoDestino === 'fahrenheit') {
      conversion = (parseFloat(valor) * 9/5) - 459.67;
    }
  }

  Swal.fire({
    title: 'El resultado de la conversión es: ' + conversion.toFixed(2) + ' ' + gradoDestino.charAt(0).toUpperCase() + gradoDestino.slice(1),
    customClass: {
      content: 'white-alert',
    },
  });
});

document.getElementById('btnConvertir-3').addEventListener('click', function(event) {
  event.preventDefault();

  var valor = document.getElementById('valor').value;
  var unidadOrigen = document.getElementById('unidadOrigen').value;
  var unidadDestino = document.getElementById('unidadDestino').value;

  if (isNaN(valor) || valor === '') {
    Swal.fire({
      title: 'Este no es un valor numérico',
      customClass: {
        content: 'white-alert',
      },
    });
    return;
  }

  var conversion;
  if (unidadOrigen === unidadDestino) {
    Swal.fire({
      title: 'Selecciona una unidad de medida distinta (Origen o destino)',
      customClass: {
        content: 'white-alert',
      },
    });
    return;
  }

  if (unidadOrigen === 'metros') {
    if (unidadDestino === 'pies') {
      conversion = valor * 3.28084;
    } else if (unidadDestino === 'centimetros') {
      conversion = valor * 100;
    }
  } else if (unidadOrigen === 'pies') {
    if (unidadDestino === 'metros') {
      conversion = valor * 0.3048;
    } else if (unidadDestino === 'centimetros') {
      conversion = valor * 30.48;
    }
  } else if (unidadOrigen === 'centimetros') {
    if (unidadDestino === 'metros') {
      conversion = valor * 0.01;
    } else if (unidadDestino === 'pies') {
      conversion = valor * 0.0328084;
    }
  }

  Swal.fire({
    title: 'El resultado de la conversión es: ' + conversion.toFixed(2) + ' ' + unidadDestino.charAt(0).toUpperCase() + unidadDestino.slice(1),
    customClass: {
      content: 'white-alert',
    },
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const btnVolverArriba = document.getElementById('btnVolverArriba');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      btnVolverArriba.classList.add('show');
    } else {
      btnVolverArriba.classList.remove('show');
    }
  });

  btnVolverArriba.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
  