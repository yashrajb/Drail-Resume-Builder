import { Selector, t } from 'testcafe';
const { ReactSelector } = require('testcafe-react-selectors');

class mainPage {
    constructor() {
        this.title = Selector('a');
        this.resume = ReactSelector('LinkAnchor')
        this.name = Selector('input[id=name]')
        this.email = Selector('input[id=email]')
        this.phone = Selector('input[id=phone]')
        this.headline = Selector('input[id=headline]')
        this.objective = Selector('textarea[id=objective]')
        this.skills = Selector('input[id=skills]')
        this.languages = Selector('input[id=lang]')
        this.college = ReactSelector('EducationForm').findReact('Input').withProps('id', 'college')
        this.degree = ReactSelector('EducationForm').findReact('Input').withProps('id', 'degree')
        this.fromDateEdu = ReactSelector('EducationForm').findReact('Input').withProps('id', 'from')
        this.toDateEdu = ReactSelector('EducationForm').findReact('Input').withProps('id', 'to')
        this.educationSubmit = ReactSelector('EducationForm').findReact('Button').withProps('children', 'Submit')
        this.redirect = Selector('h3')
        this.position = ReactSelector('ExperienceForm').findReact('Input').withProps('id', 'position')
        this.company = ReactSelector('ExperienceForm').findReact('Input').withProps('id', 'company')
        this.fromDateExp = ReactSelector('ExperienceForm').findReact('Input').withProps('id', 'from')
        this.toDateExp = ReactSelector('ExperienceForm').findReact('Input').withProps('id', 'to')
        this.responsibility = ReactSelector('ExperienceForm').findReact('Input').withProps('id', 'responsible')
        this.experienceSubmit = ReactSelector('ExperienceForm').findReact('Button').withProps('children', 'Submit')
    }

    // click the resume button for the given link
    async clickResumeButton(link) {
        await t.click(this.resume.withProps('children', link))
    };

    // fills basic details
    async fillBasicDetails(name, email, phone, headline, obj, skills, lang) {
        await t
            .typeText(await this.name, name)
            .typeText(await this.email, email)
            .typeText(await this.phone, phone)
            .typeText(await this.headline, headline)
            .typeText(await this.objective, obj)
            .typeText(await this.skills, skills)
            .typeText(await this.languages, lang)
    }

    // fill the education details in the page
    async fillEducationDetails(educationDetails) {
        await t
            .typeText(await this.college, educationDetails.college)
            .typeText(await this.degree, educationDetails.degree)
            .typeText(await this.fromDateEdu, educationDetails.fromDateEdu)
            .typeText(await this.toDateEdu, educationDetails.toDateEdu)
            .click(await this.educationSubmit)
    }

    // fills the experience details 
    async fillExperienceDetails(experienceDetails) {
        await t
            .typeText(await this.position, experienceDetails.position)
            .typeText(await this.company, experienceDetails.company)
            .typeText(await this.fromDateExp, experienceDetails.fromDateExp)
            .typeText(await this.toDateExp, experienceDetails.toDateExp)
            .typeText(await this.responsibility, experienceDetails.responsibility)
            .click(await this.experienceSubmit)
    }
}

export default new mainPage();