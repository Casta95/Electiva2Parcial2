const loadFieldsEliminar = () => {

  const idValue = document.getElementById('id').value

  const data = {
    idDish: idValue,
  }

  return JSON.stringify(data)
}

document.getElementById('btnSendEliminar').addEventListener('click', () => {
  const URI = "https://api-dishes.vercel.app/" + document.getElementById('id').value

  fetch(URI,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: loadFieldsEliminar()
    }).then(result => result.json())
    .then(result => {
      if (result.state) {
        alert('Success!!!!')
      } else {
        alert('Ohh! Algo ha salido mal')
      }
    }).catch(err => console.log(err))
})

