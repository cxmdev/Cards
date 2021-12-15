import { useEffect, useState, useCallback } from 'react';

import { Button } from '../../components/Button';

import { Posts } from '../../components/Posts';

import { TextInput } from '../../components/TextInput';

import { loadPosts } from '../../utils/load-posts';

import './styles.css';

export const Home = () => {
    /*     state = {



        posts: [],



        allPosts: [],



        page: 0,



        postsPerPage: 2,



        searchValue: "",



    }; */

    const [posts, setPosts] = useState([]);

    const [allPosts, setAllPosts] = useState([]);

    const [page, setPage] = useState([]);

    const [postsPerPage] = useState([]);

    const [searchValue, setSearchValue] = useState('');

    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = searchValue
        ? allPosts.filter((post) =>
              post.title.toLowerCase().includes(searchValue.toLowerCase()),
          )
        : posts;

    const handleLoadPosts = useCallback(async (page, postsPerPage) => {
        const postsAndPhotos = await loadPosts();

        setPosts(postsAndPhotos.slice(page, postsPerPage));

        setAllPosts(postsAndPhotos);
    }, []);

    useEffect(() => {
        handleLoadPosts(0, postsPerPage);
    }, [handleLoadPosts, page, postsPerPage]);

    const loadMorePosts = () => {
        const { page, postsPerPage, allPosts, posts } = this.state;

        const nextPage = page + postsPerPage;

        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

        posts.push(...nextPosts);

        setPosts(posts);

        setPage(nextPage);
    };

    const handleChange = (e) => {
        const { value } = e.target;

        setSearchValue(value);
    };

    return (
        <section className="container">
            <div className="search-container">
                {!!searchValue && <h1>Search value: {searchValue} </h1>}

                <TextInput
                    searchValue={searchValue}
                    handleChange={this.handleChange}
                />
            </div>

            {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}

            {filteredPosts.length === 0 && <p> Não existem posts </p>}

            <div className="button-container">
                {!searchValue && (
                    <Button
                        text="Load more posts"
                        onClick={loadMorePosts}
                        disabled={noMorePosts}
                    />
                )}
            </div>
        </section>
    );
};

/* export class Home extends Component {



    state = {



        posts: [],



        allPosts: [],



        page: 0,



        postsPerPage: 2,



        searchValue: "",



    };







    async componentDidMount() {



        await this.loadPosts();



    }







    render() {



        const filteredPosts = searchValue



            ? allPosts.filter((post) =>



                  post.title.toLowerCase().includes(searchValue.toLowerCase())



              )



            : posts;



    }



}







export default Home;



 */
