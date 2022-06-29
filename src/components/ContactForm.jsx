import React from "react";

const ContactForm = () => {
  return (
    <div className="p-4 text-left">
      <form action="" method="POST">
        <div className="grid lg:grid-cols-2 gap-4 w-full py-2 ">
          <div className=""></div>
          <label className="capitalize text-sm py-2 font-light">name</label>
          <input
            type="text"
            name="name"
            className="border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
