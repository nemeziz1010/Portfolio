import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://formspree.io/f/xdkzrgkw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form fields
      } else {
        const data = await response.json();
        if (data.hasOwnProperty('errors'))  {
            setStatus(data["errors"].map((error: any) => error["message"]).join(", "));
        } else {
            setStatus('Failed to send message. Please try again.');
        }
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-orange-400" size={24} />,
      title: "EMAIL",
      value: "mitukorochikar10@gmail.com",
      link: "mailto:mitukorochikar10@gmail.com"
    },
    {
      icon: <Phone className="text-red-400" size={24} />,
      title: "PHONE",
      value: "+91 8888604009",
      link: "tel:+918888604009"
    },
    {
      icon: <MapPin className="text-yellow-400" size={24} />,
      title: "LOCATION",
      value: "New Delhi",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-12 lg:py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-center mb-10 lg:mb-12 tracking-tight">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              GET IN TOUCH
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 lg:mb-6 tracking-wide">LET'S CONNECT</h3>
              <p className="text-base lg:text-lg text-gray-300 mb-6 lg:mb-8 leading-relaxed font-medium">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              
              <div className="space-y-4 lg:space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-4 p-4 lg:p-6 rounded-none bg-gray-800 hover:bg-gray-700 transition-colors group border-l-4 border-orange-500"
                  >
                    <div className="flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-black text-white group-hover:text-orange-400 transition-colors tracking-wide text-sm lg:text-base">
                        {info.title}
                      </p>
                      <p className="text-gray-300 font-medium text-sm lg:text-base">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-black text-gray-300 mb-2 tracking-wide uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 lg:py-4 bg-gray-800 border-2 border-gray-700 rounded-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-gray-200 placeholder-gray-400 font-medium text-sm lg:text-base"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-black text-gray-300 mb-2 tracking-wide uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 lg:py-4 bg-gray-800 border-2 border-gray-700 rounded-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-gray-200 placeholder-gray-400 font-medium text-sm lg:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-black text-gray-300 mb-2 tracking-wide uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 lg:py-4 bg-gray-800 border-2 border-gray-700 rounded-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all resize-none text-gray-200 placeholder-gray-400 font-medium text-sm lg:text-base"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-none font-black uppercase tracking-wider hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center space-x-2 text-sm lg:text-base"
                >
                  <Send size={18} />
                  <span>SEND MESSAGE</span>
                </button>

                {/* Status message will be displayed here after submission */}
                {status && <p className="text-center text-white mt-4">{status}</p>}

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;