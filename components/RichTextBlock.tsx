import { RichTextParamValue } from "@uniformdev/canvas";
import { UniformRichText } from "@uniformdev/canvas-next";
import {
  registerUniformComponent,
  ComponentProps,
} from "@uniformdev/canvas-react";

type RichTextBlockProps = ComponentProps<{
  content?: RichTextParamValue;
}>;

const RichTextBlock: React.FC<RichTextBlockProps> = () => (
  <div>
    <UniformRichText
      parameterId="content"
      className="description"
      placeholder="RichTextBlock content goes here"
      data-test-id="RichTextBlock-content"
    />
  </div>
);

registerUniformComponent({
  type: "richTextBlock",
  component: RichTextBlock,
});

export default RichTextBlock;
