import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Give me a list of recipes I can cook with these ingredients: 2 chicken breasts, a cup of jasmine rice, a cup of broccoli. Format your answer in JSON" }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();