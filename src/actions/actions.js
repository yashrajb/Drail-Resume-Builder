export const addName = name => {
  return {
    type: "ADD_NAME",
    payload:name
  };
};

export const addColor = color => {
  return {
    type:"ADD_COLOR",
    payload:color
  }
}

export const addHeadline = headline => {
  return {
    type: "ADD_HEADLINE",
    payload:headline
  };
};

export const addExp = exp => {
  return {
    type: "ADD_EXP",
    payload:exp
  };
};

export const addEducation = edu => {
  return {
    type: "ADD_EDU",
    payload:edu
  };
};

export const addGithub = link => {
  return {
    type: "ADD_GITHUB",
    payload: link
  };
};

export const addLinkedin = link => {
  return {
    type: "ADD_LINKEDIN",
    payload: link
  };
};

export const addDribble = link => {
  return {
    type: "ADD_DRIBBLE",
    payload: link
  };
};

export const addWebsite = link => {
  return {
    type: "ADD_WEBSITE",
    payload: link
  };
};

export const addEmail = email => {
  return {
    type: "ADD_EMAIL",
    payload:email
  };
};

export const addPhone = phone => {
  return {
    type: "ADD_PHONE",
    payload:phone
  };
};

export const addObjective = objective => {
  return {
    type:"ADD_OBJECTIVE",
    payload:objective
  }
}

export const changeEducationState = obj => {
  return {
    type: "CHANGE_EDU",
    payload: obj
  };
};

export const changeExpState = obj => {
  return {
    type: "CHANGE_EXP",
    payload: obj
  };
};

export const addSkills = obj => {
  return {
    type: "ADD_SKILL",
    payload:obj
  }
}

export const addLang = lang => {
  return {
    type:"ADD_LANG",
    payload:lang
  }
}

