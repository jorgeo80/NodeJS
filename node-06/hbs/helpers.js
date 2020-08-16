const hbs = require('hbs')

hbs.registerHelper('getYear', () => {
  return new Date().getFullYear()
})

hbs.registerHelper('capitalizer', (text) => {
  let words = text.split(' ')
  words.forEach((word, ix) => {
    words[ix] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  });
  return words.join(' ')
})
