import React, {useRef} from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { section } from "framer-motion/m";

import emailjs from "@emailjs/browser";





const Content = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_xpayyu7","template_wqkdqhg",form.current,"6U6j9Kwmpyxr4_6-B").then(
      () => {
        alert("Message sent successfully");
        form.current.reset();
      },
      (error) => {
        alert("Message failed to send",error.text);
      }
    )

    }
  return (
    <section id="contact" className="bg-black p-20">
        <div className="w-full h-0.5 bg-purple-600"></div>
      <div className="container mt-10 mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Get In{" "}
          <span className="text-purple-500">Touch</span>
        </h2>
        <p
          className="text-gray-500 text-center max-w-2xl mx-auto
            mb-16"
        >
          Have a project in mind? Let's talk!
        </p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          id="Content"
          className="py-20"
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl
            mx-auto"
          >
            {/* content Info */}

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="text-purple-500 text-2xl mr-4">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-300">
                    Location
                  </h3>
                  <p className="text-gray-400">Chennai, Tamil Nadu, India </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-purple-500 text-2xl mr-4">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-300">Email</h3>
                  <p className="text-gray-400">shakil.joinup@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-purple-500 text-2xl mr-4">
                  <FaPhone />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-300">Phone</h3>
                  <p className="text-gray-400">+91 709424-8006</p>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-lg text-white font-bold mb-4">Follow Me</h3>

                <div className="flex  space-x-4">
                  <a
                    href="https://www.linkedin.com/in/shakilahamedweb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full
                            bg-dark-300 flex items-center justify-center
                            text-blue-500 hover:bg-blue-500 hover:text-white
                            transition duration-300"
                  >
                    <FaLinkedin />
                  </a>

                  <a
                    href="https://github.com/shakiljoin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full
                            bg-dark-300 flex items-center justify-center
                            text-white text-500 hover:bg-black-500 hover:text-black
                            transition duration-300"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://www.instagram.com/xshakilsha?igsh=MWg1NXFxdHpic2Q0Zw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full
                            bg-dark-300 flex items-center justify-center
                            text-purple-500 hover:bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white hover:text-white
                            transition duration-300"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            {/* Content Form */}
            <div>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block
                            text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    className="w-full text-white bg-dark-100/90 backdrop:-blur-sm border
                            border-dark-300 rounded-lg px-4 py-3 outline-none"
                    type="text"
                    placeholder="shakil"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block
                            text-gray-300 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    className="w-full text-white bg-dark-100/90 backdrop:-blur-sm border
                            border-dark-300 rounded-lg px-4 py-3 outline-none"
                    type="email"
                    placeholder="abcd@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block
                            text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    className="w-full text-white bg-dark-100/90 backdrop:-blur-sm border
                            border-dark-300 rounded-lg px-4 py-3 outline-none"
                    type="text"
                    placeholder="Enter your Subject"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block
                            text-gray-300 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    className="w-full h-40 text-white bg-dark-100/90 backdrop:-blur-sm border
                            border-dark-300 rounded-lg px-4 py-3 outline-none"
                    type="text"
                    placeholder="Type your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-purple-500 
                        rounded-lg font-medium hover:bg-purple-600 transition
                        duration-300 text-white cursor-pointer"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Content;
