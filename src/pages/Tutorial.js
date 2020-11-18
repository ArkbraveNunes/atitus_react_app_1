import React from 'react';
import Banner from '../components/Banner'
import { Card } from 'react-bootstrap'

export default function Tutorial(){
    return(
        <>
        <Banner title='Cluster e Cloud Computing' message='Monte seu Próprio Cluster'/>
        <section id="three" className="wrapper special">
                <div className="inner align-center">
                    <header className="align-center">
                        <h2>Como Montar o seu próprio Cluster</h2>
                        <p>
                            Precisando de uma máquina capaz de realizar centenas de trilhões de cálculos
                            de ponto flutuante por segundo? Ou quer apenas se gabar para os amigos a respeito do
                            supercomputador montado no seu quarto? Fazer um cluster de computação de alta
                            performance, ou um supercomputador, é um desafio que qualquer entusiasta com um
                            fim de semana livre e algum dinheiro sobrando pode tentar realizar. Falando
                            tecnicamente, um supercomputador com multiprocessadores é uma rede de
                            computadores que trabalha em conjunto para resolver um problema. Este artigo
                            descreve brevemente cada passo do processo, concentrando-se em hardware e software.
                        </p>
                    </header>
                    <div className="flex flex-2">
                        <Card style={{ width: '40rem' }} className="box">
                            <Card.Body>
                                <Card.Title style= {{fontSize: '150%'}}>Passo 1</Card.Title>
                                <Card.Img variant="top" src={require('../images/imgTutorial/step1.jpg')} style={{width: '100%', height: '100%'}} />
                                <Card.Text style={{ 'text-align': 'justify' }}>
                                    Determine primeiro os componentes de hardware e recursos necessários. Você precisará de um head node, pelo menos 12 nós de rede 
                                    idênticos, um switch de Ethernet, uma unidade de distribuição de energia, e um rack. Determine a demanda de eletricidade, 
                                    resfriamento e espaço necessários. Decida também qual o endereço de IP desejado para suas redes privadas, como nomear os nós,
                                    quais pacotes de software deseja instalar e qual tecnologia será usada para realizar a computação paralela (mais a respeito disso mais tarde).
                                    Apesar do hardware ser caro, todos os programas listados no guia são gratuitos, e a maior parte deles é de código aberto. Se quiser 
                                    ver o quão rápido o seu supercomputador teoricamente seria, use esta ferramenta: http://hpl-calculator.sourceforge.net/
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '40rem' }} className="box">
                            <Card.Body>
                                <Card.Title style= {{fontSize: '150%'}}>Passo 2</Card.Title>
                                <Card.Img variant="top" src={require('../images/imgTutorial/step2.jpg')} style={{width: '100%', height: '100%'}} />
                                <Card.Text style={{ 'text-align': 'justify' }}>
                                    Crie os nós. Você precisará montar os nós
                                    ou adquirir servidores pré-montados.
                                    Escolha chassis de servidores que
                                    maximizem espaço, resfriamento e uso de
                                    energia.
                                    Você pode também utilizar vários servidores
                                    desatualizados – cujo custo total será maior do que
                                    a soma das peças, mas ainda assim você
                                    economizará bastante. Todos os processadores, adaptadores de rede e placas-mães
                                    devem ser idênticos para que o sistema funcione bem. Obviamente, não se esqueça de
                                    incluir a RAM e armazenamento em cada nó e pelo menos um drive ótico para o head
                                    node.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '40rem' }} className="box">
                            <Card.Body>
                                <Card.Title style= {{fontSize: '150%'}}>Passo 3</Card.Title>
                                <Card.Img variant="top" src={require('../images/imgTutorial/step3.jpg')} style={{width: '100%', height: '100%'}} />
                                <Card.Text style={{ 'text-align': 'justify' }}>
                                    Instale os servidores no rack. Comece a partir de
                                    baixo, para que a parte de cima dele não fique
                                    muito pesada. Você precisará da ajuda dos seus
                                    amigos para isso – os servidores densos podem ser
                                    muito pesados, e guiá-los pelos trilhos que os
                                    seguram é difícil.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '40rem' }} className="box">
                            <Card.Body>
                                <Card.Title style= {{fontSize: '150%'}}>Passo 4</Card.Title>
                                <Card.Img variant="top" src={require('../images/imgTutorial/step4.jpg')} style={{width: '100%', height: '100%'}} />
                                <Card.Text style={{ 'text-align': 'justify' }}>
                                    Instale o switch de Ethernet acima do chassi do
                                    servidor. Reserve esse momento para configurar
                                    o switch: habilite tamanhos de frame jumbo de
                                    9000 bytes, configure os endereços IP para o
                                    endereço estático determinado no primeiro
                                    passo, e desative protocolos de roteamento
                                    desnecessários, como o SMTP Snooping.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '40rem' }} className="box">
                            <Card.Body>
                                <Card.Title style= {{fontSize: '150%'}}>Passo 5</Card.Title>
                                <Card.Img variant="top" src={require('../images/imgTutorial/step5.jpg')} style={{width: '100%', height: '100%'}} />
                                <Card.Text style={{ 'text-align': 'justify' }}>
                                    Instale a unidade de distribuição de energia.
                                    Dependendo de quanta corrente os nós exigirão
                                    na carga máxima, você pode precisar de 220
                                    volts para computação de alta performance.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '40rem' }} className="box">
                            <Card.Body>
                                <Card.Title style= {{fontSize: '150%'}}>Passo 6</Card.Title>
                                <Card.Img variant="top" src={require('../images/imgTutorial/step6.jpg')} style={{width: '100%', height: '100%'}} />
                                <Card.Text style={{ 'text-align': 'justify' }}>
                                    Com tudo instalado, você pode começar o
                                    processo de configuração. O Linux é o SO ideal
                                    para clusters HPC – ele não só é o ambiente
                                    ideal para computação científica, como também
                                    é gratuito para instalação em centenas ou até
                                    milhares de nós. Imagine o quanto custaria para
                                    instalar o Windows em todos esses nós?
                                    Comece instalando a última versão das BIOS e
                                    firmware das placas-mães, que devem ser
                                    idênticas em todos os nós.
                                    Instale sua versão predileta do Linux em cada nó, com uma interface gráfica no head
                                    node. Opções populares incluem CentOS, OpenSuse, Scientific Linux, RedHat, e
                                    SLES.
                                    Você pode também usar a Rocks Cluster Distribution. Além de instalar todas as
                                    ferramentas necessárias para que o cluster funcione, o Rocks usa um excelente
                                    método para distribuir várias instâncias de si mesmo para os nós muito rapidamente
                                    usando um boot PXE e o procedimento ‘Kick Start’ do Red Hat.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '40rem' }} className="box">
                            <Card.Body>
                                <Card.Title style= {{fontSize: '150%'}}>Passo 7</Card.Title>
                                <Card.Img variant="top" src={require('../images/imgTutorial/step7.jpg')} style={{width: '100%', height: '100%'}} />
                                <Card.Text style={{ 'text-align': 'justify' }}>
                                    Instale a interface de transmissão de
                                    mensagens, gerenciamento de recursos e outras
                                    bibliotecas necessárias. Se não tiver instalado o
                                    Rocks no passo anterior, você precisará
                                    configurar manualmente o software necessário
                                    para habilitar os mecanismos de computação
                                    paralela.
                                    Primeiramente você precisará de um
                                    sistema portátil de gerenciamento em larga
                                    escala, como o Torque Resource Manager, que lhe possibilita dividir e distribuir tarefas
                                    para diversas máquinas.
                                    Pareie o Torque com o Maui Cluster Scheduler para completar a instalação.
                                    A seguir, você precisará instalar a interface de transmissão de mensagens,
                                    necessária para os processos individuais dos diferentes nós para compartilhas os
                                    mesmos dados. O OpenMP é fácil de usar.
                                    Não se esqueça das bibliotecas matemáticas multi threading para os programas em
                                    computação paralela. É realmente mais fácil se você instalar o Rocks.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '40rem' }} className="box">
                            <Card.Body>
                                <Card.Title style= {{fontSize: '150%'}}>Passo 8</Card.Title>
                                <Card.Img variant="top" src={require('../images/imgTutorial/step8.jpg')} style={{width: '100%', height: '100%'}} />
                                <Card.Text style={{ 'text-align': 'justify' }}>
                                    Conecte os nós dos computadores. O head
                                    node envia as tarefas para os nós do computador,
                                    que então precisa enviar o resultado de volta, bem
                                    como enviar mensagens uns para os outros.
                                    Quanto mais rápido melhor.
                                    Use uma rede ethernet privada para
                                    conectar todos os nós do cluster.
                                    O head node também pode agir como um
                                    NFS, PXE, DHCP, TFTP, e NTP server através da rede Ethernet.
                                    É preciso separar essa rede de redes públicas, que garante que os pacotes de transmissão
                                    não interferirão com outras redes na sua LAN.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '40rem' }} className="box">
                            <Card.Body>
                                <Card.Title style= {{fontSize: '150%'}}>Passo 9</Card.Title>
                                <Card.Img variant="top" src={require('../images/imgTutorial/step9.jpg')} style={{width: '100%', height: '100%'}} />
                                <Card.Text style={{ 'text-align': 'justify' }}>
                                    Teste o cluster. A última coisa que se deseja
                                    antes de liberar todo esse poder de computação
                                    para seus usuários é testar sua performance. O
                                    benchmark HPL (High Performance Lynpack) é
                                    uma escolha popular para medir a velocidade
                                    computacional do cluster. Você precisará compilálo a partir da fonte com todas as possíveis
                                    otimizações oferecidas pelo compilador da
                                    arquitetura escolhida.
                                    Obviamente, é preciso compilar a partir da fonte com todas as otimizações
                                    possíveis para sua plataforma. Por exemplo, ao usar CPUs AMD, compile com o Open
                                    64 com nível de otimização -0fast.
                                    Compare os resultados no TOP500.org para comparar seu cluster com os 500
                                    supercomputadores mais velozes do mundo!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    )
}