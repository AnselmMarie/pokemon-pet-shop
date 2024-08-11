import * as Yup from 'yup';

export const passwordValidateUtil = Yup.string()
  .min(5)
  .max(10)
  .matches(
    /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/,
    'Please follow the helper text on what is needed.'
  )
  .trim();
export const tempPasswordValidateUtil = Yup.string().max(20).trim();
export const srcValidateUtil = Yup.string().max(255);
export const descriptionSmValidateUtil = Yup.string().nullable().max(300);
export const descriptionMidValidateUtil = Yup.string().nullable().max(600);
export const descriptionBigValidateUtil = Yup.string().nullable().max(1200);
export const nameValidateUtil = Yup.string().min(1).max(150);
export const seriesValidateUtil = Yup.string().nullable().max(150);
export const emailValidateUtil = Yup.string().email().trim();
export const dateValidateUtil = Yup.date()
  .nullable()
  .transform((curr, orig) => (orig === '' ? null : curr));
export const dateEndedValidateUtil = Yup.date()
  .nullable()
  .transform((curr, orig) => (orig === '' ? null : curr))
  .when('dateTime', ([dateTime]): any => {
    return Yup.date()
      .min(dateTime, 'End Date must be after Start Date')
      .required('End Date is required');
  });
export const dateNotNullableValidateUtil = Yup.date().transform((curr, orig) =>
  orig === '' ? null : curr
);
export const numberValidateUtil = Yup.number()
  .nullable()
  .transform((curr, orig) => (orig === '' ? null : curr));
export const idValidateNotNullableUtil = Yup.string().min(1);
export const idValidateUtil = Yup.string()
  .nullable()
  .transform((curr, orig) => (orig === '' ? null : curr));
export const urlValidateUtil = Yup.string()
  .lowercase()
  .matches(
    /((https?):\/\/)(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/*)?$/,
    'Please input a URL using this format - http(s)://(www.)example.com or example.com.'
  )
  .max(255);
// /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
export const photoValidateUtil = Yup.string().max(255);
// .matches(
//   /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
//   'Please input a URL using this format - http(s)://(www.)example.com.'
// )
//   /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;
