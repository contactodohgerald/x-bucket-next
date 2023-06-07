import React, { ChangeEvent, FormEvent, useState } from "react";
import Input from "./Layouts/Input";
import Button from "./Layouts/Button";
import Label from "./Layouts/Label";
import Textarea from "./Layouts/Textarea";
import Spinner from "./Layouts/Spinner";
import { toast } from "react-toastify";
import { storyTelling } from "@/services/post.request";
import AnswerDisplay from "@/services/displayAnswer";

function Storytelling() {
  const [loader, setLoader] = useState(false);
  const [storyResult, setStoryResult] = useState("");
  const [formData, setFormData] = useState({
    story_prompt: "",
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const processStoryTelling = async (e: FormEvent) => {
    e.preventDefault();

    if (formData.story_prompt == "")
      return toast.error("Prompt can`t be empty");
    if (formData.story_prompt.length < 5)
      return toast.error("Prompt is not descriptive enough");

    setLoader(true);
    await storyTelling(formData)
      .then((res) => {
        toast.success(res.data.message);
        setStoryResult(res.data.data);
        setFormData({
          story_prompt: "",
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      })
      .finally(() => setLoader(false));
  };

  const ResultShower = () => AnswerDisplay(storyResult)

  return (
    <>
      <div className="p-4 bg-white rounded-b shadow dark:bg-gray-100">
        <h2 className="mb-5 text-2xl font-bold">Story Teller</h2>
        <p className="mb-3 text-base leading-7 text-gray-500 dark:text-gray-400">
          Prompt Ex: Someone who is so smart that got a genius idea
        </p>
        <form onSubmit={processStoryTelling} className="flex flex-wrap">
          <div className="w-full lg:flex-1 lg:mr-3">
            <Input
              type="text"
              value={formData.story_prompt}
              onChange={handleChange}
              name="story_prompt"
              placeholder="Prompt"
            />
          </div>
          <div className="w-full lg:w-auto lg:mt-0 mt-2 lg:py-0">
            {loader ? <Spinner /> : <Button _type="norm">Continue</Button>}
          </div>
        </form>
        <div className="w-full my-3 border-b border-gray-400"></div>
        <div>
          <Label htmlFor="answer">Enjoy you story</Label>
          <ResultShower />
        </div>
      </div>
    </>
  );
}

export default Storytelling;
