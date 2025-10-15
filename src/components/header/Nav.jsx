"use client";
import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <div>
      <nav className="nav-main mainmenu-nav d-none d-xl-block">
        <ul className="mainmenu">
          <li>
            <Link className="" href={"/"}>
              Home
            </Link>
          </li>

          <li className="has-droupdown">
            <Link className="nav-link" href="/our-service">
              Services
            </Link>
            <ul className="submenu menu-link3">
              <li>
                <Link href="/park-development">Park Development</Link>
              </li>
              <li>
                <Link href="/water-cooler-supplier-services">
                  Water Cooler Supplier Services
                </Link>
              </li>
              <li>
                <Link href="/security-manpower-services">
                  Security & Manpower Services
                </Link>
              </li>
              <li>
                <Link href="/ac-chiller-plants-services">
                  AC Chiller Plants Services
                </Link>
              </li>
              <li>
                <Link href="/roads-and-sewer-lines-services">
                  Roads and Sewers Lines
                </Link>
              </li>
            </ul>
          </li>
          <li className="has-droupdown">
            <Link className="nav-link" href={"#"}>
              Pages
            </Link>
            <ul className="submenu menu-link">
              <li className="menu-item">
                {/* <Link className="tag" href={"#"}>
                  Pages
                </Link> */}
                <ul>
                  <li>
                    <Link href={"/about-us"}>About Us</Link>
                  </li>
                  <li>
                    <Link href={"/our-service"}>Our Services</Link>
                  </li>
                  {/* <li>
                    <Link href={"/testimonial-style-1"}>Testimonial</Link>
                  </li> */}
                  <li>
                    <Link href={"/team"}>Teams</Link>
                  </li>
                  <li>
                    <Link href={"/project"}>Projects</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link className="" href={"/why-choose-us"}>
              Why Choose Us
            </Link>
          </li>

          <li>
            <Link href={"/blogs"}>Blog</Link>
            {/* <ul className="submenu"> */}
            {/* <li>
                <Link href={"/blog-list"}>Blog List</Link>
              </li> */}
            {/* <li>
                <Link href={"/blogs"}>Blog Grid</Link>
              </li> */}
            {/* <li>
                <Link href={"/blog-details-default"}>Blog Details</Link>
              </li> */}
            {/* </ul> */}
          </li>

          {/* <li>
            <Link className="nav-item" href={"/pricing-plane"}>
              Pricing Plan
            </Link>
          </li> */}

          {/* <li>
            <Link className="nav-item" href={"/contactus"}>
              Contact
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
