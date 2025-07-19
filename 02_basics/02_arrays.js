const marvel_heros = ["thor","Ironman", "spiderman"]
const dc_heros = ["superman","dlash", "batamn"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

//let allhero = marvel_heros.concat(dc_heros)
//console.log(allhero);

const all_new_hero = [...marvel_heros,...dc_heros]
//console.log(all_new_hero);

const another_array = [1,2,3[4,5,6],7,[6,[9]]]
// const real=another_array.flat(Infinity)


console.log(Array.isArray("avni"))

