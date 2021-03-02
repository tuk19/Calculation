function getDotPosition(float){
    let dotPosition = 0;
    if(float.lastIndexOf('.') != -1){
        dotPosition = (float.length-1) - float.lastIndexOf('.');
    }
    return dotPosition;
}

function Calc(num1, num2, ope){
    let result = 0;
    let dotPosition1 = getDotPosition(num1);
    let dotPosition2 = getDotPosition(num2);
    let max = Math.max(dotPosition1, dotPosition2);
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let value1 = parseInt((num1.toFixed(max) + '').replace('.', ''));
    let value2 = parseInt((num2.toFixed(max) + '').replace('.', ''));
    if(ope==3){
        if (max == 1) {
            max = max + 1;
        } else {
            max = max * max;
        }
    }

    let power = Math.pow(10, max);
    console.log("value1; " + value1 + ", value2; " + value2);
    console.log(power)

    if(ope==1){
        result = (value1 + value2) / power;
    }else if(ope==2){
        result = (value1 - value2) / power;
    }else if(ope==3){
        result = (value1 * value2) / power;
    }else if(ope==4){
        result = (value1 / value2);
    }
    return result
}

let num1 = 0;
let num2 = 0; 
let ope = 0;
let point = 0;
let show_text = 0;
let number = 0;
let state = 0;

$(document).ready(function(){
    $("button").click(function(){
        let classes = $(this).attr("class");
        let id = $(this).attr("id");
        let text =$(this).text();
        if(id == "AllClear"){
            $(".show_number").text(0);
            num1 = 0;
            num2 = 0;
            ope = 0;
            point = 0;
            show_text=0;
            number=0;
        }else if(classes == "number"){
            state=0;
            if(id=="Point"){
                if(point==0){
                    if(show_text==0){
                        number = 0 + text;
                    }else{
                    number = $(".show_number").text() + text;
                    }
                    point = 1;
                    show_text = 1;
                    $(".show_number").text(number);
                }
            }else if(id=="DoubleZero"){
                if(show_text!=0){
                    number = $(".show_number").text() + text;
                    $(".show_number").text(number);
                }
            }else if(id=="Zero"){
                if(show_text!=0){
                    number = $(".show_number").text() + text;
                    $(".show_number").text(number);
                }
            }else{
                if(show_text==0){
                    $(".show_number").text(text);
                    show_text=1;
                }else{
                    number = $(".show_number").text() + text;
                    $(".show_number").text(number);
                }
            }
        }else if(classes=="operator"){
            if(num1==0){
                num1 = $(".show_number").text();
            }else if(num1!=0){
                num2 = $(".show_number").text();
            }
            if(num2!=0 && state != 1){
                result = Calc(num1, num2, ope);
                num1 = result;
                $(".show_number").text(num1);
            }
            if(id=="Plus"){
                ope=1;
                state=1;
            }else if(id=="minus"){
                ope=2;
                state=1;
            }else if(id=="Asterisk"){
                ope=3;
                state=1;
            }else if(id=="Slash"){
                ope=4;
                state=1;
            }
            show_text=0;
            point=0
        }else if(id=="Equal"){
            if(num1!=0){
                num2 =$(".show_number").text();
            }
            result = Calc(num1, num2, ope);
            $(".show_number").text(result);
            show_text = 0;
            point=0;
            ope = 0;
            num1 = 0;
            num2 = 0;
            }
        });
    });
