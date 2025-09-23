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
            <Link className="nav-link" href={"/our-service"}>
              Services
            </Link>
            <ul className="submenu menu-link3">
              <li className="sub-droupdown">
                <Link className="sub-menu-link" href={"#"}>
                  Our Service
                </Link>
                <ul className="submenu third-lvl">
                  <li>
                    <Link href={"/service-details"}>Park Development</Link>
                  </li>
                  <li>
                    <Link href={"/service-details"}>
                      Infrastructure Development
                    </Link>
                  </li>
                  <li>
                    <Link href={"/service-details"}>General Contracting</Link>
                  </li>
                  <li>
                    <Link href={"/service-details"}>
                      Design-Build Renovation & Remodeling
                    </Link>
                  </li>
                </ul>
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
                  <li>
                    <Link href={"/testimonial-style-1"}>Testimonial</Link>
                  </li>
                  <li>
                    <Link href={"/team"}>Teams</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="has-droupdown">
            <Link className="nav-link" href={"#"}>
              Blog
            </Link>
            <ul className="submenu">
              <li>
                <Link href={"/blog-list"}>Blog List</Link>
              </li>
              <li>
                <Link href={"/blog-grid"}>Blog Grid</Link>
              </li>
              <li>
                <Link href={"/blog-details-default"}>Blog Details</Link>
              </li>
            </ul>
          </li>

          {/* <li>
            <Link className="nav-item" href={"/pricing-plane"}>
              Pricing Plan
            </Link>
          </li> */}

          <li>
            <Link className="nav-item" href={"/contactus"}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
