import { Helmet } from "react-helmet-async";

const DEFAULT_IMAGE = "https://chatamentors.com/Chatmentorz.png";
const DEFAULT_SITE_NAME = "ChatMentorz";

const SEO = ({
  title,
  description,
  canonical,
  image = DEFAULT_IMAGE,
  keywords,
  type = "website",
  robots = "index, follow",
  author = "ChatMentorz",
  schema,
}) => {
  const metaKeywords = Array.isArray(keywords) ? keywords.join(", ") : keywords;
  const ogImage = image || DEFAULT_IMAGE;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {metaKeywords && <meta name="keywords" content={metaKeywords} />}
      {author && <meta name="author" content={author} />}
      {robots && <meta name="robots" content={robots} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={DEFAULT_SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {canonical && <meta property="og:url" content={canonical} />}
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@chatmentorz" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;