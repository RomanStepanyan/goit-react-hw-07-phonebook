export const notValidatedName = state => name =>
  state.contacts.items?.find(item => item.name === name);
