"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderOne from "@/components/header/HeaderOne";
import FooterOne from "@/components/footer/FooterOne";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import BlogListMain from "./BlogListMain";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Blogs" },
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/blogs`
        );
        if (res.data.success) {
          setPosts(res.data.data);
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <HeaderOne />
      <Breadcrumb title="Blogs" breadcrumbs={breadcrumbs} />
      <BackToTop />

      <div className="rts-blog-grid-area rts-section-gap">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-8 col-md-12 col-sm-12 col-12 pr--40 pr_md--0 pr_sm-controler--0">
              <div className="row g-5">
                {loading ? (
                  <p>Loading blogs...</p>
                ) : (
                  posts
                    .slice(0, 12) // example limit
                    .map((data, index) => (
                      <div
                        key={data._id || index}
                        className="col-lg-6 col-md-6 col-sm-12 col-12"
                      >
                        <div className="blog-grid-inner">
                          <BlogListMain
                            // blogCategory="Business" // since your API doesn’t return category
                            Slug={data.slugName}
                            blogImage={`${data.blogImage}`}
                            authorImg="/assets/images/author.png" // fallback image
                            blogTitle={data.blogTitle}
                            blogAuthor={data.createdBy.fullName}
                            blogPublishedDate="01 Jan, 2025" // fallback, unless API provides date
                          />
                        </div>
                      </div>
                    ))
                )}
              </div>
            </div>

            {/* Sidebar widgets remain unchanged */}
          </div>
        </div>
      </div>

      <FooterOne />
    </div>
  );
}
