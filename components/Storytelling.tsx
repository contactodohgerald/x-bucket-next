import React from "react";
import Input from "./Layouts/Input";
import Button from "./Layouts/Button";
import Label from "./Layouts/Label";
import Textarea from "./Layouts/Textarea";

function Storytelling() {
  return (
    <>
      <div className="p-4 bg-white rounded-b shadow dark:bg-gray-100">
        <h2 className="mb-5 text-2xl font-bold">
          Story Teller
        </h2>
        <p className="mb-3 text-base leading-7 text-gray-500 dark:text-gray-400">
          Prompt Ex: Someone who is so smart that got a genius idea
        </p>
        <form action="#" method="POST" className="flex flex-wrap">
          <div className="w-full lg:flex-1 lg:mr-3">
            <Input
                type="text"
                id="story_prompt"
                name="story_prompt"
                placeholder="Prompt"
            />
          </div>
          <div className="w-full lg:w-auto lg:mt-0 mt-2 lg:py-0">
            <Button>Continue</Button>
          </div>
        </form>
        <div className="w-full my-3 border-b border-gray-400"></div>
        <div>
            <Label htmlFor="answer">Answer</Label>
            <Textarea
                rows={8}
                value={'just testing'}
            ></Textarea>
        </div>
      </div>
    </>
  );
}

export default Storytelling;
