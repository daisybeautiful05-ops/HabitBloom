let transactions=[];
function addTransaction(){
const d=desc.value,a=Number(amount.value),t=type.value;
transactions.push({d,a,t});render();}
function render(){
let bal=0;list.innerHTML='';
transactions.forEach((x,i)=>{
bal+=x.t==='Income'?x.a:-x.a;
list.innerHTML+=`<li>${x.d} (${x.t}) ₦${x.a} <button onclick="transactions.splice(${i},1);render()">X</button></li>`;
});
balance.textContent='Balance: ₦'+bal;
}
