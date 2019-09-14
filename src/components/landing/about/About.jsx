import React from 'react';
import './About.css';

import SmallLogoColor from '../../../assets/Logos/SmallLogoColor.png';

function About() {
  return (
    <div id="about" className="landing_about">
      <h3 className="landing_about__title">What Is Tonik?</h3>
      <div id="two_columns">
        <div className="landing_about__logo">
          <img src={SmallLogoColor} alt="#" />
        </div>
        <div className="landing_about__text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Leo duis ut diam quam nulla. Ipsum dolor
            sit amet consectetur adipiscing elit ut aliquam. In ante metus dictum at tempor. Aliquet
            enim tortor at auctor urna. Mi ipsum faucibus vitae aliquet nec ullamcorper. Turpis
            massa sed elementum tempus. Quam adipiscing vitae proin sagittis. Ipsum dolor sit amet
            consectetur adipiscing. Est sit amet facilisis magna etiam. Vitae purus faucibus ornare
            suspendisse sed nisi lacus sed viverra. Nisl nisi scelerisque eu ultrices vitae auctor
            eu augue. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Volutpat
            lacus laoreet non curabitur gravida arcu ac tortor dignissim. Mauris a diam maecenas sed
            enim ut. Cursus in hac habitasse platea dictumst. Tincidunt eget nullam non nisi est sit
            amet facilisis magna. Ac tincidunt vitae semper quis lectus nulla at. Neque volutpat ac
            tincidunt vitae semper quis. Porttitor rhoncus dolor purus non enim praesent elementum
            facilisis. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Vitae
            purus faucibus ornare suspendisse. Erat pellentesque adipiscing commodo elit at
            imperdiet dui accumsan sit. Vel fringilla est ullamcorper eget. Purus sit amet luctus
            venenatis. Tincidunt ornare massa eget egestas purus viverra accumsan. Justo laoreet sit
            amet cursus sit amet dictum sit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
