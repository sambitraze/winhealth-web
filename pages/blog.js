import MainHeader from "../components/main-header";
import Footer from "../components/footer";
import BlogCard from "../components/blog-card";
import AchievementsCard from "../components/achievements-card";
import ContainerBox from "../components/container-box";

const Blog = () => {
  return (
    <div className="relative bg-white w-full h-[4515px] overflow-hidden text-center text-21xl text-dimgray-100 font-headline-h4-medium">
      <div className="absolute top-[1181px] left-[878px] rounded-sm bg-accent-primary-500 w-[140px] h-0.5 hidden" />
      <div className="absolute top-[1965px] left-[1797px] rounded-sm bg-accent-primary-500 w-[140px] h-0.5 hidden" />
      <MainHeader />
      <div className="absolute top-[150px] right-[0px] bg-gray-6 w-[1920px] h-[540px]" />
      <div className="absolute top-[1438px] left-[calc(50%_-_960px)] bg-gray-6 w-[1920px] h-[850px]" />
      <div className="absolute top-[309px] left-[calc(50%_-_860px)] flex flex-col items-start justify-start gap-[20px] text-left text-41xl text-gray-200 font-proxima-nova">
        <b className="relative tracking-[0.12em] leading-[120%] capitalize font-headline-h4-medium text-dimgray-100 text-center">
          know what’s new!
        </b>
        <b className="relative text-5xl tracking-[0.1em] leading-[26px] inline-block w-[586px]">
          We regularly upgrade our blogs.
        </b>
        <div className="relative text-xl tracking-[0.1em] leading-[26px] font-semibold inline-block w-[866px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          venenatis gravida est, in porttitor orci vulputate quis. Integer eu
          tempor magna, ac auctor est. Duis eu fringilla purus. Phasellus sit
          amet aliquam mi. Donec id elementum urna. Aenean et est odio. Nunc
          nunc neque, venenatis fringilla nunc.
        </div>
      </div>
      <Footer
        iconInstagram="/-icon-instagram5.svg"
        iconFacebook="/-icon-facebook3.svg"
        iconTwitter="/-icon-twitter2.svg"
        iconLinkedin="/-icon-linkedin5.svg"
        ftrAppleIcn1="/ftrappleicn-13@2x.png"
        propTop="3715px"
      />
      <img
        className="absolute top-[250px] right-[196.34px] w-[413.66px] h-[361px]"
        alt=""
        src="/wallpostpana.svg"
      />
      <div className="absolute top-[862px] left-[245px] flex flex-row items-start justify-start gap-[21px]">
        <BlogCard imageIds="/pexelsmikhailnilov6740535-1@2x.png" />
        <BlogCard
          imageIds="/pexelsmikhailnilov6740535-11@2x.png"
          propBackgroundColor="#eb7b8b"
        />
        <BlogCard
          imageIds="/pexelsmikhailnilov6740535-11@2x.png"
          propBackgroundColor="#2fabc0"
        />
        <BlogCard
          imageIds="/pexelsmikhailnilov6740535-11@2x.png"
          propBackgroundColor="#eb7b8b"
        />
      </div>
      <AchievementsCard imageDimensions="/pexelsmikhailnilov6740535-12@2x.png" />
      <AchievementsCard
        imageDimensions="/pexelsmikhailnilov6740535-13@2x.png"
        propTop="2460px"
        propLeft="102px"
        propBackgroundColor="#b6f4ff"
        propColor="#4b4d52"
        propColor1="#4b4d52"
        propColor2="#4b4d52"
      />
      <AchievementsCard
        imageDimensions="/pexelsmikhailnilov6740535-13@2x.png"
        propTop="3034px"
        propLeft="682px"
        propBackgroundColor="#b6f4ff"
        propColor="#4b4d52"
        propColor1="#4b4d52"
        propColor2="#4b4d52"
      />
      <AchievementsCard
        imageDimensions="/pexelsmikhailnilov6740535-13@2x.png"
        propTop="2460px"
        propLeft="1262px"
        propBackgroundColor="#b6f4ff"
        propColor="#4b4d52"
        propColor1="#4b4d52"
        propColor2="#4b4d52"
      />
      <AchievementsCard
        imageDimensions="/pexelsmikhailnilov6740535-14@2x.png"
        propTop="2460px"
        propLeft="680px"
        propBackgroundColor="#eb7b8b"
        propColor="#fff"
        propColor1="#fff"
        propColor2="#fff"
      />
      <AchievementsCard
        imageDimensions="/pexelsmikhailnilov6740535-14@2x.png"
        propTop="3034px"
        propLeft="1261px"
        propBackgroundColor="#eb7b8b"
        propColor="#fff"
        propColor1="#fff"
        propColor2="#fff"
      />
      <AchievementsCard
        imageDimensions="/pexelsmikhailnilov6740535-14@2x.png"
        propTop="3034px"
        propLeft="102px"
        propBackgroundColor="#eb7b8b"
        propColor="#fff"
        propColor1="#fff"
        propColor2="#fff"
      />
      <b className="absolute top-[760px] left-[calc(50%_-_122px)] tracking-[0.12em] leading-[130%] capitalize">
        Latest blogs
      </b>
      <b className="absolute top-[1477px] left-[calc(50%_-_185px)] tracking-[0.12em] leading-[130%] capitalize">
        Our Achievements
      </b>
      <div className="absolute top-[1343px] left-[calc(50%_-_69px)] flex flex-row items-start justify-start gap-[26px]">
        <div className="relative rounded-[50%] bg-dimgray-100 w-[15px] h-[15px]" />
        <div className="relative rounded-[50%] bg-dimgray-200 w-[15px] h-[15px]" />
        <div className="relative rounded-[50%] bg-dimgray-200 w-[15px] h-[15px]" />
        <div className="relative rounded-[50%] bg-dimgray-200 w-[15px] h-[15px]" />
      </div>
      <div className="absolute top-[2174px] left-[calc(50%_-_69px)] flex flex-row items-start justify-start gap-[26px]">
        <div className="relative rounded-[50%] bg-dimgray-100 w-[15px] h-[15px]" />
        <div className="relative rounded-[50%] bg-dimgray-200 w-[15px] h-[15px]" />
        <div className="relative rounded-[50%] bg-dimgray-200 w-[15px] h-[15px]" />
        <div className="relative rounded-[50%] bg-dimgray-200 w-[15px] h-[15px]" />
      </div>
      <img
        className="absolute h-[1.12%] w-[1.88%] top-[23.32%] right-[93.91%] bottom-[75.56%] left-[4.22%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/-icon-nav-arrow-left.svg"
      />
      <b className="absolute top-[2358px] left-[calc(50%_-_134px)] tracking-[0.12em] leading-[130%] capitalize">
        In the press
      </b>
      <ContainerBox />
    </div>
  );
};

export default Blog;
