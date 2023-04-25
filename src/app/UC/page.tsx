import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UC() {
  return (
    <div className="under-construction-container">
      <h1 className="under-construction-heading">Under Construction</h1>
      <div className="under-construction-icon-container">
        <FontAwesomeIcon icon={faWrench} className="icon" />
      </div>
      <div className="under-construction-btn-container">
        <a href="/" className="under-construction-link-home">
          Tillbaks hem
        </a>
      </div>
    </div>
  );
}
