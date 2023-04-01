let marks=[120,201,22.2,24.43,111.24,7.6625];
let high=0;
for(let i=0;i<marks.length;i++){
    marks[i]>high?high=marks[i]:high=high;
}
console.log(`highest marks is ${high}`);