import "./App.css";
import AboutMeSection from "./Components/AboutMe/AboutMeSection/AboutMeSection";
import EducationSection from "./Components/Education/EducationSection/EducationSection";
import HobbieSection from "./Components/Hobbies/HobbieSection/HobbieSection";
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/Header/Header";
import PersonalProjectSection from "./Components/PersonalProject/PersonalProjectSection/PersonalProjectSection";
import SkillsSection from "./Components/Skills/SkillsSection/SkillsSection";

function App() {
  return (
    <div className="app">
      <Header />
      <AboutMeSection />
      <SkillsSection />
      <EducationSection />
      <PersonalProjectSection />
      <HobbieSection />
      <Footer />
    </div>
  );
}

export default App;
