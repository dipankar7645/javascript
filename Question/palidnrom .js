let value = "123"
const revValue = () => {
    let myrevVal = value.toString().split("").reverse().join("")
    let mystrVal = value.toString()

    if(mystrVal === myrevVal){
        console.log("palidrome")
    }else{
        console.log("Not palidrome")
    }
};
revValue();