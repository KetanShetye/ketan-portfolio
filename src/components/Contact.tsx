import { useState } from "react";
import emailjs from "@emailjs/browser";
import ContactLeft from "./ContactLeft";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (username.trim() === "") {
      setErrMsg("Name is required!");
      return;
    } else if (phoneNumber.trim() === "") {
      setErrMsg("Phone number is required!");
      return;
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      setErrMsg("Phone number must be exactly 10 digits!");
      return;
    } else if (email.trim() === "") {
      setErrMsg("Please give your Email!");
      return;
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
      return;
    } else if (subject.trim() === "") {
      setErrMsg("Please give your Subject!");
      return;
    } else if (message.trim() === "") {
      setErrMsg("Message is required!");
      return;
    }

    // Clear previous errors
    setErrMsg("");

    // EmailJS parameters
    const templateParams = {
      username,
      phoneNumber,
      email,
      subject,
      message,
    };

    emailjs
      .send(
        "service_xgu5pws",     
        "template_9iuzh3j",    // ⬅ Replace with your actual template ID
        templateParams,
        "whEV5SBADj7AJ4Y8-"      // ⬅ Replace with your actual EmailJS public key
      )
      .then(() => {
        setSuccessMsg(`Thank you dear ${username}, your message has been sent successfully!`);
        setUsername("");
        setPhoneNumber("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setErrMsg("Failed to send message. Please try again later.");
      });
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-gray-700">
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="CONTACT" des="Let's Build..." />
        </div>
        <div className="w-full">
          <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
            <ContactLeft />
            <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
              <form onSubmit={handleSend} className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
                {errMsg && (
                  <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                    {errMsg}
                  </p>
                )}
                {successMsg && (
                  <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                    {successMsg}
                  </p>
                )}

                {/* Name & Phone */}
                <div className="w-full flex flex-col lgl:flex-row gap-10">
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">Your name</p>
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      className={`contactInput ${errMsg.includes("Name") ? "outline-designColor" : ""}`}
                      type="text"
                    />
                  </div>
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
                    <input
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phoneNumber}
                      className={`contactInput ${errMsg.includes("Phone number") ? "outline-designColor" : ""}`}
                      type="text"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className={`contactInput ${errMsg.includes("Email") ? "outline-designColor" : ""}`}
                    type="email"
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
                  <input
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                    className={`contactInput ${errMsg.includes("Subject") ? "outline-designColor" : ""}`}
                    type="text"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    className={`contactTextArea ${errMsg.includes("Message") ? "outline-designColor" : ""}`}
                    cols={30}
                    rows={8}
                  ></textarea>
                </div>

                {/* Submit */}
                <div className="w-full">
                  <button
                    type="submit"
                    className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Contact;
