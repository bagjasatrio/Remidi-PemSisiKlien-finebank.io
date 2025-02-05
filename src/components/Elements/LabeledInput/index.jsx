import PropTypes from 'prop-types';
import Label from './Label';
import Input from './Input';

const LabeledInput = ({ label, name, type, placeholder, register }) => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Input 
        name={name} 
        type={type} 
        placeholder={placeholder} 
        register={register}
      />
    </>
  );
};

LabeledInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.func,
};

export default LabeledInput;