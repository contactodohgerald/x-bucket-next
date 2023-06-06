import React from "react";
import Input from "./Layouts/Input";
import Button from "./Layouts/Button";

function Login() {
  const loginUser = () => {

  } 
  
  return (
    <>
      <dialog
        id="login"
        className="modal modal-bottom sm:modal-middle"
      >
        <form method="post" onSubmit={loginUser} className="modal-box">
          <h3 className="font-bold text-lg">Login!</h3>
          <div className="mt-5">
            <Input type="text" name="xtifier" placeholder="Xitifier E.g xanta, xanta@com.com, 77777" />
          </div>
          <div className="modal-action">
            <Button>Continue</Button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default Login;
