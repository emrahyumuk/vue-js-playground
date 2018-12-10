import * as types from './mutation-types';

export const initJokes = ({ commit }) => {
  fetch('https://safe-falls-22549.herokuapp.com/random_ten', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(json => commit(types.INIT_JOKES, json));
};

export const addJoke = ({ commit }) => {
  fetch('https://safe-falls-22549.herokuapp.com/random_joke', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(json => commit(types.ADD_JOKE, json));
};

export const removeJoke = ({ commit }, index) => {
  commit(types.REMOVE_JOKE, index);
};
