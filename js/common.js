//底部菜单跳转
mui(document).on('tap','.mui-bar-tab a',function(){
    var _href=this.getAttribute('href');
    if(this.getAttribute('href')){
        mui.openWindow({
            url: _href
        })
    }
})
//底部菜单跳转