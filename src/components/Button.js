import React from 'react';

const Button = ({
  onClick,
  className,
  type = 'button',
  children
}) =>
  <button
    type={type}
    className={className}
    onClick={onClick}
  >
    {children}
  </button>

const ButtonInline = ({
  onClick,
  type = 'button',
  children
}) =>
  <Button
    type={type}
    className="button-inline"
    onClick={onClick}
  >
    {children}
  </Button>

export default Button;

export {
  ButtonInline
};