import lexData from './_data.js'
import { unpack } from 'efrt'
// import conjugate from '../methods/conjugate.js'
import misc from './misc.js'

const tagMap = {
  first: 'FirstPerson',
  second: 'SecondPerson',
  third: 'ThirdPerson',
  firstPlural: 'FirstPersonPlural',
  secondPlural: 'SecondPersonPlural',
  thirdPlural: 'ThirdPersonPlural',
}

let words = {}
Object.keys(lexData).forEach(tag => {
  let wordsObj = unpack(lexData[tag])
  Object.keys(wordsObj).forEach(w => {
    words[w] = tag

    // expand
    if (tag === 'Cardinal') {
      words[w] = ['TextValue', 'Cardinal']
    }
    if (tag === 'Ordinal') {
      words[w] = ['TextValue', 'Ordinal']
    }
    if (tag === 'Infinitive') {
      // do future-tense
      // let res = conjugate.futureTense(w)
      // Object.keys(res).forEach(k => {
      //   if (!words[res[k]]) {
      //     words[res[k]] = [tagMap[k], 'FutureTense']
      //   }
      // })
      // // do present-tense
      // res = conjugate.presentTense(w)
      // Object.keys(res).forEach(k => {
      //   if (!words[res[k]]) {
      //     words[res[k]] = [tagMap[k], 'PresentTense']
      //   }
      // })
      // // do imperfect mood
      // res = conjugate.imperfect(w)
      // Object.keys(res).forEach(k => words[res[k]] = 'Verb')
      // // past-participle
      // let out = conjugate.pastParticiple(w)
      // words[out] = 'PastTense'
    }
  })
})

let lexicon = Object.assign({}, words, misc)
// console.log(Object.keys(lexicon).length.toLocaleString(), 'words')
// console.log(lexicon['suis'])
export default lexicon