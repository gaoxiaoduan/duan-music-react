import React, { memo, Suspense } from 'react';

import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routers from '@/router';
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';

export default memo(() => (
  <HashRouter>
    <AppHeader />
    <Suspense fallback={<div>loading...</div>}>{renderRoutes(routers)}</Suspense>
    <AppFooter />
  </HashRouter>
));
