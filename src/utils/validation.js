export const validateEducation = function(obj) {
  return obj.college && obj.degree && obj.from && obj.to;
};

export const validateExp = function(obj) {
  console.log(obj);
  return obj.position && obj.company && obj.from && obj.to && obj.responsible;
};
