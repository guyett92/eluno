import { Col, Container, Row } from "reactstrap";

const NewFooter = () => {
  return (
    <footer className="new-footer">
      <div className="logo-container">
        <img 
          src="/images/eluno-logo.png"
          alt="eluno-logo"
          className="eluno-logo"
        />
      </div>
      <div className="team-container">
        <p>
          Team: <br />
          @jonapeake (twitter / linkedin) <br />
          @Aaron (twitter / linkedin) <br />
          @Anayo (linkedin) <br />
          @jovan (Not sure) <br />
        </p>

        <p className="follow-us">
          Follow us <br />
          @eluno_io
        </p>
      </div>
    </footer>
  );
};

export default NewFooter;
