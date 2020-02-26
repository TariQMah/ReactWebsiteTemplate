import TopDestination from "../components/Index/TopDestination";
import Tours from "../components/Index/Tours";
import Video from "../components/Index/Video";
import TravelTips from "../components/Index/TravelTips";
import axios from "Axios";

function Home() {
  return (
    <>
      <TopDestination />
      <Tours />
      <Video />
      <TravelTips />
    </>
  );
}

// Home.getInitialProps = async () => {
//   const url = "http://www.secretcloset.pk/blog/wp-json/wp/v2/posts";
//   const response = await axios.get(url);
//   console.log(response);
//   return { tours: response.data };
// };
export default Home;
