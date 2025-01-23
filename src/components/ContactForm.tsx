"use client";
import { services } from "@/constants/services";
import React, { useState } from "react";

import MessageDialog from "./base/MessageDialog";
import { Send } from "lucide-react";
import { Button } from "./ui/button";
function ContactForm() {
  const [Errors, setErrors] = useState("");
  const [Success, setSuccess] = useState("");
  const [Open, setOpen] = useState(false);
  const [Loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setOpen(false);
    setErrors("");
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form);
    try {
      setLoading(true);
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, Date: Date.now() }),
      });

      if (!response.ok)
        throw new Error(`Failed To Send Message ${response.status}`);
      const resData = await response.json();
      if (!resData.success) throw new Error(resData.message);

      setSuccess(resData.message);
      setOpen(true);
      document.querySelector("form")?.reset();
    } catch (error) {
      setErrors(
        error instanceof Error ? error.message : "Failed To Send Message"
      );
      setOpen(true);
      console.log("MAIL SENDING ERROR :: ", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {Open && Success && !Errors ? (
        <MessageDialog
          Open={Open}
          setOpen={setOpen}
          type="success"
          message={Success}
        />
      ) : (
        <MessageDialog
          Open={Open}
          setOpen={setOpen}
          type="error"
          message={Errors}
        />
      )}
      <form id="contact-form" onSubmit={handleSubmit} className="mt-12">
        <div className="-mx-2 md:items-center md:flex">
          <div className="flex-1 px-2">
            <label className="block mb-2 text-sm text-gray-700 dark:text-gray-200">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary focus:ring-primary/20 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="flex-1 px-2 mt-4 md:mt-0">
            <label className="block mb-2 text-sm text-gray-700 dark:text-gray-200">
              Email address
            </label>
            <input
              type="email"
              required
              name="email"
              placeholder="johndoe@example.com"
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary focus:ring-primary/20 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
        </div>
        <div className="-mx-2 mt-5 md:items-center md:flex">
          <div className="flex-1 px-2">
            <label className="block mb-2 text-sm text-gray-700 dark:text-gray-200">
              Phone No
            </label>
            <input
              type="number"
              name="phone"
              required
              placeholder="+971 50 000 0000"
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary focus:ring-primary/20 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="flex-1 px-2 mt-4 md:mt-0">
            <label className="block mb-2 text-sm text-gray-700 dark:text-gray-200">
              Type of Move
            </label>
            <select
              name="services"
              required
              defaultValue={""}
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary focus:ring-primary/20 focus:outline-none focus:ring focus:ring-opacity-40"
              id=""
            >
              <option value="" disabled>
                Select your type
              </option>
              {services.map((service) => (
                <option key={service.link} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-5">
          <label className="block mb-2 text-sm text-gray-700 dark:text-gray-200">
            Your Address
          </label>
          <input
            required
            type="text"
            name="address"
            placeholder="123 Street, City"
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary focus:ring-primary/20 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="w-full mt-4">
          <label className="block mb-2 text-sm text-gray-700 dark:text-gray-200">
            Message
          </label>
          <textarea
            required
            name="message"
            className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary focus:ring-primary/20 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Message"
          ></textarea>
        </div>

        <Button
          size={"lg"}
          className="mt-5 w-full"
          disabled={Loading}
          type="submit"
        >
          {!Loading ? (
            <>
              Send Message <Send />
            </>
          ) : (
            <>Sending..</>
          )}
        </Button>
      </form>
    </>
  );
}

export default ContactForm;
