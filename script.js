let button=document.getElementById('btn')
button.addEventListener('click',function(){
    const height=parseInt(document.getElementById('height').value);
    const weight=parseInt(document.getElementById('weight').value);
    let result=document.getElementById('output')
    let height_status=false
    let weight_status=false
    if (height === '' || isNaN (height) || (height<=0)){
        document.getElementById('height_error').innerHTML='Please Provide a Valid Height'
    }else{
        document.getElementById('height_error').innerHTML=''
        height_status=true
    }
    if (weight === '' || isNaN (weight) || (weight<=0)){
        document.getElementById('weight_error').innerHTML='Please Provide a Valid weight'
    }else{
        document.getElementById('weight_error').innerHTML=''
        weight_status=true
    }
    if (height_status==true && weight_status==true){
        const bmi=((weight/(height*height)*10000)).toFixed(2)
        if (bmi<18.6){
            result.innerHTML='UnderWiegt : '+ bmi;

        }else if (bmi >=18.6 && bmi <24.9){
            result.innerHTML='Normal '+ bmi;
        }else{
            result.innerHTML='Over weight : '+ bmi;
        }
            
        
   
    }
    else{
        alert('The form has error')
        result.innerHTML=''
    }
})