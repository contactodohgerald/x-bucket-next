import React, { ChangeEvent, FormEvent, useState } from "react";
import Input from "./Layouts/Input";
import Button from "./Layouts/Button";
import Label from "./Layouts/Label";
import Textarea from "./Layouts/Textarea";
import Spinner from "./Layouts/Spinner";
import { toast } from "react-toastify";
import { jokeTelling } from "@/services/post.request";
import AnswerDisplay from "@/services/displayAnswer";

function Joketelling() {
  const [loader, setLoader] = useState(false)
  const [jokeResult, setJokeResults] = useState('')
  const [formData, setFormData] = useState({
    joke_prompt: ""
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const processJokeTelling = async (e: FormEvent) => {
    e.preventDefault()
    if(formData.joke_prompt == '') return toast.error('Prompt can`t be empty')

    setLoader(true)
    await jokeTelling(formData)
    .then((res) => {
      toast.success(res.data.message)
      setJokeResults(res.data.data)
      setFormData({
        joke_prompt: "",
      });
    })
    .catch((err) => {
      toast.error(err.response.data.message)
    })
    .finally(() => setLoader(false))
  }

  const ResultShower = () => AnswerDisplay(jokeResult)

  return (
    <>
      <div className="p-4 bg-white rounded-b shadow dark:bg-gray-100">
        <h2 className="mb-5 text-2xl font-bold">
          Joke Teller
        </h2>
        <p className="mb-3 text-base leading-7 text-gray-500 dark:text-gray-400">
          Prompt Ex: Close freinds | Two idiots | The desert | Tom and Jerry
        </p>
        <form onSubmit={processJokeTelling} className="flex flex-wrap">
          <div className="w-full lg:flex-1 lg:mr-3">
            <Input
              value={formData.joke_prompt}
              onChange={handleChange}
              type="text"
              name="joke_prompt"
              placeholder="Prompt"
            />
          </div>
          <div className="w-full lg:w-auto lg:mt-0 mt-2 lg:py-0">
            {loader ? <Spinner/> :  <Button _type="norm">Continue</Button>}
          </div>
        </form>
        <div className="w-full my-3 border-b border-gray-400"></div>
        <div>
            <Label htmlFor="answer">Your Joke!</Label>
            <ResultShower />
        </div>
      </div>
    </>
  );
}

export default Joketelling;
