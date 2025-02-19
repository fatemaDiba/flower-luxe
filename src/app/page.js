import Banner from "./homeComponents/Banner";
import Blog from "./homeComponents/Blog";
import Features from "./homeComponents/Features";
import Mail from "./homeComponents/Mail";
import NewsLetter from "./homeComponents/NewsLetter";
import Reviews from "./homeComponents/Reviews";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <Reviews></Reviews>
      <Blog></Blog>
      <NewsLetter></NewsLetter>
      <Mail></Mail>
    </div>
  );
}
