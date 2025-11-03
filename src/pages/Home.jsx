import Footer from "@components/Footer";
import HeroBanner from "@components/HeroBanner";
import HowItWorks from "@components/HowItWorks";
import Navbar from "@components/Navbar";
import SociaPlatforms from "@components/SociaPlatforms";
import ChatIcon from "@components/ui/chat/ChatIcon";
import ChatModal from "@components/ui/chat/ChatModal";
import WeeklyMatches from "@components/WeeklyMatches";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <SociaPlatforms />
      <HowItWorks />
      <WeeklyMatches />
      <Footer />
      <ChatIcon /> 
     <ChatModal />
    </div>
  );
};

export default Home;
