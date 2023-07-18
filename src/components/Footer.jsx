import React from 'react'

export const Footer = () => {
  return (
    <>
        {/* <!-- footer --> */}
    <div className="footer mt-5 p-4">
        <div className="container-fluid pb-5">
            <div className="row justify-content-center">
                <div className="col-10 col-md-5">
                    <h6 className="text-uppercase">Contact US</h6>
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        <span className="pe-2"><i className="fa-solid fa-phone"></i></span>
                        <span><a href="tel:++1 (222) 345 47854">+1 (222) 345 47854</a></span>
                      </li>
                      <li className="mb-3">
                        <span className="pe-2"><i className="fa-solid fa-envelope"></i></span>
                        <span><a href="mail:pogooluwa12@gmail.com">pogooluwa12@gmail.com</a></span>
                      </li>
                    </ul>

                    <div className="mt-2">
                        <span className="pe-2"><i className="fa-solid fa-location-dot"></i></span>
                        <span> Mumbai, India.</span>
                    </div>
                </div>
                <div className="col-10 col-md-5">
                    <h6>Signup for discount and updates</h6>
                    <form action="">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control p-3" placeholder="Enter your phone number or email address" aria-label="Enter your phone number or email address" aria-describedby="button-addon2"/>
                            <button className="btn btn-primary foot p-3" type="button" id="button-addon2">Sign up</button>
                        </div>
                    </form>
                    <div className="help pt-2">
                        <a href="">About Us</a>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="footer2 border-top pt-3">
            <p>2023. Powered By Auracule &#128154;</p>
        </div>
    </div>
    {/* <!-- footer done --> */}
    </>
  )
}
