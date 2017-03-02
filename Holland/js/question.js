/**
 * Created by 张鑫 on 2017/3/2.
 */

//问题循环输出方法
function questions(){
    var index = 0;
    for(var i = 0; i < question.length; i++){
        index = ++index;
        $("#question").append('<div class="panel panel-info"> <div class="panel-heading">' + question[(index-1)] + '</div> <div class="panel-body"> <label class="col-xs-4"> <input type="radio" id="q' + index +'-1" value="1" name="q' + index +'"> 是 </label> <label class="col-xs-4"> <input type="radio" id="q' + index +'-2" value="2" name="q' + index +'"> 否 </label></div></div>');
    }
};
questions();