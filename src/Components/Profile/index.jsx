const Profile = () => {
  return (
    <div className="profile-page">
          <div className="wrapper">
            <div className="page-header page-header-small" filter-color="green">
              <div className="page-header-image" data-parallax="true" style={{ backgroundImage: 'url("images/cc-bg-1.jpg")' }} />
              <div className="container">
                <div className="content-center">
                  <div className="cc-profile-image"><a href="#"><img src="/public/images/kylie.png" alt="Image" /></a></div>
                  <div className="h2 title">Kylie Makarages</div>
                  <p className="category text-white">Web Developer and Beginner Graphic Designer</p><a className="btn btn-primary smooth-scroll mr-2" href="#contact" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Hire Me</a><a className="btn btn-primary" href="#" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Download CV</a>
                </div>
              </div>
              <div className="section">
                <div className="container">
                  <div className="button-container"><a className="btn btn-default btn-round btn-lg btn-icon" href="#" rel="tooltip" title="Follow me on Facebook"><i className="fa fa-facebook" /></a><a className="btn btn-default btn-round btn-lg btn-icon" href="#" rel="tooltip" title="Follow me on Twitter"><i className="fa fa-twitter" /></a><a className="btn btn-default btn-round btn-lg btn-icon" href="#" rel="tooltip" title="Follow me on Google+"><i className="fa fa-google-plus" /></a><a className="btn btn-default btn-round btn-lg btn-icon" href="#" rel="tooltip" title="Follow me on Instagram"><i className="fa fa-instagram" /></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Profile