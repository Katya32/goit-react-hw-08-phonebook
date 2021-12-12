export const getItemsSelector = state => state.contacts.items;
export const getFilterSelector = state => state.contacts.filter;

export const getVisibleContact = state => {
  const contacts = getItemsSelector(state);
  const filter = getFilterSelector(state);
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

export const getNameSelector = (state) => state.auth.user.name;