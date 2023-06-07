import React, { ChangeEvent, FormEvent, useState } from "react";
import Input from "./Layouts/Input";
import Textarea from "./Layouts/Textarea";
import Button from "./Layouts/Button";
import Spinner from "./Layouts/Spinner";
import { toast } from "react-toastify";
import { enquiry } from "@/services/post.request";

interface Props {
  details?: {
    title: string;
    email: string;
  };
}

function Contact({ details }: Props) {
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const sendEnquiry = async (e: FormEvent) => {
    e.preventDefault()

    if(formData.email == '' || formData.subject == '' || formData.message == '') return toast.error('Fileds can`t be empty')

    setLoader(true)
    await enquiry(formData)
    .then((res) => {
      toast.success(res.data.message)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    })
    .catch((err) => {
      toast.error(err.response.data.message)
    })
    .finally(() => setLoader(false))
  }

  return (
    <>
      <section className="py-16 bg-gray-100 font-poppins bg-gray-300">
        <div className="justify-center flex-1 py-4 mx-auto lg:py-10 md:px-7">
          <div className="max-w-xl mx-auto">
            <div className="text-center ">
              <div className="relative flex flex-col items-center">
                <div className="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
                  Contact
                </div>
                <h1 className="text-5xl font-bold dark:text-white">
                  {" "}
                  Contact{" "}
                  <span className="text-blue-500"> {details?.title} </span>{" "}
                </h1>
                <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                  <div className="flex-1 h-2 bg-blue-200"></div>
                  <div className="flex-1 h-2 bg-blue-400"></div>
                  <div className="flex-1 h-2 bg-blue-600"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mb-8 -mx-4">
            <div className="w-full px-4 mb-4 lg:w-1/3 lg:mb-0">
              <div className="py-12 text-center transition-all rounded-lg shadow dark:bg-gray-800 bg-gray-50 hover:shadow-lg">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-blue-500 rounded-full dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
                  </svg>
                </div>
                <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400">
                  Email
                </h2>
                <a
                  href={`mailto:${details?.email}`}
                  className="text-base font-medium text-gray-500 md:text-lg dark:text-gray-400"
                >
                  {details?.email}
                </a>
              </div>
            </div>
            <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
              <div className="py-12 px-4 text-center transition-all rounded-lg shadow-xl">
                <form onSubmit={sendEnquiry}>
                  <div className="mb-6">
                    <h2 className="text-xl font-bold">
                      Leave {details?.title} a message!{" "}
                    </h2>
                  </div>
                  <div className="flex flex-wrap mb-4 -mx-2">
                    <div className="w-full px-2 mb-4 lg:mb-0 lg:w-1/2">
                      <Input
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        name="name"
                        placeholder="Full Name.."
                      />
                    </div>
                    <div className="w-full px-2 lg:w-1/2">
                      <Input
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        name="email"
                        placeholder="Email.."
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <Input
                      value={formData.subject}
                      onChange={handleChange}
                      type="text"
                      name="subject"
                      placeholder="Subject.."
                    />
                  </div>
                  <Textarea
                    value={formData.message}
                    onChange={handleChange}
                    rows={2}
                    name="message"
                    placeholder="Write a message..."
                  />
                  {loader ? <Spinner />  : <Button _type="norm">Send Messag</Button>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
