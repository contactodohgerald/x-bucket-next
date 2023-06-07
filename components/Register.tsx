import React, { ChangeEvent, FormEvent, useState } from "react";
import Input from "./Layouts/Input";
import Button from "./Layouts/Button";
import Link from "next/link";
import Spinner from "./Layouts/Spinner";
import { toast } from "react-toastify";
import { register } from "@/services/post.request";
import { getUserIp } from "@/services/default";

function Register() {
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    xtifier: "",
    password: "",
    c_password: "",
    avatar: "xitifier-main"
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const registerUser = async (e: FormEvent) => {
    e.preventDefault();
    if(formData.xtifier == '') return toast.error('Fields can`t be empty')

    if(formData.password !== formData.c_password) return toast.error('Password does not match')

    setLoader(true)
    const ip_address = await getUserIp()
    const data = {...formData, ip_address}
    await register(data)
    .then((res) => {
      toast.success(res.data.message)
      setFormData({
        xtifier: "",
        password: "",
        c_password: "",
        avatar: ""
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
        <div className="hidden py-20 text-center lg:block"></div>
        <div className="max-w-xl py-4 mx-auto p-4 lg:p-0">
          <div className="w-full shadow-lg bg-gray-50 dark:bg-gray-100 mt-11 lg:-mt-36 lg:full p-4 lg:p-7 rounded-3xl">
            <span className="flex justify-end mb-8">
              <Link
                href={"login"}
                className="px-4 py-3 text-sm font-medium border border-gray-800 hover:bg-gray-500 hover:text-gray-100 rounded-lg"
              >
                Login
              </Link>
            </span>
            <h3 className="text-3x1">Register User</h3>
            <div className="">
              <form onSubmit={registerUser} className="p-0 m-0">
                <div>
                  Avatars
                </div>
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
                  <Input
                    value={formData.c_password}
                    onChange={handleChange}
                    type="password"
                    name="c_password"
                    placeholder="Confirm Password"
                  />
                </div>
               <div className="mt-3">
                {loader ? <Spinner /> : <Button _type="auth">Continue</Button>}
               </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
