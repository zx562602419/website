/**
 * Created by 张鑫 on 2017/3/1.
 */
//调用json数据
$.ajax({
    async:false,
    url:"./js/content.json",
    type:"GET",
    dataType:"json",
    success: function (data) {
        question = data.question,
        answer = data.answer,
        style = answer.style,
        description = answer.description,
        character = answer.character,
        profession = answer.profession;
    }
})