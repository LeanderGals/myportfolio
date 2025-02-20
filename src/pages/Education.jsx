import React from 'react';
import '../css/Education.css'

const Education = () => {
    const educationData = [
        {
          school: "University of Science and Technology of Southern Philippines (USTP)",
          year: "S.Y. 2020 - 2024",
          degree: "Bachelor of Science in Information Technology",
          address: "Claro M. Recto Ave. Lapasan, Cagayan De Oro City, Misamis Oriental"
        },
        {
          school: "Gusa Regional Science High School - X",
          year: "S.Y. 2014 - 2020",
          degree: "Completed Junior and Senior High School",
          address: "Gusa, Cagayan De Oro City, Misamis Oriental"
        },
        {
          school: "Macanhan Elementary School",
          year: "S.Y. 2007 - 2013",
          degree: "Graduated from elementary",
          address: "Macanhan, Cagayan De Oro City, Misamis Oriental"
        },
      ];

  return (
    <section id='education'>
    <div className="container">
        <h2>Educational Background</h2>
        <p>
            My educational backgrond shows my unwavering commitment to lifelong learning and personal development. 
            It attest to my unwavering pursuit to information and skill development in order to achieve in my choosen field.
        </p>
        <div className="timeline">
            {educationData.map((item, index) => (
            <div className="timeline-item" key={index}>
            <h3>{item.school}</h3>
            <p><strong>{item.degree}</strong></p>
            <p>{item.year}</p>     
            <p>{item.address}</p>
            </div>
        ))}
        </div>

    </div>
    </section>
  );
};

export default Education;
