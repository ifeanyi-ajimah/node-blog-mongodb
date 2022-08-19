// const xyz = require('./people') //access all elements from people 

const { people , ages } = require('./people'); //using destruct to 

console.log(people, ages ); // use xyz object to access the exported elements for ./people file
// console.log(xyz.ages);

const os = require('os')

console.log(os.platform(), os.homedir() );
