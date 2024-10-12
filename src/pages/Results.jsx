import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import exampleData from "../image/exampleData.png"

function Results(){
  
return (
    <>
    <div class="wrapper">
    <div class="results">
        <section class="results__nav">
            <div class="container">
                 <Header/>
            </div>
        </section>
        <section class="results__content">
            <div class="container">
                <div class="row row-cols-1 row-cols-md-2 justify-content-between ">
                    <div class="col results__col">
                        <h1 class="wow stage__title title-dark" data-wow-duration="1s" data-wow-delay="0.5s" >результаты
                            <span  class="stage__title-span"> прогнозирования
                            </span>
                        </h1>
                        <p class="wow stage__text mt-4" data-wow-duration="1s" data-wow-delay="0.75s"></p>
                        <p class="description__title-small pt-3">название файла: 
                            <span class="card-text"> example.xlsx                              
                            </span>
                        </p>
                    </div>
                    <div class="col results__col col-md-4 col-lg-6 results__actions text-start text-md-end te pt-3 pt-sm-5">
                         <a class="button button-transparent me-4 me-md-0 me-lg-4 p-3 " href="{% url 'add_to_profile' project.pk %}">сохранить в лк</a>
                         <a class="button button-transparent p-3 " href="/login" download="{{ project.pdf.name }}">скачать pdf</a>
                    </div>
                </div>
                <div class="row row-cols-1 row-cols-sm-2 mt-sm-3">
                    <div class="col results__col">
                        <div class="card results__card h-100">
                            <h2 class="card-title text-center">исходные данные</h2>
                            <div class="card-body">
                                <div class="results__table ">                               
                                     <table class="table">
                                          <thead>
                                            <tr>                                                
                                                <th scope="col">Дата</th>
                                                <th scope="col">Значения</th>
                                            </tr>
                                          </thead>
                                          <tbody>                                            
                                                <tr>
                                                 <td >2022-03</td>
                                                 <td>128.2</td>
                                                </tr>
                                                <tr>
                                                 <td >2022-04</td>
                                                 <td>132.7</td>
                                                </tr>
                                                <tr>
                                                 <td >2022-05</td>
                                                 <td>138.0</td>
                                                </tr>
                                                <tr>
                                                 <td >2022-06</td>
                                                 <td>144.5</td>
                                                </tr>
                                                <tr>
                                                 <td >2022-07</td>
                                                 <td>152.3</td>
                                                </tr>
                                                <tr>
                                                 <td >2022-08</td>
                                                 <td>156.6</td>
                                                </tr>
                                                <tr>
                                                 <td >2022-09</td>
                                                 <td>157.3</td>
                                                </tr>
                                                <tr>
                                                 <td >2022-10</td>
                                                 <td>154.3</td>
                                                </tr>
                                                <tr>
                                                 <td >2022-11</td>
                                                 <td>150.5</td>
                                                </tr>
                                                <tr>
                                                 <td >2022-12</td>
                                                 <td>150.5</td>
                                                </tr>
                                                <tr>
                                                 <td >2023-01</td>
                                                 <td>149.6</td>
                                                </tr>
                                                <tr>
                                                 <td >2023-02</td>
                                                 <td>149.8</td>
                                                </tr>
                                                <tr>
                                                 <td >2023-03</td>
                                                 <td>150.9</td>
                                                </tr>
                                                <tr>
                                                 <td >2023-04</td>
                                                 <td>153.2</td>
                                                </tr>
                                                <tr>
                                                 <td >2023-05</td>
                                                 <td>153.1</td>
                                                </tr>
                                                <tr>
                                                 <td >2023-06</td>
                                                 <td>150.7</td>
                                                </tr>
                                                <tr>
                                                 <td >2023-07</td>
                                                 <td>146.0</td>
                                                </tr>
                                                <tr>
                                                 <td >2023-08</td>
                                                 <td>141.2</td>
                                                </tr>
                                                <tr>
                                                 <td >2022-09</td>
                                                 <td>141.2</td>
                                                </tr>
                                          </tbody>
                                        </table>
                                </div>
                            </div>
    
                        </div>
                    </div>
                    <div class="col results__col ">
                        <div class="card results__card h-100">
                            <h2 class="card-title text-center">прогнозные значения</h2>
                            <div class="card-body">
                                <div class="results__table">
                                     <table class="table">
                                      <thead>
                                        <tr>
                                        <th scope="col">Дата</th>
                                        <th scope="col">Значения</th>
                                        </tr>
                                     
                                      </thead>
                                      <tbody>
                                            <tr>
                                            <td >2023-10</td>
                                            <td>143.74156031705897</td>
                                            </tr>
                                            <tr>
                                            <td >2023-11</td>
                                            <td>146.31365634575064</td>
                                            </tr>
                                            <tr>
                                            <td >2023-12</td>
                                            <td>145.7780852452604</td>
                                            </tr>
                                            <tr>
                                            <td >2024-01</td>
                                            <td>145.30218708881748</td>
                                            </tr>
                                            <tr>
                                            <td >2024-02</td>
                                            <td>144.87931316022338</td>
                                            </tr>
                                            <tr>
                                            <td >2024-03</td>
                                            <td>144.5035555384221</td>
                                            </tr>
                                            <tr>
                                            <td >2024-04</td>
                                            <td>144.16966455864198</td>
                                            </tr>
                                            <tr>
                                            <td >2024-05</td>
                                            <td>143.87297546995734</td>
                                            </tr>
                                            <tr>
                                            <td >2024-06</td>
                                            <td>143.60934326461148</td>
                                            </tr>
                                            <tr>
                                            <td >2024-07</td>
                                            <td>143.3750847686093</td>
                                            </tr>
                                            <tr>
                                            <td >2024-08</td>
                                            <td>143.1669271845341</td>
                                            </tr>
                                            <tr>
                                            <td >2024-09</td>
                                            <td>142.9819623676866</td>
                                            </tr>
                                      </tbody>
                                  </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 <div class="results__graph">
                     <div class="col results__col">
                        <img class="results__img" src={exampleData} />
                     </div>
                 </div>
            </div>
        </section>
    </div>
    </div>
    <Footer/>
    </>
)
}

export { Results }