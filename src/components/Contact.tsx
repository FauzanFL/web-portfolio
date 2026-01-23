import { Github, Linkedin, Facebook, Instagram, Mail } from "lucide-react";
import contacts from "../data/contacts.json";

export default function Contact() {
  function setIcon(social: string) {
    switch (social) {
      case "linkedin":
        return (
          <Linkedin className="w-6 h-6 shrink-0 transition-transform duration-300 group-hover:rotate-12" />
        );
      case "facebook":
        return (
          <Facebook className="w-6 h-6 shrink-0 transition-transform duration-300 group-hover:rotate-12" />
        );
      case "github":
        return (
          <Github className="w-6 h-6 shrink-0 transition-transform duration-300 group-hover:rotate-12" />
        );
      case "instagram":
        return (
          <Instagram className="w-6 h-6 shrink-0 transition-transform duration-300 group-hover:rotate-12" />
        );
      case "email":
        return (
          <Mail className="w-6 h-6 shrink-0 transition-transform duration-300 group-hover:rotate-12" />
        );
      default:
        return null;
    }
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl text-center font-bodoni-moda mb-10 italic underline decoration-2 underline-offset-8 decoration-purple-600 dark:text-white">
          Contact
        </h2>

        <div className="text-center mb-10">
          <p className="text-gray-600 font-playfair-display dark:text-gray-300 mb-8 text-lg">
            Follow me on:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-open-sans max-w-2xl mx-auto">
            {contacts.map((social: ContactData) => (
              <a
                key={social.name}
                href={social.link}
                target={social.name !== "Email" ? "_blank" : undefined}
                rel={
                  social.name !== "Email" ? "noopener noreferrer" : undefined
                }
                className={`flex items-center gap-3 p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-linear-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 transition-all duration-300 ${social.color} ${social.bgColor} hover:shadow-xl hover:scale-105 group`}
              >
                {setIcon(social.name.toLowerCase())}
                <span className="font-medium truncate dark:text-gray-200">
                  {social.account}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
