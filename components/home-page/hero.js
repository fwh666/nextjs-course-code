import classes from "./hero.module.css";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        this is Hero
        <Image
          src="/images/site/max.png"
          alt="is image"
          width={300}
          heiht={300}
        />
      </div>
      <h1>Hi, I'm Max</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}
export default Hero;
