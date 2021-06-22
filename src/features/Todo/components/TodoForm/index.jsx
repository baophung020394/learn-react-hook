import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField  from '../../../../components/form-controls/InputField';
import * as yup from 'yup';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup.object().shape({
    title: yup.string().required('Please enter title').min(5, 'Title min 5'),
  });
  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };
  return (
    <div>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="title" label="Todo" form={form}></InputField>
      </form>
    </div>
  );
}

export default TodoForm;
