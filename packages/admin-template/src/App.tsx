import React from 'react';
import { Provider } from 'mobx-react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN'; // 语言包
import AppLayoutWrapper from '@/layout/AppLayoutWrapper';
import Root from '@/routers/Root';
import RoutesConf from '@/routers/RoutesConf';
import * as store from '@/stores';

export default function App() {
  return (
    <ConfigProvider
      locale={zhCN}
    >
      <Provider {...store}>
        <Root>
          <AppLayoutWrapper>
            <RoutesConf />
          </AppLayoutWrapper>
        </Root>
      </Provider>
    </ConfigProvider>
  )
}
