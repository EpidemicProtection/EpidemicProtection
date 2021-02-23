// 入口函数
$(function() {
    $(".container").fullpage({
            /* 配置项 */
            navigation: true, // 显示指示器
            verticalCentered: false, // 内容顶部对齐
            sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"], // 设置不同屏的背景颜色
            /* 初始化html结构的回调函数 */
            afterRender: function() {
                // 点击精彩切到下一屏
                $(".more").on("click", function() {
                    $.fn.fullpage.moveSectionDown();
                })
            },
            /* 页面开始滚动的函数 */
            onLeave: function() {
                // 按钮淡出
                $(".more").fadeOut("fast");
            },
            /* 页面切换完毕的回调函数 */
            afterLoad: function() {
                // 按钮淡入
                $(".more").fadeIn("fast");
            }
        }

    );
});