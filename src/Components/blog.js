import "../Style/blog.css"
import js from '../images/js.jpeg'

const blog = () => {
    return (
        <div className="blog">
            <figure>
                <img id="blog_img" src={js} width="400px" alt="javascript " />
                <h3>How to learn Javascript in 2020</h3>
                <figcaption>intock, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the w</figcaption>
            </figure>
        </div>
    )
}

export default blog
