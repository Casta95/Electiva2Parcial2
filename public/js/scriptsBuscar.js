
function loadDataById(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://api-dishes.vercel.app`)
      .then(result => result.json())
      .then(result => {
        for (let i = 0; i < result.data.length; i++) {
          if (result.data[i].idDish === id) {
            resolve(result.data[i])
          }
        }
      })
      .catch(err => reject(err))
  })
}

document.getElementById('btnSendBuscar').addEventListener('click', () => {
  const URI = "https://api-dishes.vercel.app/" + document.getElementById('objectId').value

  fetch(URI,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(result => result.json())
    .then(result => {
      if (result.state) {
        document.getElementById('dataFound').innerHTML = result.data._id + '; ' + result.data.name + '; ' + result.data.calories + '; ' + result.data.isVegetarian + '; ' + result.data.value + '; ' + result.data.comments
      } else {
        alert('Ohh! Algo ha salido mal')
      }
    }).catch(err => console.log(err))
})

