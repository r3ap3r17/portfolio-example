import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";
import ImagesSection from "./sections/ImagesSection";
import StaffSection from "./sections/StaffSection";

function MainSection() {
    return (
        <div className="main-section">
            <AboutSection id='about' />
            <ImagesSection id='images' />
            <StaffSection id='staff' />
            <ContactSection id='contact' />
            <FooterSection />
        </div>
    );
}

export default MainSection;