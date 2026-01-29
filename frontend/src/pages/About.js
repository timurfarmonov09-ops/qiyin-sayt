import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1 className="section-title fade-in">Bizning hikoyamiz</h1>
        </div>
      </section>

      <section className="about-content section">
        <div className="container">
          <div className="story-section slide-in">
            <div className="story-text">
              <h2>Qanday boshlanganmiz</h2>
              <p>
                2015-yilda, kichkina oshxonada boshlanган bizning sayohatimiz bugun minglab 
                mijozlarning sevimli restoraniga aylandi. Biz oddiy bir orzudan boshladik - 
                har bir oilaga sifatli, mazali va samimiy taomlar taqdim etish.
              </p>
              <p>
                Dastlabki kunlarda faqat 5 kishilik jamoamiz bor edi. Lekin bizning 
                ishtiyoqimiz, mehnatimiz va mijozlarimizga bo'lgan muhabbatimiz tufayli 
                tez orada shahar bo'ylab mashhur bo'ldik.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder"><i className="fas fa-store"></i></div>
            </div>
          </div>

          <div className="story-section reverse slide-in">
            <div className="story-image">
              <div className="image-placeholder"><i className="fas fa-hat-chef"></i></div>
            </div>
            <div className="story-text">
              <h2>Bizning maqsadimiz</h2>
              <p>
                Biz shunchaki ovqat tayyorlamaymiz - biz xotiralar yaratamiz. Har bir 
                taom, har bir lazzat, har bir xizmat orqali mijozlarimizning hayotiga 
                biroz baxt qo'shishga intilamiz.
              </p>
              <p>
                Bizning maqsadimiz oddiy: eng sifatli mahsulotlar, eng yaxshi retseptlar 
                va eng samimiy xizmat orqali har bir mijozni oilamizning bir qismi 
                his qilishlariga erishish.
              </p>
            </div>
          </div>

          <div className="values-section">
            <h2 className="section-title">Bizning qadriyatlarimiz</h2>
            <div className="values-grid">
              <div className="value-card scale-in">
                <div className="value-icon"><i className="fas fa-gem"></i></div>
                <h3>Sifat</h3>
                <p>Har doim eng yuqori sifatli mahsulotlar va xizmatlarni taqdim etamiz</p>
              </div>
              <div className="value-card scale-in">
                <div className="value-icon"><i className="fas fa-heart"></i></div>
                <h3>Samimiylik</h3>
                <p>Har bir mijozga oilaviy muhitda xizmat ko'rsatamiz</p>
              </div>
              <div className="value-card scale-in">
                <div className="value-icon"><i className="fas fa-lightbulb"></i></div>
                <h3>Innovatsiya</h3>
                <p>Doimo yangi ta'mlar va retseptlar ustida ishlaymiz</p>
              </div>
              <div className="value-card scale-in">
                <div className="value-icon"><i className="fas fa-handshake"></i></div>
                <h3>Ishonch</h3>
                <p>Mijozlarimiz bilan uzoq muddatli munosabatlar quramiz</p>
              </div>
            </div>
          </div>

          <div className="team-section">
            <h2 className="section-title">Bizning jamoa</h2>
            <p className="team-description">
              Bugun bizda 30 dan ortiq professional xodim ishlaydi. Har biri o'z sohasida 
              mutaxassis va mijozlarimizga eng yaxshi xizmatni ko'rsatishga bag'ishlangan. 
              Oshpazlarimiz, ofitsiantlarimiz, menejerlarimiz - barchamiz bir maqsad uchun 
              ishlaymiz: sizning tabasumingiz!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
