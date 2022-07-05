import { useRouter } from "next/router";

function BlogId() {
  const router = useRouter();
  const SingleBlogId = router.query.id;
  return <>This is id: {SingleBlogId}</>;
}
export default BlogId;
