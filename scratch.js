import nlp from './src/index.js'

// nlp.verbose('tagger')

// https://www.langeasy.com/italiansongs1en/
let txt = ''

txt = `Con l'autoradio sempre nella mano destra`
txt = `Il libro dell’insegnante`
txt = `sedicesimo`
txt = `lui corre rapidamente `
txt = 'Sto venendo ora dall’ufficio'//I’m coming from the office
txt = 'Il treno è arrivato ora da Milano'//The train just arrived from Milan
txt = 'Nel pomeriggio vado da Marco'//In the afternoon I’ll go to Marco’s place
txt = 'Come ti chiami?'
txt = 'abballotti'
// all’
// nell’
// sull’


let doc = nlp(txt)
// // doc.compute('root')
doc.debug()
// import data from '/Users/spencer/mountain/it-compromise/data/models/verbs/present-tense.js'
// let arr = Object.keys(data)
// console.log(JSON.stringify(arr, null, 2))
