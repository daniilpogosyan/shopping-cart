import { Link } from 'react-router-dom';

export default function Home(props) {
  return (
    <section className="content home">
      <img className="home__hero" src="" alt="hero" />
      <p className="home__main-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident temporibus et quis veniam, assumenda odio rerum placeat, voluptas fugiat dicta tenetur quos asperiores quibusdam non voluptatum architecto quia ducimus recusandae.
      </p>
      <p className="home__call-to-action">
        What are you waiting for? <Link to="/shop">Go to the shop NOW!</Link>
      </p>
    </section>
  )
}