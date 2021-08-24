const { ReactSelector } = require('testcafe-react-selectors');

class redirectPage {
    constructor() {
        this.resume = ReactSelector('Resume')
        this.educationView = ReactSelector('EducationView')
        this.experienceView = ReactSelector('ExperienceForm')
    }

    // resume with specific name
    async checkRedirectName(name) {
        return this.resume.withProps('name', name)
    };

    // check education details
    async checkEducationDetails(educationDetails) {        
        return this.educationView.withProps(educationDetails)
    }

    // check experience details
    async checkExperienceDetails(Experiencedetails) {
        return this.experienceView.withProps(Experiencedetails)
    }

};

export default new redirectPage();