import React, { createElement, useState } from 'react';
import { Tooltip, Rate } from 'antd';
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
  CheckOutlined,
} from '@ant-design/icons';

const ReviewCover = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  return (
    <div className='border p-4 my-2'>
      <div className='flex items-start justify-between w-full'>
        <Rate disabled allowHalf defaultValue={2} className='text-black' />
        <h1>{new Date().toLocaleDateString()}</h1>
      </div>
      <div>
        <h1 className='uppercase font-bold text-2xl my-4'>PERFECT</h1>
        <p>
          We supply a series of design principles, practical patterns and high
          quality design resources (Sketch and Axure), to help people create
          their product prototypes beautifully and efficiently.
        </p>
        <p className='flex items-center my-2'>
          <CheckOutlined /> &nbsp; I recommend this product
        </p>
        <h1 className='uppercase font-bold text-sm my-4'>
          MUKUL <span className='capitalize font-light'>Verified Purchase</span>{' '}
        </h1>
      </div>
      <div className='flex'>
        <Tooltip
          key='comment-basic-like'
          title='Like'
          className='flex items-center mx-2'
        >
          <span onClick={like}>
            {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
            <span className='comment-action font-bold'>&nbsp;{likes}</span>
          </span>
        </Tooltip>
        <Tooltip
          key='comment-basic-dislike'
          title='Dislike'
          className='flex items-center mx-2'
        >
          <span onClick={dislike}>
            {React.createElement(
              action === 'disliked' ? DislikeFilled : DislikeOutlined
            )}
            <span className='comment-action font-bold'>&nbsp;{dislikes}</span>
          </span>
        </Tooltip>
      </div>
    </div>
  );
};

export default ReviewCover;
