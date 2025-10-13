"use client"
import React from 'react'

import Link from 'next/link';

const BlogGridMain = (props) => {
    const { Slug, blogImage, blogTitle } = props;
    return (
        <>
            <div className="blog-header">
                <Link className="thumbnail" href={`/blogs/${Slug}`}>
                    <img
                        src={`${process.env.NEXT_PUBLIC_API_URL}${blogImage}`}
                        alt="Business_Blog"
                    />
                </Link>
            </div>
            <div className="blog-body">
                <Link href={`/blogs/${Slug}`}>
                    <h5 className="title">
                        {blogTitle ? blogTitle : 'How to growing your business'}
                    </h5>
                </Link>
            </div>
        </>

    )
}

export default BlogGridMain