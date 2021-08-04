const { Selector } = require('testcafe');
const { ClientFunction } = require('testcafe');
const { ReactSelector } = require('testcafe-react-selectors');
//import { fixture, test } from './testcafe-defs';

fixture`Building a resume started`
      .page`http://localhost:3000`;

test('test page header', async t => {
      // assertion to check if the only Link component on the page contains the required text
      //const header = ReactSelector('Link').withProps('children','Resume Builder')
      //await t.expect(header).exists;
      const title = await Selector('a');
      const titleText = await title.innerText;
      console.log(titleText)
      // The assertion
      await t.expect(titleText).eql('Drail Resume Builder');
});

// fill type text with email
test('Fill the education details', async t => {
      await t
            .typeText(await ReactSelector('input').withProps('id', 'name'), "Scott")
            .typeText(await ReactSelector('input').withProps('id', 'email'), "scott@xxxx.com")
            .typeText(await ReactSelector('input').withProps('id', 'phone'), "123432424")
            .typeText(await ReactSelector('textarea').withProps('id', 'objective'), "Have no objective")
            .typeText(await ReactSelector('input').withProps('id', 'skills'), "Git,Jira")
            .typeText(await ReactSelector('input').withProps('id', 'lang'), "Python,JavaScript")
            .typeText(await ReactSelector('input').withProps('id', 'college'), "St.Xavier College")
            .typeText(await ReactSelector('input').withProps('id', 'degree'), "BE")
            .typeText(await Selector('input#from'), "2001-01-13")
            .typeText(await Selector('input#to'), "2004-05-01")    
      const edu = await ReactSelector('EducationForm').findReact('Button').withProps('children', 'Submit')
      await t
            .wait(100)
            .click(await edu)
      await t.click(await ReactSelector('a').withProps('children', 'Resume'))
      const resume = await ReactSelector('Resume').withProps('name', 'Scott')
      await t.expect(resume.exists).ok()
      const educationDetails = await ReactSelector('EducationView').withProps({
            college: 'St.Xavier College',
            degree: 'BE',
            from: '2001-01-13',
            to: '2004-05-01'
      })     
      await t.expect(educationDetails.exists).ok()
});

test('Fill the experience details', async t => {
      await t
            .typeText(await ReactSelector('ExperienceForm').findReact('Input').withProps('id', 'position'), "Sr. Software Engineer")
            .typeText(await ReactSelector('ExperienceForm').findReact('Input').withProps('id', 'company'), "Dell")
            .typeText(await ReactSelector('ExperienceForm').findReact('Input').withProps('id', 'from'), "2001-01-13")
            .wait(100)
            .typeText(await ReactSelector('ExperienceForm').findReact('Input').withProps('id', 'to'), "2004-05-01")
            .wait(100)
            .typeText(await ReactSelector('ExperienceForm').findReact('Input').withProps('id', 'responsible'), 'Tester')
            .wait(500)
      const exp = await ReactSelector('ExperienceForm').findReact('Button').withProps('children', 'Submit')
      await t.click(exp)
      const experience = await ReactSelector('ExperienceForm').withProps({
            company: 'Dell',
            position: 'Sr. Software Engineer',
            from: '2001-01-13',
            to: '2004-05-01',
            responsible: 'Tester'

      })      
      await t.wait(100)
      await t.expect(experience.exists).ok()
});

