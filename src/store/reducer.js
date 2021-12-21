import { combineReducers } from 'redux';

import { reducer as recommendReducers } from '@/pages/discover/c-pages/recommend/store';

const cbReducers = combineReducers({
  recommend: recommendReducers,
});

export default cbReducers;
