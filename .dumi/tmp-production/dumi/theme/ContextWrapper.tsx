// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React, { useState, useEffect, useRef } from 'react';
import { useOutlet, history } from 'dumi';

import nprogress from 'C:/Users/mel/Desktop/project/black-ui-mobile/node_modules/nprogress';
import './nprogress.css';

import { SiteContext } from 'C:/Users/mel/Desktop/project/black-ui-mobile/node_modules/dumi/dist/client/theme-api/context.js';
import { demos, components } from '../meta';
import { locales } from '../locales/config';

const entryExports = {
  
  
};

export default function DumiContextWrapper() {
  const outlet = useOutlet();
  const [loading, setLoading] = useState(true);
  const prev = useRef(history.location.pathname);

  useEffect(() => {
    return history.listen((next) => {
      if (next.location.pathname !== prev.current) {
        prev.current = next.location.pathname;

        // mark loading when route change, page component will set false when loaded
        setLoading(true);

        // start nprogress
        nprogress.start();

        // scroll to top when route changed
        document.documentElement.scrollTo(0, 0);
      }
    });
  }, []);

  return (
    <SiteContext.Provider value={{
      pkg: {"name":"uab-ui-mobile","description":"基于 react 的用于构建移动端应用程序的基本 web UI 库。","version":"1.0.1","license":"ISC","repository":{"type":"git","url":"git+https://github.com/yyt520/black-ui-mobile.git","branch":"main","platform":"github"}},
      historyType: "browser",
      entryExports,
      demos,
      components,
      locales,
      loading,
      setLoading,
      hostname: undefined,
      themeConfig: {"footer":"Copyright © 2023 | Powered by <a href=\"https://d.umijs.org\" target=\"_blank\" rel=\"noreferrer\">dumi</a>","prefersColor":{"default":"light","switch":true},"nprogress":true,"name":"Black Ui Mobile","logo":"https://avatars.githubusercontent.com/u/73016681?s=200&v=4","nav":{"zh":[{"title":"指南","link":"/guide/quick-start"},{"title":"组件","link":"/components/button"},{"title":"GitHub","link":"https://github.com/yyt520/black-ui-mobile"}],"en":[{"title":"Guide","link":"/en/guide/quick-start"},{"title":"Components","link":"/en/components/button"},{"title":"GitHub","link":"https://github.com/yyt520/black-ui-mobile"}]},"sidebar":{"/guide":[{"children":[{"title":"快速上手","link":"/guide/quick-start"},{"title":"主题","link":"/guide/theming"},{"title":"国际化","link":"/guide/i18n"}]}],"/components":[{"title":"通用","children":[{"title":"Button 按钮","link":"/components/button"},{"title":"icon 按钮","link":"/components/icon"}]},{"title":"布局","children":[{"title":"AutoCenter 自动居中","link":"/components/auto-center"},{"title":"Divider 分割线","link":"/components/divider"},{"title":"Grid 栅格","link":"/components/grid"},{"title":"SafeArea 安全区","link":"/components/safe-area"},{"title":"Space 间距","link":"/components/space"}]},{"title":"导航","children":[{"title":"CapsuleTabs 胶囊选项卡","link":"components/capsule-tabs"},{"title":"IndexBar 序列","link":"components/index-bar"},{"title":"JumboTabs 复杂选项卡","link":"components/jumbo-tabs"},{"title":"NavBar 导航栏","link":"components/nav-bar"},{"title":"SideBar 侧边导航","link":"components/side-bar"},{"title":"TabBar 标签栏","link":"components/tab-bar"},{"title":"Tabs 标签页","link":"components/tabs"}]},{"title":"信息展示","children":[{"title":"Avatar 头像","link":"/components/avatar"},{"title":"Card 卡片","link":"/components/card"},{"title":"Collapse 折叠面板","link":"/components/collapse"},{"title":"Ellipsis 文本省略","link":"/components/ellipsis"},{"title":"FloatingPanel 浮动面板","link":"/components/floating-panel"},{"title":"Image 图片","link":"/components/image"},{"title":"ImageViewer 图片查看器","link":"/components/image-viewer"},{"title":"InfiniteScroll 无限滚动","link":"/components/infinite-scroll"},{"title":"List 列表","link":"/components/list"},{"title":"PageIndicator 分页符","link":"/components/page-indicator"},{"title":"Steps 步骤条","link":"/components/steps"},{"title":"Swiper 走马灯","link":"/components/swiper"},{"title":"Tag 标签","link":"/components/tag"},{"title":"WaterMark 水印","link":"/components/water-mark"},{"title":"Footer 页脚","link":"/components/footer"}]},{"title":"信息录入","children":[{"title":"Form 表单","link":"/components/form"},{"title":"Input 输入框","link":"/components/input"},{"title":"Selector 选择组","link":"/components/selector"},{"title":"Switch 开关","link":"/components/switch"},{"title":"TextArea 文本域","link":"/components/text-area"},{"title":"Stepper 步进器","link":"/components/stepper"}]},{"title":"反馈","children":[{"title":"ErrorBlock 异常","link":"/components/error-block"},{"title":"Loading 加载中","link":"/components/loading"},{"title":"Mask 背景蒙层","link":"/components/mask"},{"title":"Popover 气泡弹出框","link":"/components/popover"},{"title":"Toast 轻提示","link":"/components/toast"}]},{"title":"引导提示","children":[{"title":"Badge 徽标","link":"/components/badge"}]},{"title":"其他","children":[{"title":"ConfigProvider 配置","link":"/components/config-provider"}]},{"title":"试验性","children":[{"title":"Calendar 日历","link":"/components/calendar"},{"title":"ScrollMask 滚动两侧遮罩","link":"/components/scroll-mask"}]}]},"hd":{"rules":[]},"deviceWidth":375},
      _2_level_nav_available: true,
    }}>
      {outlet}
    </SiteContext.Provider>
  );
}
