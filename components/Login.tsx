import React, { ChangeEvent, FormEvent, useState } from "react";
import Input from "./Layouts/Input";
import Button from "./Layouts/Button";
import Link from "next/link";
import Spinner from "./Layouts/Spinner";
import { toast } from "react-toastify";
import { login } from "@/services/post.request";

function Login() {
  const [loader, setLoader] = useState(false)
  const [formData, setFormData] = useState({
    xtifier: "",
    password: ""
  })
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const loginUser = async (e: FormEvent) => {
    e.preventDefault();
    if(formData.xtifier == '') return toast.error('Xtifier can`t be empty')

    setLoader(true)
    await login(formData)
    .then((res) => {
      toast.success(res.data.message)
      setFormData({
        xtifier: "",
        password: ""
      });
    })
    .catch((err) => {
      toast.error(err.response.data.message)
    })
    .finally(() => setLoader(false))
  };

  return (
    <>
      <section className="w-full bg-[url('/used/food-storytelling.png')] py-20">
        <div className="hidden py-20 text-center lg:block">
         
        </div>
        <div className="max-w-xl py-4 mx-auto p-4 lg:p-0">
          <div className="w-full shadow-lg bg-gray-50 dark:bg-gray-100 mt-11 lg:-mt-36 lg:full p-4 lg:p-7 rounded-3xl">
            <span className="flex justify-end mb-8">
              <Link
                href={'register'}
                className="px-4 py-3 text-sm font-medium border border-gray-800 hover:bg-gray-500 hover:text-gray-100 rounded-lg"
              >
                Register Account
              </Link>
            </span>
            <div className="">
              <form onSubmit={loginUser} className="p-0 m-0">
                <div className="mt-5">
                  <Input
                    value={formData.xtifier}
                    onChange={handleChange}
                    type="text"
                    name="xtifier"
                    placeholder="Xitifier E.g xanta, xanta@com.com, 77777"
                  />
                </div>
                <div className="mt-5">
                  <Input
                    value={formData.password}
                    onChange={handleChange}
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div className="mt-5">
                  {loader ? <Spinner/> :  <Button _type="auth">Continue</Button>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
