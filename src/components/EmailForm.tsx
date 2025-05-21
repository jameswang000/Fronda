import contactUsJSON from "../planning/text/Contact_Us_Text.json";

const EmailForm = () => {
  return (
    <div className="flex flex-col items-start w-1/2 pl-[8%] pr-[5%] py-16 gap-3">
      <h3 className="text-3xl font-semibold">
        {contactUsJSON.contact_us.email.header}
      </h3>
      <p className="text-xl font-normal">
        {contactUsJSON.contact_us.email.paragraph}
      </p>
      <p className="text-xs font-semibold italic">
        {contactUsJSON.contact_us.email.disclaimer}
      </p>
      <div className="flex-1"></div>
      <form className="flex flex-row flex-wrap gap-x-5 gap-y-2 w-3/4" action="">
        <input
          className="border-1 border-frondaDarkGreen px-3.5 rounded-md py-2 grow"
          type="text"
          value="Enter Email Address"
        />
        <button
          type="submit"
          className="bg-frondaDarkGreen py-2 px-7 rounded-md text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
