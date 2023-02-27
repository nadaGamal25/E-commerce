import './topCat.css';
import glasses from '../../assets/glasses.webp'
import phone from '../../assets/iphone.avif'
import care from '../../assets/care.avif'

export default function TopCat() {
    
  return (
    <>
    <section className="topCat background">
        <div className="container">
            <div className="heading d_flex">
                <div className="heading-left d-flex align-items-center">
                <i className="fa-solid fa-border-all"></i>
                <h2>Top Categories</h2>
                </div>
                <div className="heading-right">
                    <span>View all</span>
                    <i className="fa-solid fa-caret-right"></i>
                </div>
            </div>

            <div className="row g-3">
                    <div className="col-md-4">
                        <div className="box product">
                            <div className="nametop">
                                <span className="tleft">Glasses</span>
                                <span className="tright">3K orders this week</span>
                            </div>
                            <div className="img">
                                <img src={glasses} alt="top product" />
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="box product">
                            <div className="nametop d_flex">
                                <span className="tleft">Iphone7</span>
                                <span className="tright">5K orders this week</span>
                            </div>
                            <div className="img">
                                <img src={phone} alt="top product" />
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="box product">
                            <div className="nametop d_flex">
                                <span className="tleft">Sunscreen</span>
                                <span className="tright">4K orders this week</span>
                            </div>
                            <div className="img">
                                <img src={care} alt="top product" />
                            </div>
                        </div>
                        </div>
                    
            </div>
        </div>
    </section>
    </>
  )
}
