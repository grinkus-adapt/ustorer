export const userStoryFormData = [
  {
    id: `persona`,
    label: `As a`,
    type: `textinput`,
    placeholder: `type of user`,
    className: ``,
    required: true,
  },
  {
    id: `goal`,
    label: `I want to`,
    type: `textinput`,
    placeholder: `some goal`,
    className: ``,
    required: true,
  },
  {
    id: `reason`,
    label: `so that`,
    type: `textinput`,
    placeholder: `some reason`,
    className: ``,
    required: true,
  },
  {
    id: `description`,
    label: `Description`,
    type: `textarea`,
    placeholder: ``,
    className: `form-field__description`,
    required: true,
  },
  {
    id: `acceptanceCriteria`,
    label: `Acceptance Criteria`,
    type: `acceptanceCriteria`,
    placeholder: ``,
    className: `form-field__criteria`,
    required: false,
  },
];