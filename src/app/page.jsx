"use client"
import { useEffect, useState } from "react";
import Get from "@/Requisicoes/get.js"
import Botao from "@/componentes/Botao/botao";
import "@/app/style.css"
import Provider from "@/context/Provider";
import AOS from 'aos';
import "../../node_modules/aos/dist/aos.css"


export default function Home() {
  useEffect(()=>{
    AOS.init({
      duration: 1500,
    });
  },[])

  return (
    <Provider>
      <section className="sessaoOne">
        <div data-aos="fade-down" className="flexBoxOne">
          <h1  >Explore o universo da tecnologia com inovações incríveis e dispositivos de última geração. Descubra produtos que elevam sua experiência digital e simplificam seu dia a dia. Conecte-se ao futuro hoje mesmo!</h1>
          <Botao text = "Saiba Mais" style="btn btn-outline-dark" rota="/pages/products" />
        </div>
      </section>
      <section className="sessaoTwo">
        <div data-aos="fade-down" className="flexBoxTwo">
          <h1>iPad Pro</h1>
          <h2>O produto Apple mais fino até hoje. E mais poderoso do que nunca. Incrivelmente portátil em um design elegante. Ultra Retina XDR, a tela mais avançada do mundo. Desempenho absurdo e gráficos impressionantes com o chip M4 da Apple. E bateria para o dia todo.</h2>
          <Botao style="btn btn-light" text = "Saiba Mais" rota="/pages/products" />
        </div>
        <div className="flexBoxThree">
              <img className="imagemSessaoTwo" src="https://i.ibb.co/KK49jcz/ipadpro11-digitalmat-gallery-1-202111-GEO-BR-removebg-preview.png" alt="" />
        </div>
      </section>
      <section className="sessaoThree">
        <div className="flexBoxFor">
              <div data-aos="fade-right" className="flexTituloSessaoThree">
                <h1>Veja o iPad  em  realidade  aumentada.</h1>
                <h2>Abra esta página no seu iPhone ou iPad usando o Safari.</h2>
                <Botao text = "Saiba Mais" style="btn btn-outline-dark" rota="/pages/products"/>
              </div>
                <div>
                  <img src="https://www.apple.com/br/ipad-10.9/images/overview/ar/ar_ipad_silver__gh7qtof6d5ay_large_2x.jpg" alt="" />
                </div>
          </div>
      </section>
    </Provider>
  );
}
