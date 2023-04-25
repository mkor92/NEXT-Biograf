export default function Restaurant() {
  return (
    <>
      <div className="undercategory sec-cont">
        <h2 className="restaurant-text about-salons res-title">
          Luleå bios dine-in bistro
        </h2>
        <nav className="sec">
          <ul className="restaurant-under-list">
            <li className="restaurant-under-element">
              <a href="/UC">Boka bord</a>
            </li>
            <li className="restaurant-under-element">
              <a href="/UC">Vår menu</a>
            </li>
          </ul>
        </nav>
      </div>

      <section className="show-sidebar-next sec-cont">
        <div className="restaurant-container">
          <img
            className="restaurant"
            alt="picture of salon with tables"
            src="static/images/cinebistro.webp"
          />
          <div className="restaurant-text-container">
            <p className="restaurant-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              rhoncus aliquam aliquet. Phasellus eu ex quis est ultricies
              convallis. Fusce et orci eu nulla consequat commodo. Pellentesque
              fringilla mollis justo, sit amet eleifend mi porttitor a. Cras ac
              lacus nec enim bibendum fermentum. Nam erat metus, ultricies at ex
              et, tempor sagittis felis. Cras id aliquet nulla. Ut placerat urna
              eget velit pharetra, non mollis libero ultricies. Duis et metus
              sed nisi commodo egestas. Aenean consequat nec quam vel vehicula.
              In quis dui mollis, sollicitudin metus ut, eleifend lacus. Proin a
              sapien sed ipsum auctor porttitor a vel est. Fusce ut orci
              lacinia, sodales nunc ac, scelerisque nisi. Proin ac metus
              consequat, tincidunt dui tempor, hendrerit elit. Nam dignissim est
              ac metus tristique, vitae eleifend orci varius. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit.
            </p>
            <div>
              <ul className="restaurant-text restaurant-info">
                <li>
                  <h3>Våra öppettider:</h3>
                  <ul>
                    <li>Måndag - fredag 12.00 - 21.00</li>
                    <li>Lördag 10.00 - 23.30</li>
                    <li>Söndag 12.00 - 21.30</li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="press-info">
                      Tryck <a href="#">här</a> för att boka bord
                    </li>
                    <li className="press-info">
                      Tryck <a href="#">här</a> för att se vår menu
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sidebar sec-cont res-sidebar">
          <h3>Dagens visningar:</h3>
          <h4 className="todays-date"></h4>
          <ul className="todays-shows"></ul>
        </div>
      </section>
    </>
  );
}
