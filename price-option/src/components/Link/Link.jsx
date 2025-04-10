
import PropTypes from 'prop-types';
const Link = ({route}) => {
    const {path,name}= route;
    console.log(route)
    return (
        <div>
            <li className='mr-3' > <a href={path}>{name}</a></li>
        </div>
    );
};
Link.propTypes ={
  route:PropTypes.object.isRequired,
}
export default Link;