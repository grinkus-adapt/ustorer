import './FormField.css';

const FormField = ({ children, labelFor, label, className }) => (
  <div className={`form-field ${className ? className : ``}`}>
    <label for={labelFor}>{label}</label>
    {children}
  </div>
);

export default FormField;
