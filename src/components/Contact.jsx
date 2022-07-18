import Backdrop from "./Backdrop";

function Contact() {
  return (
    <div className={`absolute w-full md:flex z-50 top-0 right-0`}>
      <Backdrop />
      {/* //  contact form container */}
      <div className="flex flex-col px-10 pt-20 space-y-8 max-w-3xl bg-custom-bg border">
        <h2 className="text-white text-3xl">
          Hey, we are still in the works, but you can send us a message!
        </h2>

        <form action="#" className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-3">
            <h4 className="text-sm text-gray-300">First name</h4>

            <input
              className="py-4 px-6 bg-white rounded-lg outline-none"
              placeholder="Enter your first name"
              type="text"
            />
          </div>
          <div className="flex flex-col space-y-3">
            <h4 className="text-sm text-gray-300">Last name</h4>

            <input
              className="py-4 px-6 bg-white rounded-lg outline-none"
              placeholder="Enter your Last Name"
              type="text"
            />
          </div>
          <div className="flex flex-col space-y-3">
            <h4 className="text-sm text-gray-300">Email address</h4>

            <input
              className="py-4 px-6 bg-white rounded-lg outline-none"
              placeholder="Enter your Email Address"
              type="text"
            />
          </div>
          <div className="flex flex-col space-y-3">
            <h4 className="text-sm text-gray-300">
              Tell us what you need help with:
            </h4>

            <textarea
              rows="10"
              className="py-4 px-6 rounded-lg outline-none border-none"
              placeholder="Enter a Topic like channel problem "
            ></textarea>
          </div>

          <button className="bg-blue-500 text-white py-4 w-48 rounded-full">
            {" "}
            SEND NOW{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
