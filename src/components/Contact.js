const Contact = () => {
  return (
    <div>
      <h1 className="font-bold m-2 p-2 text-3xl">Contact Us</h1>
      <form>
        <input
          type="text"
          className="border border-black m-2 p-2"
          placeholder="name"
        ></input>
        <input
          type="text"
          className="border border-black m-2 p-2"
          placeholder="email"
        ></input>
        <input
          type="text"
          className="border border-black m-2 p-2"
          placeholder="message"
        ></input>
        <button className="border border-black bg-green-400 m-2 p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
