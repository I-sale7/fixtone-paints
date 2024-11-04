import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {

    const {t} = useTranslation();

	const [formData, setFormData] = useState({
			name: '',
			email: '',
			phone: '',
			message: ''
		});

	const handleChange = (e) => {
			setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleForm = (event) => {
		event.preventDefault();

		emailjs.send(
      'service_8kx6ral',  // Replace with your EmailJS service ID
      'template_6xfrjjd',  // Replace with your EmailJS template ID
      formData,
      'L-7Pr6XeLXalMCHdL'       // Replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });

		event.target.reset()
		toast.success("Thanks For Your Message")
	}

    return (
        <>
            <div className="contact-form-style-one">
                <h4 className="sub-title">{t("Contact")}</h4>
                <h2 className="title">{t("Send us a Massage")}</h2>
                <form className="contact-form contact-form" onSubmit={handleForm}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <input className="form-control" id="name" name="name" placeholder={t("Name")} type="text" autoComplete='off' value={formData.name} onChange={handleChange} required />
                                <span className="alert-error"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input className="form-control" id="email" name="email" placeholder={`${t("Email")}*`} type="email" autoComplete='off' value={formData.email} onChange={handleChange} required />
                                <span className="alert-error"></span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input className="form-control no-arrows" id="phone" name="phone" placeholder={t("Phone")} type="number" autoComplete='off' value={formData.phone} onChange={handleChange} />
                                <span className="alert-error"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group comments">
                                <textarea className="form-control" id="message" placeholder={t('Message')} name="message" autoComplete='off' value={formData.message} onChange={handleChange} required></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <button type="submit" name="submit" id="submit">
                                <i className="fa fa-paper-plane"></i> {t("Get in Touch")}
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-12 alert-notification">
                        <div id="message" className="alert-msg"></div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ContactForm;