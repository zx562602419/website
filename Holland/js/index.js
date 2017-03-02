/**
 * Created by 张鑫 on 2017/3/1.
 */
$("#questionBtn").click(function () {
    //使用jQuery serializeArray()方法将表单数据转换为数组
    var answers = $(":input").serializeArray();
    //循环获取表单值并放入相对应数组中
    var resultA = [],
        resultS = [],
        resultR = [],
        resultI = [],
        resultE = [],
        resultC = [];
    for(var i = 0; i < answers.length; i++){
        var val = answers[i].value,
            name = answers[i].name;
        switch (name){
            case "q1":
                if(val == "2"){
                    resultS.push(name)
                }
                break;
            case "q2":
                if(val == "1"){
                    resultR.push(name)
                }
                break;
            case "q3":
                if(val == "2"){
                    resultE.push(name)
                }
                break;
            case "q4":
                if(val == "1"){
                    resultA.push(name)
                }
                break;
            case "q5":
                if(val == "2"){
                    resultC.push(name)
                }
                break;
            case "q6":
                if(val == "1"){
                    resultI.push(name)
                }
                break;
            case "q7":
                if(val == "1"){
                    resultC.push(name)
                }
                break;
            case "q8":
                if(val == "1"){
                    resultI.push(name)
                }
                break;
            case "q9":
                if(val == "1"){
                    resultA.push(name)
                }
                break;
            case "q10":
                if(val == "1"){
                    resultA.push(name)
                }
                break;
            case "q11":
                if(val == "1"){
                    resultE.push(name)
                }
                break;
            case "q12":
                if(val == "2"){
                    resultS.push(name)
                }
                break;
            case "q13":
                if(val == "1"){
                    resultR.push(name)
                }
                break;
            case "q14":
                if(val == "2"){
                    resultR.push(name)
                }
                break;
            case "q15":
                if(val == "2"){
                    resultS.push(name)
                }
                break;
            case "q16":
                if(val == "2"){
                    resultE.push(name)
                }
                break;
            case "q17":
                if(val == "1"){
                    resultA.push(name)
                }
                break;
            case "q18":
                if(val == "2"){
                    resultC.push(name)
                }
                break;
            case "q19":
                if(val == "1"){
                    resultC.push(name)
                }
                break;
            case "q20":
                if(val == "1"){
                    resultI.push(name)
                }
                break;
            case "q21":
                if(val == "2"){
                    resultI.push(name)
                }
                break;
            case "q22":
                if(val == "1"){
                    resultR.push(name)
                }
                break;
            case "q23":
                if(val == "2"){
                    resultR.push(name)
                }
                break;
            case "q24":
                if(val == "1"){
                    resultE.push(name)
                }
                break;
            case "q25":
                if(val == "2"){
                    resultE.push(name)
                }
                break;
            case "q26":
                if(val == "1"){
                    resultS.push(name)
                }
                break;
            case "q27":
                if(val == "2"){
                    resultS.push(name)
                }
                break;
            case "q28":
                if(val == "1"){
                    resultE.push(name)
                }
                break;
            case "q29":
                if(val == "1"){
                    resultC.push(name)
                }
                break;
            case "q30":
                if(val == "1"){
                    resultI.push(name)
                }
                break;
            case "q31":
                if(val == "1"){
                    resultI.push(name)
                }
                break;
            case "q32":
                if(val == "2"){
                    resultA.push(name)
                }
                break;
            case "q33":
                if(val == "1"){
                    resultA.push(name)
                }
                break;
            case "q34":
                if(val == "1"){
                    resultA.push(name)
                }
                break;
            case "q35":
                if(val == "1"){
                    resultE.push(name)
                }
                break;
            case "q36":
                if(val == "1"){
                    resultR.push(name)
                }
                break;
            case "q37":
                if(val == "1"){
                    resultS.push(name)
                }
                break;
            case "q38":
                if(val == "1"){
                    resultE.push(name)
                }
                break;
            case "q39":
                if(val == "1"){
                    resultC.push(name)
                }
                break;
            case "q40":
                if(val == "2"){
                    resultC.push(name)
                }
                break;
            case "q41":
                if(val == "1"){
                    resultC.push(name)
                }
                break;
            case "q42":
                if(val == "1"){
                    resultI.push(name)
                }
                break;
            case "q43":
                if(val == "1"){
                    resultR.push(name)
                }
                break;
            case "q44":
                if(val == "2"){
                    resultR.push(name)
                }
                break;
            case "q45":
                if(val == "2"){
                    resultS.push(name)
                }
                break;
            case "q46":
                if(val == "1"){
                    resultE.push(name)
                }
                break;
            case "q47":
                if(val == "2"){
                    resultR.push(name)
                }
                break;
            case "q48":
                if(val == "2"){
                    resultR.push(name)
                }
                break;
            case "q49":
                if(val == "1"){
                    resultA.push(name)
                }
                break;
            case "q50":
                if(val == "1"){
                    resultA.push(name)
                }
                break;
            case "q51":
                if(val == "1"){
                    resultC.push(name)
                }
                break;
            case "q52":
                if(val == "1"){
                    resultS.push(name)
                }
                break;
            case "q53":
                if(val == "2"){
                    resultS.push(name)
                }
                break;
            case "q54":
                if(val == "1"){
                    resultA.push(name)
                }
                break;
            case "q55":
                if(val == "2"){
                    resultI.push(name)
                }
                break;
            case "q56":
                if(val == "2"){
                    resultI.push(name)
                }
                break;
            case "q57":
                if(val == "1"){
                    resultC.push(name)
                }
                break;
            case "q58":
                if(val == "2"){
                    resultI.push(name)
                }
                break;
            case "q59":
                if(val == "1"){
                    resultS.push(name)
                }
                break;
            case "q60":
                if(val == "1"){
                    resultE.push(name)
                }
                break;
        }
    }
    //计算各结果分值并放入数组中
    var length = [resultA.length,resultS.length,resultR.length,resultI.length,resultE.length,resultC.length];
    var maxArr = [];
    var maxNum = length[0];
    var max_index = 0;

    //获取数组中最大的元素
    for(var m=0; m　<　length.length; m++) {
        if (maxNum <　length[m]) {
            maxNum = length[m];
            //max_index = l;
        }
    }
    //将最大值下标放入数组中
    for(var l = 0; l < length.length; l++){
        if(maxNum == length[l]){
            maxArr.push(l);
        }
    }
    location.href = "result.html?max_index="+maxArr;
});