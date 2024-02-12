import React from 'react'
import Header from '../../componentes/Topo'
import Rodape from '../../componentes/Rodape'
import './style.css';

const Home = () => (
    
    <div>
        <Header />    
        <main>
            <section className='secao-banner'>
                <div className='banner'>
                    <h1>SORVETE ARTESANAL</h1>
                </div>
            </section>
            
            {/* conteúdo */}
            <section className='secao-sabores'>
                <img src="assets/banner-sabores.jpg" alt="sabores_Banner_img" />
                <div className='info-sabores'>
                    <h2>Nossos produtos</h2>
                    <span>Novos e deliciosos!</span>
                    <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
                </div>
            </section>
            {/* eventos */}
            <section className='secao-sabores-eventos'>
                <div className='info-sabores-eventos'>
                    <h2>NOSSOS EVENTOS</h2>
                    <span>Delicias com sorvete!</span>
                    <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
                </div>
                <img src="assets/eventos-image.jpg" alt="event_img" />
            </section>

            <section className='secao-sabores-sobrenos'>
                <img src="assets/sobre-image.jpg" alt="sobre_img" />
                <div className='info-sabores-sobrenos'>
                    <h2>SOBRE NÓS</h2>
                    <span>Alegria em cada casquinha!</span>
                    <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
                </div>
            </section>
        </main>
        <Rodape />
    </div>
);


export default Home;