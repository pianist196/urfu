import Vue from 'vue'
import Router from 'vue-router'

import MainPage from '../components/MainPage'
import StatisticPage from '../components/StatisticPage'

Vue.use(Router)

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            component: MainPage
        },
        {
            path: '/statistic',
            name: 'statistic',
            component: StatisticPage
        }
    ]
})

export default router