$(function(){
    //右侧关闭按钮
    $('.close').click(function (e) { 
        $('.right').css('display','none');
        $('.middle').css('width','90%')
        // e.preventDefault();
        
    });
    // var en=true;
   //左侧切换时的边框样式切换
    $('label').click(function(e){
        // if(en){
            $('label').removeClass('active');
            $(this).addClass('active');
            
        // }
        // else{
        //     $(this).removeClass('active');
        //     en=true;
        // }
        
    })
    //下方放大缩小操作
    var box=$('.middle');
    var boxWidth=box.attr('width');
    var boxHeight=box.attr('height');
    var showWidth = boxWidth;//最终显示宽度
    var showHeight = boxHeight;//最终显示高度
    var ratio = boxWidth / boxHeight;//宽高比
    
    $('.controlReduce').click(function(){
        
    })
})