import React from 'react'
import Banner from '../components/Banner'
import { Card } from 'react-bootstrap'

export default function FutureCloud(){
    return(
        <>
        <Banner title='Clusters e Cloud Computing' message='Futuro da Computação em nuvem e da computação em Clusters'/>
        <section id="three" className="wrapper special">
                <div className="inner align-center">
                    <header className="align-center">
                        <h2>Qual o futuro da computação nas nuvens e da computação em Clusters?</h2>
                        <p>
                            Há mais de uma década é sabido que o futuro da computação estava nas nuvens.
                            Este futuro já chegou e bem mais rapidamente do que se esperava: o mercado global de
                            serviços na nuvem, estimado em US$ 150 bilhões, cresce cerca de 25% ao ano, segundo
                            empresas de pesquisas. No entanto, isso não significa que ir para a nuvem – fazer a
                            migração de dados e tarefas, de computadores locais para servidores terceirizados –
                            seja um processo simples.
                            Custo e versatilidade são dois grandes fatores que atraem as companhias sobre
                            a decisão de levar seus programas ou seus dados para uma nuvem gerenciada por uma
                            empresa especializada. No modelo de armazenamento local, a empresa precisa fazer
                            um investimento prévio em equipamentos, tecnologia e pessoal. A computação se torna
                            uma utilidade, como a água ou a luz. Assim, em vez de alugar uma estrutura, paga-se
                            pela quantidade de espaço utilizada na rede de computadores que constitui a nuvem –
                            e a empresa pode expandir ou contrair suas operações na hora que quiser.
                            Esses benefícios são imbatíveis. Mas, na prática, podem retardar ou paralisar a
                            mudança. Por exemplo, como combinar os sistemas desenvolvidos internamente com
                            os programas oferecidos no mercado? Qual a urgência em fazer a troca, se o sistema
                            atual está funcionando? Qual nuvem escolher? O que passar para a nuvem e o que
                            manter em servidores da própria empresa?
                            Primeiro é preciso ter em mente que há vários tipos de nuvem. Também há
                            outros tantos tipos de fornecedores, cada um com sua força, além de inúmeros tipos de
                            configuração de trabalho – as chamadas arquiteturas de informação, que variam de
                            acordo com as necessidades e as condições específicas de cada empresa.
                        </p>
                    </header>
                    <div className="flex flex-2">
                        <Card className="box">
                            <Card.Body>
                                <iframe width="1280" height="720" src="https://www.youtube.com/embed/_A35iscimSw" 
                                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    )
}