import { ProxyState } from "../AppState.js";
import { Alligator, Bullfrog, Cheetah, Dragon, Elephant, Falcon, Gazelle, Hippopotamus, Iguana, Jackal, Kangaroo, Leopard, Magpie, Narwal, Ocelot, Pirahana, Quail, Rhino, Snake, Triceritops, Unicorn, Velociraptor, Whale, Xerus, Yak, Zebra } from "../Models/Animals.js";
import { Value } from "../Models/Value.js";

let Animal1 = new Alligator('Daddy Warbucks', 'green', 'male', 'over 9000', '10 inches', 'small', 'growl', 'meat')
let Animal2 = new Bullfrog('Jeremiah', 'blue', 'male', '2 lbs.', '1 inch', 'none', 'ribbit', 'insects')
let Animal3 = new Cheetah('Charlie', 'spotted', 'female', '200 lbs.', '30 inches', 'large', 'growl', 'meat')
let Animal4 = new Dragon('Smaug', 'grey', 'male', 'over 9000', '1000 inches', 'very large', 'shriek', 'gold')
let Animal5 = new Elephant('Emily', 'grey', 'female', '850 lbs', '40 inches', 'medium', 'trumpet', 'plants')
let Animal6 = new Falcon('Frank', 'brown', 'male', '20 lbs.', 'none', 'none', 'ca-caw', 'rats')
let Animal7 = new Gazelle('Gary', 'light brown', 'male', '180lbs.', '10 inches', 'smol', 'belch', 'herbs')
let Animal8 = new Hippopotamus('Hannah', 'grey', 'female', 'much', 'tiny', 'large', 'waaaaaaaa', 'leaves')
let Animal9 = new Iguana('Carl', 'green', 'male', 'smol', '5 inches', 'small', 'blep', 'insects')
let Animal10 = new Jackal('Julia', 'brown', 'female', '30 lbs.', '10 inches', 'small', 'howl', 'meat')
let Animal11 = new Kangaroo('Kyle', 'brown', 'male', '100 lbs.', '10 inches', 'small', 'grunts', 'leaves')
let Animal12 = new Leopard('Latisha', 'green', 'female', '130lbs', '12 inches', 'medium', 'growl', 'meat')
let Animal13 = new Magpie('Marcus', 'black & white', 'male', '3 lbs', 'none', 'none', 'ca-caaw', 'nuts & seeds')
let Animal14 = new Narwal('Nancy', 'blue', 'female', 'much', '100 inches', 'large', 'oof', 'fish')
let Animal15 = new Ocelot('Oscar', 'white', 'male', '30 lbs', '14 inches', 'medium', 'growl', 'meat')
let Animal16 = new Pirahana('Priscilla', 'blue', 'female', '0.005 lbs', '1 inch', 'large', 'webgerbrglb', 'meat')
let Animal17 = new Quail('Donald', 'green', 'male', '3 lbs', 'none', 'none', 'squeak', 'nuts n seeds')
let Animal18 = new Rhino('Rihanna', 'grey', 'female', 'much', '40 inches', 'large', 'wrbwrwrgbbll', 'dessert')
let Animal19 = new Snake('Snoop', 'green', 'male', '2 lbs', 'is tail', 'smol', 'psspspsspspsps', 'rats')
let Animal20 = new Triceritops('Thomas', 'orange', 'male', 'much', 'long', 'large', 'raawwwwwar', 'meat')
let Animal21 = new Unicorn('Henry', 'rainbow', 'both', 'the mass of a black hole', 'all lengths', 'all sizes', 'eachoing neigh')
let Animal22 = new Velociraptor('Veronica', 'brown', 'female', 'some', '30 inches', 'large', 'squawwwww', 'meat')
let Animal23 = new Whale('Winston', 'blue', 'male', 'much', '300 inches', 'large', 'bbbuuuuuooooooooo', 'fish')
let Animal24 = new Xerus('Xander', 'light brown', 'male', 'much', '15 inches', 'small', 'squeak', 'nuts & seeds')
let Animal25 = new Yak('Earl', 'brown', 'male', '200 lbs', '20 inches', 'medium', 'muuUUUH', 'herbs')
let Animal26 = new Zebra('Dougie', 'striped', 'female', '100 lbs', '40 inches', 'medium', 'ehehhhhheh', 'grass')


let allAnimals = [Animal1, Animal2, Animal3, Animal4, Animal5, Animal6, Animal7, Animal8, Animal9, Animal10, Animal11, Animal12, Animal13, Animal14, Animal15, Animal16, Animal17, Animal18, Animal19, Animal20, Animal21, Animal22, Animal23, Animal24, Animal25, Animal26]

class ValuesService {

  feedAnimals() {
    let template = ''
    allAnimals.forEach(a => a.feed())
    allAnimals.forEach(a => template += a.animalTemplate)
    console.log(template)
  }


  addValue() {
    ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
  removeValue(id) {
    const values = ProxyState.values.filter(v => v.id !== id)
    ProxyState.values = values
  }
}

export const valuesService = new ValuesService();

