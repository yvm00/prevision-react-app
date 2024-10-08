import { useEffect } from "react"
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import WOW from 'wowjs';
import { Parallax, useParallax } from "react-scroll-parallax";

import gr from "../image/gr.png"
import ppl from "../image/ppl.png"
import { Link } from "react-router-dom";


function Home() {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
      });

    const parallax = useParallax({
        speed: 10,
    });  
    

    return (
    <>
    <div className="wrapper">
   {/* Главная--> */}
        <section className="main">
            <div className="container">   
                <Header/>             
                <div className="d-flex stage ">
                    <Parallax speed={10}>
                           <div className="col-5 col-8 col-md-7 col-lg-6 stage__content align-items-center ">
                                <h1 className="wow stage__title" data-wow-duration="1s" data-wow-delay="0.25s">сервис для оценки
                                    <span className="stage__title-span"> будущей </span>
                                    стоимости продукта</h1>
                                <p className="wow stage__text" data-wow-duration="1s" data-wow-delay="0.5s">создание прогнозных моделей для ип и малого бизнеса</p>
                                <div className="wow stage__actions" data-wow-duration="1s" data-wow-delay="0.75s">
                                    <Link className="button" to="/forecast">начать</Link>

                                </div>
                            </div>
                    </Parallax>
                 
                </div>
            </div>
        </section>

    {/* Преимущества */}
            <section className="wow container advantages"  data-wow-duration="1s" data-wow-delay="0.1s" >
                <div className="row gy-5 row-cols-1 row-cols-sm-2 row-cols-md-3">
                    <div className="col">
                        <div className="card card-shadow h-100" >
                            <div className="card-body">
                                <div className="advantages__icons">
                                    <i className="bi bi-hand-index "></i>
                                </div>
                                <h4 className="card-title">простой интерфейс</h4>
                                <p className="card-text">для построения прогноза не требуется дополнительных навыков</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-shadow dark h-100" >
                            <div className="card-body">
                                <div className="advantages__icons">
                                    <i className="bi bi-cash-coin light"></i>
                                </div>
                                <h4 className="card-title light ">бесплатный сервис</h4>
                                <p className="card-text light">все функции сервиса доступны совершенно бесплатно</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className=" card card-shadow h-100">
                            <div className="card-body">
                                <div className="advantages__icons">
                                    <i className="bi bi-clock-history advantages__icons"></i>
                                </div>
                                <h4 className="card-title ">быстрый результат</h4>
                                <p className="card-text ">прогноз строится в несколько кликлов, а результат появляется в течение пары минут</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    {/* Легко и доступно */}
    <Parallax speed={10}>
        <section  className="about container pt-md-2 pt-lg-5">
            <div className="row row-cols-1 row-cols-sm-2">
                <div className="col col-md-6 el-paroller" align="center"
                    data-paroller-factor="0.03"
                    data-paroller-type="foreground"
                    data-paroller-direction="vertical">
                    <img src={gr} className="about__img pt-2 ps-md-0 ps-lg-4" alt="График"/>
                </div>
                <div className="col about__text">
                    <h2 className="description__title-small">о сервисе</h2>
                    <h3 className="description__title-main">легко & доступно</h3>
                    <p className="description__text pt-3 pt-lg-5"> прогнозирование стоимости товаров позволяет
                        предприятиям адаптироваться к изменяющимся
                        условиям рынка, планировать деятельность и
                        принимать стратегические решения
                    </p>
                    <p className="description__text pt-2 pt-lg-3"> для использования сервиса достаточно:</p>
                    <ul className="about__list">
                        <li>
                            <i className="bi bi-check-circle about__icon"></i>
                            <span className="description__text ps-1">
                                    загрузить исторические данные
                            </span>
                        </li>
                        <li>
                            <i className="bi bi-check-circle about__icon"></i>
                            <span className="description__text ps-1">
                                    нажать "построить прогноз"
                            </span>
                        </li>
                        <li>
                            <i className="bi bi-check-circle about__icon" ></i>
                            <span className="description__text ps-1" >
                                    сохранить результат
                            </span>
                        </li>
                    </ul>
                    <div className="about__actions pt-3 pt-lg-5">
                        <Link className="button button-light" to="/forecast" role="button" >узнать больше</Link>
                    </div>
                </div>
            </div>
        </section>
    </Parallax>
       

    {/* Возможности  */}
        <section className="wow features container" data-wow-duration="1s" data-wow-delay="0.2s">
            <div className=" features__text text-center" >
                <h2 className="description__title-small">возможности</h2>
                <h3 className="description__title-main">что мы предлагаем</h3>
            </div>
            <div className="row gy-5 row-cols-1 row-cols-sm-2 row-cols-md-3">
                <div className="col">
                        <div className="card card-shadow h-100"  >
                            <div className="card-body">
                                    <div className="circle text-center ">
                                    <i className="bi bi-graph-up-arrow features__icons"></i>

                                </div>

                                <h4 className="card-title pt-4">составление прогнозов</h4>
                                <p className="card-text">загрузив исторические данные на сайт, вы можете построить прогноз стоимости продукта</p>
                            </div>
                        </div>
                </div>
                <div className="col">
                        <div className="card card-shadow h-100"  >
                            <div className="card-body">
                                <div className="circle text-center">
                                    <i className="bi bi-database-check features__icons"></i>
                                </div>
                                <h4 className="card-title">обработка исторических данных</h4>
                                <p className="card-text"> перед созданием прогноза происходит предобработка исторических данных</p>
                            </div>
                        </div>
                </div>
                <div className="col">
                        <div className="card card-shadow h-100"  >
                            <div className="card-body">
                                <div className="circle text-center">
                                    <i className="bi bi-table features__icons"></i>
                                </div>
                                <h4 className="card-title">создание таблиц</h4>
                                <p className="card-text">после завершения прогнозирования данные визуализируются в виде таблицы</p>
                            </div>
                        </div>
                </div>
                <div className="col">
                        <div className="card card-shadow h-100"  >
                            <div className="card-body">
                                <div className="circle text-center">
                                    <i className="bi bi-bar-chart features__icons"></i>
                                </div>
                                <h4 className="card-title">построение графиков</h4>
                                <p className="card-text">помимо табличного вида данные предоставляются также в качестве графиков</p>
                            </div>
                        </div>
                </div>
                <div className="col">
                        <div className="card card-shadow h-100"  >
                            <div className="card-body">
                                <div className="circle text-center">
                                    <i className="bi bi-cloud-download features__icons"></i>
                                </div>
                                <h4 className="card-title">сохранение данных в различных форматах</h4>
                                <p className="card-text">созданные таблицы и графики доступны для скачивания и сохранения в лк</p>
                            </div>
                        </div>
                </div>
                <div className="col">
                        <div className="card card-shadow h-100"  >
                            <div className="card-body">
                                <div className="circle text-center">
                                    <i className="bi bi-card-checklist features__icons"></i>
                                </div>
                                <h4 className="card-title">просмотр ранее созданных прогнозов</h4>
                                <p className="card-text">при регистрации на сайте у вас есть возможность скачивания ранее созданных прогнозов</p>
                            </div>
                        </div>
                </div>
            </div>

        </section>

     {/* О нас */}
        <section ref={parallax.ref} className="contacts container">
            <div className="row row-cols-1 row-cols-sm-2">
                <div className="col contacts__text">
                    <h2 className="description__title-small">о нас</h2>
                    <h3 className="description__title-main">универсальный подход</h3>
                    <p className="description__text pt-md-4 pt-lg-5">
                        мы предлагаем быстрое решение с миниальными
                        финаносовыми затратами для получения качественных прогнозных
                        результатов, основанных на современных методах машинного обучения.
                    </p>
                    <p className="description__text pt-md-2 pt-lg-3">
                        при возникновении вопросов или пожеланий вы всегда можете
                        связаться с нами по электронной почте или позвонив по телефону
                    </p>
                    <p className="description__text pt-md-2 pt-lg-3">
                        контакты для связи:
                    </p>
                    <ul>
                        <li>
                            <i className="bi bi-telephone contacts__icon"></i>
                            <a href="tel:+7(3822)-60-61-43" className="description__text ps-2">+7(3822)-60-61-43</a>
                        </li>
                        <li>
                            <i className="bi bi-envelope-at contacts__icon"></i>
                            <a href="mailto:PREVISION@MAIL.RU" className="description__text ps-2">PREVISION@MAIL.RU</a>

                        </li>
                    </ul>
                </div>
                <div className="col p-1 el-paroller"
                    data-paroller-factor="0.03"
                    data-paroller-factor-sm="0.03"
                    data-paroller-factor-xs="-0.02"
                    data-paroller-type="foreground"
                    data-paroller-direction="vertical">

                    <img src={ppl} className="contacts__img " alt="люди"/>
                </div>
            </div>
        </section>        
    </div>
    <Footer/>
    </>
    )
}
export { Home };