import Banner from "./homeComponents/Banner";
import Blog from "./homeComponents/Blog";
import Mail from "./homeComponents/Mail";
import Reviews from "./homeComponents/Reviews";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Reviews></Reviews>
      <Blog></Blog>
      <Mail></Mail>
    </div>
  );
}
