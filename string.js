var one = "월 09:00-10:15 (-)";
var twod = "월 목 15:00-16:15 (-)"
var onet = "화 15:00-15:50 (-서유화) 화 16:00-16:50"

var onearr = one.split(" ");
console.log(onearr);


console.log(onearr.indexOf('월'));


function timetonum(str){    // 시간 교시로 바꾸는 함수
    switch(str){
        case "09:00-10:15":
            str = 1;
            break;
        case "10:30-11:45":
            str = 2;
            break;
        case "12:00-13:15":
            str = 3;
            break;
        case "13:30-14:45":
            str = 4;
            break;
        case "15:00-16:15":
            str = 5;
            break;
        case "16:30-17:45":
            str = 6;
            break;
        case "18:00-19:15":
            str = 7;
            break;
        case "19:30-20:45":
            str = 8;
            break;
        case "21:00-22:15":
            str = 9;
            break;
    }
    return str;
}

function daytime(arr){
    var day1 = arr[0];
    if(arr[1] == "월" || arr[1] == "화" || arr[1] == "수" || arr[1] == "목" || arr[1] == "금"){     // 일주일에 2번인 수업
        arr[2] = timetonum(arr[2]);
        arr.push('two');
    }
    else{   // 바로 숫자 나오면 일주일에 한번인 수업, str = 시간
        arr[1] = timetonum(arr[1]);  // 교시로 바꿔주기
        if(arr[3] == arr[0]){     // 1교시 이상인 수업
            arr[3] = arr[1] + 1;
            arr.push('one2');
        }
        else{   // 1교시만 하는 수업
            arr.push('one1');
        }
    }
    return arr;
}

arr = daytime(onearr); 


console.log(onearr);

