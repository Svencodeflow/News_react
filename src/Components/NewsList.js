import { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsList = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bf8b591b2c224b3c8df94f2a83cba678')
            .then(res => res.json())
            .then(json => {
                console.log(json.articles)
                setNews(json.articles)
            })
    }, [])


    return (
        <section className='grid_test'>
            {news.map((elt) => {
                return (
                    <NewsItem
                        title={elt.title}
                        image={elt.urlToImage}
                        descripton={elt.description}
                        url={elt.url}
                        key={elt.url}
                    />
                )
            })}
        </section>
    );
}

export default NewsList;