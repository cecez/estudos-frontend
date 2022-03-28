import { useParams } from "react-router-dom";

export default function BlogPost() {
  const params = useParams();
  return <div className="container">Post #{params.id}</div>;
}
