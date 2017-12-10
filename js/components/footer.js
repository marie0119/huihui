const footerComponent={
    template: "<nav class=\"mui-bar mui-bar-tab\">\n <a class=\"mui-tab-item\" v-for=\"(item,index) in items\" :class=\"{'mui-active':index==footerActive}\" :href=\"item.url\">\n<span class=\"mui-icon\" :class=\"item.icon\"></span>\n <span class=\"mui-tab-label\" v-text=\"item.title\"></span>\n</a>\n</nav> ",
    props:['footerActive'],
    data:function () {
        return {
            items: [
                {
                    muiActive: false,
                    url: '../index/index.html',
                    icon: 'mui-icon-home',
                    title: '首页'
                },
                {
                    muiActive: false,
                    url: '../category/category.html',
                    icon: 'mui-icon-list',
                    title: '分类'
                },
                {
                    muiActive: false,
                    url: '../consult/consult.html',
                    icon: 'mui-icon-chatbubble',
                    title: '咨询'
                },
                {
                    muiActive: false,
                    url: '../list/list.html',
                    icon: 'mui-icon-bars',
                    title: '清单'
                },
                {
                    muiActive: false,
                    url: '../mine/mine.html',
                    icon: 'mui-icon-person',
                    title: '我的'
                },
            ]
        }
    }
};

