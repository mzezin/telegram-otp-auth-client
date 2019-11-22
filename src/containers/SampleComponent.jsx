import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Avatar, Icon } from 'antd';
import * as TYPE from '../store/actions/constants';

const { Meta } = Card;

const SampleComponent = () => {
  const picture = useSelector(state => state.data.results[0].picture.large);
  const avatar = useSelector(state => state.data.results[0].picture.thumbnail);
  const name = useSelector(state => `${state.data.results[0].name.first} ${state.data.results[0].name.last}`);

  const dispatch = useDispatch();
  const reload = () => dispatch({ type: TYPE.FETCH_DATA });

  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={(
          <img
            alt="example"
            src={picture}
          />

  )}
        actions={[<Icon type="reload" onClick={reload} />]}
      >
        <Meta
          avatar={<Avatar src={avatar} />}
          title={name}
          description="This is the description"
        />
      </Card>
    </div>
  );
};


export default SampleComponent;
