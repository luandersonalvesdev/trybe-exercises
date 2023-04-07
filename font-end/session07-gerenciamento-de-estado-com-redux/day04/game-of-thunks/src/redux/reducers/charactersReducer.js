import { 
  IS_LOADING, 
  SUCESS_FETCH, 
  FAIL_FETCH,
} from "../actions/charactersFetch.action";

const INITIAL_STATE = {
  isLoading: false,
  name: '',
  seasonsAppear: [],
  errorMessage: '',
  playedBy: '',
};

const charactersReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case SUCESS_FETCH:
      return {
        ...state,
        isLoading: false,
        name: payload.name,
        seasonsAppear: payload.tvSeries,
        playedBy: payload.playedBy,
      }
    case FAIL_FETCH:
      return {
        ...state,
        isLoading: false,
        errorMessage: 'Não encontramos esse personagem no nosso banco de dados',
        name: '',
        seasonsAppear: [],
      }
    default:
      return state;
  }
}

export default charactersReducer