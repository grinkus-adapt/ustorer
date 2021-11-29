const formReducer = (state, action) => {
  const { type, payload } = action;

  if (type === `setIdValue`) {
    const { id, value } = payload;
    if (value !== state[id]) {
      return { ...state, [id]: value };
    }
    return state;
  }

  if (type === `setCriterionValue`) {
    if (payload.value !== state.acceptanceCriteria[payload.id]) {
      const acceptanceCriteria = [...state.acceptanceCriteria];
      acceptanceCriteria[payload.id] = payload.value;
      return {
        ...state,
        acceptanceCriteria,
      };
    }
  }

  if (type === `changeTaskType`) {
    const taskType = payload.value;
    return { ...state, taskType };
  }

  if (type === `addCriteriaList`) {
    const acceptanceCriteria = [...state.acceptanceCriteria];
    acceptanceCriteria.push(``);
    return {
      ...state,
      acceptanceCriteria,
    };
  }

  if (type === `remCriteriaList`) {
    const oldAcceptanceCriteria = [...state.acceptanceCriteria];
    const { index } = payload;
    const acceptanceCriteria = [
      ...oldAcceptanceCriteria.slice(0, index),
      ...oldAcceptanceCriteria.slice(index + 1),
    ];
    return {
      ...state,
      acceptanceCriteria,
    };
  }

  if (type === `useDraft`) {
    const { index } = payload;
    const draftFromLocalStorage = JSON.parse(
      localStorage.getItem(`formDraftState`)
    );
    const newState = draftFromLocalStorage[index];
    return newState;
  }

  if (type === `setSuccessClass`) {
    const { e } = payload;
    const selectedDiv = e.target;
    selectedDiv.classList.add(`Button__success`);
    setTimeout(() => {
      selectedDiv.classList.remove(`Button__success`);
    }, 3000);
    return state;
  }

  throw new Error();
};

export default formReducer;
