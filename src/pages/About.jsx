import React from 'react';
import Header from '../components/Header';
import Resume from '../components/Resume';
import ProfessionalHistory from '../components/ProfessionalHistory';
import AcademicHistory from '../components/AcademicHistory';
import Footer from '../components/Footer';

function AboutMe() {
  return (
    <div>
      <Header />
      <Resume />
      <ProfessionalHistory />
      <AcademicHistory />
      <Footer />
    </div>

  );
}

export default AboutMe;
