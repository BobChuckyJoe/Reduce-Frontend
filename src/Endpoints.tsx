export const backendHost = "reduce.projectmonke.com";
export const backendPort = 6969;

const backendURL = `http://${backendHost}:${backendPort}`;
export const signupURL = `${backendURL}/signup`;
export const loginURL = `${backendURL}/login`;
export const uploadImageURL = `${backendURL}/upload`;
export const checkSessURL = `${backendURL}/check_sess`;
export const getStatsURL = `${backendURL}/stats`;
export const increaseStatsURL = `${backendURL}/stats/increase`;
export const decreaseStatsURL = `${backendURL}/stats/decrease`;
export const memberStatsURL = `${backendURL}/members`;
