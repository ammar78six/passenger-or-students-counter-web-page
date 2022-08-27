let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)
console.log(saveEl)
let count = 0;
function increment() {
    // console.log('the button is clicked')
    count +=  1;
    countEl.innerText = count
    // console.log(count)
}
function decrement() {
    if(count !== 0){

    
    count -= 1;
    countEl.innerText = count
}
}
function save(){
    if(count !==0){
        let countstr = count + " - "
    saveEl.textContent += countstr
    console.log('save')
    // if(count !== 0){
    //     countEl.textContent = 0 ;
    //     return count = 0
    // }
    countEl.textContent = 0 
    count=0
    }
    else{
        alert('Please enter a value : ')
    }
}