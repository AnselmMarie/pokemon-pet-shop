// import { useEffect, useState } from 'react';

// import hljs from 'highlight.js';
// import { marked } from 'marked';
// import * as yup from 'yup';

// import {
//   ButtonFormTypeEnum,
//   UiButton,
//   UiTextArea,
//   UiSelect,
//   InputTypeEnum,
//   UiInput,
//   ButtonColorTypeEnum,
//   ButtonFillTypeEnum,
// } from '../../ui';

// import { useFormLogic } from './index';
// // import { Meta, Story, Canvas } from '@storybook/blocks';

// const SELECT_FORM_OPTIONS = [
//   {
//     label: 'Monkey D Luffy',
//     value: 'MONKEY_D_LUFFY',
//   },
//   {
//     label: 'Goku',
//     value: 'GOKU',
//   },
//   {
//     label: 'Naruto',
//     value: 'NARUTO',
//   },
// ];

// const formSchema = yup.object({
//   name: yup.string().required('Field is required'),
//   subject: yup.string().required('Field is required'),
//   description: yup.string().required('Field is required'),
// });

// const markdown = `
//   \`\`\`typescript
//   import { useState } from 'react';
//   import { useFormLogic } from '@design-system/hooks';
//   import {
//     ButtonFormTypeEnum,
//     UiButton,
//     UiTextArea,
//     UiSelect,
//     InputTypeEnum,
//     UiInput,
//     ButtonColorTypeEnum,
//     ButtonFillTypeEnum,
//   } from '@design-system/ui';

//   export const FormDocView = () => {
//     const {
//       formErrors,
//       isSubmitting,
//       onRegister,
//       onGetValues,
//       onHandleSubmit,
//       onReset,
//     } = useFormLogic({
//       schema: formSchema,
//     });
//     const [payload, setPayload] = useState({});

//     const submit = (data: any) => {
//       setPayload(data);
//     };

//     const reset = () => {
//       setPayload({});
//       onReset();
//     };

//     return (
//       <>
//         <form
//           className="m-base flex flex-col gap-y-base"
//           onSubmit={onHandleSubmit(submit)}
//         >
//           <UiInput
//             label="Name"
//             name="name"
//             errorMessage={formErrors['name']?.message}
//             isDisabled={isSubmitting}
//             type={InputTypeEnum.TEXT}
//             value={onGetValues('name')}
//             isRequired
//             register={onRegister}
//           />
//           <UiSelect
//             name="subject"
//             label="Subject"
//             errorMessage={formErrors['subject']?.message}
//             selectOption={SELECT_FORM_OPTIONS}
//             value={onGetValues('subject')}
//             isDisabled={isSubmitting}
//             isRequired
//             register={onRegister}
//           />
//           <UiTextArea
//             label="Description"
//             name="description"
//             errorMessage={formErrors['description']?.message}
//             value={onGetValues('description')}
//             isRequired
//             register={onRegister}
//           />
//           <div className="flex">
//             <div className="w-1/2 mr-base">
//               <UiButton
//                 color={ButtonColorTypeEnum.SECONDARY}
//                 fill={ButtonFillTypeEnum.OUTLINE}
//                 type={ButtonFormTypeEnum.RESET}
//                 isDisabled={isSubmitting}
//                 onClick={reset}
//               >
//                 Reset
//               </UiButton>
//             </div>
//             <div className="w-1/2 ml-base">
//               <UiButton
//                 type={ButtonFormTypeEnum.SUBMIT}
//                 isDisabled={isSubmitting}
//               >
//                 Submit
//               </UiButton>
//             </div>
//           </div>
//         </form>
//       </>
//     );
//   };
//   \`\`\`
// `;

// export const FormDocView = () => {
//   const {
//     formErrors,
//     isSubmitting,
//     onRegister,
//     onGetValues,
//     onHandleSubmit,
//     onReset,
//   } = useFormLogic({
//     schema: formSchema,
//   });
//   const [payload, setPayload] = useState({});

//   const submit = (data: any) => {
//     setPayload(data);
//   };

//   const reset = () => {
//     setPayload({});
//     onReset();
//   };

//   useEffect(() => {
//     hljs.highlightAll();
//   });

//   return (
//     <>
//       <form
//         className="m-base flex flex-col gap-y-base"
//         onSubmit={onHandleSubmit(submit)}
//       >
//         This form is an example of using the useFormLogic hook. Will add all the
//         methods that can be used in the future.
//         <UiInput
//           label="Name"
//           name="name"
//           errorMessage={formErrors['name']?.message}
//           isDisabled={isSubmitting}
//           type={InputTypeEnum.TEXT}
//           value={onGetValues('name')}
//           isRequired
//           register={onRegister}
//         />
//         <UiSelect
//           name="subject"
//           label="Subject"
//           errorMessage={formErrors['subject']?.message}
//           selectOption={SELECT_FORM_OPTIONS}
//           value={onGetValues('subject')}
//           isDisabled={isSubmitting}
//           isRequired
//           register={onRegister}
//         />
//         <UiTextArea
//           label="Description"
//           name="description"
//           errorMessage={formErrors['description']?.message}
//           value={onGetValues('description')}
//           isRequired
//           register={onRegister}
//         />
//         <div className="flex">
//           <div className="w-1/2 mr-base">
//             <UiButton
//               color={ButtonColorTypeEnum.SECONDARY}
//               fill={ButtonFillTypeEnum.OUTLINE}
//               type={ButtonFormTypeEnum.RESET}
//               isDisabled={isSubmitting}
//               onClick={reset}
//             >
//               Reset
//             </UiButton>
//           </div>
//           <div className="w-1/2 ml-base">
//             <UiButton
//               type={ButtonFormTypeEnum.SUBMIT}
//               isDisabled={isSubmitting}
//             >
//               Submit
//             </UiButton>
//           </div>
//         </div>
//       </form>
//       After a reset or submission you will see the most current form contents.
//       <pre>{JSON.stringify(payload, null, 2)}</pre>
//       <div dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
//     </>
//   );
// };
