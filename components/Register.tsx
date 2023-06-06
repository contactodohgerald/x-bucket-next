import React, { ChangeEvent, FormEvent, useState } from "react";
import Input from "./Layouts/Input";
import Select from "./Layouts/Select";
import Option from "./Layouts/Option";

import { countries } from "@/services/default";
import Button from "./Layouts/Button";

function Register() {
  const [formData, setFormData] = useState({
    xtifier: "",
    country: "",
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const registerUser = (e: FormEvent) => {
    e.preventDefault();
    console.log('first', formData)
  }

  return (
    <>
      <dialog
        id="register"
        className="modal modal-bottom sm:modal-middle"
      >
        <form onSubmit={registerUser} className="modal-box">
          <h3 className="font-bold text-lg">Register!</h3>
          <div className="mt-5">
            <Select name="country" >
              <Option value="">Select Country</Option>
              {countries.map(({name, value}) => (
                <Option value={value}>{name}</Option>
              ) )}
            </Select>
          </div>
          <div className="mt-5">
            <Input 
              value={formData.xtifier}
              onChange={handleChange}
              type="text" 
              name="xtifier" 
              placeholder="Xitifier E.g xanta, xanta@com.com, 77777" />
          </div>
          <div className="modal-action">
            <Button>Continue</Button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default Register;
