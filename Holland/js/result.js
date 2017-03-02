/**
 * Created by 张鑫 on 2017/3/2.
 */
//答案计算及输出方法
function result(){
    //获取地址栏参数
    function GetQueryString(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }
    var max_index = GetQueryString("max_index");

    //使用正则提取参数
    var indexArr = max_index.replace(/[^0-9]/ig,"");

    //将获取数据动态输出到HTML页面
    for(var r = 0; r < indexArr.length; r++){
        $("#resultBox").append('' +
            '<div class=""><div class="panel panel-success"><div class="panel-heading">所属类型</div><div class="panel-body" >' + style[indexArr[r]] + '</div></div>' +
            '<div class="panel panel-info"><div class="panel-heading">共同特点</div><div class="panel-body">' + description[indexArr[0]] + '</div></div>' +
            '<div class="panel panel-info"><div class="panel-heading">性格特点</div><div class="panel-body">' + character[indexArr[0]] + '</div></div>' +
            '<div class="panel panel-info"><div class="panel-heading">职业建议</div><div class="panel-body">' + profession[indexArr[0]] + '</div></div></div>'+
            '');

        $("#result").append(style[indexArr[r]] + "、");
    }

};
result();
