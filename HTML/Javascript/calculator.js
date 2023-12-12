var mul = () =>{
        let input = document.getElementById("num1");
        let value = input.value;
    
        let input2 = document.getElementById("num2");
        let val2 = input2.value;
        let h4 = document.getElementById("h1");
       
    
        let result = value * val2;
        h4.innerText = result;
    }
    
    
    
    var sum = () =>{
    let input = document.getElementById("num1");
    let value = input.value;
    
    let input2 = document.getElementById("num2");
    let h1 = document.getElementById("h1");
    let val2 = input2.value;
    
    let result = parseInt(value) + parseInt(val2);
    h1.innerText = result;
    }
    
    
    
    var sub = () =>{
    let input = document.getElementById("num1");
    let h3 = document.getElementById("h3");
    let value = input.value;
    
    let input2 = document.getElementById("num2");
    let h1 = document.getElementById("h1");
    let val2 = input2.value;
    
    let result = value - val2;
    h1.innerText = result;
    }
    
    
    
    var div = () =>{
    let input = document.getElementById("num1");
    let h3 = document.getElementById("h3");
    let value = input.value;
    
    let input2 = document.getElementById("num2");
    let h1 = document.getElementById("h1");
    let val2 = input2.value;
    
    let result = value / val2;
    h1.innerText = result;
    }
    