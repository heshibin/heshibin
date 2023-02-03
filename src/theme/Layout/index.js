import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import {
  PageMetadata,
  SkipToContentFallbackId,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {useKeyboardNavigation} from '@docusaurus/theme-common/internal';
import SkipToContent from '@theme/SkipToContent';
import AnnouncementBar from '@theme/AnnouncementBar';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';
import LayoutProvider from '@theme/Layout/Provider';
import ErrorPageContent from '@theme/ErrorPageContent';
import styles from './styles.module.css';
import { Alert, Space, Affix, FloatButton,Image } from 'antd';
import { GithubOutlined, QqOutlined,WechatOutlined } from '@ant-design/icons';
export default function Layout(props) {
  const {
    children,
    noFooter,
    wrapperClassName,
    // Not really layout-related, but kept for convenience/retro-compatibility
    title,
    description,
  } = props;
  useKeyboardNavigation();
  
  useEffect(() => {
    // 组件挂载时，创建script标签
    const myScript = document.createElement('script');
    // 设置标签的src属性
    myScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6880859209937012";
    // 明确设置为同步加载
    myScript.async = true;
    myScript.crossorigin = "anonymous";
    // 追加到body标签的最下面
    document.getElementsByTagName('head')[0].append(myScript);
    return () => {
       
    };
}, []);
  
  return (
    <LayoutProvider>
      {/* <Affix> */}
        {/* <Alert message="🎉 2023新年快乐" showIcon={false} banner closable className='layout-banner' /> */}
      {/* </Affix> */}
      {/* <div style={{height: '20px'}}></div> */}
      <PageMetadata title={title} description={description} />

      <SkipToContent />

      <AnnouncementBar />

      <Navbar />

      <div
        id={SkipToContentFallbackId}
        className={clsx(
          ThemeClassNames.wrapper.main,
          styles.mainWrapper,
          wrapperClassName,
        )}>
        <ErrorBoundary fallback={(params) => <ErrorPageContent {...params} />}>
          {children}
        </ErrorBoundary>
      </div>

      {!noFooter && <Footer />}
      
      <FloatButton.Group shape="circle">
      <FloatButton icon={<WechatOutlined />}  tooltip={<Image src="http://cdn.machu.top/github/weixin.png" />}/>
      <FloatButton icon={<QqOutlined />} href={"http://wpa.qq.com/msgrd?v=3&uin=485997600&site=qq&menu=yes"} />
      <FloatButton icon={<GithubOutlined />} href={"https://github.com/heshibin/heshibin"} />
      </FloatButton.Group>
    </LayoutProvider>
  );
}
