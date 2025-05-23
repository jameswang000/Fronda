// import EmailForm from "./EmailForm";
import EmailForm from "./EmailForm";
import PhoneForm from "./PhoneForm";

const ContactForms = () => {
  return (
    <div
      className="flex flex-row flex-wrap border-t-2 border-t-frondaDarkGreen 
                 divide-x-2 divide-frondaDarkGreen bg-frondaBiege max-w-[2000px]"
    >
      <EmailForm />
      <PhoneForm />
    </div>
  );
};

export default ContactForms;
