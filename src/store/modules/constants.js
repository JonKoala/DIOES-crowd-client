import ApiService from 'services/api.service'

import { RESET_STATE, SET_CLASSES, SET_FONTES, SET_ORGAOS, SET_SUBORGAOS, SET_TIPOS } from 'store/mutation.types'
import { FETCH_CONSTANTS } from 'store/action.types'


function getInitialState () {
  return {
    classes: [],
    fontes: [],
    orgaos: [],
    suborgaos: [],
    tipos: []
  }
}
const initialState = getInitialState()
const state = getInitialState

const getters = {

  classes (state) {
    return state.classes
  },
  fontes (state) {
    return state.fontes
  },
  orgaos (state) {
    return state.orgaos
  },
  suborgaos (state) {
    return state.suborgaos
  },
  tipos (state) {
    return state.tipos
  }

}

const mutations = {

  [SET_CLASSES] (state, classes) {
    state.classes = classes
  },
  [SET_FONTES] (state, fontes) {
    state.fontes = fontes
  },
  [SET_ORGAOS] (state, orgaos) {
    state.orgaos = orgaos
  },
  [SET_SUBORGAOS] (state, suborgaos) {
    state.suborgaos = suborgaos
  },
  [SET_TIPOS] (state, tipos) {
    state.tipos = tipos
  },
  [RESET_STATE] (state) {
    Object.keys(initialState).forEach(key => { state[key] = initialState[key] })
  }

}

const actions = {

  [FETCH_CONSTANTS] ({ commit }) {
    commit(RESET_STATE)
    ApiService.get('classes/predictable').then(result => commit(SET_CLASSES, result.sort()))
    ApiService.get('publicacoes/list/fonte').then(result => commit(SET_FONTES, result.sort()))
    ApiService.get('publicacoes/list/orgao').then(result => commit(SET_ORGAOS, result.sort()))
    ApiService.get('publicacoes/list/suborgao').then(result => commit(SET_SUBORGAOS, result.sort()))
    ApiService.get('publicacoes/list/tipo').then(result => commit(SET_TIPOS, result.sort()))
  }

}

export default {
  state,
  getters,
  mutations,
  actions
}
