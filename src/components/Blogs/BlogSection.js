import Title from '../Title';
import { Carousel } from '@mantine/carousel';
import BlogCard from './BlogCard';

const BlogsSection = ({ sectionName, blogs }) => {
  const reversedBlogs = [...blogs].reverse();
  return (
    <div className="container py-10">
      <Title text={sectionName} className={'capitalize'} />
      {reversedBlogs.length > 0 ? (
        <div className="mt-7 pb-10">
          <Carousel
            slideSize="25%"
            slideGap="md"
            withControls={false}
            withIndicators
            align="start"
            loop={true}
            breakpoints={[
              { maxWidth: 'md', slideSize: '50%' },
              { maxWidth: 'sm', slideSize: '70%' },
            ]}
          >
            {reversedBlogs.map((item, index) => {
              return (
                <Carousel.Slide key={index}>
                  <BlogCard
                    key={index}
                    title={item['title']}
                    link={item['link']}
                    imageURL={item['imageURL']}
                    date={item['date']}
                    isEven={index % 2 === 0}
                  />
                </Carousel.Slide>
              );
            })}
          </Carousel>
        </div>
      ) : (
        <div className="pt-10 text-center">
          <a href={'#'} className="text-xl ">
            No Blogs!
          </a>
        </div>
      )}
    </div>
  );
};

export default BlogsSection;
