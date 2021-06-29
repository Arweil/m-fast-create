import React from 'react';
import { inject, observer } from 'mobx-react';
import { UserStore } from '@/stores/UserStore';
import AppLayout from './AppLayout';

export default inject('userStore')(observer(function AppLayoutWrapper(props: {
  userStore?: UserStore;
}) {
  const { userStore } = props;
  const { userInfo, menu } = userStore || {};

  return (
    <AppLayout<{}>
      menu={menu || {}}
      userName={userInfo && userInfo.userName || ''}
      setTitle={({ collapsed }) => {
        return (
          <div style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
            <div style={{ color: '#fff', fontSize: 20, textAlign: 'center', flex: 1, }}>
              {
                collapsed ? 'Demo' : 'Demo Application'
              }
            </div>
          </div>
        );
      }}
    />
  )
}));
