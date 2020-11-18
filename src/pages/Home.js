import React from 'react';
import Banner from '../components/Banner'

export default function Home(){
    return(
        <>
        <Banner title='Clusters e Cloud Computing' message=''/>
        <section id="three" className="wrapper special">
                <div className="inner">
                    <header className="align-center">
                        <h2>Desenvolvedores</h2>
                        <p>Informações sobre os desenvolvedores do site</p>
                    </header>
                    <div className="flex flex-3">
                        <article>
                            <div className="image fit">
                                <img src={require('../images/imgJean.jpg')} alt="Pic 01" />
                            </div>
                            <header>
                                <h3>Jean Cláudio</h3>
                            </header>
                            <span><b>RA:</b> 1118046</span>
                            <br/>
                            <span><b>E-mail:</b>1118046@imed.edu.br</span>
                            <br/><br/>
                            <div>
                                <a href="https://www.linkedin.com/in/jc-nunes-31-08/">
                                    <img src={require('../images/icons/linkedin.png')} style={{width: '2em', height: '2em', margin: '0 1em 0 0'}} />
                                </a>
                                <a href="https://www.instagram.com/jean_nunes__/">
                                    <img src={require('../images/icons/instagram.png')} style={{width: '2em', height: '2em', margin: '0 1em 0 0'}} />
                                </a>
                                <a href="https://www.facebook.com/jeanclaudionunesdos.santos">
                                    <img src={require('../images/icons/facebook.png')} style={{width: '2em', height: '2em', margin: '0 1em 0 0'}} />
                                </a>
                                <a href="https://github.com/ArkbraveNunes">
                                    <img src={require('../images/icons/github.png')} style={{width: '2em', height: '2em', margin: '0 1em 0 0'}} />
                                </a>
                            </div>
                        </article>
                        <article>
                            <div className="image fit">
                                <img src={require('../images/imgRenato.jpg')} alt="Pic 02" />
                            </div>
                            <header>
                                <h3>Renato Papke</h3>
                            </header>
                            <span><b>RA:</b>1118673</span>
                            <br/>
                            <span><b>E-mail:</b>1118673@imed.edu.br</span>
                            <br/><br/>
                            <div>
                                <a href="https://www.linkedin.com/in/renatoaero/">
                                    <img src={require('../images/icons/linkedin.png')} style={{width: '2em', height: '2em', margin: '0 1em 0 0'}} />
                                </a>
                                <a href="https://www.instagram.com/renatoaero/">
                                    <img src={require('../images/icons/instagram.png')} style={{width: '2em', height: '2em', margin: '0 1em 0 0'}} />
                                </a>
                                <a href="https://www.facebook.com/renatoaero">
                                    <img src={require('../images/icons/facebook.png')} style={{width: '2em', height: '2em', margin: '0 1em 0 0'}} />
                                </a>
                                <a href="https://github.com/Renatoaero">
                                    <img src={require('../images/icons/github.png')} style={{width: '2em', height: '2em', margin: '0 1em 0 0'}} />
                                </a>
                            </div>
                        </article>
                        <article>
                            <div className="image fit">
                                <img src={require('../images/imgOscar.jpg')} alt="Pic 02" />
                            </div>
                            <header>
                                <h3>Oscar Gross</h3>
                            </header>
                            <span><b>RA:</b>1118783</span>
                            <br/>
                            <span><b>E-mail:</b>1118783@imed.edu.br</span>
                            <br/><br/>
                            <div>
                                <a href="#">
                                    <img src={require('../images/icons/linkedin.png')} style={{width: '2em', height: '2em', margin: '0 1em 0 0'}} />
                                </a>
                                <a href="https://www.instagram.com/oscar.gross/">
                                    <img src={require('../images/icons/instagram.png')} style={{width: '2em', height: '2em', margin: '0 1em 0 0'}} />
                                </a>
                                <a href="https://www.facebook.com/oscar.gross.5">
                                    <img src={require('../images/icons/facebook.png')} style={{width: '2em', height: '2em', margin: '0 1em 0 0'}} />
                                </a>
                                <a href="https://github.com/oscargross">
                                    <img src={require('../images/icons/github.png')} style={{width: '2em', height: '2em', margin: '0 1em 0 0'}} />
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}