import { useState } from "react";

export default function Home() {
  const [form, setform] = useState(false);
   function handleform() {
    setform(!form);
  }
  return (
    <div>
      <div className="w-full h-[85vh] flex flex-col lg:flex-row">
        <div className="lg:w-1/2 h-96 flex flex-col gap-10 justify-center items-center">
          <h1 className="text-3xl font-bold">REFER TO EARN</h1>

          <button
            onClick={handleform}
            className="text-white bg-blue-600 h-10 w-44 border rounded-4xl hover:w-48 font-bold"
          >
            REFER NOW
          </button>

          <p className="lg:text-2xl font-bold">
            GET CHANCE TO EARN UPTO <span className="text-blue-600">15000</span>
          </p>
        </div>
        <div className="lg:w-1/2 h-96">
          <img src="/refer.png" alt="Refer & Earn" />
        </div>
      </div>
      <div
        className={`${
          form ? "flex" : "hidden"
        } justify-center items-center backdrop-blur-md absolute top-20 lg:w-1/2 p-2 mt-6`}
      >
        <div className="bg-white rounded p-2 shadow lg:w-1/2 relative">
          <div className="text-lg font-bold mb-3 mt-2 text-center">
            Refer & Earn
            <button onClick={handleform} className="absolute top-3 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
              X
            </button>
          </div>

          <form className="space-y-5">
            <input
              type="text"
              name="referrer"
              placeholder="Your Name"
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              name="referrerEmail"
              placeholder="Your Email"
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="friendName"
              placeholder="Friend's Name"
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              name="friendEmail"
              placeholder="Friend's Email"
              required
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <div className="absolute bottom-0 w-full h-16 bg-blue-600 text-center lg:text-2xl font-bold p-4 text-white">
        REFER FRIEND TO EARN BONUS$
      </div>
    </div>
  );
}
