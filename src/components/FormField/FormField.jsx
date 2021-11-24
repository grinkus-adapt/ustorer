import './FormField.css';

const FormField = ({ children, labelFor, label, className }) => (
  <div className={`FormField ${className ? className : ``}`}>
    <label for={labelFor}>{label}</label>
    {children}
  </div>
);

export default FormField;
