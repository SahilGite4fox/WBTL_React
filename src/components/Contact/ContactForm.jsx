import React from 'react'

const ContactForm = () => {
    return (
        <div className="contactContFrm">
            <form action="#">
                <ul className="d-flex justContSpBtw flxFlwRwWrp">
                    <li className="col-100">
                        <div className="contactContFrmFields">
                            <input type="text" placeholder="Full Name" />
                        </div>
                    </li>
                    <li className="col-100">
                        <div className="contactContFrmFields">
                            <input type="text" placeholder="Email Address" />
                        </div>
                    </li>
                    <li className="col-50">
                        <div className="contactContFrmFields">
                            <input type="tel" placeholder="Phone" />
                        </div>
                    </li>
                    <li className="col-50">
                        <div className="contactContFrmFields">
                            <select name="">
                                <option value="">Enquiry Type</option>
                            </select>
                        </div>
                    </li>
                    <li className="col-100">
                        <div className="contactContFrmFields">
                            <textarea rows={5} placeholder="Your Message" />
                        </div>
                    </li>
                    <li className="col-100">
                        <div className="commSolidBtn">
                            <button>Submit</button>
                        </div>
                    </li>
                </ul>
            </form>
        </div>
    );
};

export default ContactForm;

