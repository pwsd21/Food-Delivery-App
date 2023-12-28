const Contact = () => {
  return (
    <div>
      <h1 className="font-bold m-2 p-2 text-3xl flex justify-center">
        Contact Us
      </h1>
      <form className="flex flex-col justify-center px-48 mx-48">
        <input
          type="text"
          className="border border-black m-4 p-2"
          placeholder="Enter Your Name"
        ></input>
        <input
          type="text"
          className="border border-black m-4 p-2"
          placeholder="Enter Your Email"
        ></input>
        <input
          type="text"
          className="border border-black m-4 p-2"
          placeholder="Enter Your Message"
        ></input>
        <button className="border border-black bg-green-400 m-4 p-2 hover:bg-green-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
