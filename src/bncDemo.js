/**
 * @file bncDemo.js
 * @dependancy zepto, tmpl
 */

// 【BNC依赖】
// 依赖必须为BNC平台开放出来的插件标准名称,一律小写
// bncStatic 作为最后一个参数输出整合后的html+css内容
// 例如: bncStatic = {html: {'bncDemo.html': '', 'bncDemo1.html': '', 'bncDemo2.html': ''}, css: {'bncDemo.css': '', 'bncDemo1.css': '', 'bncDemo2.css': ''}}
// 若无html/css, 则输出{}
BNC.use(['zepto', 'tmpl'], function ($, tmpl, bncStatic) {

    // 整合后的html存于 bncStatic.html 下
    var bncStaticHtml = bncStatic.html || {};
    // 整合后的html存于 bncStatic.css 下 -- css内容已自动增加标签封装，可直接插入页面
    var bncStaticCss = bncStatic.css || {};
    // 【核心能力】
    // 默认初始化
    function bncInit(res) {
        var abilityList = [
            'awardTool',
            'bncDemo',
            'BNJSLog',
            'digforgold',
            'QAtast',
            'share',
            'videoPlayer',
            'wxShare'
        ];
        renderList(abilityList);
    }

    // 渲染能力列表
    function renderList(items) {
        // 模板一容器
        var $wrapper = $('#bnc-sdk-bncdemo-wrapper-a');
        // css
        var cssHtml = '<style>' + bncStaticCss['bncDemo.css'] + '</style>';
        // 模板
        var tplHtml = bncStaticHtml['bncDemo.html'];
        console.log(bncStatic)
        // 插入页面
        $wrapper.html(cssHtml + tmpl(tplHtml, {items: items}));
    }

    // 【集成到BNC】 -- 需输出的能力API
    BNC.configAbility('bncDemo', {
        // 定义初始化方法(init), config.json中定义的initFunction属性值请确保与该方法名名保持一致
        init: bncInit
    });

});
