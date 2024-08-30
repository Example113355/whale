import { useParams } from 'react-router-dom';
import Blog1 from '../pages/home-blog-page/blog_1';
import Blog2 from '../pages/home-blog-page/blog_2';
import Blog3 from '../pages/home-blog-page/blog_3';
import Blog4 from '../pages/home-blog-page/blog_4';
import Blog5 from '../pages/home-blog-page/blog_5';
import Blog6 from '../pages/home-blog-page/blog_6';

const HomeBlogController = () => {
    const { id } = useParams();

    switch (id) {
        case '1':
            return <Blog1 />;
        case '2':
            return <Blog2 />;
        case '3':
            return <Blog3 />;
        case '4':
            return <Blog4 />;
        case '5':
            return <Blog5 />;
        case '6':
            return <Blog6 />;
        default:
            return <h1>404 Not Found</h1>;
    }
}

export default HomeBlogController;
