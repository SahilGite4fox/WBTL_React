import React from 'react';
import { contact_barcode, footLinkdin, mail_outline, call, location_on, contactBanner } from '../assets/images';
import PageBanner from '../components/common/PageBanner';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfoBlock from '../components/Contact/ContactInfoBlock';

const Contact = () => {
    return (
        <main className="col-100 floatLft clr relative">
            <PageBanner
                title="Contact Us"
                bannerImg={contactBanner}
                breadcrumbs={[{ label: 'Contact US', active: true }]}
            />
            <section className="contactSec sv-secGap col-100 floatLft clr relative">
                <div className="main-wrapper">
                    <div className="contactSecCont d-flex flxFlwRwWrp col-100 floatLft clr relative">
                        <div className="contactContFrmSec">
                            <div className="contactContFrmTitle comm_Title black">
                                <h4>
                                    Do you have a question or{" "}
                                    <span>
                                        enquiry
                                        <br /> for our team?
                                    </span>
                                </h4>
                            </div>
                            <div className="contactContFrmDesc">
                                <p>
                                    Our dedicated support team is available 24/7 to assist you and
                                    answer all your questions.
                                </p>
                            </div>
                            <ContactForm />
                        </div>
                        <ContactInfoBlock />
                    </div>
                </div>
            </section>
        </main>

    )
}

export default Contact
