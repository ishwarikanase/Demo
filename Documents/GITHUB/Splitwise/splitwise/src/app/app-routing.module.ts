import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderAfterLoginComponent } from './header-after-login/header-after-login.component';
import { DashboardLeftComponent } from './dashboard-left/dashboard-left.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { HomeComponent } from './home/home.component';
import { FinalDashboardComponent } from './final-dashboard/final-dashboard.component';
import { componentFactoryName } from '@angular/compiler';
import { RecentComponent } from './recent/recent.component';
import { AllComponent } from './all/all.component';
import { GroupsComponent } from './groups/groups.component';
import { FriendsComponent } from './friends/friends.component';
import { SettleComponent } from './settle/settle.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EmailComponent } from './email/email.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'forgot-password', component: ForgotPasswordComponent,
      children:[
        {path:'email',component:EmailComponent},
        {path:'phoneNumber',component:PhoneNumberComponent}
      ]
  },

  {
    path: 'dashboard', component: DashboardComponent,

    children: [
      { path: 'headerAfterLogin', component: HeaderAfterLoginComponent },
      { path: 'dashboard-left', component: DashboardLeftComponent },
      // {path:'groups/:id',component:GroupsComponent},
      { path: 'recent', component: RecentComponent },
      { path: 'all', component: AllComponent },
      { path: 'groups/:id', component: GroupsComponent },
      { path: 'friends/:id', component: FriendsComponent },
      {
        path: '', component: FinalDashboardComponent,
        children:
          [
            { path: 'addExpense', component: AddExpenseComponent },
            { path: 'settle', component: SettleComponent }
          ]
      },
    ]
  },
  { path: '', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
