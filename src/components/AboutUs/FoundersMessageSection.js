import Description from '../Description';

const FoundersMessageSection = () => {
  return (
    <div className="bg-themeWhite py-7">
      <div className="container">
        <p className="mb-2 text-center text-lg font-medium text-themeDarkGrey">
          Founders Message
        </p>
        <Description
          text={
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi consequuntur distinctio eaque illum incidunt laborum minima modi molestias mollitia, nostrum omnis, qui recusandae repudiandae soluta sunt velit voluptates. Dicta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi consequuntur distinctio eaque illum incidunt laborum minima modi molestias mollitia, nostrum omnis, qui recusandae repudiandae soluta sunt velit voluptates. Dicta.'
          }
          className="max-w-4xl"
        />
      </div>
    </div>
  );
};

export default FoundersMessageSection;
