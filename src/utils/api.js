import { effects } from 'redux-saga';

const getApiFromState = (state) => {
  const { url, headers } = state.api;

  return {
    url,
    headers,
  };
};

function* request(endpoint, method, params, otherURL) {
  try {
    const state = yield effects.select();
    const { url, headers } = getApiFromState(state);
    console.log(url, endpoint, headers);
    let body;
    if (method === 'POST' || method === 'PUT') {
      body = JSON.stringify(params);
    }

    const requestURL = otherURL || url;

    const result = yield fetch(`${requestURL}${endpoint}`, {
      method,
      headers,
      body,
    });

    const json = yield result.json();

    return json;
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}

export function* get(endpoint, url) {
  return yield request(endpoint, 'GET', null, url);
}

export function* post(endpoint, params, url) {
  return yield request(endpoint, 'POST', params, url);
}

export function* put(endpoint, params) {
  return yield request(endpoint, 'PUT', params);
}
