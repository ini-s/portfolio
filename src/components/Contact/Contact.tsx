import { SubmitHandler, useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

import "./Contact.css";

import { useState } from "react";

const PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY as string;
const SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID as string;
const TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID as string;
console.log(PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID)

interface ContactProps {
  name: string;
  email: string;
  message: string;
}

const defaultValues = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactProps>({ defaultValues });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<ContactProps> = async (data) => {
    setIsLoading(true);

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        { ...data },
        {
          publicKey: PUBLIC_KEY,
        }
      )
      .then(
        (response) => {
          setIsLoading(false);
          reset();
          toast.success("Your message has been sent successfully.");
        },
        (error) => {
          console.log(error);
          reset();
          toast.success("Message not sent. Please try again later.");
          setIsLoading(false);
        }
      );
  };

  return (
    <section className="full-bleed contact" id="contact">
      <div className="form-top">
        <h2>CONTACT</h2>
        <h3>Get In Touch</h3>
      </div>
      <div className="contact-form-container">
        <motion.div
          className="contact-form"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="formInputContainer">
              <input
                className="form-input"
                {...register("name", {
                  required: "Please enter your name",
                })}
                type="text"
                placeholder="Name"
              />
              {errors?.name && (
                <p className="inputFooterText">{errors?.name?.message}</p>
              )}
            </div>
            <div className="formInputContainer">
              <input
                className="form-input"
                {...register("email", {
                  required: "Please enter your email address",
                  validate: {
                    isValid: (val) =>
                      isEmail(val) || "Please enter a valid email address",
                  },
                })}
                type="email"
                placeholder="Email"
              />
              {errors?.email && (
                <p className="inputFooterText">{errors?.email?.message}</p>
              )}
            </div>
            <div className="formInputContainer">
              <textarea
                className="form-input"
                {...register("message", {
                  required: "Please enter a message",
                })}
                placeholder="Enter message here..."
              />
              {errors?.message && (
                <p className="inputFooterText">{errors?.message?.message}</p>
              )}
            </div>
            <button className="form-btn" type="submit">
              {isLoading ? "Loading..." : "Send Message"}
            </button>
          </form>
        </motion.div>
        <motion.div
          className="socials"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h4>Social Links</h4>
          <div className="links">
            <a href="https://x.com/hazel_ini">
              <FaSquareXTwitter />
            </a>
            <a href="https://www.linkedin.com/in/inioluwa-soetan-b082aa244/">
              <FaLinkedin />
            </a>
            <a href="https://github.com/ini-s">
              <FaGithub />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
