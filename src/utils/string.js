export const phoneToHref = (phone) => `tel:+55${phone.replace(/ /g, "")}`;
export const smsToHref = (number, message) =>
  `sms:+55${number.replace(/ /g, "")}&body=${message}`;

export const concordanceByLength = (length, singular, plural) =>
  length > 1 ? plural : singular;

export const capitalize = (text = "") =>
  text.toLowerCase().replace(/(^\w{1})/g, (match) => match.toUpperCase());

export const normalizeText = (value) => (value ? value : "--");

export const isEmpty = (value) => !!value && value.trim().length > 0;
