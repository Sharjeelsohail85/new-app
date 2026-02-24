import { useEffect } from 'react'
import './App.css'

const categories = ['Salt', 'Travel & Tours', 'Electronics']

const slides = [
  {
    src: '/whatsnew-1.png',
    alt: 'Hajj package collage',
    title: 'Hajj Package',
  },
  {
    src: '/whatsnew-2.png',
    alt: 'Salt image',
    title: 'Salt',
  },
  {
    src: '/whatsnew-3.jpg',
    alt: 'Circuit board image',
    title: 'Technology',
  },
]

const products = [
  {
    name: 'Salt',
    price: '$10',
    image: '/whatsnew-2.png',
    delay: '0.2s',
  },
  {
    name: 'Travel & Tours',
    price: '$30',
    image: '/whatsnew-1.png',
    delay: '0.4s',
  },
  {
    name: 'Electronics',
    price: '20$',
    image: '/whatsnew-3.jpg',
    delay: '0.6s',
  },
]

function App() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.WOW) {
      new window.WOW().init()
    }

    if (typeof window !== 'undefined' && window.jQuery) {
      window.jQuery('#carousel-example-1z').carousel()
    }
  }, [])

  return (
    <>
      <header>
        <nav className="navbar navbar-toggleable-md navbar-dark">
          <div className="container">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav1"
              aria-controls="navbarNav1"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">
              <strong>Navbar</strong>
            </a>
            <div className="collapse navbar-collapse" id="navbarNav1">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item dropdown btn-group">
                  <a
                    className="nav-link dropdown-toggle"
                    id="dropdownMenu1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    href="#"
                  >
                    More info
                  </a>
                  <div className="dropdown-menu dropdown" aria-labelledby="dropdownMenu1">
                    <a className="dropdown-item" href="#">Contact</a>
                    <a className="dropdown-item" href="#">Billing adress</a>
                    <a className="dropdown-item" href="#">Discounts</a>
                  </div>
                </li>
              </ul>
              <form className="form-inline waves-effect waves-light">
                <input className="form-control" type="text" placeholder="Search" />
              </form>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.2s">
              <div className="widget-wrapper">
                <h4>Categories:</h4>
                <br />
                <div className="list-group">
                  {categories.map((category, index) => (
                    <a key={category} href="#" className={`list-group-item${index === 0 ? ' active' : ''}`}>
                      {category}
                    </a>
                  ))}
                </div>
              </div>

            </div>

            <div className="col-lg-8">
              <div className="row wow fadeIn" data-wow-delay="0.4s">
                <div className="col-lg-12">
                  <div className="divider-new">
                    <h2 className="h2-responsive">What&apos;s new?</h2>
                  </div>

                  <div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                      {slides.map((_, index) => (
                        <li
                          key={`indicator-${index + 1}`}
                          data-target="#carousel-example-1z"
                          data-slide-to={index}
                          className={index === 0 ? 'active' : ''}
                        ></li>
                      ))}
                    </ol>
                    <div className="carousel-inner" role="listbox">
                      {slides.map((slide, index) => (
                        <div key={slide.alt} className={`carousel-item${index === 0 ? ' active' : ''}`}>
                          <img src={slide.src} alt={slide.alt} />
                          <div className="carousel-caption">
                            <h4>{slide.title}</h4>
                            <br />
                          </div>
                        </div>
                      ))}
                    </div>
                    <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>

              <br />
              <hr className="extra-margins" />

              <div className="row">
                {products.map((product) => (
                  <div key={product.name} className="col-lg-4">
                    <div className="card wow fadeIn" data-wow-delay={product.delay}>
                      <div className="view overlay hm-white-slight">
                        <img src={product.image} className="img-fluid" alt={product.name} />
                        <a href="#">
                          <div className="mask"></div>
                        </a>
                      </div>
                      <div className="card-block">
                        <h4 className="card-title">{product.name}</h4>
                        <a href="#" className="btn btn-default">
                          Buy now for <strong>{product.price}</strong>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  )
}

export default App
