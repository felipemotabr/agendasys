import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

// @ts-ignore
export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [ fieldName, registerField ]);
  return <select
    ref={inputRef}
    defaultValue={defaultValue}
    {...rest}
    className={error ? "select_error" : ""}
  />;
}