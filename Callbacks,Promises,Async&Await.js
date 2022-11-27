// Async JS Programming
//Callbacks, Promises,Async & Await
const datas = [
    { name: "Ajay", Profression: "Software Engineer" },
    { name: "Anuj", Profression: "Software Engineer" }
];
function getDatas() {
    setTimeout(() => {
        let output = "";
        datas.forEach((data, index) => {
            output += `<li>${data.name}</li>`;
        })
        document.body.innerHTML = output
    }, 1000);
}
//Callback
function createData(newdata,Callback){
    setTimeout(()=>{
        datas.push(newdata);
        Callback();
    },2000);
}
createData({ name: "Rajat", Profression: "Software Engineer" },getDatas);

//Promises
function createData(newdata,){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datas.push(newdata);
            let error = false;
            if(!error){
                resolve();
            }else{
                reject("kuch to gadbad hai!");
            }
        },2000);
    })
    
}
// createData({ name: "Rajat", Profression: "Software Engineer" })
// .then(getDatas)
// .catch(err=>console.log("kuch to gadbad hai"));

//Async and Await;
async function start(){
    await createData({ name: "Rajat", Profression: "Software Engineer" });
    getDatas();
}
start();