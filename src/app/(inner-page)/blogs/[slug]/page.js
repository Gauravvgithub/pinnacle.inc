import Head from "next/head";
import HeaderOne from "@/components/header/HeaderOne";
import FooterOne from "@/components/footer/FooterOne";
// import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import BackToTop from "@/components/BackToTop";

// Fetch blog data
// async function fetchBlog(slug) {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${slug}`,
//       { cache: "no-store" }
//     );
//     if (!res.ok) return null;
//     const data = await res.json();
//     if (!data.success) return null;
//     return data.data;
//   } catch (error) {
//     console.error("Error fetching blog:", error);
//     return null;
//   }
// }

async function fetchBlog(slug) {
  console.log("🔍 Fetching blog for slug:", slug);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${slug}`,
      { cache: "no-store" }
    );
    console.log("📦 Blog fetch status:", res.status);
    if (!res.ok) {
      console.error("❌ Blog fetch failed with status:", res.status);
      return null;
    }

    const data = await res.json();
    console.log("✅ Blog fetch response:", data);

    if (!data.success) {
      console.error("❌ Blog fetch returned unsuccessful response:", data);
      return null;
    }

    return data.data;
  } catch (error) {
    console.error("💥 Error fetching blog:", error);
    return null;
  }
}



// Fetch SEO data
// async function fetchSeo(blogTitle) {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/api/seo/getAllSeos`,
//       { cache: "no-store" }
//     );
//     if (!res.ok) return null;
//     const data = await res.json();
//     return data.data?.find((item) => item.page_title === blogTitle) || null;
//   } catch (error) {
//     console.error("Error fetching SEO:", error);
//     return null;
//   }
// }

async function fetchSeo(slug) {
  try {
    console.log("🔍 Fetching SEO for slug:", slug);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/seo/getAllSeos`,
      { cache: "no-store" }
    );
    // console.log("📦 SEO fetch status:", res.status);
    if (!res.ok) return null;

    const data = await res.json();
    // console.log("✅ SEO fetch response:", data);

    const matchedSeo = data.data?.find(
      (item) => item.page_title === slug // 🔍 Matching by slug
    );

    if (!matchedSeo) {
      console.warn("⚠️ No matching SEO entry found for slug:", slug);
    }

    return matchedSeo || null;
  } catch (error) {
    console.error("❌ Error fetching SEO:", error);
    return null;
  }
}




// ✅ Dynamic metadata for Next.js App Router
// export async function generateMetadata({ params: rawParams }) {
//   const params = await rawParams;
//   const { slug } = params;

//   const blog = await fetchBlog(slug);
//   if (!blog)
//     return { title: "Blog Not Found", description: "Blog does not exist" };

//   const seo = await fetchSeo(blog.blogTitle);

//   return {
//     title: seo?.metaTitle || blog.blogTitle,
//     description:
//       seo?.metaDes ||
//       blog.blogDescription.replace(/(<([^>]+)>)/gi, "").slice(0, 160),
//     keywords: seo?.metaKeywords?.join(", "),
//     alternates: {
//       canonical:
//         seo?.cannicalUrl ||
//         `${process.env.NEXT_PUBLIC_FRONTEND_URL}/blog/${slug}`,
//     },
//     openGraph: {
//       type: seo?.OgType || "article",
//       title: seo?.ogTitle || seo?.metaTitle || blog.blogTitle,
//       description:
//         seo?.ogDes ||
//         seo?.metaDes ||
//         blog.blogDescription.replace(/(<([^>]+)>)/gi, "").slice(0, 160),
//       images: seo?.OgImageUrl
//         ? [
//             {
//               url: seo.OgImageUrl,
//               width: 1200,
//               height: 630,
//               alt: blog.blogTitle,
//             },
//           ]
//         : [],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: seo?.ogTitle || seo?.metaTitle || blog.blogTitle,
//       description:
//         seo?.ogDes ||
//         seo?.metaDes ||
//         blog.blogDescription.replace(/(<([^>]+)>)/gi, "").slice(0, 160),
//       images: seo?.OgImageUrl ? [seo.OgImageUrl] : [],
//     },
//   };
// }

export async function generateMetadata({ params: rawParams }) {
  const params = await rawParams;
  const { slug } = params;

  // console.log("🧠 generateMetadata called with slug:", slug);

  const blog = await fetchBlog(slug);
  if (!blog) {
    // console.warn("⚠️ Blog not found for slug:", slug);
    return {
      title: "Blog Not Found",
      description: "Blog does not exist",
    };
  }

  // const seo = await fetchSeo(blog.blogTitle);
  const seo = await fetchSeo(slug);

  const metadata = {
    title: seo?.metaTitle || blog.blogTitle,
    description:
      seo?.metaDes ||
      blog.blogDescription.replace(/(<([^>]+)>)/gi, "").slice(0, 160),
    keywords: seo?.metaKeywords?.join(", "),
    alternates: {
      canonical:
        seo?.cannicalUrl ||
        `${process.env.NEXT_PUBLIC_FRONTEND_URL}/blog/${slug}`,
    },
    openGraph: {
      type: seo?.OgType || "article",
      title: seo?.ogTitle || seo?.metaTitle || blog.blogTitle,
      description:
        seo?.ogDes ||
        seo?.metaDes ||
        blog.blogDescription.replace(/(<([^>]+)>)/gi, "").slice(0, 160),
      images: seo?.OgImageUrl
        ? [
            {
              url: seo.OgImageUrl,
              width: 1200,
              height: 630,
              alt: blog.blogTitle,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: seo?.ogTitle || seo?.metaTitle || blog.blogTitle,
      description:
        seo?.ogDes ||
        seo?.metaDes ||
        blog.blogDescription.replace(/(<([^>]+)>)/gi, "").slice(0, 160),
      images: seo?.OgImageUrl ? [seo.OgImageUrl] : [],
    },
  };

  console.log("📝 Generated metadata:", metadata);
  return metadata;
}


// ✅ Page component with Head meta for SEO fallback
export default async function BlogDetails({ params: rawParams }) {
  const params = await rawParams;
  const { slug } = params;


    console.log("📄 Rendering BlogDetails for slug:", slug);

  const blog = await fetchBlog(slug);
  if (!blog) return <p>Blog not found</p>;

  const seo = await fetchSeo(blog.blogTitle);

  const metaTitle = seo?.metaTitle || blog.blogTitle;
  const metaDescription =
    seo?.metaDes ||
    blog.blogDescription.replace(/(<([^>]+)>)/gi, "").slice(0, 160);
  const metaKeywords = seo?.metaKeywords?.join(", ");
  const canonicalUrl =
    seo?.cannicalUrl || `${process.env.NEXT_PUBLIC_FRONTEND_URL}/blog/${slug}`;
  const ogImage =
    seo?.OgImageUrl ||
    `${process.env.NEXT_PUBLIC_API_URL}${blog.blogBanner || blog.blogImage}`;

  const breadcrumbs = [{ label: "Home", link: "/" }, { label: "Blogs" }];

  return (
    <div>
      {/* ✅ Fallback Head meta */}
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        {metaKeywords && <meta name="keywords" content={metaKeywords} />}
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content={seo?.OgType || "article"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      <HeaderOne />
      <BackToTop />
      {/* <Breadcrumb
        title={blog.blogTitle}
        breadcrumbs={breadcrumbs}
        backgroundImage={`${process.env.NEXT_PUBLIC_API_URL}${blog.blogBanner}`}
      >
      </Breadcrumb> */}

      <div
        className="position-relative d-flex flex-column align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${blog.blogBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
        }}
      >
        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.25), rgba(0,0,0,0.5))",
            backdropFilter: "blur(2px)",
          }}
        ></div>

        {/* Content */}
        <div className="position-relative text-center text-white">
          <h1 className="text-white p-5">{blog.blogTitle}</h1>

          {/* Breadcrumbs */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              {breadcrumbs.map((crumb, index) => (
                <li
                  key={index}
                  className={`breadcrumb-item ${
                    index === breadcrumbs.length - 1
                      ? "active text-white"
                      : "text-white"
                  }`}
                  {...(index === breadcrumbs.length - 1
                    ? { "aria-current": "page" }
                    : {})}
                >
                  {crumb.link ? (
                    <a
                      href={crumb.link}
                      className="text-white text-decoration-none"
                    >
                      {crumb.label}
                    </a>
                  ) : (
                    crumb.label
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>

      <div className="rts-blog-list-area rts-section-gap">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-8 col-md-12">
              <div className="blog-single-post-listing details mb--0">
                <div className="thumbnail">
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}${blog.blogImage}`}
                    alt={blog.blogTitle}
                  />
                </div>
                <div className="blog-listing-content">
                  <div className="user-info">
                    <div className="single">
                      <i className="far fa-user-circle" />
                      <span>by {blog.createdBy?.fullName || "Unknown"}</span>
                    </div>
                  </div>
                  <h3 className="title">{blog.blogTitle}</h3>
                  <div
                    className="disc"
                    dangerouslySetInnerHTML={{ __html: blog.blogDescription }}
                  />
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 pl--50 pl_md--0 pl-lg-controler pl_sm--0">
              <div className="rts-single-wized Categories service">
                <div className="wized-header">
                  <h5 className="title">Other Services</h5>
                </div>
                <div className="wized-body">
                  <ul className="single-categories">
                    <li>
                      <Link href={"/our-service"}>
                        All Services <i className="far fa-long-arrow-right" />
                      </Link>
                    </li>
                  </ul>
                  <ul className="single-categories">
                    <li>
                      <Link href={"/park-development"}>
                        Park Gym Installation{" "}
                        <i className="far fa-long-arrow-right" />
                      </Link>
                    </li>
                  </ul>
                  <ul className="single-categories">
                    <li>
                      <Link href={"/water-cooler-supplier-services"}>
                        Water Cooler Supplier Services{" "}
                        <i className="far fa-long-arrow-right" />
                      </Link>
                    </li>
                  </ul>
                  <ul className="single-categories">
                    <li>
                      <Link href={"/security-manpower-services"}>
                        Security & Manpower Services{" "}
                        <i className="far fa-long-arrow-right" />
                      </Link>
                    </li>
                  </ul>
                  <ul className="single-categories">
                    <li>
                      <Link href={"/ac-chiller-plants-services"}>
                        AC Chiller Plants Services{" "}
                        <i className="far fa-long-arrow-right" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rts-single-wized contact service">
                <div className="wized-header">
                  <Link href={"#"}>
                    <img
                      src="../assets/images/logo/logo.png"
                      alt="Pinnacle Logo"
                    />
                  </Link>
                </div>
                <div className="wized-body">
                  <h5 className="title">Need Help? We Are Here To Assist</h5>
                  <Link className="rts-btn btn-primary" href={"/contactus"}>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterOne />
    </div>
  );
}
