export interface SocialData {
    name: string;
    url: string;
    className: string;
}

export interface ResumeData {
    name: string;
    occupation: string;
    description: string;
    image: string;
    bio: string;
    contactMessage: string;
    email: string;
    phone: string;
    address: {
        street: string;
        city: string;
        state: string;
        zip: string;
    };
    website: string;
    resumedownload: string;
    social: Array<SocialData>;
    resume: Resume;
    testimonials: Testimonial[];
}

export interface Resume {
    skillmessage: string;
    education: Education[];
    work: Work[];
    skills: Skill[];
}

export interface Testimonial {
    text: string;
    user: string;
}

interface Work {
    company: string;
    title: string;
    years: number;
    description: string;
}

interface Education {
    school: string;
    degree: string;
    description: string;
    graduated: string;
}

interface Skill {
    name: string;
    level: number;
}
