import React from "react";
import { NavLink } from "react-router-dom";
import food from "../components/img/foof.jpg";
import rice from "../components/img/Beef-fries.jpg";
import beef from "../components/img/rice.jpg";
import person1 from "../components/img/person1.jpeg";
import person2 from "../components/img/person2.jpeg";
import chips from "../components/img/chips.jpeg";
import eggs from "../components/img/eggs.jpeg";
import meat from "../components/img/meat.jpg";
import NavBarLanding from "./NavBarLanding";

import "../App.css";
function Home() {
  return (
    <div className="bg-sky-800 mb-7">
      <NavBarLanding />
      <div className="info">
        <div className=" bg-slate-50 mr-4 rounded-md">
          <h1 className="text-2xl p-5 font-bold">
            Delicious Food For Your cravings
          </h1>
          <p className="text-3xl p-5">
            We Cook Fresh And Healthy Foods With Different Recipes
          </p>
          <NavLink
            to={"/mainmenu"}
            exact="true"
            className="text-2xl bg-sky-400 p-3 rounded-full mt-10"
          >
            View-Menu &rarr;
          </NavLink>
          <br></br>
          <br></br>
          <div className="flex flex-row h-80 space-x-4 ml-4">
            <img className="" src={require("./dinner1.jpg")} alt="" />
            <img className="" src={require("./beverage.jpg")} alt="" />
            <img className="" src={require("./bevarage1.jpg")} alt="" />
          </div>
        </div>
        <div className="sect-2">
          <div class="composition">
            <img
              src={food}
              alt="food-1"
              class="composition__photo composition__photo--p1"
            />
            <img
              src={rice}
              alt="food-2"
              class="composition__photo composition__photo--p2"
            />
            <img
              src={beef}
              alt="food-3"
              class="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>

      <section className="about-us">
        <div className="about">
          <div className="about-image mb-8">
            <img src={meat} alt="beef" />
          </div>
          <div className="about-info mb-8">
            <h1>History</h1>
            <h3>Strange Stories of Emergence of Healthy Foods</h3>
            <br></br>
            <p>
              You are what you eat, but you're also, to a surprisingly large
              degree, what your parents ate. The Secret History of Food begins
              with what we consumed in the womb. Crazy isnt?
            </p>
            <NavLink to={"/"} exact="true" className="text-2xl bg-sky-400 p-3 rounded-full mt-10">
              Read-More
            </NavLink>
          </div>

          <div className="about-image mb-8">
            <img src={eggs} alt="beef" />
          </div>

          <div className="about-info mb-8">
            <h1>Community</h1>
            <h3>Healthy food in social networks, with us is interesting</h3>
            <p>
              ocial media, such as Instagram, changed the way many people
              consume food. Photos of food are used on Instagram in photographic
              exchanges to identify and interact with the community and are the
              second most popular Instagram topic after selfies .
            </p>
            <NavLink to={"/"} exact="true" className="text-2xl bg-sky-400 p-3 rounded-full mt-10">
              Read-More
            </NavLink>
          </div>

          <div className="about-image mb-8">
            <img src={chips} alt="beef" />
          </div>

          <div className="about-info mb-8">
            <h1>Philosophy</h1>
            <h3>Only the Best Food,the best musicians the best guests</h3>
            <p>
              What's better than good food and music to break the monotony of
              life! Be it after a busy workday or over the weekends, we love
              meeting up friends for some candid conversation, foods and drinks.
            </p>
            <NavLink to={"/"} exact="true" className="text-2xl bg-sky-400 p-3 rounded-full mt-10">
              Read-More
            </NavLink>
          </div>
        </div>
      </section>

      <section className="section-stories">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary text-white">We make people Genuinely happy</h2>
        </div>

        <div className="row ">
          <div className="story ">
            <figure className="story__shape">
              <img src={person2} alt="tour" className="story__img" />
              <ficaption className="story__caption">Becky</ficaption>
            </figure>
            <div className="story__text ">
              <h3 className="heading-tertiary u-margin-bottom-small">
                I enjoyed my Ugali-fish
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                aspernatur est rerum? Eveniet aut minus a corporis voluptatem
                est, accusamus saepe quaerat mollitia repellendus, perferendis,
                perspiciatis sit repellat. Laborum, aperiam?
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img src={person1} alt="tour" className="story__img" />
              <ficaption className="story__caption">Amos</ficaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small">
                The Food was So Delicious
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                aspernatur est rerum? Eveniet aut minus a corporis voluptatem
                est, accusamus saepe quaerat mollitia repellendus, perferendis,
                perspiciatis sit repellat. Laborum, aperiam?
              </p>
            </div>
          </div>
        </div>

        <div className="u-center-text u-margin-top-huge">
          <a href="/" className="text-2xl bg-sky-400 p-3 rounded-full mt-10">
            Read all stories &rarr;
          </a>
        </div>
      </section>

      {/* <section className="footer">
        <div className="sect-footer">
          <div className="right">
            <h1>Utamu delicacies</h1>

          </div>

          <div className="links">
            <ul>
              <h2>Links</h2>
              <li>Home</li>
              <li>About-Us</li>
              <li>Contact-Us</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="contact">
            <h1>Contact</h1>
            <p>Koinange Street, Nairobi, Kenya</p>
            <p>+254741783221</p>
            <p>Utamu delicacies@gmail.com</p>
          </div>

          <div className="opening">
            <h1>Opening-Hours</h1>
            <p>Monday - Saturday</p>
            <p>09AM - 09PM</p>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default Home;
