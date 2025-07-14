import React from "react";

const page = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 bg-white shadow-lg rounded-lg text-gray-800 mt-10">
      <h1 className="text-3xl font-bold mb-4 text-center text-gradient bg-gradient-to-r from-blue-500 via-green-400 to-purple-500 bg-clip-text text-transparent">
        💬 Support
      </h1>
      <p className="text-lg text-center mb-6">
        Need help? Our support team is here for you! <br />
        Reach out to{" "}
        <a
          href="mailto:support@example.com"
          className="text-blue-500 underline hover:text-blue-700">
          shivampatra18@example.com
        </a>{" "}
        or fill out the form below.
      </p>

      <form className="space-y-6">
        <div>
          <label className="block font-medium mb-1" htmlFor="email">
            Your Email:
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="message">
            Message:
          </label>
          <textarea
            name="message"
            required
            rows={6}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg hover:opacity-90 transition">
          🚀 Send Message
        </button>
      </form>
    </div>
  );
};

export default page;
