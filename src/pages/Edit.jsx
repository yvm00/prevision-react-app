import { Header } from "../components/Header"
import Userfront from "@userfront/core";

function Edit(){
    const userName = Userfront.user.data.accountName;
    const userEmail = Userfront.user.email;
    return(
        
    <div className="wrapper">
    <section className="profile edit">
        <div className="container">
            <Header/>
            <div className="row row-cols-1 row-cols-sm-2 profile__content justify-content-between">
                <div className="col col-sm-6 col-xl-4 ps-0 mt-0 mt-xl-5">
                    <p className="wow forecast-main__title-small mb-0 mt-sm-3 mt-xl-5" data-wow-duration="1s" data-wow-delay="0.25s" >личный кабинет</p>
                    <h1 className="wow stage__title mt-4 mt-lg-2 mt-xl-4 " data-wow-duration="1s" data-wow-delay="0.5s">
                        изменение данных
                    </h1>
                </div>
                <div className="col col-sm-6 p-0">
                    <div className="card profile__card edit__card text-center">
                        <div className="card-body profile__card-body align-content-around">
                        <form className="edit__form" method="POST" enctype="multipart/form-data">                          
                            <fieldset className="form-group ">                                                                  
                                    <p className="edit__input">
                                    <input placeholder={userName}/>
                                    </p>  
                                    <p>
                                    <input placeholder={userEmail}/>
                                    </p>                              
                            </fieldset>
                            <div className="form-group button button-light  pt-2 pb-2 ps-5 pe-5 mt-5 " >
                                <button id="btn" className="button-input" disabled type="submit">обновить</button>                              
                            </div>
                            <p>временно недоступно </p>
                        </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    </div>
    )
}

export { Edit }