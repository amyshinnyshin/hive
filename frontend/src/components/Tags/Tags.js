import React from 'react'

import './Tags.css';


const SmallTags = ({num, isLightVersion}) => {
  const tagClassName = isLightVersion ? 'light-tag' : 'dark-tag';

  return (
    <div className={`tag ${tagClassName}`}>
      <p className='small'>{num}</p>
    </div>
  )
}

const DefaultTags = ({ num, isLightVersion }) => {
  const tagClassName = isLightVersion ? 'light-tag' : 'dark-tag';

  return (
    <div className={`tag ${tagClassName}`}>
      <p>{num}</p>
    </div>
  );
};


const DefaultTextTags = ({ emoji, text, isVisible }) => {
  return (
    <div className={isVisible ? 'text-tag' : 'hidden-text-tag'}>
      {isVisible && (
        <>
          <div className='emoji-tag-container'>
            <p>{emoji}</p>
          </div>
          <p>{text}</p>
        </>
      )}
    </div>
  );
};

const SmallTextTags = ({ emoji, text, isVisible }) => {
  return (
    <div className={isVisible ? 'text-tag' : 'hidden-text-tag'}>
      {isVisible && (
        <>
          <div className='emoji-tag-container'>
            <p className='small'>{emoji}</p>
          </div>
          <p className='small'>{text}</p>
        </>
      )}
    </div>
  );
};



export { SmallTags, DefaultTags, DefaultTextTags, SmallTextTags }
