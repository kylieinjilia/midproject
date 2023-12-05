const Ref = () => {
  return (
    <div className="section" id="reference">
          <div className="container cc-reference">
            <div className="h4 mb-4 text-center title">References</div>
            <div className="card" data-aos="zoom-in">
              <div className="carousel slide" id="cc-Indicators" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li className="active" data-target="#cc-Indicators" data-slide-to={0} />
                  <li data-target="#cc-Indicators" data-slide-to={1} />
                  <li data-target="#cc-Indicators" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-lg-2 col-md-3 cc-reference-header"><img src="images/reference-image-1.jpg" alt="Image" />
                        <div className="h5 pt-2">Aiyana</div>
                        <p className="category">CEO / WEBM</p>
                      </div>
                      <div className="col-lg-10 col-md-9">
                        <p> Your work as a web designer and budding graphic designer is truly commendable. The seamless and visually captivating web designs you've created reflect a keen eye for aesthetics and a deep understanding of user experience. Your innovative approach to graphic design, despite being a beginner, is impressive, showcasing a blend of creativity and attention to detail. The way you integrate both disciplines demonstrates a promising talent that undoubtedly adds value to any project. I'm thoroughly satisfied with the results you've delivered, and I eagerly anticipate the growth and refinement of your skills as you continue to evolve in this field.</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-lg-2 col-md-3 cc-reference-header"><img src="images/reference-image-2.jpg" alt="Image" />
                        <div className="h5 pt-2">Braiden</div>
                        <p className="category">CEO / Creativem</p>
                      </div>
                      <div className="col-lg-10 col-md-9">
                        <p> Your expertise in web design and your budding journey in graphic design truly shine through in your work. The intuitive and user-friendly interfaces you create display a remarkable understanding of user needs, making the browsing experience seamless and enjoyable. Your graphic design endeavors, though in the early stages, exhibit a promising flair for composition and visual storytelling. The way you merge these skills manifests a unique touch that elevates the overall aesthetics and functionality of the projects. Your dedication and potential are evident, and it's been a pleasure witnessing your growth.</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-lg-2 col-md-3 cc-reference-header"><img src="images/reference-image-3.jpg" alt="Image" />
                        <div className="h5 pt-2">Alexander</div>
                        <p className="category">CEO / Webnote</p>
                      </div>
                      <div className="col-lg-10 col-md-9">
                        <p> Your proficiency as a web designer coupled with your novice graphic design skills reflect a promising future in both fields. Your web designs showcase a knack for clean layouts and efficient navigation, enhancing the user journey remarkably. In the realm of graphic design, your early creations exude creativity and a growing understanding of design principles, promising exciting developments ahead. The synergy between your web and graphic designs creates a cohesive and visually appealing outcome that leaves a lasting impression. I'm thoroughly pleased with the outcomes and look forward to witnessing your continued progress and innovation.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Ref