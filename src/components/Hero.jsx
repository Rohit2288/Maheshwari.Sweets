import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <div className={styles.Hero}>
            <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis">Wide Variety of Products to choose from</h1>
        <p className="lead">Making Every Occasion Memorable with a Personal Touch</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
      </div>
    </div>
        </div>
    );
}

export default Hero;