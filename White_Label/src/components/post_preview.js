import React from "react"
import { Link } from "gatsby"
import { node } from "prop-types"


const PostPreview = ({ hit }) => {
    const title = hit.title || hit.slug
    return (
     <div style={{backgroundColor: 'lightblue'}}>

         <h3>
            <Link style={{ boxShadow: `none` }} to={hit.slug}>
        <img src={hit.images[0].localFile.url} height="45" width="45"/>
                {title}
            </Link>
        </h3>
        <small>{hit.date}</small>
        <p dangerouslySetInnerHTML={{
            __html: hit.content || hit.excerpt,
        }}/>
    </div>
)
}

export default PostPreview
