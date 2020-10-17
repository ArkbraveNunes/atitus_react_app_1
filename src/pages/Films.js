import React, { useState, useLayoutEffect } from 'react'
import Banner from '../components/Banner'
import StarWarsService from '../services/films-service'
import { Card } from 'react-bootstrap'

const starWarsService = new StarWarsService();

export default function Films(){
    const [filmsList, setterFilms] = useState([])

    useLayoutEffect(() => {
        getFilms()
    }, [])

    const getFilms = async () =>  {
        const {results} = await starWarsService.getFilms();
        setterFilms(results)
    }
    return(
        <>
        <Banner title='Star Wars Page for Fans' message='A web page for fans of Star Wars'/>
        <section id="three" className="wrapper special">
                <div className="inner align-center">
                    <header className="align-center">
                        <h2>Movies Page</h2>
                        <p>See all Star Wars movies</p>
                    </header>
                    <div className="flex flex-2">
                        {
                            filmsList.map((item) =>
                                <Card style={{ width: '22rem' }} className="box">
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Director: {item.director}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Producer: {item.producer}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Episode: {item.episode_id}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Release Date: {item.release_date}</Card.Subtitle>
                                        <Card.Text>{item.opening_crawl}</Card.Text>
                                    </Card.Body>
                                </Card>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

// "director": "George Lucas",
// "producer": "Gary Kurtz, Rick McCallum",
// "release_date": "1977-05-25",