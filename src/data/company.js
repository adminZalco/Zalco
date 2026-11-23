// Company and contact details, used across the site (footer, Contact page, WhatsApp button).
export const company = {
    name: 'Zalco Technologies',
    legalName: 'Zalco Technologies Private Limited',
    location: 'Lucknow, India',
    email: 'admin@zalco.io',
    phoneDisplay: '+91 90444 99810',
    phoneTel: '+919044499810',
    whatsapp: '919044499810', // digits only, used for wa.me links
    whatsappMessage: "Hi Zalco, I'd like to discuss a project.",
    linkedin: 'https://www.linkedin.com/company/zalco-technologies',
    bookingCall: 'https://cal.com/zalco/15min',
};

export const whatsappLink = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(company.whatsappMessage)}`;
