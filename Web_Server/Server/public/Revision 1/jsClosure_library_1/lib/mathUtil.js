var count=0;

var mathUtil=( function(){
    var subValues=(firstValue,secondValue)=>{
        var result;
        count++;
        firstValue=parseInt(firstValue);
        secondValue=parseInt(secondValue);
        result=firstValue-secondValue;
        return result;
    }
    
    
    
    var divValues=(firstValue,secondValue)=>{
        var result;
        count++;
        firstValue=parseInt(firstValue);
        secondValue=parseInt(secondValue);
        result=firstValue/secondValue;
        return result;
    }

    return {
        //way 1
        addValues (firstValue,secondValue) {
            var result;
            count++;
            firstValue=parseInt(firstValue);
            secondValue=parseInt(secondValue);
            result=firstValue+secondValue;
            return result;
        },
        //way 2
        subValues (a1,a2){
            return subValues(a1,a2);
        },
        mulValues (firstValue,secondValue){
            var result;
            count++;
            firstValue=parseInt(firstValue);
            secondValue=parseInt(secondValue);
            result=firstValue*secondValue;
            return result;
        },
        divValues (b1,b2){
            return divValues(b1,b2);
        }
    }
})()


