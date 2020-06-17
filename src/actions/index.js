import { ADD_REMINDER } from '../constraints';

export const addReminder = (text) => {
    const action = {
        type: ADD_REMINDER,
        text
    }

    console.log('action in addReminder => ', action);
    return action;
}