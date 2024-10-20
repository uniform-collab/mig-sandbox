import { AssetParamValue, flattenValues } from "@uniformdev/canvas";
import {
  registerUniformComponent,
  ComponentProps,
  UniformSlot,
} from "@uniformdev/canvas-react";
import Image from "next/image";

type ArticleDetailProps = ComponentProps<{
  title: string;
  subtitle?: string;
  abstract?: string;
  articleImage: AssetParamValue;
  articleContent?: any;
}>;

const ArticleDetail: React.FC<ArticleDetailProps> = ({
  title,
  subtitle,
  abstract,
  articleImage,
  articleContent,
}) => {
  const { url, title: alt } =
    flattenValues(articleImage, { toSingle: true }) || {};
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <h3>{abstract}</h3>
      
      <Image src={url} alt={alt} width={200} height={200} />
      
      <UniformSlot name="articleBody" />

      <hr />
      <h2>Meta data</h2>
      <div>
        <h2>Publication Date:</h2>
        <pre>{articleContent?.publicationDate?.value}</pre>

        <h2>Last Updated:</h2>
        <pre>{articleContent?.lastUpdated?.value}</pre>

        <h2>Language:</h2>
        <pre>{articleContent?.language?.value}</pre>

        <h2>primary label:</h2>
        <pre>
          {articleContent?.primaryLabel?.value?.entry.fields.categoryName.value}
        </pre>

        <h2>categories:</h2>
        <pre>
          {JSON.stringify(
            articleContent?.categories?.value?.map(
              (tag: any) => tag.entry.fields.categoryName.value
            ),
            null,
            2
          )}
        </pre>

        <h2>fields of study</h2>
        <pre>
          {JSON.stringify(
            articleContent?.fieldsOfStudy?.value?.map(
              (f: any) => f.entry.fields.name.value
            ),
            null,
            2
          )}
        </pre>

        <h2>faculties</h2>
        <pre>
          {JSON.stringify(
            articleContent?.faculties?.value?.map(
              (tag: any) => tag.entry.fields.name.value
            ),
            null,
            2
          )}
        </pre>

        <h2>tags</h2>
        <pre>
          {JSON.stringify(
            articleContent?.tags?.value?.map(
              (tag: any) => tag.entry.fields.tagName.value
            ),
            null,
            2
          )}
        </pre>

        <h2>filters</h2>
        <pre>
          {JSON.stringify(
            articleContent?.filters?.value?.map(
              (tag: any) => tag.entry.fields.tagName.value
            ),
            null,
            2
          )}
        </pre>
      </div>
    </div>
  );
};

registerUniformComponent({
  type: "articleDetail",
  component: ArticleDetail,
});

export default ArticleDetail;
