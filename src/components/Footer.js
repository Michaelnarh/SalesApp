import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='footer-area mt-5 bg-dark p-5 '>
        <div className='container text-white'>
          <div className='row'>
            <div className='col-lg-3  col-md-6 col-sm-6'>
              <div className='single-footer-widget'>
                <h6>About Us</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className='col-lg-4  col-md-6 col-sm-6'>
              <div className='single-footer-widget'>
                <h6>Newsletter</h6>
                <p>Stay update with our latest</p>
                <div className='' id='mc_embed_signup'>
                  <form
                    target='_blank'
                    novalidate='true'
                    action='https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01'
                    method='get'
                    className='form-inline'
                  >
                    <div className='d-flex flex-row'>
                      <button className='click-btn btn btn-default'>
                        <i className='fa fa-long-arrow-right' />
                      </button>
                    </div>
                    <div className='info' />
                  </form>
                </div>
              </div>
            </div>
            <div className='col-lg-3  col-md-6 col-sm-6'>
              <div className='single-footer-widget mail-chimp'>
                <h6 className='mb-20'>Instragram Feed</h6>
                <ul className='instafeed d-flex flex-wrap'>
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                </ul>
              </div>
            </div>
            <div className='col-lg-2 col-md-6 col-sm-6'>
              <div className='single-footer-widget'>
                <h6>Follow Us</h6>
                <p>Let us be social</p>
                <div className='footer-social d-flex align-items-center justify-content-between'>
                  <a href='#'>
                    <i className='fa fa-facebook fa-2x' />
                  </a>
                  <a href='#'>
                    <i className='fa fa-twitter fa-2x fa' />
                  </a>
                  <a href='#'>
                    <i className='fa fa-instagram fa-2x' />
                  </a>
                  <a href='#'>
                    <i className='fa fa-linkedin fa-2x fa' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ul className='text-center text-white'>
            &copy; 2019 Made with Love by <b>MTN-Linkok</b>{' '}
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer
