import { createStore } from 'vuex';

import CoachModule from './modules/coaches/index.js';

const store = createStore({
    modules: {
        coaches: CoachModule
    }
});

export default store;