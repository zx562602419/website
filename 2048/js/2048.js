/**
 * Created by zhangxin on 2016/11/09.
 */
$.fn.make2048 = function(option){
    //声明游戏基本样式及配置
    var defaultOption ={
        width:4,
        height:4,
        style:{
            background_color:"rgb(184,175,158)",  //游戏盒子背景色参数
            block_background_color:"rgb(204,192,178)", //空数字块背景色参数
            padding:18, //数字块内边距参数，展示为数字块之间的空隙
            block_size:100  //空数字块的大小参数
        },
        //配置数字块参数,level->数据等级,value->显示数据,style->数字块样式
        blocks:[
            {level: 0, value: 2, style:{ "background-color": "rgb(238,228,218)", "color":"rgb(124,115,106)", "font-size": 58 }},
            {level: 1, value: 4, style:{ "background-color": "rgb(236,224,200)", "color":"rgb(124,115,106)", "font-size": 58 }},
            {level: 2, value: 8, style:{ "background-color": "rgb(242,177,121)", "color":"rgb(255,247,235)", "font-size": 58 }},
            {level: 3, value: 16, style:{ "background-color": "rgb(245,149,99)", "color":"rgb(255,250,235)", "font-size": 50 }},
            {level: 4, value: 32, style:{ "background-color": "rgb(244,123,94)", "color":"rgb(255,247,235)", "font-size": 50 }},
            {level: 5, value: 64, style:{ "background-color": "rgb(247,93,59)", "color":"rgb(255,247,235)", "font-size": 50 }},
            {level: 6, value: 128, style:{ "background-color": "rgb(236,205,112)", "color":"rgb(255,247,235)", "font-size": 42 }},
            {level: 7, value: 256, style:{ "background-color": "rgb(237,204,97)", "color":"rgb(255,247,235)", "font-size": 42 }},
            {level: 8, value: 512, style:{ "background-color": "rgb(236,200,80)", "color":"rgb(255,247,235)", "font-size": 42 }},
            {level: 9, value: 1024, style:{ "background-color": "rgb(237,197,63)", "color":"rgb(255,247,235)", "font-size": 34 }},
            {level: 10, value: 2048, style:{ "background-color": "rgb(238,194,46)", "color":"rgb(255,247,235)", "font-size": 34 }},
            {level: 11, value: 4096, style:{ "background-color": "rgb(61,58,51)", "color":"rgb(255,247,235)", "font-size": 34 }}
        ],
        animateTime:100
    };
    var state = []; //声明数组保存游戏数据
    option = $.extend({},defaultOption,option); //扩展option参数值，传参为option，否则为defaultOption
    //保证容器的唯一性
    if(this.length > 1){
        throw "一次只能开始一个游戏";
    }
    if(this.length == 0){
        throw "未找到游戏容器"
    }

    var $this = $(this[0]); //用$this表示游戏容器
    //设置容器css样式
    $this.css({
        "background-color":option.style.background_color,
        "border-radius":option.style.padding,
        "-webkit-border-radius":option.style.padding,
        "-ms-border-radius":option.style.padding,
        "-moz-border-radius":option.style.padding,
        "height":option.style.padding +(option.style.padding +option.style.block_size)*option.height,
        "width":option.style.padding +(option.style.padding +option.style.block_size)*option.width,
    });
    //声明位置方法，根据坐标轴计算数字块位置
    var getPosition = function(x,y){
        return{
            "top":option.style.padding + (option.style.padding + option.style.block_size)*y,
            "left":option.style.padding + (option.style.padding + option.style.block_size)*x
        }
    };
    //创建获得所有空数字块方法
    var getEmptyblock = function () {
        var emptyBlock = [];//声明空数组
        //遍历游戏数据数组，如果当前游戏数据为空放入声明空数组中并返回
        $(state).each(function (i,o) {
            if(o == null){
                emptyBlock.push(i);
            }
        });
        return emptyBlock;
    };

    //声明获取坐标方法
    var getCoordinate = function (index) {
        return {
            x:index % option.width,
            y:Math.floor(index / option.width)
        }
    };

    //声明获取index的方法
    var getIndex = function (x, y) {
        return x + y*option.width;
    };

    //声明获取数字块坐标方法
    var getBlock = function(x,y){
        return state[getIndex(x,y)];
    };
    //创建空数字块
    var buildBackground = function(){
        //声明空数字块数组
        var backgrounds = [];
        for(var x=0; x<option.width; x++){
            for(var y=0; y<option.height; y++){
                state.push(null);
                var bg_block = $("<div></div>");//生成空数字块
                var position = getPosition(x,y);//声明位置参数
                //设置空数字块样式
                bg_block.css({
                    "width":option.style.block_size,
                    "height":option.style.block_size,
                    "background-color":option.style.block_background_color,
                    "position":"absolute",
                    "top":position.top,
                    "left":position.left
                });
                //将样式放入空数字块数组
                backgrounds.push(bg_block);
            }
        }
        //将空数字块放入父级div
        $this.append(backgrounds);
    };
    //生成数字块
    var buildBlock = function(level, x, y){
        var emptyBlock = getEmptyblock();//获取所有空块
        if(emptyBlock.length == 0) return false;
        var putIndex;
        //判断是否有值，生成数字块坐标
        if(x != undefined && y != undefined){
            putIndex = getIndex(x, y)
        }else{
            //通过随机函数和取底函数得到随机的emptBlock
            putIndex = emptyBlock[Math.floor(Math.random() * emptyBlock.length)];
        }

        if(state[putIndex] != null) throw "已经有块存在";
        var block;
        //判断等级是否有值，根据数字块等级生成数字块
        if(level == undefined){
            //block = Math.random() >= 0.5 ? option.blocks[0] : option.blocks[1];
            //注释掉的为教学视频中随机生成等级为0或者1的数字块 即2或4

            block = option.blocks[0];//生成等级为0的数字块，即 2

        }else{
            block = $.extend({}, option.blocks[level]);
        }
        var coordinate = getCoordinate(putIndex);//通过index获取数字块坐标
        var position = getPosition(coordinate.x, coordinate.y);
        var blockDom = $('<div></div>');
        blockDom.addClass("block_" + coordinate.x + "_" + coordinate.y);
        //扩展数字块样式
        blockDom.css($.extend({
            "position": "absolute",
            "top": position.top + option.style.block_size / 2,
            "left": position.left + option.style.block_size / 2,
            "line-height": option.style.block_size + "px",
            "width": 0,
            "height": 0
        }, block.style));
        //添加数字块
        $this.append(blockDom);
        state[putIndex] = block;
        //数字块进入动画
        blockDom.animate({
            "width": option.style.block_size,
            "height": option.style.block_size,
            "top": position.top,
            "left": position.left
        }, option.animateSpeed , (function(blockDom){
            return function(){
                blockDom.html(block.value);
            }
        })(blockDom));
        //判断当空块为1时是否可以移动
        if(emptyBlock.length == 1){
            var canMove = false;
            for(var x=0; x<option.width-1 && !canMove; x++) {
                for(var y=0; y<option.height-1 && !canMove; y++){
                    if(x > 0 && state[getIndex(x - 1, y)].value == state[getIndex(x, y)].value){
                        canMove = true;
                    }
                    if(x < option.width && state[getIndex(x + 1, y)].value == state[getIndex(x, y)].value){
                        canMove = true;
                    }
                    if(y > 0 && state[getIndex(x, y - 1)].value == state[getIndex(x, y)].value){
                        canMove = true;
                    }
                    if(y < option.height && state[getIndex(x, y + 1)].value == state[getIndex(x, y)].value){
                        canMove = true;
                    }
                }
            }
            //不能移动，游戏结束
            if(!canMove){
                gameEnd();
                return false;
            }
        }

        return true;
    };
    //声明移动规则
    var lastMovedTime = 0;
    var move = function(direction){
        if(new Date() - lastMovedTime < option.animateSpeed + 20) return;
        lastMovedTime = new Date();
        var startX,startY,endX, endY, modifyX,modifyY;
        var doActioned = false;
        switch(direction){
            case "up":
                startX = 0;
                endX = option.width - 1;
                startY = 1;
                endY = option.height - 1;
                modifyX = 0;
                modifyY = -1;
                break;
            case "down":
                startX = 0;
                endX = option.width - 1;
                startY = option.height - 2;
                endY = 0;
                modifyX = 0;
                modifyY = 1;
                break;
            case "left":
                startX = 1;
                endX = option.width - 1;
                startY = 0;
                endY = option.height - 1;
                modifyX = -1;
                modifyY = 0;
                break;
            case "right":
                startX = option.width - 2;
                endX = 0;
                startY = 0;
                endY = option.height - 1;
                modifyX = 1;
                modifyY = 0;
                break;
        }
        for(var x = startX; x <= Math.max(startX, endX) && x >= Math.min(startX, endX); endX > startX ? x++ : x--){
            for(var y = startY; y <= Math.max(startY,endY) && y >= Math.min(startY, endY); endY > startY ? y++ : y--){
                var block = getBlock(x, y);
                if(block == null) continue;
                var target_coordinate = {x:x, y:y};
                var target_block;
                var moved = 0;
                do{
                    if(++moved > Math.max(option.width, option.height)) break;
                    target_coordinate.x += modifyX;
                    target_coordinate.y += modifyY;
                    target_block = getBlock(target_coordinate.x, target_coordinate.y);
                    if(direction == "up" || direction == "down"){
                        if(target_coordinate.y == 0 || target_coordinate.y == option.height - 1) break;
                    }
                    if(direction == "left" || direction == "right"){
                        if(target_coordinate.x == 0 || target_coordinate.x == option.width - 1) break;
                    }
                }while(target_block == null);

                var blockDom = $(".block_" + x + "_" + y);

                if(target_block == null){
                    var position = getPosition(target_coordinate.x, target_coordinate.y);
                    state[getIndex(x, y)] = null;
                    state[getIndex(target_coordinate.x, target_coordinate.y)] = block;
                    blockDom.removeClass();
                    blockDom.addClass("block_" + target_coordinate.x + "_" + target_coordinate.y)
                    blockDom.animate({
                        "top": position.top,
                        "left": position.left
                    }, option.animateSpeed)
                }else if(target_block.value == block.value && !target_block.justModified){
                    var position = getPosition(target_coordinate.x, target_coordinate.y);
                    var updatedBlock = $.extend({}, option.blocks[block.level + 1]);
                    if(updatedBlock.level == option.blocks.length - 1){
                        gameEnd();
                    }
                    updatedBlock.justModified = true;
                    state[getIndex(x, y)] = null;
                    state[getIndex(target_coordinate.x, target_coordinate.y)] = updatedBlock;
                    var target_blockDom = $(".block_" + target_coordinate.x + "_" + target_coordinate.y);
                    blockDom.animate({
                        "top": position.top,
                        "left": position.left
                    }, option.animateSpeed, (function(blockDom, target_blockDom, target_coordinate, updatedBlock){
                        return function(){
                            blockDom.remove();
                            target_blockDom.html(updatedBlock.value);
                            target_blockDom.css(updatedBlock.style);
                        };
                    }(blockDom, target_blockDom, target_coordinate, updatedBlock)))
                }else if(target_block.value != block.value || moved > 1){
                    target_coordinate.x = target_coordinate.x - modifyX;
                    target_coordinate.y = target_coordinate.y - modifyY;
                    if(target_coordinate.x == x && target_coordinate.y == y) continue;
                    var position = getPosition(target_coordinate.x, target_coordinate.y);
                    state[getIndex(x, y)] = null;
                    state[getIndex(target_coordinate.x, target_coordinate.y)] = block;
                    blockDom.removeClass();
                    blockDom.addClass("block_" + target_coordinate.x + "_" + target_coordinate.y)
                    blockDom.animate({
                        "top": position.top,
                        "left": position.left
                    }, option.animateSpeed)
                }else{
                    continue;
                }
                doActioned = true;
            }
        }
        for(var x=0; x<option.width; x++){
            for(var y=0; y<option.height; y++){
                var block = getBlock(x, y);
                if(block == null) continue;
                delete block.justModified;
            }
        }
        if(doActioned) {
            buildBlock();
        }
    };
    //获取键盘触发事件
    var keyHandler = function(evt){
        switch(evt.which){
            case 38:
                move("up");
                break;
            case 40:
                move("down");
                break;
            case 37:
                move("left");
                break;
            case 39:
                move("right");
                break;
        }

    };
    //获取鼠标触发事件
    var mouseStartPoint = null;
    var mouseHandler = function(evt){
        if(evt.type == "mousedown" && mouseStartPoint == null){
            mouseStartPoint = {x: evt.pageX, y: evt.pageY};
        }
        if(evt.type == "mouseup"){
            var xDistance = evt.pageX - mouseStartPoint.x;
            var yDistance = evt.pageY - mouseStartPoint.y;
            if(Math.abs(xDistance) + Math.abs(yDistance) > 20){
                if(Math.abs(xDistance) >= Math.abs(yDistance)){
                    if(xDistance > 0){
                        move("right");
                    }else{
                        move("left");
                    }
                }else{
                    if(yDistance > 0){
                        move("down");
                    }else{
                        move("up");
                    }
                }
            }
            mouseStartPoint = null;
        }
    };
    //触屏
    //游戏开始
    var gameStart = function(){
        $(document).on("keydown",keyHandler);
        $(document).on("mousedown",mouseHandler);
        $(document).on("mouseup",mouseHandler);

        $this.html('');
        state = [];

        buildBackground();
        buildBlock();
        buildBlock();
        //console.log("游戏开始");
    };
    //游戏结束
    var gameEnd = function(){
        $(document).off("keydown",keyHandler);
        $(document).off("mousedown",mouseHandler);
        $(document).off("mouseup",mouseHandler);
        //遍历数字块，将数值放入数组中
        var number = [];
        for(var i=0; i<state.length; i++){
            if(state[i] == null) continue;
            number.push(state[i].value);
        }
        //获取数字块中数值最大的值
        maxNumber = Math.max.apply(Math,number);

        //生成游戏结束画面
        var $endMask = $("<div></div>");
        var $mask = $("<div class='mask'></div>");
        $mask.css({
            "-webkit-border-radius": option.style.padding,
            "-moz-border-radius": option.style.padding,
            "border-radius": option.style.padding,
            "width": $this.width(),
            "height": $this.height()
        });
        var $title = $("<h1>游戏结束</h1>");
        var $result = $("<p>本次叠加到最高的数字为:" + maxNumber + "</p>");
        var $again = $("<button>再玩一次</button>");
        $again.click(function(evt){
            evt.preventDefault();
            gameStart();
        });
        var $content = $("<div class='endBox'></div>");
        $endMask.append($mask);
        $content.append($title);
        $content.append($result);
        $content.append($again);
        $endMask.append($content);
        $this.append($endMask);
    };

    gameStart();

}
