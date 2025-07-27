import Banner from "../../components/Banner/Banner";
import CourseView from "../../components/CourseView/CourseView";
import HeadersTitle from "../../components/Header/HeadersTitle";
import SliderText from "../../components/SliderText/SliderText";


const Home = () => {
  return (
    <div>
      <Banner />
      <HeadersTitle></HeadersTitle>
      <SliderText></SliderText>
      <div className="max-w-[1160px] mx-auto w-full">
        <div className="max-w-[800px] w-full">
             <CourseView></CourseView>
        </div>

      </div>

    </div>
  );
};

export default Home;
