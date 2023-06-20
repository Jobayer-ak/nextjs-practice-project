import Feed from '@components/Feed';
import Profile from '@components/Profile';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Promts</span>
      </h1>

      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore non est
        dolores, natus odit nulla quis quod illo explicabo unde quo ea.
      </p>

      
      <Feed />
    </section>
  );
};

export default Home;
