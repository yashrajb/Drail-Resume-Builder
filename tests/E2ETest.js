import mainPage from '../pages/mainPage';
import redirectPage from '../pages/redirectPage';
const data = require('../data/mainPageData');
import config from '../config/config'

fixture`E2E Fixture - Building a resume`
      .page`${config.testURL}`;

// page header test
test('Assert main page header', async t => {         
      await t.expect(await mainPage.title.innerText).eql(`${data.basicInfo.title}`);
});

// fill the education and experience details page
test('Fill the education and experience details', async t => {
      await mainPage.fillBasicDetails(data.basicInfo.name, data.basicInfo.email, data.basicInfo.phone, data.basicInfo.headline, data.basicInfo.objective, data.basicInfo.skills, data.basicInfo.languages)      
      await mainPage.fillEducationDetails(data.educationDetails)      
      await mainPage.fillExperienceDetails(data.experienceDetails)
      await mainPage.clickResumeButton('Resume')     
      const name = await redirectPage.checkRedirectName(data.basicInfo.name);
      await t.expect(name.exists).ok();     
      // check that we have the correct education details
      const educationDetails = await redirectPage.checkEducationDetails({
            college: data.educationDetails.college,
            degree: data.educationDetails.degree,
            from: data.educationDetails.fromDateEdu,
            to: data.educationDetails.toDateEdu
      })      
      await t.expect(educationDetails.exists).ok()
      // check that we have the correct experience details
      const experienceDetails = await redirectPage.checkExperienceDetails({
            position: data.experienceDetails.position,
            company: data.experienceDetails.company,
            from: data.experienceDetails.fromDateExp,
            to: data.experienceDetails.toDateExp,
            responsible: data.experienceDetails.responsibility
      })      
      await t.expect(experienceDetails.exists).ok()
});
