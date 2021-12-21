import './TextInput.css';
import { useEffect, useRef } from 'preact/hooks';

const TextInput = ({
  name,
  placeholder,
  required,
  onInput,
  value,
  className,
  onKeyDown,
  onFocus,
  onBlur,
}) => {
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const inputRef = useRef();
  return (
    <>
      <input
        ref={inputRef}
        type="text"
        name={name}
        id={name}
        className={`TextInput ${className}`}
        placeholder={placeholder}
        {...(required ? required : null)}
        onInput={onInput}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        value={value}
      />
    </>
  );
};

export default TextInput;
