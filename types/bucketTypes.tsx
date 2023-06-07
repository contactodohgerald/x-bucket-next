export interface IStory {
    story_prompt: string
}

export interface IJoke {
    joke_prompt: string
}

export interface IRecipe {
    recipe_prompt: string
}

export interface IEnquiry {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface INewsletter {
    email: string;
}

export interface ISubscribe {
    trans_id: string;
    amount: number;
}

export interface ILogin {
    xtifier: string;
    password: string;
}

export interface IRegister {
    xtifier: string;
    password: string;
    c_password: string;
    ip_address: string;
}