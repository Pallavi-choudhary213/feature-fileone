import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from '@/components/LoginPage.vue';
import ForgetPassword from '@/components/ForgetPassword.vue';
import DashBoard from '@/components/DashBoard.vue';
import AddEmployeesForm from '@/components/AddEmployeesForm.vue';
import EmployeeList from '@/components/EmployeeList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginPage
    },
    { path: '/', component: LoginPage },

    {
      path: '/forgot-password',
      name: 'ForgetPassword',
      component: ForgetPassword
    },
    {
      path: '/dash-board',
      name: 'Dashboard',
      component: DashBoard
    },
    {
      path: '/addEmployee',
      name: 'AddEmployeesForm',
      component: AddEmployeesForm
    },
    {
      path: '/employeeList',
      name: 'EmployeeList',
      component: EmployeeList
    }

  ]
});
