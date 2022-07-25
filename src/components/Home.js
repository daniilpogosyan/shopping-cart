import { Link } from 'react-router-dom';
import './style/Home.css';

export default function Home(props) {
  return (
    <section className="content home">
      <div className="home__main">
        <div className="half-width">
          <img 
            className="home__hero"
            src="https://thumbs.dreamstime.com/b/moggie-kittens-28062021.jpg"
            alt="hero"
          />
        </div>
        <div className="half-width">
          <p className="home__main-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci velit harum provident beatae ratione nisi, quis neque porro, fugiat rem nihil suscipit reiciendis molestiae perferendis alias voluptatem excepturi, odio fuga!
            Consectetur delectus vel doloremque ut. Commodi eligendi aliquid exercitationem cum, praesentium iusto soluta ipsa ut perferendis maiores error, molestiae atque amet. Reiciendis hic rem tempore, architecto dolor illo voluptates veritatis.
            Rerum aperiam sunt nulla esse enim? Quas impedit provident amet magnam iste ullam nobis ea dicta voluptatem eveniet, inventore doloribus minima maxime. Veritatis, vitae voluptas maxime quis quia illo culpa?
          </p>
        </div>
      </div>
      <p className="home__call-to-action">
        What are you waiting for? <Link to="/shop">Go to the shop NOW!</Link>
      </p>
    </section>
  )
}