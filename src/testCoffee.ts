import { Coffee } from "./components/FlavorMeter";

const testCoffee: Coffee = {
  name: 'Diamante Perez',
  price: '19.45',
  origin: 'Guatemala',
  region: 'Huehuetenango',
  locality: 'Agua Dulce',
  farm: 'El Diamante',
  producer: 'Patricia Perez Diaz',
  altitude: "6200'",
  variety: 'Red Bourbon & Caturra',
  process: 'Washed, sun dried',
  roast: 'Light',
  flavorLevels: {
    chocolate: 4,
    spice: 2,
    nut: 1,
    herb: 1,
    flower: 3,
    fruit: 2,
    caramel: 2,
  },
  description: 'Perfume aroma with dark chocolate character, vibrant lemon and berry tones accentuated with subtle tropical flavors of pineapple and mango. A Huehuetenango powerhouse filled with fruit tones and Zinfandel structure.'
}

export default testCoffee;