function ContactPage() {

    

  return (
    <section
      id="contact"
      className="container py-30 flex gap-20 flex-wrap md:flex-nowrap"
    >
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
          Get a Project in <span className="text-primary">Mind?</span>
        </h2>
        <p className="my-4 md:text-lg lg:text-2xl font-mono">
          Feel free to send me an email now if you'd like to collaborate or just say hi!
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <form action="" className="">
          <div className="flex gap-5">
            <div className="w-1/2">
              <label htmlFor="name" className="text-xl font-bold">
                Your name
              </label>
              <input
                className="px-2 py-3 rounded-md bg-gray w-full mt-2 text-lg outline-none"
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="email" className="text-xl font-bold">
                Your email
              </label>
              <input
                className="px-2 py-3 rounded-md bg-gray w-full mt-2 text-lg outline-none"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <textarea
            id="message"
            name="message"
            className="bg-gray w-full my-5 p-4 rounded-md no-resize outline-none h-40"
            placeholder="Your message here"
            required
          ></textarea>
          <input className="btn-primary" type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
