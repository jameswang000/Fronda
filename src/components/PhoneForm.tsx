import contactUsJSON from "../planning/text/Contact_Us_Text.json";

const PhoneForm = () => {
  return (
    <div className="flex flex-col items-start w-1/2 pl-[5%] pr-[8%] py-16 gap-3">
      <h3 className="text-3xl font-semibold">
        {contactUsJSON.contact_us.text.header}
      </h3>
      <p className="text-xl font-normal">
        {contactUsJSON.contact_us.text.paragraph}
      </p>
      <p className="text-xs font-semibold italic">
        {contactUsJSON.contact_us.text.disclaimer}
      </p>
      <div className="flex-1"></div>
      <form className="flex flex-row flex-wrap gap-x-5 gap-y-2 w-3/4" action="">
        <input
          className="border-1 border-frondaDarkGreen px-3.5 rounded-md py-2 grow"
          type="text"
          value="Enter Phone Number"
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
          }}
          className="bg-frondaDarkGreen py-2 px-7 rounded-md text-white
                     hover:opacity-80 hover:cursor-pointer shadow-md
                     transition-all duration-150
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-frondaDarkGreen
                     active:scale-95 active:translate-y-[1px] active:shadow-inner"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PhoneForm;
