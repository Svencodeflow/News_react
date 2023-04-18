const NewsItem = (props) => {
    return (
        <section className="herbert_container">
            <h2>{props.title}</h2>
            <div className="herbert">
                <a href={props.url}><img src={props.image} alt=""></img></a>
                <article>
                    <p>{props.descripton}</p>
                </article>
            </div>
        </section>
    );
}

export default NewsItem;