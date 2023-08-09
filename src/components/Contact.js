import { useState } from 'react';
import Image from 'next/image';
import CardLayout from './CardLayout';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
  
    try {
      await fetch('https://formspree.io/f/mjvdnepq', {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Add this line
      });
  
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      alert('There was an error sending your message. Please try again later.');
    }
  };

  return (
    <CardLayout>
      <div id="contact" className="card">
        <h1 className="section-title">Contact</h1>
        <p>Contact or follow me on LinkedIn or send me a message.</p>
        <ul className="social-links">
          <li className="social-link-item">
            <strong>LinkedIn:</strong>
            <a href="https://www.linkedin.com/in/thijs-overmeer/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/linkedin-logo.png" alt="LinkedIn" width="24" height="24" />
            </a>
          </li>
          <li className="social-link-item">
            <strong>GitHub:</strong>
            <a href="https://github.com/thijsovermeer" target="_blank" rel="noopener noreferrer">
              <Image src="/images/github-logo.png" alt="GitHub" width="24" height="24" />
            </a>
          </li>
        </ul>

        <form
          action="https://formspree.io/f/mjvdnepq" 
          method="POST"
          className="w-full max-w-lg mx-auto mt-10"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                Name
              </label>
              <input 
                name="name"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-first-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                Email
              </label>
              <input 
                name="_replyto"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                Message
              </label>
              <textarea 
                name="message"
                className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                Submit
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
        {submitted && (
          <div className="mt-4 text-green-500">
            Thank you for your message! I&apos;ll get back to you soon.
          </div>
        )}
      </div>
    </CardLayout>
  );
}