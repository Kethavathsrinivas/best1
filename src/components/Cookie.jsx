import React from 'react';
import './Cookie.css';

const ShadowBox = ({ heading, content }) => (
    <div className='cookie_container mt-[-40px]'>
  <div className="shadow-box-container">
    <h2 className="shadow-box-heading" style={{fontSize:'20px',fontWeight:'bold'}}>COOKIE POLICY</h2>
    <h4 style={{color:'black',fontSize:'20px',fontWeight:'bold'}}>Cookie policy for Brahmaputra Exam Success</h4>
    <h4  style={{color:'black',fontSize:'20px',fontWeight:'bold'}}> Support Team Private Limited
    </h4>
    <p className="shadow-box-content">
    This is the Cookie Policy for BESST, accessible from besst.in
    </p>
    <ol>
    <li>What is a cookie?
    </li>
    <li> What types of cookies do we use?</li>
    <li> Changes to this Cookie Policy</li>
    <li> Contact us</li>
    </ol>
    <p>Last updated: February 2024</p>
    <p>This portal/website “besst.in” and may 
        use cookies, pixel tags, Web Beacons, and other web technologies 
        to improve the portal’s performance, to enhance user’s browsing 
        experience and to protect the website against spam robots.</p>

    <p>Certain functionalities of the portal may use cookies to store token to validate an authorised user is 
        accessing the portal, understand more about you, so we can offer you more personalized experience. We use a simple clarity
         tool of Microsoft to analyse the behaviours of users, without storing any information on your device, to count the number
         of visitors from different locations, etc.</p>
         <p>
         For more information on Microsoft clarity tool, see 
         the official Microsoft Clarity page.
         </p>
         <p>You can find out more about cookies and how to manage them in the information below. You can also change your browser settings so that cookies cannot be placed on your device.

If you have any questions in relation to the cookies we use please contact us.</p>
<h4 style={{color:'black',fontSize:'20px',fontWeight:'bold'}}>What is a cookie?</h4>
<p>HTTP cookies (also called web cookies, Internet cookies, browser cookies, or simply cookies) 
    are small blocks of data created by a web server while a user is browsing a website and placed on the user's
     computer or other device by the user's web browser. Cookies are placed on the device used to access a website,
     and more than one cookie may be placed on a user's device during a session.</p>
     <p>Cookies can also be used to save information that the user previously entered into form fields, such as names, addresses, etc.

Authentication cookies are commonly used by web servers to authenticate that a user is logged in, and with 
which account they are logged in. Without the cookie, users would need to authenticate themselves by logging in on 
each page containing sensitive information that they wish to access. The security of an authentication cookie generally depends on the security 
of the issuing website and the user's web browser, and on whether the cookie data is encrypted.</p>
<p>Tracking cookies, and especially third-party tracking cookies, are commonly used as ways to compile long-term records of individuals'
     browsing histories many countries laws requires that all websites to gain "informed consent" from users before storing non-essential 
     cookies on their device.</p>
     <p>Please note that any consent to accept or to decline cookies is limited to the besst.in portal 
        and not to other sites or any other pages, which may be hyperlinked to our website or portal. For more information 
        on cookies used by those websites, please refer to the specific privacy notice or cookie policy on those websites. 
        If you have any questions please contact us</p>
        <h4 style={{color:'black',fontSize:'20px',fontWeight:'bold'}}>What types of cookies do we use?</h4>
        <p>The website uses the cookies that perform four functions, as classified below:</p>
        <p>Authentication cookies are used to store tokens and are 
            then sent back to the website on each subsequent visit, or to another
             webpage that recognizes that cookie.</p>
             <p>
             Essential/strictly necessary 
             cookies, which are essential to the functioning of the website.
             </p>
             <p>
             Performance cookies, which help us measure the website’s 
             performance and improve your experience. In using performance 
             cookies we do not store any personal data, and only use the information collected through these
              cookies in aggregated and anonymised form.
             </p>
             <p>
             Functionality cookies, which allow us to enhance your experience 
             (for example by remembering any settings you may have selected).
             </p>
             <p>
             In some special cases we also use cookies provided by trusted 
             third parties. The following section details 
             which third party cookies you might encounter through this site.
             </p>
             <p>
             This site uses Google Analytics which is one of the most widespread and trusted 
             analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the 
             pages that you visit so we can continue to produce engaging content.
             </p>
             <p>
             For more information on Google Analytics cookies, see the
              official Google Analytics page
             </p>
             <p>
             Third party analytics are used to track and measure usage of this site so that we can continue to produce engaging content. 
             These cookies may track things 
             such as how long you spend on the site or pages you visit which helps us to understand how we can improve the site for you.
             </p>
             <p>
             We also use social media buttons and/or plugins on this portal/website that allow you to connect with your social network in 
             various ways. For these to work the following social media sites including; will set cookies through our site which may be used to 
             enhance your profile on 
             their site or contribute to the data they hold for various purposes outlined in their respective privacy policies.
             </p>
             <h4 style={{color:'black',fontSize:'20px',fontWeight:'bold'}}>
             Changes to this Cookie Policy
             </h4>
             <p>
             We will occasionally update this Cookie Policy to reflect changes in our practices and services. When we post changes to this Cookie Policy,
              we will revise the “Last updated” date at the top of this Cookie Policy. If we make any material changes in the way we collect, use, 
              and/or share information held in cookies, 
              we will notify you by prominently posting notice of the changes on the website. We recommend 
             that you check this page from time to time to inform yourself of any changes in this Cookie Policy or any of our other policies.
             </p>
             <button className='cookie_btn'><a href="#" className='cookie_color'>Back to Top</a></button>






             </div>
  </div>
);

const App = () => {
  const items = [
    { heading: 'Heading 1', content: 'Content for heading 1' },
   
  ];

  return (
    <div className="app">
      {items.map((item, index) => (
        <ShadowBox key={index} heading={item.heading} content={item.content} />
      ))}
    </div>
  );
};

export default App;
