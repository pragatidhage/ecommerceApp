import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4" >
          <p className="text-justify mt-2" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            obcaecati temporibus error qui in veritatis omnis voluptatibus
            aperiam, nobis eum minus reiciendis illum quia quos vero cupiditate,
            expedita inventore esse veniam consequuntur commodi! Corrupti.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
