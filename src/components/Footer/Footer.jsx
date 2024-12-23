import {
  NavigationSection,
  ConnectSection,
  CrunchyrollSection,
  AccountSection,
} from "./Sections/index";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <NavigationSection />
          <ConnectSection />
          <CrunchyrollSection />
          <AccountSection />
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between text-sm">
          <span>© Crunchyroll, LLC</span>
          <span className="mt-2 md:mt-0">ESPAÑOL</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
