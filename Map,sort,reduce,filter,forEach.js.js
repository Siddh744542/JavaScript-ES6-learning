//Map, sort, reduce, filter, forEach

const companies =[
    {name:"Google", category:"Product Based", start:1981, end:2004},
    {name:"Amazon", category:"Product Based", start:1992, end:2008},
    {name:"Paytm", category:"Product Based", start:1999, end:2007},
    {name:"Coforge", category:"Service Based", start:1989, end:2010},
    {name:"Mindtree", category:"Service Based", start:1989, end:2010}
];

const ages  = [33, 12, 28, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//For:
for(let i=0;i<=companies.length;i++){
   console.log(companies[i]);
}

//forEach:
companies.forEach((company,index) => {
    console.log(company);
});

// filter:
const age = ages.filter(age=>{
    if(age>=20){
        return true;
    }
})
console.log(age);
const finalAge = ages.filter(age => age>=30);
console.log(finalAge);

//Map:
companies.map((company)=>{
    console.log(company);
})

//sort:
const sorted = companies.sort((c1,c2)=>{
    if(c1.start>c2.start){
        return 1;
    } else {
        return -1;
    }
})
console.log(sorted);

//reduce: 
const agesum=ages.reduce((total,age)=>{
    return total+age;
})
console.log(agesum);