require('babel-register')

console.log('Début');

/*getMember()
  .then(member => getArticles(member))
  .then(articles => console.log(articles))*/

(async () => {
    try {
        let member = await getMember()
        let articles = await getArticles(member)
    console.log(articles)
    } catch (err) {
        console.log(err.message)
    }
})()

  function getMember() {
      return new Promise ((resolve, reject) => {
          setTimeout(() => {
              resolve('Member 1')
          }, 1500)
      })
    }
      function getArticles(member) {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve([1, 2, 3])
            }, 1500)
        })
  }


console.log('fin')


