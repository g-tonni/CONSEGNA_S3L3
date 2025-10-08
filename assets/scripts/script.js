const form = document.getElementById('form-spesa')
form

const deleteP = function (e) {
  e.target.parentElement.remove()
}

const aggProdotto = function (e) {
  e.preventDefault()
  console.log('PER ORA FUNZIONA')

  const prodottoInserito = document.getElementById('prodotto')

  let prodottoVal = prodottoInserito.value
  console.log(prodottoVal)

  let prodottoValSistemato =
    prodottoVal.charAt().toUpperCase() + prodottoVal.slice(1).toLowerCase()

  const container = document.createElement('div')
  container.innerHTML = `<li class="linea">${prodottoValSistemato}</li> <hr> <button onclick="deleteP(event)" class="bottone-elimina">ELIMINA</>`

  const lineaCanc = document.getElementsByClassName('linea')
  console.log(lineaCanc)
  for (let i = lineaCanc.length - 1; i > -1; i--) {
    lineaCanc[i].addEventListener('click', function () {
      lineaCanc[i].style.textDecoration = 'line-through'
      lineaCanc[i].style.cursor = 'pointer'
    })
  }

  const listaS = document.getElementById('lista')
  listaS.appendChild(container)
  console.log(listaS)
  form.reset()
}

form.addEventListener('submit', aggProdotto)
