import React from "react";
import { useController, useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { values } from "lodash";

const Input = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });

  return (
    <div>
      <input
        {...field}
        {...props}
        className="border p-2 w-full transition-all focus:border-blue-400 rounded-lg"
      />
    </div>
  );
};
Input.propTypes = {
  // value: PropTypes.string
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  control: PropTypes.any.isRequired,
};
export default Input;
