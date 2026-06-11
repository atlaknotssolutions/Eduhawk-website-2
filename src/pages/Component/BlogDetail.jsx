
// import { useEffect, useMemo } from "react";
// import { useParams, Link } from "react-router-dom";
// import { ShareIcon } from "@heroicons/react/24/outline";
// import { useSelector, useDispatch } from "react-redux";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import {
//   fetchProductBySlugOrId,
//   selectCurrentProduct,
//   selectDetailStatus,
//   clearCurrentProduct,
// } from "./productsSlice";

// const BlogDetail = () => {
//   const { slugOrId } = useParams();
//   const dispatch = useDispatch();

//   const post = useSelector(selectCurrentProduct);
//   const loading = useSelector(selectDetailStatus) === "loading";
//   const error = useSelector((state) => state.products.error);

//   useEffect(() => {
//     if (slugOrId) {
//       dispatch(fetchProductBySlugOrId(slugOrId));
//     }
//     return () => {
//       dispatch(clearCurrentProduct());
//     };
//   }, [slugOrId, dispatch]);

//   const formatDate = (iso) =>
//     iso
//       ? new Date(iso).toLocaleDateString("en-US", {
//           year: "numeric",
//           month: "short",
//           day: "numeric",
//         })
//       : "";

//   const decodeHtmlEntities = (html) => {
//     const textarea = document.createElement("textarea");
//     textarea.innerHTML = html;
//     return textarea.value;
//   };

//   // Detect whether content is Markdown or HTML
//   const isMarkdown = (str) => {
//     // CKEditor Markdown output typically does NOT contain raw HTML tags
//     // but contains Markdown syntax like #, **, *, >, -, `
//     const markdownPatterns = /^#{1,6}\s|^\*\*|^\*\s|^-\s|^>\s|^```|^\[.+\]\(.+\)/m;
//     const hasHtmlTags = /<\/?[a-z][\s\S]*>/i.test(str);
//     return markdownPatterns.test(str) && !hasHtmlTags;
//   };

//   const { contentType, content } = useMemo(() => {
//     if (!post?.description) return { contentType: "empty", content: "" };

//     let raw =
//       typeof post.description === "string"
//         ? post.description
//         : String(post.description);

//     // Decode HTML entities first (e.g. &lt;p&gt; → <p>)
//     if (raw.includes("&lt;") || raw.includes("&gt;") || raw.includes("&amp;")) {
//       raw = decodeHtmlEntities(raw);
//     }

//     if (isMarkdown(raw)) {
//       return { contentType: "markdown", content: raw };
//     }

//     // Fallback: treat as HTML
//     return { contentType: "html", content: raw };
//   }, [post?.description]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-xl font-medium text-gray-600 animate-pulse">
//           Loading article...
//         </div>
//       </div>
//     );
//   }

//   if (error || !post) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center max-w-md">
//           <h2 className="text-3xl font-bold text-red-600 mb-4">
//             Article Not Found
//           </h2>
//           <p className="text-gray-600 mb-8">
//             {error ||
//               "The article you are looking for does not exist or has been removed."}
//           </p>
//           <Link
//             to="/blog"
//             className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors"
//           >
//             ← Back to All Articles
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const categoryName = post?.category?.name ?? "Uncategorised";
//   const heroImage = post?.images?.[0] ?? null;
//   const postDate = formatDate(post?.createdAt);

//   const proseClasses =
//     "prose prose-lg prose-indigo max-w-none mb-16 " +
//     "prose-headings:font-bold prose-headings:text-gray-900 " +
//     "prose-p:text-gray-700 prose-img:rounded-2xl prose-img:shadow-lg " +
//     "prose-a:text-indigo-600 hover:prose-a:text-indigo-700 " +
//     "prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded " +
//     "prose-pre:bg-gray-900 prose-pre:text-gray-100 " +
//     "prose-blockquote:border-indigo-400 prose-blockquote:text-gray-600 " +
//     "prose-table:border prose-th:bg-gray-100 prose-td:border prose-th:border";

//   return (
//     <article className="min-h-screen bg-gray-50 pt-8 pb-20">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Hero Image */}
//         <div className="relative rounded-3xl overflow-hidden mb-10 shadow-2xl">
//           {heroImage ? (
//             <img
//               src={heroImage}
//               alt={post.name}
//               className="w-full h-[28rem] sm:h-[32rem] object-cover"
//             />
//           ) : (
//             <div className="w-full h-96 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
//               <span className="text-6xl text-indigo-300">📷</span>
//             </div>
//           )}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//         </div>

//         {/* Category Badge */}
//         <span className="inline-block bg-indigo-600 text-white text-sm font-medium px-5 py-2 rounded-full mb-4">
//           {categoryName}
//         </span>

//         {/* Title */}
//         <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
//           {post.name}
//         </h1>

//         {/* Meta */}
//         <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-600 mb-12">
//           {postDate && <span>{postDate}</span>}
//           {post.author && (
//             <span>
//               By{" "}
//               <span className="font-medium text-gray-900">{post.author}</span>
//             </span>
//           )}
//         </div>

//         {/* ✅ Content: Markdown OR HTML */}
//         {contentType === "markdown" && content ? (
//           <div className={proseClasses}>
//             <ReactMarkdown remarkPlugins={[remarkGfm]}>
//               {content}
//             </ReactMarkdown>
//           </div>
//         ) : contentType === "html" && content ? (
//           <div
//             className={proseClasses}
//             dangerouslySetInnerHTML={{ __html: content }}
//           />
//         ) : (
//           <p className="text-gray-500 italic">No content available.</p>
//         )}

//         {/* Video */}
//         {post.videoUrl && (
//           <div className="mb-16 rounded-2xl overflow-hidden shadow-xl">
//             <video controls className="w-full" src={post.videoUrl}>
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         )}

//         {/* Share */}
//         <div className="flex items-center justify-center sm:justify-start gap-4 mb-16">
//           <span className="text-gray-600 font-medium">Share this article:</span>
//           <button
//             onClick={() => {
//               navigator.clipboard.writeText(window.location.href);
//               alert("Link copied successfully!");
//             }}
//             className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
//             title="Copy link"
//           >
//             <ShareIcon className="w-5 h-5 text-gray-700" />
//           </button>
//         </div>

//         {/* Back Link */}
//         <div className="text-center mt-20">
//           <Link
//             to="/blog"
//             className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors"
//           >
//             ← View all articles
//           </Link>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default BlogDetail;

import { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ShareIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProductBySlugOrId,
  selectCurrentProduct,
  selectDetailStatus,
  clearCurrentProduct,
} from "./productsSlice";

const BlogDetail = () => {
  const { slugOrId } = useParams();
  const dispatch = useDispatch();

  const post = useSelector(selectCurrentProduct);
  const loading = useSelector(selectDetailStatus) === "loading";
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (slugOrId) {
      dispatch(fetchProductBySlugOrId(slugOrId));
    }
    return () => {
      dispatch(clearCurrentProduct());
    };
  }, [slugOrId, dispatch]);

  const formatDate = (iso) =>
    iso
      ? new Date(iso).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "";

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-xl font-medium text-gray-600 animate-pulse">
          Loading article...
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md">
          <h2 className="text-3xl font-bold text-red-600 mb-4">
            Article Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            {error ||
              "The article you are looking for does not exist or has been removed."}
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors"
          >
            ← Back to All Articles
          </Link>
        </div>
      </div>
    );
  }

  const categoryName = post?.category?.name ?? "Uncategorised";
  const heroImage = post?.images?.[0] ?? null;
  const postDate = formatDate(post?.createdAt);

  // Improved prose classes for better image display
  const proseClasses =
    "prose prose-lg max-w-none mb-16 " +
    "prose-headings:font-bold prose-headings:text-gray-900 " +
    "prose-p:text-gray-700 prose-p:leading-relaxed " +
    "prose-img:rounded-3xl prose-img:shadow-xl prose-img:my-10 prose-img:mx-auto " +
    "prose-img:w-full prose-img:max-w-4xl prose-img:h-auto " +
    "prose-a:text-indigo-600 hover:prose-a:text-indigo-700 " +
    "prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded " +
    "prose-pre:bg-gray-900 prose-pre:text-gray-100 " +
    "prose-blockquote:border-l-4 prose-blockquote:border-indigo-400 prose-blockquote:pl-4 " +
    "prose-table:border prose-th:bg-gray-100 prose-td:border";

  return (
    <article className="min-h-screen bg-gray-50 pt-8 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Image */}
        <div className="relative rounded-3xl overflow-hidden mb-10 shadow-2xl">
          {heroImage ? (
            <img
              src={heroImage}
              alt={post.name}
              className="w-full h-[28rem] sm:h-[32rem] object-cover"
            />
          ) : (
            <div className="w-full h-96 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
              <span className="text-6xl text-indigo-300">📷</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        {/* Category Badge */}
        <span className="inline-block bg-indigo-600 text-white text-sm font-medium px-5 py-2 rounded-full mb-4">
          {categoryName}
        </span>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
          {post.name}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-600 mb-12">
          {postDate && <span>{postDate}</span>}
          {post.author && (
            <span>
              By{" "}
              <span className="font-medium text-gray-900">{post.author}</span>
            </span>
          )}
        </div>

        {/* Content - Direct HTML Rendering (Best for DescriptionEditor) */}
        {post.description ? (
          <div
            className={proseClasses}
            dangerouslySetInnerHTML={{ __html: post.description }}
          />
        ) : (
          <p className="text-gray-500 italic">No content available.</p>
        )}

        {/* Video */}
        {post.videoUrl && (
          <div className="mb-16 rounded-2xl overflow-hidden shadow-xl">
            <video controls className="w-full" src={post.videoUrl}>
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {/* Share */}
        <div className="flex items-center justify-center sm:justify-start gap-4 mb-16">
          <span className="text-gray-600 font-medium">Share this article:</span>
          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert("Link copied successfully!");
            }}
            className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            title="Copy link"
          >
            <ShareIcon className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Back Link */}
        <div className="text-center mt-20">
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors"
          >
            ← View all articles
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogDetail;