export const bugReportFormData = [
  {
    id: `bug-description`,
    label: `Description`,
    type: `textarea`,
    placeholder: ``,
    className: `FormField__description`,
    required: true,
  },
  {
    id: `browser`,
    label: `Browser`,
    type: `textinput`,
    placeholder: `Chrome 15.0, Firefox 13.2`,
    className: ``,
    required: true,
  },
  {
    id: `devices`,
    label: `Devices`,
    type: `textinput`,
    placeholder: `Android 12, iOS 8`,
    className: ``,
    required: false,
  },
];
