// const assert = require('assert')
// const mainPage = require('../page/main.page.js');
// const DocsPage = require('../page/Docs.page.js');
// const ButtonDocs = require('../page/button_Docs_main.page.js')
// describe('webdriver.io page', () => {

//     it('demonstrate', () => {
//         browser.url('https://webdriver.io/')
//         mainPage.searchInput.addValue('test');
//         browser.pause(2000);
//         mainPage.setUserName('type with metod')
//         browser.pause(2000);
//     })

//     it('shoud click docs button', () => {
//        ButtonDocs.clickButtonDocs();
//        DocsPage.clickEditButton();
//        browser.pause(2000);
//     })
// }) 

// Homework #25 add pages API -> Contribute Help-> Text is displayed Versions -> Pastversions -> Documentation for API

// const assert = require('assert')
// const mainPage = require('../page/main.page.js');
// const DocsPageButtonEdit = require('../page/Docs.pageButtonEdit.js');
// const ButtonDocs = require('../page/button_Docs_main.page.js')
// const ButtonAPI = require('../page/API_mainPage_buttonClick.js')
// const ApiContributelink = require('../page/Contribute_link.js')
// const ApiPreMenuContributelink = require('../page/PreContributeMenu.js')
// const ButtonHelp = require('../page/HelpMainButton.js')
// const IsDisplayedHelptextBrowseDocs = require('../page/HelpTextBrowseDocsIsDisplayed.js')
// const ButtonVersions = require('../page/VersionsMainButton.js')
// const PastVersions = require('../page/VersionsmenuPastversion.js')
// const DocV5PastVer = require('../page/DocV5PastVers.js')
// xdescribe('webdriver.io page', () => {

//     it('demonstrate', () => {
//         browser.setWindowSize(1920,1080)
//         browser.url('https://webdriver.io/')
//         mainPage.searchInput.addValue('test');
        
//         mainPage.setUserName(' type with metod')
        
       
//     })

//     it('shoud click docs button', () => {
//         ButtonDocs.clickButtonDocs();
//         ButtonAPI.clickButtonApi();
        
//        // ApiPreMenuContributelink.PreMenuContribute(); // for window resolution >1027 (Width) 
//         ApiContributelink.ContributeclickLink();
        
//         ButtonHelp.clickButtonHelp()
        
        
//     //    ApiContributelink.ContributeclickLink(); 
//     })
//     it('is displayed', () => {
//         IsDisplayedHelptextBrowseDocs.isDisplayedBrowseDocs1()
//     })
//     it('Versions click', () => {
//         ButtonVersions.clickVersions()
//     })
//     it('Past versions', () => {
//         PastVersions.PastVersionsClick() //don't work with window resolution > 1027px (Width)
        
//     })
    
//     it('Click DocV5', () => {
//         DocV5PastVer.DocV5Click()
//     })

// }) 

// ДЗ №28 Кода становиться меньше и он становиться более читабельным

// Homework #29


const assert = require('assert')
const UserNamefield = require('../GithubElementsloginPage/SingUP/Usernamefield.js')
const UserEmailField = require('../GithubElementsloginPage/SingUP/UserEmailField.js')
const UserPasswordField = require('../GithubElementsloginPage/SingUP/UserPasswordField.js')
const ButtonSignUp = require('../GithubElementsloginPage/SingUP/ButtSignUptoGithub')
const RandomName = require('../GithubElementsloginPage/SingUP/RandomName.js')
const RandomEmail = require('../GithubElementsloginPage/SingUP/RandomEmaildata')
const RandomPassDB = require('../GithubElementsloginPage/SingUP/RandomPasswordDB')
const VerifYourAccount = require('../GithubElementsloginPage/SingUP/VerifyYourAccountLocator')
const DownUserNamefield = require('../GithubElementsloginPage/SingUP/DownUsernamefield')
const DownEmailNamefield = require('../GithubElementsloginPage/SingUP/DownEmailnamefield')
const DownPassfield = require('../GithubElementsloginPage/SingUP/DownPassfield')
const DownButtonSignUp = require('../GithubElementsloginPage/SingUP/DownButtSignUptoGithub')
const ButtonSignIn = require('../GithubElementsloginPage/SingUP/ButtSignIN')
const EmailField = require('../GithubElementsloginPage/SignInpage/EmailField')
const PasswordField = require('../GithubElementsloginPage/SignInpage/PasswordField')
const ButtonSignIn2 = require('../GithubElementsloginPage/SignInpage/ButtonSignIN')
const ButtonProfileDropList = require('../GithubElementsloginPage/ProfileUser/ButtonProfileDropDownList')
const UserNameText = require('../GithubElementsloginPage/ProfileUser/UserNameTextLocator')
const YourProfileButton = require('../GithubElementsloginPage/ProfileUser/YourProfileButton')
const YourRepositoryButton = require('../GithubElementsloginPage/ProfileUser/YourReposytoryButton')
const YourProjectButton = require('../GithubElementsloginPage/ProfileUser/YourProjectButton')
const YourStartsButton = require('../GithubElementsloginPage/ProfileUser/YourStartsButton')
const YourGistsButton = require('../GithubElementsloginPage/ProfileUser/YourGistsButton')
const FeaturePreButton = require('../GithubElementsloginPage/ProfileUser/FeaturePreviewButton')
const FeaturePreviewClosureX = require('../GithubElementsloginPage/ProfileUser/FeaturePreviewClosureX')
const YourGitHubprofile = require('../GithubElementsloginPage/YourGistsDropdownlist/YourGistsButton')
const YoudonthaveGists = require('../GithubElementsloginPage/YourGistsDropdownlist/YoudonthaveGists')
const BackGitHub = require('../GithubElementsloginPage/YourGistsDropdownlist/BackGitHub')
const HelpButton = require('../GithubElementsloginPage/ProfileUser/HelpButton')
const SettingsButton = require('../GithubElementsloginPage/ProfileUser/SettingsButton')
const SingOutButton = require('../GithubElementsloginPage/ProfileUser/SingOutButton')
const ProjectTab = require('../GithubElementsloginPage/Tabs/ProjectTab')
const PackagesTab = require('../GithubElementsloginPage/Tabs/Packagestab')
const StarsTab = require('../GithubElementsloginPage/Tabs/StarsTab')
const FollowersTab = require('../GithubElementsloginPage/Tabs/FollowersTab')
const FollowingTab = require('../GithubElementsloginPage/Tabs/FollowingTab')
const OverviewTab = require('../GithubElementsloginPage/Tabs/OverviewTab')
const NewProject = require('../GithubElementsloginPage/Projects/NewProject')
const ProjectNameField = require('../GithubElementsloginPage/Projects/CreateNewProject/ProjectNameField')
const DescriptionField = require('../GithubElementsloginPage/Projects/CreateNewProject/DescriptionField')
const PrivatRadioBut = require('../GithubElementsloginPage/Projects/CreateNewProject/PrivateRadioBut')
const TemplateBasicKanban = require('../GithubElementsloginPage/Projects/CreateNewProject/ProjectTemplate/TemplateBasicKanban')
const CreateProjectButton = require('../GithubElementsloginPage/Projects/CreateNewProject/CreateProjectButton')
const AddColumn = require('../GithubElementsloginPage/Projects/CreateNewProject/AddColumn')
const AddNameColumn = require('../GithubElementsloginPage/Projects/CreateNewProject/AddNameColumn')
const PresetNameColumn = require('../GithubElementsloginPage/Projects/CreateNewProject/PresetNameColumn')
const ToDoRaidoBut = require('../GithubElementsloginPage/Projects/CreateNewProject/Presets Name Column/ToDoRaidoBut')
const NewlyAddedCheck = require('../GithubElementsloginPage/Projects/CreateNewProject/Presets Name Column/NewlyAddedCheck')
const CreateColumn = require('../GithubElementsloginPage/Projects/CreateNewProject/Presets Name Column/CreateColumn')
const ProjectTemplate = require('../GithubElementsloginPage/Projects/CreateNewProject/ProjectTemplate')
const ButtonMenu = require('../GithubElementsloginPage/Projects/CreateNewProject/ButtonMenu')
const subMenu = require('../GithubElementsloginPage/Projects/CreateNewProject/subMenu')
const ButtonEdit = require('../GithubElementsloginPage/Projects/CreateNewProject/ButtonEdit')
const ButtonDelete = require('../GithubElementsloginPage/Projects/CreateNewProject/ButtonDelete')
const CloseAddCloumn = require('../GithubElementsloginPage/Projects/CreateNewProject/CloseAddCloumn')
const ButtonNewRepos = require('../GithubElementsloginPage/Repositorytab/ButtonNewRepos')
const RepositoryTab = require('../GithubElementsloginPage/Tabs/RepositoryTab')
const NameRepositoryField = require('../GithubElementsloginPage/Repositorytab/NameRepositoryField')
const DecriptReposit = require('../GithubElementsloginPage/Repositorytab/DecriptReposit')
const PublicRadioBut = require('../GithubElementsloginPage/Repositorytab/PublicRadioBut')
const CheckboxReadme = require('../GithubElementsloginPage/Repositorytab/CheckboxReadme')
const AddGitIgnore = require('../GithubElementsloginPage/Repositorytab/AddGitIgnore')
const NoneAddGitIgnore = require('../GithubElementsloginPage/Repositorytab/NoneAddGitIgnore')
const AddLicense = require('../GithubElementsloginPage/Repositorytab/AddLicense')
const MitLicense = require('../GithubElementsloginPage/Repositorytab/MitLicense')
const CreateRepository = require('../GithubElementsloginPage/Repositorytab/CreateRepository')
const JavaAddGitIgnore = require('../GithubElementsloginPage/Repositorytab/JavaAddGitIgnore')
const Forgotpass = require('../GithubElementsloginPage/SignInpage/ForgotPass')
const ForgPasEmail = require('../GithubElementsloginPage/SignInpage/EmailField')
const SendMail = require('../GithubElementsloginPage/SignInpage/SendMail')
const SendForgotMailText = require('../GithubElementsloginPage/SignInpage/SendForgotMailText')
const WhyGithub = require('../GithubElementsloginPage/GitMainPage/WhyGithub')
const Explore = require('../GithubElementsloginPage/GitMainPage/Explore')
const  Pricing = require('../GithubElementsloginPage/GitMainPage/Pricing')
const Plans = require('../GithubElementsloginPage/GitMainPage/Plans')
const FreePlan = require('../GithubElementsloginPage/PricingPlans/FreePlan')
const EmailFieldPlan = require('../GithubElementsloginPage/PricingPlans/EmailFieldPlan')
const UserNamFieldPlan = require('../GithubElementsloginPage/PricingPlans/UserNamFieldPlan')
const PassFieldPlan = require('../GithubElementsloginPage/PricingPlans/PassFieldPlan')
//const expect = require('chai').expect;
//import {expect} from 'chai';


xdescribe('Testcase #1', () => {

    it('open url', () => {
        browser.setWindowSize(1920,1080)
        browser.url('https://github.com/')
        
    })

    it('random data Name', () => {
        browser.setTimeout({ 'pageLoad': 10000 })
        UserNamefield.Wait()
        UserNamefield.UsernameAddValue(RandomName.Value());
        browser.pause(000);
    })
    
    it('random data Email', () => {
        UserEmailField.Wait()
        UserEmailField.UserEmailAddValue(RandomEmail.Value());
        browser.pause(000);
    })

    it('random data Password', () => {
        UserPasswordField.Wait()
        UserPasswordField.UserPasswordAddValue(RandomPassDB.Value());
        browser.pause(000);
    })
    
    it('ClickSignUP', () => {
        ButtonSignUp.Wait()
        ButtonSignUp.SingUpClick()
        browser.pause(000);

    })


    it('Check URL', () => {

        const Urllink = browser.getUrl()
        assert.strictEqual(Urllink,'https://github.com/join')
        //expect(Urllink).to.equal('https://github.com/join');
        browser.pause(0000);

    })

    it('Is Displayed VerifyAccount', () => {

        Display = VerifYourAccount.locator().isDisplayed();

        console.log("IS DISPLAYED?: " + Display); //outputs: true
        
        browser.pause(0000);
    })


}) 

xdescribe('Testcase #2', () => {
    
    it('open url', () => {
        browser.setWindowSize(1920,1080)
        browser.url('https://github.com/')
    })

    it('Enter Username', () => {
        browser.setTimeout({ 'pageLoad': 10000 })
        DownUserNamefield.Wait()
        DownUserNamefield.ScrolltoLocator()
        DownUserNamefield.AddValue(RandomName.Value());

        browser.pause(0000);
    })

    it('Enter Username', () => {
        DownEmailNamefield.Wait()
        DownEmailNamefield.ScrolltoLocator()
        DownEmailNamefield.AddValue(RandomEmail.Value())
        browser.pause(0000);

    })

    it('Enter Pass', () => {
        DownPassfield.Wait()
        DownPassfield.ScrolltoLocator()
        DownPassfield.AddValue(RandomPassDB.Value())
        browser.pause(000);
    })

    // it('Sign Github', () => {
    //     DownButtonSignUp.ClickButton()
    //     browser.pause(10000);
    
    // })

})

xdescribe('Testcase #3 full dropdownlist', () => {
describe('Testcase #3', () => {
    it('open url', () => {
        browser.setWindowSize(1920,1080)
        browser.url('https://github.com/')
    })

    it('Click SignIn', () => {
        ButtonSignIn.Wait()
        ButtonSignIn.SinginClick()
    })

    it('Log In',() => {
        EmailField.Wait()
        
    })

    it('Log In2',() => {
        browser.setTimeout({ 'pageLoad': 10000 })
        EmailField.clearValue()
        EmailField.Wait()
        EmailField.AddValue('testehnefewfjw@beiop.com') //TestNameFGGRE2 testehnefewfjw@beiop.com  TestPassword123*%
        PasswordField.Wait()
        PasswordField.clearValue()
        EmailField.Wait()
        PasswordField.AddValue('TestPassword123*%')
        ButtonSignIn2.Wait()
        ButtonSignIn2.ClickSingin()
        
    })

    it('Check URL', () => {

        const Urllink = browser.getUrl()
        assert.strictEqual(Urllink,'https://github.com/')
    })

    it('Open profile list', () => {
        ButtonProfileDropList.Wait()
        ButtonProfileDropList.ClickButton()
    })

    it('User Name Check', () => {

        const UserNameCheck = UserNameText.GetUserNameTextinProf()
        
        assert.strictEqual(UserNameCheck,'TestNameFGGRE2')
        
    })

    it(' is Displayed? Your Profile ', () => {

        YourProfileButton.isDisplayedYourProfile()
        
    })

    it('Clickable? Your Profile', () => {
        
        YourProfileButton.Clickable()

    })

    it('Enable? Your Profile', () => {

        YourProfileButton.Enable()

    })
    
    it('Click Your Profile', () => {

        YourProfileButton.Wait()
        YourProfileButton.ClickYourProfileButton()
        
        browser.back();
    })
    
})

describe('Cycle #2 test Repository link', () => {
    

    it('Open profile list', () => {
        ButtonProfileDropList.Wait()
        ButtonProfileDropList.ClickButton()
    })

    it(' is Displayed? Your Reposytory button ', () => {

        YourRepositoryButton.isDisplayed()
        
    })

    it('Clickable? Your Reposytory button', () => {
        
        YourRepositoryButton.Clickable()

    })

    it('Enable? Your Reposytory button', () => {
        
        YourRepositoryButton.Enable()

    })
    
    it('Click Your Reposytory button', () => {
        YourRepositoryButton.Wait()
        YourRepositoryButton.Click()

        browser.pause(000)
        browser.back();
    })

    
})

describe('Cycle #3 test Projects link', () => {
    

    it('Open profile list', () => {
        ButtonProfileDropList.Wait()
        ButtonProfileDropList.ClickButton()
    })

    it(' is Displayed? Your Project button ', () => {

        YourProjectButton.isDisplayed()
        
    })

    it('Clickable? Your Project button', () => {
        
        YourProjectButton.Clickable()

    })

    it('Enable? Your Project button', () => {
        
        YourProjectButton.Enable()

    })

    it('Click Your Project button', () => {
        YourProjectButton.Wait()
        YourProjectButton.Click()

        browser.pause(000)

        browser.back();
    })

    
})

describe('Cycle #4 test YourStarts link', () => {

    it('Open profile list', () => {
        ButtonProfileDropList.Wait()
        ButtonProfileDropList.ClickButton()
    })

    it(' is Displayed? YourStarts button ', () => {

        YourStartsButton.isDisplayed()
        
    })

    it('Clickable? YourStarts button', () => {
        
        YourStartsButton.Clickable()

    })

    it('Enable? YourStarts button', () => {
        
        YourStartsButton.Enable()

    })

    it('Click YourStarts button', () => {
        YourStartsButton.Wait()
        YourStartsButton.Click()

        browser.back();

        browser.pause(000)

    })

})

describe('Cycle #5 test YourGists link', () => {

    it('Open profile list', () => {
        ButtonProfileDropList.Wait()
        ButtonProfileDropList.ClickButton()
    })

    it(' is Displayed? YourGists button ', () => {

        YourGistsButton.isDisplayed()
        
    })

    it('Clickable? YourGists button', () => {
        
        YourGistsButton.Clickable()

    })

    it('Enable? YourGists button', () => {
        
        YourGistsButton.Enable()

    })

    it('Click YourGists button and back', () => {
        YourGistsButton.Wait()
        YourGistsButton.Click()
        YoudonthaveGists.Wait()
        YoudonthaveGists.Click()
        BackGitHub.Click()
    })


})

describe('Cycle #6 test Feature preview link', () => {

    it('Open profile list', () => {
        ButtonProfileDropList.Wait()
        ButtonProfileDropList.ClickButton()
    })

    it(' is Displayed? Feature preview button ', () => {

        FeaturePreButton.isDisplayed()
        
    })

    it('Clickable? Feature preview button', () => {
        
        FeaturePreButton.Clickable()

    })

    it('Enable? Feature preview button', () => {
        
        FeaturePreButton.Enable()

    })

    it('Click Feature preview button', () => {
        FeaturePreButton.Wait()
        FeaturePreButton.Click()
        
        
    })
    it('Click Feature preview button', () => {
        // FeatureClosureX.isDisplayed()
        // FeatureClosureX.Clickable()
        // FeatureClosureX.Enable()
        // FeatureClosureX.WaitForClickable()
        // FeatureClosureX.Click()
        browser.url('https://github.com/') // Не работает клик на "X" закрытие диалогового окна
    })
})

describe('Cycle #7 test Help button link', () => {
    it('Open profile list', () => {
        ButtonProfileDropList.Wait()
        ButtonProfileDropList.ClickButton()
    })

    it(' is Displayed? Help button ', () => {

        HelpButton.isDisplayed()
        
    })

    it('Clickable? Help button', () => {
        
        HelpButton.Clickable()

    })

    it('Enable? Help button', () => {
        
        HelpButton.Enable()

    })

    it('Click Help button', () => {
        HelpButton.Wait()
        HelpButton.Click()

        browser.back();

        browser.pause(000)

    })
})

describe('Cycle #7 test Settings button link', () => {
    it('Open profile list', () => {
        ButtonProfileDropList.Wait()
        ButtonProfileDropList.ClickButton()
    })

    it(' is Displayed? Settings button ', () => {

        SettingsButton.isDisplayed()
        
    })

    it('Clickable? Settings button', () => {
        
        SettingsButton.Clickable()

    })

    it('Enable? Settings button', () => {
        
        SettingsButton.Enable()

    })

    it('Click Settings button', () => {
        SettingsButton.Wait()
        SettingsButton.Click()

        browser.back();

        browser.pause(000)

    })
})

describe('Cycle #7 test SingOut button link', () => {
    it('Open profile list', () => {
        ButtonProfileDropList.Wait()
        ButtonProfileDropList.ClickButton()
    })

    it(' is Displayed? SingOut button ', () => {

        SingOutButton.isDisplayed()
        
    })

    it('Clickable? SingOut button', () => {
        
        SingOutButton.Clickable()

    })

    it('Enable? SingOut button', () => {
        
        SingOutButton.Enable()

    })

    it('Click SingOut button', () => {
        SingOutButton.Wait()
        SingOutButton.Click()

        browser.back();

        browser.pause(000)

    })
})
})

xdescribe('Testcase #3 Main functional test', () => {

    it('open url', () => {
        browser.setWindowSize(1920,1080)
        browser.url('https://github.com/')
    })

    it('Click SignIn', () => {
        ButtonSignIn.Wait()
        ButtonSignIn.SinginClick()
    })

    it('Log In',() => {
        EmailField.Wait()
        
    })

    it('Log In2',() => {
        browser.setTimeout({ 'pageLoad': 10000 })
        EmailField.clearValue()
        EmailField.Wait()
        EmailField.AddValue('testehnefewfjw@beiop.com') //TestNameFGGRE2 testehnefewfjw@beiop.com  TestPassword123*%
        PasswordField.Wait()
        PasswordField.clearValue()
        EmailField.Wait()
        PasswordField.AddValue('TestPassword123*%')
        ButtonSignIn2.Wait()
        ButtonSignIn2.ClickSingin()
        
    })

    it('Open profile list', () => {
        ButtonProfileDropList.Wait()
        ButtonProfileDropList.ClickButton()
    })

    it('Click Tabs', () => {
        YourRepositoryButton.Wait()
        YourRepositoryButton.Click()

        ProjectTab.Wait()
        ProjectTab.Click()
        browser.pause(000)
        browser.back()

        PackagesTab.Wait()
        PackagesTab.isDisplayed()
        PackagesTab.Clickable()
        PackagesTab.Enable()
        PackagesTab.Click()
        browser.pause(000)
        browser.back()
        
        StarsTab.Wait()
        StarsTab.isDisplayed()
        StarsTab.Clickable()
        StarsTab.Enable()
        StarsTab.Click()
        browser.pause(000)
        browser.back()

        FollowersTab.Wait()
        FollowersTab.isDisplayed()
        FollowersTab.Clickable()
        FollowersTab.Enable()
        FollowersTab.Click()
        browser.pause(000)
        browser.back()

        FollowingTab.Wait()
        FollowingTab.isDisplayed()
        FollowingTab.Clickable()
        FollowingTab.Enable()
        FollowingTab.Click()
        browser.pause(000)
        browser.back()

        OverviewTab.Wait()
        OverviewTab.isDisplayed()
        OverviewTab.Clickable()
        OverviewTab.Enable()
        OverviewTab.WaitForClickable()
        OverviewTab.Click()
        browser.pause(000)
        browser.back()
    
    })

    it('Create a Project', () => {

        ProjectTab.WaitForClickable()
        ProjectTab.Click()
        NewProject.isDisplayed()
        NewProject.Clickable()
        NewProject.WaitForClickable()
        NewProject.Click()
        ProjectNameField.isDisplayed()
        ProjectNameField.AddValue('New Project test')
        DescriptionField.isDisplayed()
        DescriptionField.AddValue('My new project test information')
        ProjectTemplate.WaitForClickable()
        ProjectTemplate.Click()
        TemplateBasicKanban.WaitForClickable()
        TemplateBasicKanban.Click()
        PrivatRadioBut.WaitForClickable()
        PrivatRadioBut.Click()
        CreateProjectButton.WaitForClickable()
        CreateProjectButton.Click()
        browser.pause(000)
    })
    it('Add Column a Project', () => {
        AddColumn.WaitForClickable()
        AddColumn.Click()
        AddNameColumn.WaitForDisplayed()
        AddNameColumn.WaitForClickable()
        AddNameColumn.AddValue('New test column')
        PresetNameColumn.WaitForClickable()
        PresetNameColumn.Click()
        ToDoRaidoBut.WaitForClickable()
        ToDoRaidoBut.Click()
        NewlyAddedCheck.ScrollIntoView()
        NewlyAddedCheck.WaitForClickable()
        NewlyAddedCheck.Click()
        CreateColumn.ScrollIntoView()
        CreateColumn.WaitForClickable()
        CreateColumn.Click()
    })
    it('Delete a Project', () => {
        // browser.url('https://github.com/TestNameFGGRE2?tab=projects')  // auto delete projects
        // $('[href="/users/TestNameFGGRE2/projects/16"]').click()
        CloseAddCloumn.WaitForClickable()
        CloseAddCloumn.Click()
        ButtonMenu.WaitForClickable()
        ButtonMenu.Click()
        subMenu.WaitForClickable()
        subMenu.Click()
        ButtonEdit.WaitForClickable()
        ButtonEdit.Click()
        ButtonDelete.ScrollIntoView()
        ButtonDelete.WaitForClickable()
       
        ButtonDelete.Click()
        browser.acceptAlert()
        browser.pause(000)

    })

    it('Open profile list', () => {
        ButtonProfileDropList.Wait()
        ButtonProfileDropList.ClickButton()
    })
    it('Click Tabs', () => {
        YourRepositoryButton.Wait()
        YourRepositoryButton.Click()
    })

    it(' Add repository', () => {
        RepositoryTab.WaitForClickable()
        RepositoryTab.Click()
    })

    it(' Create repository', () => {
        ButtonNewRepos.WaitForClickable()
        assert.strictEqual(ButtonNewRepos.GetText(),'New')
        ButtonNewRepos.Click()
        NameRepositoryField.AddValue('Test Name repository')
        DecriptReposit.AddValue('Test description about new repository')
        PublicRadioBut.WaitForClickable()
        PublicRadioBut.Click()
        CheckboxReadme.WaitForClickable()
        CheckboxReadme.Click()
        AddGitIgnore.WaitForClickable()
        AddGitIgnore.Click()
        JavaAddGitIgnore.WaitForClickable()
        JavaAddGitIgnore.Click()
        AddLicense.WaitForClickable()
        AddLicense.Click()
        MitLicense.WaitForClickable()
        MitLicense.Click()
        CreateRepository.WaitForClickable()
        CreateRepository.Click()
    })

})

xdescribe('Testcase #4 Forgot Password', () => {
describe('Forgot Password value " "', () => {
    it('open url', () => {
        browser.setWindowSize(1920,1080)
        browser.url('https://github.com/')
    })

    it('Click SignIn', () => {
        ButtonSignIn.Wait()
        ButtonSignIn.SinginClick()
        
    })

    it('Forgot pass Neg " " ',() => {
        Forgotpass.Click()
        $('#email_field').addValue(' ')
        SendMail.Click()
    })
})
describe('Forgot Password value "asdfgg"', () => {
    it('open url', () => {
        browser.setWindowSize(1920,1080)
        browser.url('https://github.com/')
    })

    it('Click SignIn', () => {
        ButtonSignIn.Wait()
        ButtonSignIn.SinginClick()
        
    })

    it('Forgot pass Neg "asdfgg" ',() => {
        Forgotpass.Click()
        $('#email_field').addValue('asdfgg')
        SendMail.Click()
    })
})
describe('Forgot Password value "aa@@google.com"', () => {
    it('open url', () => {
        browser.setWindowSize(1920,1080)
        browser.url('https://github.com/')
    })

    it('Click SignIn', () => {
        ButtonSignIn.Wait()
        ButtonSignIn.SinginClick()
        
    })

    it('Forgot pass Neg "aa@@google.com" ',() => {
        Forgotpass.Click()
        $('#email_field').addValue('aa@@google.com')
        SendMail.Click()
    })
})
describe('Forgot Password value "testehnefewfjw@beiop.com"', () => {
    it('open url', () => {
        browser.setWindowSize(1920,1080)
        browser.url('https://github.com/')
    })

    it('Click SignIn', () => {
        ButtonSignIn.Wait()
        ButtonSignIn.SinginClick()
        
    })

    it('Forgot pass Neg "testehnefewfjw@beiop.com" ',() => {
        Forgotpass.Click()
        $('#email_field').addValue('testehnefewfjw@beiop.com')
        SendMail.Click()
        const checktext = SendForgotMailText.GetText()
        assert.strictEqual(checktext,'Check your email for a link to reset your password. If it doesn’t appear within a few minutes, check your spam folder.')
        
    })
})
})

xdescribe('Testcase #5 Mouse Forward', () => {
    describe('mouse forward', () => {
        it('open url', () => {
            browser.setWindowSize(1920,1080)
            browser.url('https://github.com/')
        })
        it('mouse forward to WhyGithub', () => {
            WhyGithub.MoveTo()
            WhyGithub.isDisplayed()
        })

        it('mouse forward to Explore', () => {
            Explore.MoveTo()
            Explore.isDisplayed()
        })
        it('mouse forward to Pricing', () => {
            Pricing.MoveTo()
            Pricing.isDisplayed()
        })

    })
})

xdescribe('Testcase #6 Pricing', () => {
    describe('test pricing', () => {
        it('open url', () => {
            browser.setWindowSize(1920,1080)
            browser.url('https://github.com/')
        })
        it('mouse forward to Pricing', () => {
            Pricing.MoveTo()
            Plans.Click()
            FreePlan.WaitForClickable()
            FreePlan.Click()
            UserNamFieldPlan.AddValue('TestNameFGGRE2')
            EmailFieldPlan.AddValue('testehnefewfjw@beiop.com')
            PassFieldPlan.AddValue('TestPassword123*%')
        })

    })
})


///testetetetefdgfd
fdgfdgfd