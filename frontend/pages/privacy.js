import React from "react";
import Head from "next/head";
import Image from "next/image";
import noma from "../img/noma.png";

const privacy = () => {
  return (
    <div className="ml-10 mt-10 space-y-3">
      {/* Hader */}
      <div>
        <div>
          <Image
            className="object-contain ml-10 block"
            height="50"
            width="50"
            src={noma}
            alt="Noma App Logo"
            priority
          />
          <h1 className="text-4xl font-bold block">
            Noma Document Manager App Privacy Policy
          </h1>
        </div>
        {/* after header */}
        <div className="space-y-6">
          <p>Last Modified: November 15, 2022</p>
          <p>
            Hassanjr,Noma is committed to protecting and respecting your
            privacy.
          </p>
          <p>
            This policy (together with any applicable terms of use) describes
            what Personal Information (as defined below) and other information
            we may collect from you in connection with your use of our products.
            References to Noma products in this policy include Nomas websites,
            apps, software, and services. For greater certainty, we may collect
            and make use of your information (including Personal Information) in
            the context of:
          </p>
          <ul className="list-decimal ml-10">
            <li>
              Noma websites, including, but not limited to, web-based services
              such as hassanjr.com (“websites”);
            </li>
            <li>
              Noma desktop applications and mobile applications (both referred
              to as “apps”); and
            </li>
            <li>Noma sales, marketing, and advertising practices.</li>
          </ul>
          <p>
            This policy is provided in a layered format for ease of access.
            Click on the table of contents to jump to a specific section.
          </p>
          <ul className="list-disc ml-10 text-blue-500">
            <li>
              <a href="#1">OVERVIEW AND SCOPE</a>
            </li>
            <li>
              <a href="#2">INFORMATION WE MAY COLLECT FROM YOU</a>
            </li>
            <li>
              <a href="#3">How DO WE USE YOUR DATA OR INFORMATION</a>
            </li>
            <li>
              <a href="#">DISCLOSURE OF YOUR INFORMATION</a>
            </li>
            <li>
              <a href="#">WHERE WE STORE YOUR PERSONAL INFORMATION</a>
            </li>
            <li>
              <a href="#">YOUR RIGHTS</a>
            </li>
            <li>
              <a href="#">CONTACT US</a>
            </li>
          </ul>
        </div>
      </div>
      {/* link paragraphs */}
      {/* 1 */}
      <div id="1" className="space-y-3">
        <h1 className="text-3xl text-pink-600 font-bold">OVERVIEW AND SCOPE</h1>
        <p>
          We believe that you should always know what data we collect from you,
          how we use it, and that you should have meaningful control over both.
          This policy describes how we use Personal Information, with whom we
          share it, your rights and choices, and how you can contact us about
          our privacy practices.
        </p>
      </div>

      {/* 2 */}

      <div id="2" className="space-y-3">
        <h1 className="text-3xl text-pink-600 font-bold">
          INFORMATION WE MAY COLLECT FROM YOU
        </h1>
        <p>
          “Personal Information” is information about an identifiable
          individual, such as their name, mailing address, email address, or
          phone number, personal description, or photograph, whether used alone,
          or when combined with other personal or identifying information which
          is linked or linkable to a specific individual.
        </p>
        <p>
          We DO NOT collect any information about you BUT the App accesses only
          Your Files to enable you to manage your doucument files{" "}
        </p>
        <p>So Noma document Manager App may require the following</p>
        <ul className="list-disc ml-10">
          <li>Access to All of Your files and Folders</li>
          <li>Read Permission to Display the files for you</li>
          <li>
            Wright Permission so that you can edit your files and documents
          </li>
        </ul>
      </div>

      {/* 3 */}

      <div id="3">
        <h1 className="text-3xl text-pink-600 font-bold">
          How DO WE USE YOUR DATA OR INFORMATION
        </h1>
        <p>
          Noma doucument Manager App uses your data to manage your files and
          documents for you
        </p>
        <p>
          Therefore, The data is not used for advertising or other related
          activities
        </p>
      </div>

      {/* 4 */}

      <div>
        <h1 className="text-3xl text-pink-600 font-bold"></h1>
      </div>

    </div>
  );
};

export default privacy;
