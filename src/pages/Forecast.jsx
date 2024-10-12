import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useEffect } from "react"
import { useParallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";
import WOW from 'wowjs';

function Forecast() {


    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
      });

    const parallaxF = useParallax({
        translateY: [-10, 10],
    });

    // const fileHandler = (event) => {
    //     let fileObj = event.target.files[0];
    //     ExcelRenderer(fileObj, (err, resp) => {
    //       if(err){
    //         console.log(err);            
    //       }
    //       else{
    //         setCols(resp.cols),
    //         setRows(resp.rows)
    //       }
    //     });               
    
    // }

    return  (
        <>
        <div className="wrapper">
        {/* Главная  */}
            <section className="forecast-main">
                <div className="container">
                    <Header/>
                    <div  className="d-flex forecast-main__content ">
                        <div ref={parallaxF.ref} className="col-5 col-8 col-md-5 stage__content align-items-center ">
                            <p className="wow forecast-main__title-small" data-wow-duration="1s" data-wow-delay="0.25s" >быстро и просто</p>
                            <h1 className="wow stage__title" data-wow-duration="1s" data-wow-delay="0.5s">создай
                            <span className="stage__title-span"> свой </span>
                            прогноз</h1>
                            <p className="wow stage__text mt-4" data-wow-duration="1s" data-wow-delay="0.75s">расчитай будующую стоимость своего товара в несколько кликов</p>
                    </div>
                </div>
            </div>
            </section>
        {/* Шаги */}
            <section ref={parallaxF.ref} className=" wow steps " data-wow-duration="1s" data-wow-delay="0.2s">
                <div className=" steps__text text-center" >
                    <h2 className="description__title-small">о процессе</h2>
                    <h3 className="description__title-main">как это работает</h3>
                </div>
                <div className="row steps__content row-cols-1 row-cols-sm-2 row-cols-md-3">
                    <div className="col">
                            <div className="steps__card card h-100 text-center">
                                <div className="card-body steps__card-body">
                                        <div className="circle-out text-center ">
                                            <div className="steps__circle">
                                                <p className="description__title-main circle__text ">1</p>
                                            </div>
                                        </div>
                                    <h4 className="card-title pt-3 pt-sm-5">загрузите данные</h4>
                                    <p className="card-text">данные о зависимости текущей цены продукта от времени
                                                        загружаются на сайт в формате xlxs(excel)
                                    </p>
                                </div>
                            </div>
                    </div>
                    <div className="col">
                            <div className="steps__card card h-100 text-center"  >
                                <div className="card-body steps__card-body ps-0 pe-0">
                                    <div className="circle-out text-center ">
                                            <div className="steps__circle">
                                                <p className="description__title-main circle__text ">2</p>
                                            </div>
                                        </div>
                                    <h4 className="card-title pt-3 pt-sm-5">немного подождите </h4>
                                    <p className="card-text"> прогнозирование выполнятеся с использованием
                                                            технологии arima на период 12 месяцев
                                    </p>
                                </div>
                            </div>
                    </div>
                    <div className="col">
                            <div className="steps__card card h-100 text-center">
                                <div className="card-body">
                                    <div className="circle-out text-center ">
                                            <div className="steps__circle">
                                                <p className="description__title-main circle__text ">3</p>
                                            </div>
                                    </div>
                                    <h4 className="card-title pt-3 pt-sm-5">получите результат</h4>
                                    <p className="card-text">прогноз предоставляется в виде таблицы и графика,
                                                        которые вы можете сохранить в личный кабинет
                                                        у нас на сайте и скачать себе на устройство
                                    </p>
                                </div>
                            </div>
                    </div>


                </div>
            </section>
        {/* Загрузка */}
            <section className="load">
                <div className="container">
                    <div className="load__content text-center">
                        <form method="post" id='file-form' className="load__actions" enctype="multipart/form-data">                
                            <div className="text-center">
                                <input className="form-control load__input" type="file" accept=".xlsx" id="file" name="file"/>
                            </div>
                            <div className="button button-light  mt-5">
                                <button id="btn" className="button-input" disabled type="submit">построить прогноз</button>
                            </div>
                        </form>
                        <div className="pt-4">
                        <Link className="button-link dark-text"  to="/results">пример готового прогноза</Link>
                        </div>
                       
                    </div>
                </div>
            
            </section>            
        </div>
        <Footer/>
        </>

    )

}

export { Forecast };