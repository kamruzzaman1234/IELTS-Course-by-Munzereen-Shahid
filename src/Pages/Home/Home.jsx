import Banner from "../../components/Banner/Banner";
import ContentPreview from "../../components/ContentPreview/ContentPreview";
import CourseExclusiveFeature from "../../components/CourseExclusiveFeature/CourseExclusiveFeature";
import CourseView from "../../components/CourseView/CourseView";
import DetailsCourse from "../../components/DetailsCourse/DetailsCourse";
import FreeCourseImg from "../../components/FreeCourseImg/FreeCourseImg";
import FreePdfArea from "../../components/FreePdfArea/FreePdfArea";
import HeadersTitle from "../../components/Header/HeadersTitle";
import LearnCourse from "../../components/LearnCourse/LearnCourse";
import NeedClass from "../../components/NeedClass/NeedClass";
import SliderText from "../../components/SliderText/SliderText";
import StudentsSay from "../../components/StudentsSay/StudentsSay";


const Home = () => {
  return (
    <div>
      <Banner />
      <HeadersTitle></HeadersTitle>
      <SliderText></SliderText>
      <div className="max-w-[1160px] mx-auto w-full">
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

    </div>
  );
};

export default Home;
