//Requisição AJAX https://randomuser.me/api/

var btn = document.querySelector('#button')

btn.addEventListener('click', geraUser)

function geraUser(e) {
  e.preventDefault()
  var req = new XMLHttpRequest() //cria uma nova instância do XMLHttpRequest()

  req.open('GET', 'https://randomuser.me/api/') // Abre uma nova requisição => (tipo de requisição, endereço)

  req.onreadystatechange = function () {
    //quando o estado da requisição mudar, execute a função
    if (req.readyState === 4) {
      //quando a requisição estive pronta verifique se ela está com o código 4 (significa que a requisição foi concluída)
      var data = JSON.parse(req.responseText)
      console.log(data.results[0])

      addUser(data)
    }
  }
  req.send() //envia a requisição
}

function addUser(user) {
  var usuario = user
  var infoUser = usuario.results[0]
  var img = document.querySelector('#userImg')
  var name = document.querySelector('#userName')
  var email = document.querySelector('#userEmail')

  img.src = `${infoUser.picture.large}`
  name.innerText = `${infoUser.name.first} ${infoUser.name.last}`
  email.innerText = `${infoUser.email}`
}
