let initialState = {
  name: "",
  image: null,
  email: "",
  phone: "",
  headline: "",
  objective: "",
  github: "",
  dribble: "",
  linkedin: "",
  website: "",
  skills: [],
  lang: [],
  education: [],
  exp: []
};

function Resume(state = initialState, action) {
  switch (action.type) {
    case "ADD_IMAGE":
      console.log(action.payload);
      return {
        ...state,
        image: action.payload
      };
    case "ADD_HEADLINE":
      return {
        ...state,
        headline: action.payload
      };
    case "ADD_EXP":
      console.log(state.exp);
      let exp = [...state.exp, action.payload];
      return {
        ...state,
        exp
      };
    case "ADD_EDU":
      let education = [...state.education, action.payload];
      return {
        ...state,
        education
      };
    case "ADD_GITHUB":
      return {
        ...state,
        github: action.payload
      };
    case "ADD_DRIBBLE":
      return {
        ...state,
        dribble: action.payload
      };
    case "ADD_WEBSITE":
      return {
        ...state,
        website: action.payload
      };
    case "ADD_EMAIL":
      return {
        ...state,
        email: action.payload
      };
    case "ADD_PHONE":
      return {
        ...state,
        phone: action.payload
      };
    case "ADD_NAME":
      return {
        ...state,
        name: action.payload
      };
    case "CHANGE_EXP":
      let changedExp = state.exp;
      changedExp[action.payload.index][action.payload.property] =
        action.payload.value;
      console.log(changedExp);
      return {
        ...state,
        exp: changedExp
      };
    case "CHANGE_EDU":
      let changedEducation = state.education;
      changedEducation[action.payload.index][action.payload.property] =
        action.payload.value;
      return {
        ...state,
        education: changedEducation
      };
    case "ADD_SKILL":
      let addedSkill = action.payload.split(",");
      return {
        ...state,
        skills: addedSkill
      };
    case "ADD_OBJECTIVE":
      return {
        ...state,
        objective: action.payload
      };
    case "ADD_LANG":
      let addLang = action.payload.split(",");
      return {
        ...state,
        lang: addLang
      };
    default:
      return state;
  }
}

export default Resume;
