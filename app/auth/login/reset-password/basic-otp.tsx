import { useOtpInput } from "react-otp-input-hook";
import React from 'react';
import './otpStyle.css'; // Replace this with the path to your CSS file

export const BasicOTPComponent = ({ onChange }: { onChange: (val: string) => void }) => {
  const { register } = useOtpInput({
    onInputValueChange: onChange,
  });

  const defaultOptions = { required: true };

  return (
    <div className="square-otp-container">
      <input className="square-otp-input" {...register("digit-1", defaultOptions)} />
      <input className="square-otp-input" {...register("digit-2", defaultOptions)} />
      <input className="square-otp-input" {...register("digit-3", defaultOptions)} />
      <input className="square-otp-input" {...register("digit-4", defaultOptions)} />
      <input className="square-otp-input" {...register("digit-5", defaultOptions)} />
    </div>
  );
};
