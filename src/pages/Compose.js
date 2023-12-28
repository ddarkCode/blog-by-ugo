import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import TextArea from '../components/TextArea';
import ComposeInput from '../components/ComposeInput';
import { postAblog } from '../redux/blogs/blogsSlice';

import '../components/css/ComposePage.css';

function Compose() {
  const [newBlog, setNewBlog] = useState({
    title: '',
    description: '',
    para1: '',
    para2: '',
    para3: '',
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewBlog((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postAblog(newBlog));
    setNewBlog({ title: '', description: '', para1: '', para2: '', para3: '' });
    history.push('/blogs');
  };
  return (
    <div className="compose-page">
      <Helmet>
        <title>Compose Page</title>
        <meta name="description" content={`Add New Blog To Blogs Collection`} />
      </Helmet>
      <h1>Compose</h1>
      <form onSubmit={handleSubmit}>
        <ComposeInput
          type={'text'}
          name={'title'}
          value={newBlog.title}
          onChange={handleChange}
        />
        <ComposeInput
          type={'text'}
          name={'description'}
          value={newBlog.description}
          onChange={handleChange}
        />
        <TextArea
          title={'Paragraph 1'}
          name={'para1'}
          value={newBlog.para1}
          onChange={handleChange}
        />
        <TextArea
          title={'Paragraph 2'}
          name={'para2'}
          value={newBlog.para2}
          onChange={handleChange}
        />
        <TextArea
          title={'Paragraph 3'}
          name={'para3'}
          value={newBlog.para3}
          onChange={handleChange}
        />
        <button className="btn btn-primary" type="submit" name="button">
          Publish
        </button>
      </form>
    </div>
  );
}

export default Compose;
