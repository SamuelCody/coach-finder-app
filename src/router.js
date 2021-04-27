import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegisteration from './pages/coaches/CoachRegisteration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/coaches'
        },
        {
            path: '/coaches',
            component: CoachesList
        },
        {
            path: '/coaches/:id',
            component: CoachDetail,
            props: true,
            children: [
                {
                    path: 'contact',
                    component: ContactCoach // /coaches/c1/contact
                }
            ]
        },
        {
            path: '/register',
            component: CoachRegisteration
        },
        {
            path: '/requests',
            component: RequestReceived
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ]
});

export default router;