import React, { ChangeEvent, FormEvent, useState } from "react";
import Input from "./Layouts/Input";
import Button from "./Layouts/Button";
import Label from "./Layouts/Label";
import { toast } from "react-toastify";
import Spinner from "./Layouts/Spinner";
import { foodRecipe } from "@/services/post.request";
import AnswerDisplay from "@/services/displayAnswer";
import { copyAnswer } from "@/services/default";

function RecipeGenerate() {
  const [loader, setLoader] = useState(false)
  const [foodRecipeResult, setFoodRecipeResult] = useState('')
  const [formData, setFormData] = useState({
    recipe_prompt: ""
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const processFoodRecipe = async (e: FormEvent) => {
    e.preventDefault()
    if(formData.recipe_prompt == '') return toast.error('Prompt can`t be empty')

    setLoader(true)
    await foodRecipe(formData)
    .then((res) => {
      toast.success(res.data.message)
      setFoodRecipeResult(res.data.data)
      setFormData({
        recipe_prompt: "",
      });
    })
    .catch((err) => {
      toast.error(err.response.data.message)
    })
    .finally(() => setLoader(false))
  }

  const ResultShower = () => AnswerDisplay(foodRecipeResult)

  return (
    <>
      <div className="p-4 bg-white rounded-b shadow dark:bg-gray-100">
        <h2 className="mb-5 text-2xl font-bold">
          Food Recipe
        </h2>
        <p className="mb-3 text-base leading-7 text-gray-500 dark:text-gray-400">
          Prompt Ex: Egusi soup | Chocolate chip | Cookies | Egg Sauce | Fried rice
        </p>
        <form onSubmit={processFoodRecipe} className="flex flex-wrap">
          <div className="w-full lg:flex-1 lg:mr-3">
            <Input
              value={formData.recipe_prompt}
              onChange={handleChange}
              type="text"
              name="recipe_prompt"
              placeholder="Prompt"
            />
          </div>
          <div className="w-full lg:w-auto lg:mt-0 mt-2 lg:py-0">
            {loader ? <Spinner/> : <Button _type="norm">Continue</Button>}
          </div>
        </form>
        <div className="w-full my-3 border-b border-gray-400"></div>
        <Label htmlFor="answer">Your Food Recipe !!</Label>
        <ResultShower />
        <div className="text-center">
          <Button _type="copy" onClick={() => copyAnswer(foodRecipeResult)}>Copy</Button>
        </div>
      </div>
    </>
  );
}

export default RecipeGenerate;
