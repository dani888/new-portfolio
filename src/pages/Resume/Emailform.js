// import React from "react";
// import emailjs from "emailjs-com";

// export default function ContactUs() {
//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         process.env.REACT_APP_TAG1,
//         process.env.REACT_APP_TAG2,
//         e.target,
//         process.env.REACT_APP_TAG3
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );

//     e.target.reset();
//     alert("Email was Sent Successfully!");
//   }

//   return (
//     <div>
//       <div className="row">
//         <form className="col s12" onSubmit={sendEmail}>
//           <div className="row">
//             <div className="input-field col s12">
//               <input type="text" name="name" />
//               <label htmlFor="first_name"> Name</label>
//             </div>
//           </div>
//           <div className="row">
//             <div className="input-field col s12">
//               <input type="email" name="email" />
//               <label htmlFor="last_name">Email</label>
//             </div>
//           </div>
//           <div className="row">
//             <div className="input-field col s12">
//               <textarea
//                 id="textarea1"
//                 name="message"
//                 className="materialize-textarea"
//                 maxLength="500"
//               ></textarea>
//               <label htmlFor="textarea1">Message</label>
//             </div>
//           </div>
//           <input type="submit" value="Submit!" className="btn blue" />
//         </form>
//       </div>
//     </div>
//   );
// }
