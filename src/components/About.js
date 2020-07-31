import React from 'react';
import Image from 'react-bootstrap/Image';

function About() {
  return (
    <div className="About-container">

      {/* Header and text */}
      <h2 className="About-header">This is the about section.</h2>
      <p>
        Quam id leo in vitae turpis massa. Convallis aenean et tortor at risus viverra adipiscing. Sit amet justo donec enim. Arcu felis bibendum ut tristique. Quis lectus nulla at volutpat diam ut venenatis.
      </p>

      {/* Image */}
      <Image roundedCircle src="https://randomuser.me/api/portraits/lego/5.jpg" />   
    </div>
  );
}

export default About;
