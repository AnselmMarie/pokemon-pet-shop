import { ReactElement } from 'react';

const Input = ({ className = '' }: { className?: string }): ReactElement => {
  return (
    <input
      className={`w-full ${className}`}
      // id={id}
      // marginBottom={helper || errorMessage ? '$2' : '$5'}
      // inputMode={type}
      // value={field?.value}
      // onChange={field?.onChange}
    />
  );
};

export default Input;
