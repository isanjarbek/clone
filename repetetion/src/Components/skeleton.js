import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import PropTypes from 'prop-types';

const style = {
    display: 'flex', justifyContent: 'center',
    minHeight: '100vh', flexDirection: 'column',
    alignItems: 'center'
}
const Item = (props) => {
    const { loading = false } = props;
    return (
        <div style={style}>
            {/* <Skeleton variant="text" width={140} animation="pulse"/>
            <Skeleton variant="circle" width={40} height={40} animation="wave"/>
            <Skeleton variant="rect" width={210} height={118} animation="wave" /> */}
            {loading ? <Skeleton /> : 'h1'}
        </div>
    );
};
Item.propTypes = {
    loading: PropTypes.bool,
};

export default Item;