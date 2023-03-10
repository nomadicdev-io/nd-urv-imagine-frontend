import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(propmt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const getRandomPrompt = surpriseMePrompts[randomIndex];

    if(getRandomPrompt === prompt) return getRandomPrompt(propmt);

    return getRandomPrompt;
}