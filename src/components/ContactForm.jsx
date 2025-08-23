import React, { useState } from "react";
import NavbarLinks from "./NavbarLinks";

const ContactForm = () => {
    const [form, setForm] = useState({ name: "", email: "", phone: "" });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let newErrors = {};

        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Enter a valid email";
        }
        if (!form.phone.trim()) {
            newErrors.phone = "Phone is required";
        } else if (!/^[0-9]{10}$/.test(form.phone)) {
            newErrors.phone = "Enter a valid 10-digit phone number";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        localStorage.setItem("FormData", JSON.stringify(form));
        alert("Form Submitted! 🚀");

        setForm({ name: "", email: "", phone: "" });
        setErrors({});
    };

    return (<>
        <section className="py-16 px-6 bg-gray-100 h-screen justify-center flex flex-col items-center">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <form
                onSubmit={handleSubmit}
                className="max-w-xl lg:max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6"
            >
                {/* Name */}
                <div className="relative">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded focus:outline-none ${errors.name ? "border-red-500" : "border-gray-300"
                            }`}
                    />
                    {errors.name && (
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white bg-red-500 px-2 py-1 rounded text-sm">
                            {errors.name}
                        </span>
                    )}
                </div>

                {/* Email */}
                <div className="relative">
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded focus:outline-none ${errors.email ? "border-red-500" : "border-gray-300"
                            }`}
                    />
                    {errors.email && (
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white bg-red-500 px-2 py-1 rounded text-sm">
                            {errors.email}
                        </span>
                    )}
                </div>

                {/* Phone */}
                <div className="relative">
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone"
                        value={form.phone}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded focus:outline-none ${errors.phone ? "border-red-500" : "border-gray-300"
                            }`}
                    />
                    {errors.phone && (
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white bg-red-500 px-2 py-1 rounded text-sm">
                            {errors.phone}
                        </span>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-white text-black border border-black py-3 rounded-lg font-medium hover:bg-black hover:text-white transition"
                >
                    Submit
                </button>
            </form>
        </section>
        <NavbarLinks />
    </>);
};

export default ContactForm;
