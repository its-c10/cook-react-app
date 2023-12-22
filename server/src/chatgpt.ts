import OpenAI from "openai";

class ChatGPTHandler {
  openAI: OpenAI;
  public constructor() {
    this.openAI = new OpenAI();
    this.main();
  }
  async main() {
    console.log("in main");
    const completion = await this.openAI.chat.completions.create({
      messages: [{ role: "system", content: "Give me a list of recipes I can cook with these ingredients: 2 chicken breasts, a cup of jasmine rice, a cup of broccoli. Format your answer in JSON" }],
      model: "gpt-3.5-turbo",
    });
    console.log(completion.choices[0]);
  }
}

export default ChatGPTHandler;