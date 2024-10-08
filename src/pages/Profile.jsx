import { Link } from "react-router-dom";
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import Userfront from "@userfront/core";

Userfront.init("wbm5g49b");

function Profile() { 
    const userName = Userfront.user.data.accountName;

    return(
    <>     
    <div className="wrapper">
    <section className="profile">
        <div className="container">
            <Header/>
            <div className="row row-cols-1 row-cols-sm-2 profile__content justify-content-between">
                <div className="col col-sm-6 col-xl-5 ps-0 mt-0 mt-xl-5">
                    <p className="wow forecast-main__title-small mb-0 mt-sm-3 mt-xl-5" data-wow-duration="1s" data-wow-delay="0.25s" >личный кабинет</p>
                    <h1 className="wow stage__title mt-4 mt-lg-2 mt-xl-4 " data-wow-duration="1s" data-wow-delay="0.5s">добрый день, 
                    <span> {userName} !
                    </span>
                    </h1>
                </div>
                <div className="col col-sm-6 p-0">
                    <div className="card profile__card">
                        <div className="card-body profile__card-body">
                            <div className="profile__table">
                                <table className="table">
                                <thead >
                                    <tr >
                                    <th scope="col">Прогноз</th>
                                    <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody >                               
                                    <tr>
                                    <td ></td>
                                    <td>
                                        <Link className="button-link dark-text text-lowercase" href="#" >Cкачать</Link>
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="profile__actions text-end">
                        <Link className="button-link dark-text" to="/edit">изменить профиль</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    <Footer/>
    </>
    )

}

export { Profile }