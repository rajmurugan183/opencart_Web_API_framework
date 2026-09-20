import {test as basetest} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { Homepage } from '../pages/Homepage'
import { SearchPage} from '../pages/SearchPage'
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage'

//define type for page fixtures
type pageFixtures ={
    loginPage: LoginPage,
    homePage: Homepage,
    searchPage: SearchPage,
    forgotPasswordPage: ForgotPasswordPage


}


//extend playwright base test
   export let test=basetest.extend<pageFixtures>({

    loginPage :async({page}, use)=>{
        let loginPage=new LoginPage(page);
        await use(loginPage)
    },

   homePage :async({page}, use)=>{
        let homePage=new Homepage(page);
        await use(homePage)
    },

  searchPage :async({page}, use)=>{
        let searchPage=new SearchPage(page);
        await use(searchPage)
    },
    
   forgotPasswordPage :async({page}, use)=>{
        let forgotPasswordPage=new ForgotPasswordPage(page);
        await use(forgotPasswordPage)
    },
   
   }

)

export {expect} from '@playwright/test'
