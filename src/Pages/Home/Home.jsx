import Banner from "../../components/Banner/Banner";
import ContentPreview from "../../components/ContentPreview/ContentPreview";
import CourseExclusiveFeature from "../../components/CourseExclusiveFeature/CourseExclusiveFeature";
import CourseVideoSlider from "../../components/CourseVideoSlider/CourseVideoSlider";
import CourseView from "../../components/CourseView/CourseView";
import DetailsCourse from "../../components/DetailsCourse/DetailsCourse";
import FreeCourseImg from "../../components/FreeCourseImg/FreeCourseImg";
import FreePdfArea from "../../components/FreePdfArea/FreePdfArea";
import HeadersTitle from "../../components/Header/HeadersTitle";
import LearnCourse from "../../components/LearnCourse/LearnCourse";
import ManyCourse from "../../components/ManyCourse/ManyCourse";
import NeedClass from "../../components/NeedClass/NeedClass";
import SecondCourseVideo from "../../components/SecondCourseVideo/SecondCourseVideo";
import SliderText from "../../components/SliderText/SliderText";
import StudentsSay from "../../components/StudentsSay/StudentsSay";


const Home = () => {
  return (
    <div className="relative">
      <Banner />
      <HeadersTitle></HeadersTitle>
      <SliderText></SliderText>
      <div className="max-w-[1260px] w-full mx-auto">
        <div className="max-w-[800px] w-full">
             <CourseView></CourseView>
             <FreePdfArea></FreePdfArea>
             <LearnCourse></LearnCourse>
             <ContentPreview></ContentPreview>
             <DetailsCourse></DetailsCourse>
             <CourseExclusiveFeature></CourseExclusiveFeature>
             <StudentsSay></StudentsSay>
             <FreeCourseImg></FreeCourseImg>
             <NeedClass></NeedClass>
        </div>


      </div>
      <CourseVideoSlider className=""></CourseVideoSlider>
      <SecondCourseVideo></SecondCourseVideo>
      <ManyCourse></ManyCourse>
    </div>
  );
};

export default Home;
