import React from 'react';
import Banner from '../components/Banner'
export default function Home(){
    return(
        <>
        <Banner title='Star Wars Page for Fans' message='A web page for fans of Star Wars'/>
        <section id="three" className="wrapper special">
                <div className="inner">
                    <header className="align-center">
                        <h2>Desenvolvedores</h2>
                        <p>Informações sobre os desenvolvedores do website</p>
                    </header>
                    <div className="flex flex-2">
                        <article>
                            <div className="image fit">
                                <img src={require('../images/imgJean.jpg')} alt="Pic 01" />
                            </div>
                            <header>
                                <h3>Jean Cláudio Nunes dos Santos</h3>
                            </header>
                            <span><b>RA:</b> 1118046</span>
                            <br/>
                            <span><b>E-mail:</b> jcnunessantosnunes@outlook.com</span>
                            <br/><br/>
                        </article>
                        <article>
                            <div className="image fit">
                                <img src={require('../images/imgRenato.jpg')} alt="Pic 03" />
                            </div>
                            <header>
                                <h3>Renato Papke</h3>
                            </header>
                            <span><b>RA:</b> RA DO VEIO É AQUI</span>
                            <br/>
                            <span><b>E-mail:</b> veioidoso@gmail.com</span>
                            <br/><br/>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}