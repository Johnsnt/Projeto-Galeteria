import React from 'react'
import Header from '../../componentes/Topo'
import Rodape from '../../componentes/Rodape'
import './style.css'
const Sabores = () => (
    <section>
        <Header />

        <main>
            <section className='banner-pagina'>
                <h1>NOSSOS SABORES</h1>
            </section>

            <section className='secao-sabores-geral'>
                <h2>SABORES DE SORVETE</h2>
                <div className='sabores-container limitar-secao'>
                <div className='sabores-card'>
                    <img src="assets/sabor-oreo.png" alt="oreo" />
                    <h3>Sorvete de Oreo</h3>
                    <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.
                    </p>
                </div>
                <div className='sabores-card'>
                    <img src="assets/sabor-pistache.png" alt="pistache" />
                    <h3>Sorvete Pistache</h3>
                    <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                </div>
                <div className='sabores-card'>
                    <img src="assets/sabor-cookies-avela.png" alt="" />
                    <h3>Sorvete Cookies & Avelã</h3>
                    <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                </div>
                <div className='sabores-card'>
                    <img src="assets/sorbet-kiwi.png" alt="" />
                    <h3>Sorvete de Kiwi</h3>
                    <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                </div>
                <div className='sabores-card'>
                    <img src="assets/sorbet-morango.png" alt="" />
                    <h3>Sorvete de Morango</h3>
                    <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                </div>
                <div className='sabores-card'>
                    <img src="assets/sorbet-limao.png" alt="" />
                    <h3>Sorvete de Limão Siciliano</h3>
                    <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                </div>
                </div>
            </section>
        </main>

        <Rodape />
    </section>
);

export default Sabores;