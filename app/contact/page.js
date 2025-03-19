"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  px-6 py-12">
      <div className="max-w-3xl w-full  shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-center  mb-6">Contact Us</h2>
        <p className="text-center  mb-6">
          Have any questions? Reach out to us and we’ll respond as soon as
          possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border-gray-900"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border-gray-900"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 border-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border-gray-900"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <Button
            type="submit"
            className=" mx-1 text-xs dark:hover:bg-gray-600 hover:bg-gray-300 border-2 border-purple-500"
            variant="outline"
          >
            Send Message
          </Button>
        </form>
      </div>

      <div className="mt-8 text-center">
        <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
        <p className="flex items-center justify-center gap-2 ">
          <Mail className="w-5 h-5" /> surajsinghal6680@gmail.com
        </p>
        <p className="flex items-center justify-center gap-2  mt-2">
          <Phone className="w-5 h-5" /> +91 8974XXXXXX
        </p>
        <p className="flex items-center justify-center gap-2  mt-2">
          <MapPin className="w-5 h-5" /> Bangalore, India
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
