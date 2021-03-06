import PropTypes from "prop-types";
import React, { useState } from "react";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");
  function handleValueChange(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    // Prevent reloading brownser
    e.preventDefault();

    if (!onSubmit) return;
    const formValues = {
      title: value,
    };
    onSubmit(formValues);
    // Reset Form
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleValueChange} />
    </form>
  );
}

export default TodoForm;
