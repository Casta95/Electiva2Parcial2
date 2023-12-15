function loadData() {
  return new Promise((resolve, reject) => {
    fetch('https://api-dishes.vercel.app')
      .then(result => result.json())
      .then(result => resolve(result))
      .catch(err => reject(err))
  })
}

const loadFields = () => {

  const idValue = document.getElementById('id').value
  const nameValue = document.getElementById('name').value
  const caloriesValue = document.getElementById('calories').value
  const isVegetarianValue = document.getElementById('isVegetarian').checked
  const valueValue = document.getElementById('value').value
  const commentsValue = document.getElementById('comments').value

  const data = {
    idDish: idValue,
    name: nameValue,
    calories: caloriesValue,
    isVegetarian: isVegetarianValue === 'true' ? true : false,
    value: valueValue,
    comments: commentsValue
  }

  return JSON.stringify(data)
}

document.getElementById('btnSendCrear').addEventListener('click', () => {
  const URI = "https://api-dishes.vercel.app"

  fetch(URI,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: loadFields()
    }).then(result => result.json())
    .then(result => {
      if (result.state) {
        alert('Success!!!!')
      } else {
        alert('Ohh! Algo ha salido mal')
      }
    }).catch(err => console.log(err))
})

