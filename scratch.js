import nlp from './src/index.js'

nlp.verbose('tagger')
let txt = ''
txt = `Il libro dell’insegnante`
txt = `sedicesimo`
txt = `lui corre rapidamente `
txt = 'Sto venendo ora dall’ufficio'//I’m coming from the office
txt = 'Il treno è arrivato ora da Milano'//The train just arrived from Milan
txt = 'Nel pomeriggio vado da Marco'//In the afternoon I’ll go to Marco’s place
txt = 'ventuno candeline'

/*


* Una retirada repentina {repentino} //adj
* di stato furono assassinati  {assassinare} //verb
  *  è stato assassinato
  * 
* dovresti fissarla {fissare} //verb
  * ma è pericoloso fissarlo

*  in particolare erano allarmanti e sono stati {allarmante} //adj
*/

txt = ' diecimila'
let doc = nlp(txt).debug()
doc.compute('root')
console.log()
// console.log(doc.docs[0])
doc.match('{massiccio}').debug()